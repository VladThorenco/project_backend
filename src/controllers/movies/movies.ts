import { Request, Response } from "express"
import { Movie } from "../../models";

export const moviesControllers = {
  getMovies: async (req: Request, res: Response): Promise<any> => {
    try {
      const moviesCollections = await Movie.find().sort({title: 1});
      res.status(200).json(moviesCollections)
    } catch (error) {
      console.log("===> error  <===", error);
    }
    // const allMovies = moviesService.getAll()
    // if (!allMovies) {
    //   return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    // }

  }
}
