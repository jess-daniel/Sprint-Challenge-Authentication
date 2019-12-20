const request = require("supertest");
const server = require("../api/server");
const db = require("../database/dbConfig");

describe("auth router", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("registeration endpoint", () => {
    it("should return a 201 status", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "michaeltest1", password: "pass" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a JSON object", () => {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "michaeltest2", password: "pass" })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });
});

describe("login endpoint", () => {
  it("should return a 200 status", () => {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "michaeltest2", password: "pass" })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
  it("should return a JSON object", () => {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "michaeltest2", password: "pass" })
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });
});
