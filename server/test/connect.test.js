import { connectDB } from "../mongodb/connect";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Mock the console.log function to prevent logs from cluttering the test output
console.log = jest.fn();

describe("connectDB function", () => {
  // Mock the mongoose.connect function
  mongoose.connect = jest.fn();

  afterEach(() => {
    // Clear the mock calls after each test
    jest.clearAllMocks();
  });

  it("should connect to MongoDB with the provided URL", async () => {
    const url = process.env.MONGODB_URI;
    console.log("url", url);
    await connectDB(url);

    // Expect mongoose.connect to have been called with the provided URL
    expect(mongoose.connect).toHaveBeenCalledWith(url);
    // Expect 'MongoDB connected' to be logged to the console
    expect(console.log).toHaveBeenCalledWith("MongoDB connected");
  });

  it("should log an error if MongoDB connection fails", async () => {
    const url = "invalid-url";

    // Mocking the mongoose.connect function to simulate a connection error
    mongoose.connect.mockRejectedValue("Connection error");

    await connectDB(url);

    // Expect mongoose.connect to have been called with the provided URL
    expect(mongoose.connect).toHaveBeenCalledWith(url);
    // Expect an error message to be logged to the console
    expect(console.log).toHaveBeenCalledWith("Connection error");
  });
});
