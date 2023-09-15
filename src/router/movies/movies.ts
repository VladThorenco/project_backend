import express from "express";
import { moviesControllers } from "../../controllers";


export const getMoviesRoutes = () => {
  const router = express.Router();
  router.get("/test", (req, res) => {
    return res.json([{"title": 'fsdfsf'}])
  });
  router.get("/", moviesControllers.getMovies);


  return router;
}


