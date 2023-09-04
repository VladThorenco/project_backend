require('dotenv').config()
import express from "express";
import { EHTTP_STATUSES } from "./constans";

const app = express()
const port = process.env.PORT || 3000

// middleware call before action handler
const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware);

let db = {
  courses: [
    {id: 1, title: "front-end"},
    {id: 2, title: "back-end"},
    {id: 3, title: "qa"},
    {id: 3, title: "devops"}
  ]
};

app.get("/courses", (req, res) => {
  const foundedCourses = db.courses;
  if (req.query.title) {
    const foundedCourse = foundedCourses
      .filter((item) => item.title.indexOf(req.query.title as string) > -1);
    return res.json(foundedCourse)
  }

  if (!foundedCourses.length) {
    res.json([]);
  }

  res.json(foundedCourses)
});

app.get("/courses/:id", (req, res) => {
  const foundedCourseById = db.courses.find((item) => item.id === Number(req.params.id));
  if (!foundedCourseById) {
    return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
  }
  return res.status(EHTTP_STATUSES.CREATED).json(foundedCourseById)
})

app.delete("/courses/:id", (req, res) => {
  const foundedCourseById = db.courses.findIndex((item) => item.id === Number(req.params.id));

  // Фильтрация игра длины
  // splice

  if (foundedCourseById === -1) {
    return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
  }

  db.courses.splice(foundedCourseById, 1);

  return res.sendStatus(EHTTP_STATUSES.NO_CONTENT);
})

app.post("/courses", (req, res) => {
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

app.put("/courses/:id", (req, res) => {
  if (!req.body.title.trim()) {
    return res.sendStatus(EHTTP_STATUSES.BAD_REQUEST);
  }
  const foundedCourseById = db.courses.find((item) => item.id === Number(req.params.id));

  if (!foundedCourseById) {
    return res.sendStatus(EHTTP_STATUSES.NOT_FOUND);
  }
  foundedCourseById.title = req.body.title;
  return res.status(EHTTP_STATUSES.NO_CONTENT).json(foundedCourseById);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
