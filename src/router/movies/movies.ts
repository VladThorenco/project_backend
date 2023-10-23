import express from 'express';
import { moviesControllers } from '../../controllers';

export const getMoviesRoutes = () => {
  const router = express.Router();

  router.get('/', moviesControllers.getMovies);
  router.get('/:id', moviesControllers.getMovieById);
  router.delete('/:id', moviesControllers.removeMovieById);

  return router;
};
