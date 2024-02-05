// jest.config.mjs
export default {
  testEnvironment: "node",
  // ... other configuration options
  transform: {
    "^.+\\.(js|jsx|mjs)$": "babel-jest",
  },
};
