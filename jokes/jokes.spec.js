const request = require("supertest");
const server = require("../api/server");

describe("joke router", () => {
  describe("GET /api/jokes", () => {
    it("should return a 200 status", () => {
      request(server)
        .post("/api/auth/login")
        .send({ username: "michaeltest2", password: "pass" })
        .then(res => {
          const token = res.body.token;

          return request
            .get("/api/jokes")
            .set("Authorization", token)
            .then(res => {
              expect(res.status).toBe(200);
            });
        });
    });
    it("should return an array", () => {
      request(server)
        .post("/api/auth/login")
        .send({ username: "michaeltest2", password: "pass" })
        .then(res => {
          const token = res.body.token;

          return request
            .get("/api/jokes")
            .set("Authorization", token)
            .then(res => {
              expect(Array.isArray(res.body)).toBe(true);
            });
        });
    });
  });
});
