const app = require("../api/app");
const request = require("supertest");
const connection = require("../api/connection");

describe("/api", () => {
  afterAll(() => {
    return connection.destroy();
  });
  describe("/topics", () => {
    test("GET 200 - Responds with a status code of 200", () => {
      return request(app)
      .get("/api/topics")
      .expect(200);
    });
    test("GET 200 - Responds with all the topics", () => {
      return request(app)
        .get("/api/topics")
        .expect(200)
        .then((topic) => {
          expect(topic.body.topics).toEqual(expect.any(Array));
        });
    });
  });
});
