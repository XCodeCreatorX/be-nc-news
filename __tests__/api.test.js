const app = require("../api/app");
const request = require("supertest");
const connection = require("../api/connection");

describe("/api", () => {
  afterAll(() => {
    return connection.destroy();
  });
  beforeEach(() => {
    return connection.seed.run();
  });
  describe("/topics", () => {
    test("GET 200 - Responds with a status code of 200", () => {
      return request(app).get("/api/topics").expect(200);
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
  describe("/users", () => {
    test("GET 200 - Responds with a status code of 200", () => {
      return request(app).get("/api/users/lurker").expect(200);
    });
    test("GET 200 - Responds with an object containing the specific user details", () => {
      return request(app)
        .get("/api/users/lurker")
        .expect(200)
        .then((user) => {
          const output = {
            username: "lurker",
            name: "do_nothing",
            avatar_url:
              "https://www.golenbock.com/wp-content/uploads/2015/01/placeholder-user.png",
          };
          expect(user.body.user[0]).toEqual(output);
        });
    });
  });
  describe("/articles", () => {
    test("GET 200 - Responds with a status code of 200", () => {
      return request(app).get("/api/articles/1").expect(200);
    });
    test("GET 200 - Responds with an object containing the specific article details", () => {});
  });
});
