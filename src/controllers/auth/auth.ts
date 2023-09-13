import { authService } from "../../services";

export const authControllers = {
  getUser: async (title: string, password: string) => {
    try {
      return await authService.getOne({
        login: title,
        password: password
      });
    } catch (e) {
      return []
    }
  },
  creteUser: async (title: string, password: string) => {
    try {
      return await authService.create({
        login: title,
        password: password
      });
    } catch (e) {
      return []
    }
  },
  checkUser: async (title: string, password: string) => {
    try {
      return await authService.check({
        login: title,
        password: password
      });
    } catch (e) {
      return []
    }
  },
}
