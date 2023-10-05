import { Movie } from "../../models";
import { ISchemaMovies } from "../../models/movies/type";

export const moviesService = {

  async getAll(): Promise<ISchemaMovies[]> {
    try {
      return await Movie.find();
    } catch (error) {
      throw new Error("Не удалось получить список фильмов");
    }
  },

  async getById(id: string): Promise<ISchemaMovies | null> {
    try {
      return await Movie.findById(id);
    } catch (error) {
      throw new Error("Не удалось найти фильм");
    }
  },

  async removeById(id: string): Promise<ISchemaMovies | null> {
    try {
      return await Movie.findByIdAndDelete(id);
    } catch (error) {
      throw new Error("Не удалось удалить фильм");
    }
  },

}
