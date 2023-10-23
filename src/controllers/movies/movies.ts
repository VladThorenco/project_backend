import { moviesService } from '../../services';
import { EHTTP_STATUSES } from '../../constans';
import { IMoviesController } from './types';
import { ISchemaMovies } from '../../models/movies/type';

export const moviesControllers: IMoviesController<ISchemaMovies> = {
  getMovies: async (_req, res) => {
    const allMoviesDocument = await moviesService.getAll();
    if (!allMoviesDocument) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    return res.status(EHTTP_STATUSES.OK).json(allMoviesDocument);
  },

  getMovieById: async (req, res) => {
    const MoviesDocument = await moviesService.getById(req.params.id);
    if (!MoviesDocument) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    return res.status(EHTTP_STATUSES.OK).json(MoviesDocument);
  },

  removeMovieById: async (req, res) => {
    await moviesService.removeById(req.params.id);
    return res.status(EHTTP_STATUSES.NO_CONTENT);
  },
};
