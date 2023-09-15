import express from "express";
import { EHTTP_STATUSES } from "../../constans";
import { moviesControllers } from "../../controllers";


export const getMoviesRoutes = () => {
  const router = express.Router();

  router.get("/movies", (req, res) => {
    const allMovies = moviesControllers.getMovies();

    if (!allMovies.length) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }

    res.json(allMovies)
  });

  return router;
}


