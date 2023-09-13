import { db } from "../../db";

export const authControllers = {
  creteUser: (title: string, password: string) => {
    const createdCourse = {
      id: Number(new Date()),
      title: title,
      password: password
    };
    db.courses.push(createdCourse);
    return createdCourse
  },
}
