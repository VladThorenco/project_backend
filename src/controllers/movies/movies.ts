import { Request, Response } from "express"
import { moviesService } from "../../services";
import { EHTTP_STATUSES } from "../../constans";

export const moviesControllers = {
  getMovies: async (_req: Request, res: Response) => {
    const allMoviesDocument = await moviesService.getAll()
    if (!allMoviesDocument) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    res.status(EHTTP_STATUSES.OK).json(allMoviesDocument)
  },

  getMovieById: async (req: Request, res: Response) => {
    const MoviesDocument = await moviesService.getById(req.params.id)
    if (!MoviesDocument) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    res.status(EHTTP_STATUSES.OK).json(MoviesDocument)
  },

  removeMovieById: async (req: Request, res: Response) => {
    const deleteMovie = await moviesService.removeById(req.params.id)
    res.status(EHTTP_STATUSES.OK).json(deleteMovie)
  }

}
