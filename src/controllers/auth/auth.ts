import { authService } from "../../services";

export const authControllers = {
  getUser: async (title: string, password: string) => {
    try {
      return await authService.getOne({
        login: title,
        password: password
      });
    } catch (e) {
      console.log('===> error <===', e);
    }
  },
  creteUser: async (title: string, password: string) => {
    try {
      return await authService.create({
        login: title,
        password: password
      });
    } catch (e) {
     console.log('===> error <===', e);
    }
  },
  checkUser: async (title: string, password: string) => {
    try {
      return await authService.check({
        login: title,
        password: password
      });
    } catch (e) {
      console.log('===> error <===', e);
    }
  },
}
