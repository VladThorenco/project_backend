import request from "supertest"
import { app } from "../../index";
import { EHTTP_STATUSES } from "../../constans";

describe("/courses", () => {

  beforeAll(async () => {
    await request(app).delete("/clear-data-test")
  })

  it("should return 200 and empty array", async () => {
    await request(app).get("/courses").expect(EHTTP_STATUSES.OK, [])
  })

  it("should return 404 for not existing course", async () => {
    await request(app).get("/courses/1").expect(EHTTP_STATUSES.NOT_FOUND)
  })

  it(`shouldn't create course with incorrect input data`, async () => {
    await request(app).post("/courses/")
      .send({title: ""})
      .expect(EHTTP_STATUSES.BAD_REQUEST)

    await request(app).get("/courses").expect(EHTTP_STATUSES.OK, [])
  })

  let createdResponse: any = null;

  it(`should create course with correct input data`, async () => {
    const response = await request(app)
      .post("/courses/")
      .send({title: "react"})
      .expect(EHTTP_STATUSES.CREATED)

    createdResponse = response.body

    expect(createdResponse).toEqual({
      id: expect.any(Number),
      title: "react"
    })

    await request(app)
      .get("/courses")
      .expect(EHTTP_STATUSES.OK, [ createdResponse ]);

  })

  it(`shouldn't update course with incorrect input data`, async () => {
    await request(app)
      .put(`/courses/${createdResponse.id}`)
      .send({title: ""})
      .expect(EHTTP_STATUSES.BAD_REQUEST)

    await request(app)
      .get(`/courses/${createdResponse.id}`)
      .expect(EHTTP_STATUSES.OK, [ createdResponse ]);
  })

  it(`shouldn't update course that not exist`, async () => {
    await request(app)
      .put(`/courses/${-100}`)
      .send({title: "good title"})
      .expect(EHTTP_STATUSES.NOT_FOUND);
  })

  it(`should update course with correct input data`, async () => {
    await request(app)
      .put(`/courses/${createdResponse.id}`)
      .send({title: "good new title"})
      .expect(EHTTP_STATUSES.NO_CONTENT);

    await request(app)
      .get(`/courses/${createdResponse.id}`)
      .expect(EHTTP_STATUSES.OK, {...createdResponse, title: "good new title"});
  })

  // todo created test for delete course

})
