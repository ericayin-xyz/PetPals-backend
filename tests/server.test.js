const request = require("supertest")
const { app } = require("../src/server")
const mongoose = require("mongoose")
const { getMaxListeners } = require("../src/models/card")


beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/petpals")
})

afterAll(async () => {
    await mongoose.connection.close()
})

describe("Server Homepage", () => {
    it("shows data sent message", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.text).toEqual(expect.stringContaining("Data Sent"))
    })
})

describe("Get Cards", () => {
    it("gets card list", async () => {
        const response = await request(app).get("/cards")
        expect(response.statusCode).toBe(200)
    })
})


describe("Create a Card", () => {
    it("creates a new card", async () => {
        const response = await request(app).post("/cards")
        .send({
            name: "Ann",
            // experience: "3 years",
            // city: "Sydney",
            // phone: 12345678,
            // email: "ann@gmail.com",
            // description: "Knowledgeable about different animal behaviors and specific pet needs."
        })
        // expect(response.statusCode).toBe(200)
        expect(response.body.name).toEqual("Ann")
    })
})