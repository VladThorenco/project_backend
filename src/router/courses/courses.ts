import express from "express";
import { EHTTP_STATUSES } from "../../constans";


export const getCoursesRoutes = (db: any) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const foundedCourses = db.courses;
    if (req.query.title) {
      const foundedCourse = foundedCourses
        .filter((item: { title: string | string[]; }) => item.title.indexOf(req.query.title as string) > -1);
      return res.json(foundedCourse)
    }

    if (!foundedCourses.length) {
      res.json([]);
    }

    res.json(foundedCourses)
  });

  router.get("/:id", (req, res) => {
    const foundedCourseById = db.courses.find((item: { id: number; }) => item.id === Number(req.params.id));
    if (!foundedCourseById) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    return res.status(EHTTP_STATUSES.CREATED).json(foundedCourseById)
  })

  router.delete("/:id", (req, res) => {
    const foundedCourseById = db.courses.findIndex((item: { id: number; }) => item.id === Number(req.params.id));

    // Фильтрация игра длины
    // splice

    if (foundedCourseById === -1) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }

    db.courses.splice(foundedCourseById, 1);

    return res.sendStatus(EHTTP_STATUSES.NO_CONTENT);
  })

  router.post("/", (req, res) => {
    if (!req.body.title.trim()) {
      return res.sendStatus(EHTTP_STATUSES.BAD_REQUEST);
    }
    const createdCourse = {
      id: Number(new Date()),
      title: req.body.title
    };
    db.courses.push(createdCourse);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  router.put("/:id", (req, res) => {
    if (!req.body.title.trim()) {
      return res.sendStatus(EHTTP_STATUSES.BAD_REQUEST);
    }
    const foundedCourseById = db.courses.find((item: { id: number; }) => item.id === Number(req.params.id));

    if (!foundedCourseById) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    foundedCourseById.title = req.body.title;
    return res.status(EHTTP_STATUSES.NO_CONTENT).json(foundedCourseById);
  });

  router.delete("/clear-data-test", (req, res) => {
    db.courses = [];
    res.sendStatus(EHTTP_STATUSES.NO_CONTENT)
  })
  return router;
}


