import { Request, Response } from 'express';

import HelpModel from '../model/helps';


interface Search extends Request {
  query: {
    query: string;
  };
}

export default {
    getAll: async (req: Request,res: Response)=> {
        try {
            const help = await HelpModel.find();
            res.json(help);
          } catch (error) {
            res.status(500).json({ error: "Internal server error" });
          }
        },
    searchHelp: async (req: Search, res: Response) => {
        try {
          const { query } = req.query;
          console.log(query);
          const help = await HelpModel.find({ question: {$regex: new RegExp(query,"i")} });
          res.send(help);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      
    },
    add:async(req:Request,res:Response)=>{
        const {keyword,question,answer} = req.body;

        const help = new HelpModel({keyword, question,answer});
        try {
          const newHelp = await help.save();
          res.json(newHelp);
          } catch (error) {
            res.status(500).json({ error: "Internal server error" })
          }

      }
}

