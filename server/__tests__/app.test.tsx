
import { generateToken, verifyToken } from "../src/secureUserSystem/jwtUtils";
import { app, db } from "../src/server";
const request = require("supertest");

beforeAll(() => {});

test("test jwt", () => {
  const token = generateToken("yeet", 1, "yeets");
  const decodedToken = verifyToken(token);

  //yeet iat claim
  delete decodedToken.iat;

  expect(decodedToken).toEqual({
    role: 1,
    username: "yeets",
    uuid: "yeet",
  });
});

describe("GET /", () => {
  it("should return 200 and Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("hello world");
  });
});

afterAll(async () => {
    db.close(true)
});
