import { db } from "../../db";

export const authControllers = {
  creteUser: (title: string) => {
    const createdCourse = {
      id: Number(new Date()),
      title: title
    };
    db.courses.push(createdCourse);
    return createdCourse
  },
}
