import { Request, Response } from 'express';

import HelpModel from '../model/helps';


interface Search extends Request {
  query: {
    query: string;
  };
}

const searchHelp = async (req: Search, res: Response) => {
  try {
    const { query } = req.query;
    console.log(query);
    const help = await HelpModel.find({ question: query });
    res.send(help);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

export default {
  searchHelp,
};
