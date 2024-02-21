import request from "supertest";
import { app } from "../src/server";

describe("GET /", () => {
  it("responds with status 200", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });
});
