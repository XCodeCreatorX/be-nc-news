const ENV = process.env.NODE_ENV || "test"
const testData = require("../data/test-data/index")
const devData = require("../data/dev-data/index")

const data = {
  development: devData,
  test: testData
};

module.exports = data[ENV]