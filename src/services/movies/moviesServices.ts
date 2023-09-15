import { Movie } from "../../models";

export const moviesService = {
  async getAll() {
    try {
      return await Movie.find();
    } catch (error) {
      console.log("===> error  <===", error);
    }
  },
  async getById(id: string) {
    try {
      return await Movie.findById(id);
    } catch (error) {
      console.log("===> error  <===", error);
    }
  },
  async removeById(id: string) {
    try {
      return await Movie.findByIdAndDelete(id);
    } catch (error) {
      console.log("===> error  <===", error);
    }
  },
}
