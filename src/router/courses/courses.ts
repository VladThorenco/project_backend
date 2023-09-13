import express from "express";
import { EHTTP_STATUSES } from "../../constans";
import { CourseItem } from "../../db";
import { coursesControllers } from "../../controllers";


export const getCoursesRoutes = (db: any) => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const foundedCourses = coursesControllers.getCourses(req.query.title?.toString() ?? "");

    if (!foundedCourses.length) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }

    res.json(foundedCourses)
  });

  router.get("/:id", (req, res) => {
    const foundedCourseById = coursesControllers.getCourseById(req.params.id)
    if (!foundedCourseById) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    return res.status(EHTTP_STATUSES.CREATED).json(foundedCourseById)
  })

  router.delete("/:id", (req, res) => {
    const foundedCourseById = coursesControllers.getCourseById(req.params.id)
    if (!foundedCourseById) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }
    db.courses.filter((item: CourseItem) => item.id !== foundedCourseById.id)

    return res.sendStatus(EHTTP_STATUSES.NO_CONTENT);
  })

  router.post("/", (req, res) => {
    if (!req.body.title.trim()) {
      return res.status(EHTTP_STATUSES.BAD_REQUEST).json({
        message: 'Field title is required',
        description: `${req.body.title} it isn't title`
      });
    }
    const createdCourse = coursesControllers.creteCourse(req.body.title);
    return res.status(EHTTP_STATUSES.CREATED).json(createdCourse)
  });

  router.put("/:id", (req, res) => {
    if (!req.body.title.trim()) {
      return res.sendStatus(EHTTP_STATUSES.BAD_REQUEST);
    }
    const foundedCourseById = coursesControllers.updateCourses(req.body.title, req.params.id)

    if (!foundedCourseById) {
      return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
    }

    return res.status(EHTTP_STATUSES.NO_CONTENT).json(foundedCourseById);
  });

  router.delete("/clear-data-test", (req, res) => {
    db.courses = [];
    res.sendStatus(EHTTP_STATUSES.NO_CONTENT)
  })
  return router;
}


