import { Request, Response } from "express";
import items from "../model/items"

export default {
  test: (req: Request, res: Response){
    res.send("works!")
  }
}