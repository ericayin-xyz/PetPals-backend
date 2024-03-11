const { MongoClient } = require("mongodb");

// Connection URI. Replace <username>, <password>, and <your-cluster-url> with your actual credentials
const uri = "mongodb+srv://erica:pa$$w0rd@petpals.2sao6h1.mongodb.net/?retryWrites=true&w=majority&appName=petpals";
const client = new MongoClient(uri);

const databaseName = "petpals";
const collectionName = "cards";

// Connect to the database before running tests
beforeAll(async () => {
    await client.connect();
});

// Disconnect after all tests are done
afterAll(async () => {
    await client.db(databaseName).dropDatabase(); // Cleanup: drop database after tests
    await client.close();
});

// Test for Create operation
test("should insert a doc into collection", async () => {
    const usersCollection = client.db(databaseName).collection(collectionName);

    const mockUser = {
        _id: "07",
        name: "Etrne",
        email: "Etrne@example.com",
        experience: "2",
        phone: "0392859388",
        description: "Hello world",
        };
    await usersCollection.insertOne(mockUser);

    const insertedUser = await usersCollection.findOne({ _id: "3" });
    expect(insertedUser).toEqual(mockUser);
});

// Test for Read operation
// test("should find a doc from collection", async () => {
//     const usersCollection = client.db(testdate).collection(cards);

//     const mockUser = {
//     _id: "02",
//     name: "Jane",
//     email: "jane@example.com",
//     experience: "2",
//     phone: "0392859302",
//     description: "Hell0 world",
//     };
//     await usersCollection.insertOne(mockUser);

//     const foundUser = await usersCollection.findOne({ _id: "02" });
//     expect(foundUser.name).toEqual("Jane");
// });
