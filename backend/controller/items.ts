import { Request, Response } from "express";
import items from "../model/items"

interface SearchRequest extends Request{
  query: {
    query: string
  }
}

export default {

  getAll: (req: Request, res: Response) => {
    items.find().then(result => res.send(result))
  },
  
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
  }

}