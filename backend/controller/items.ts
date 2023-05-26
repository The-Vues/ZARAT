import { Request, Response } from "express";
import items from "../model/items"
import user from "../model/user";

interface SearchRequest extends Request{
  query: {
    query: string
  }
}

export default {

  // method to get all items from the database
  getAll: (req: Request, res: Response) => {
    items.find().then(result => res.send(result))
  },
  
  // method used to filter items by gender and query at the same, (used in the search component in the frontend)
  searchByGender: (req: SearchRequest, res: Response) => {

    const { query } = req.query
    const { gender } = req.params

    items.find({
      $and: [
        { keyword: {$regex: new RegExp(query, "i")} },
        { gender: gender }
      ]
    })
    .then((found: any)=>res.send(found))
  },


  getCartItems: async (req: Request, res: Response) => {
    const { id } = req.params;
    const currentUser = await user.findOne({ _id: id });
    const cart = (currentUser as any).cart;
  
    const cartItems: any = []
  
    await Promise.all(
      cart.map(async (e: any) => {
        const currentItem: any = await items.findOne({ _id: e });
        cartItems.push(currentItem as any)
      })
    )
    
    res.send(cartItems)
  },

  add: (req: Request, res: Response)=>{
    const { name, price, image,color, type, size, gender, keyword, description, conditions}=req.body
    items.create({name: name, price: price, image: image, color: color, type: type, size: size, gender: gender, keyword: keyword, description: description, conditions: conditions})
    .then(item=>res.send(item))
  }


}