import { Movie } from "../../models";

export const moviesService = {
  async getAll() {
    try {
      await Movie.find();
    } catch (error) {
      console.log("===> error <===", error);
    }
  },
}
