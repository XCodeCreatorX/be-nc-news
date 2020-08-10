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
  test("GET 404 - Bad request when path is incorrect with an error message. ", () => {
    return request(app)
      .get("/api/not-a-path")
      .expect(404)
      .then((result) => {
        expect(result.body.msg).toBe("Path does not exist.");
      });
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
    test("GET 400 - Bad request when the username is incorrect with an error message.", () => {
      return request(app)
        .get("/api/users/notausername")
        .expect(400)
        .then((result) => {
          expect(result.body.msg).toBe("User does not exist.");
        });
    });
  });
  describe("/articles", () => {
    test("GET 200 - Responds with a status code of 200", () => {
      return request(app).get("/api/articles/1").expect(200);
    });
    test("GET 200 - Responds with an object containing the specific article details", () => {
      return request(app)
        .get("/api/articles/1")
        .expect(200)
        .then((article) => {
          const output = {
            article_id: 1,
            title: "Living in the shadow of a great man",
            topic: "mitch",
            author: "butter_bridge",
            body: "I find this existence challenging",
            created_at: expect.any(String),
            votes: 100,
            comment_count: "1",
          };
          expect(article.body.article).toEqual(output);
        });
    });
    test("GET 404 - Responds with an error if the article does not exist.", () => {
      return request(app)
        .get("/api/articles/987")
        .expect(404)
        .then((result) => {
          expect(result.body.msg).toBe("Article does not exist.");
        });
    });
    test("PATCH 200 - Responds with a status code of 200", () => {
      return request(app)
        .patch("/api/articles/1")
        .send({ inc_votes: 10 })
        .expect(200);
    });
    test("PATCH 200 - Responds with an updated article [Postive Number]", () => {
      return request(app)
        .patch("/api/articles/1")
        .send({ inc_votes: 10 })
        .expect(200)
        .then((article) => {
          const output = {
            article_id: 1,
            title: "Living in the shadow of a great man",
            topic: "mitch",
            author: "butter_bridge",
            body: "I find this existence challenging",
            created_at: expect.any(String),
            votes: 110,
          };
          expect(article.body.article).toEqual(output);
        });
    });
    test("PATCH 200 - Responds with an updated article [Negative Number]", () => {
      return request(app)
        .patch("/api/articles/1")
        .send({ inc_votes: -10 })
        .expect(200)
        .then((article) => {
          const output = {
            article_id: 1,
            title: "Living in the shadow of a great man",
            topic: "mitch",
            author: "butter_bridge",
            body: "I find this existence challenging",
            created_at: expect.any(String),
            votes: 90,
          };
          expect(article.body.article).toEqual(output);
        });
    });
  });
  describe("/articles/:article_id/comments", () => {
    test("POST 200 - Responds with a status of 200", () => {
      return request(app)
        .post("/api/articles/1/comments")
        .send({ username: "newUser", body: "This is a great comment." })
        .expect(200);
    });
  });
});
