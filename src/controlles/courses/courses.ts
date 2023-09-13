import { db } from "../../db";

export const coursesControllers = {
  getCourses: (title: string | null | undefined) => {
    const foundedCourses = db.courses;
    if (title) {
      return foundedCourses
        .filter((item: {
          title: string | string[];
        }) => item.title.indexOf(title) > -1);
    }
    return foundedCourses
  },
  getCourseById: (id: string) => {
    return db.courses.find((item: { id: number }) => item.id === Number(id));
  },
  creteCourse: (title: string) => {
    const createdCourse = {
      id: Number(new Date()),
      title: title
    };
    db.courses.push(createdCourse);
    return createdCourse
  },
  updateCourses: (title: string, id: string) => {
    const foundedCourseById = coursesControllers.getCourseById(id)
    if (foundedCourseById) {
      foundedCourseById.title = title;
    }
    return foundedCourseById;
  }
}
