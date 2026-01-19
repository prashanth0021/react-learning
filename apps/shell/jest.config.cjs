module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^mfe2/(.*)$": "<rootDir>/../mfe2/src/$1",
    "^mfe1/(.*)$": "<rootDir>/../mfe1/src/$1"
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom"]
};