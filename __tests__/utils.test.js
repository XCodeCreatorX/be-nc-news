const {
  formatDates,
  makeRefObj,
  formatComments,
} = require("../db/utils/utils");

describe("formatDates", () => {
  test("When input is an empty array, return a new empty array.", () => {
    expect(formatDates([])).toEqual([]);
  });
  test("Make sure the original array isn't mutated", () => {
    const input = [];
    formatDates(input)

    expect(input).not.toBe([])
  });
  test("If the inputted array contains one object, return an array with an object - reformatting the time.", () => {
    const date = new Date(1542284514171).toDateString();

    const input = [
      {
        title: "Living in the shadow of a great man",
        topic: "mitch",
        author: "butter_bridge",
        body: "I find this existence challenging",
        created_at: 1542284514171,
        votes: 100,
      },
    ];

    const output = [
      {
        title: "Living in the shadow of a great man",
        topic: "mitch",
        author: "butter_bridge",
        body: "I find this existence challenging",
        created_at: date,
        votes: 100,
      },
    ];

    expect(formatDates(input)).toEqual(output);
  });
  test("If the inputted array contains more than one object, return an array of objects with reformatted times.", () => {
    const date = new Date(1542284514171).toDateString();
    const date2 = new Date(1033708614172).toDateString();

    const input = [
      {
        title: "Living in the shadow of a great man",
        topic: "mitch",
        author: "butter_bridge",
        body: "I find this existence challenging",
        created_at: 1542284514171,
        votes: 100,
      },
      {
        title: "UNCOVERED: catspiracy to bring down democracy",
        topic: "cats",
        author: "rogersop",
        body: "Bastet walks amongst us, and the cats are taking arms!",
        created_at: 1033708614172,
      },
    ];

    const output = [
      {
        title: "Living in the shadow of a great man",
        topic: "mitch",
        author: "butter_bridge",
        body: "I find this existence challenging",
        created_at: date,
        votes: 100,
      },
      {
        title: "UNCOVERED: catspiracy to bring down democracy",
        topic: "cats",
        author: "rogersop",
        body: "Bastet walks amongst us, and the cats are taking arms!",
        created_at: date2,
      },
    ];

    expect(formatDates(input)).toEqual(output);
  });
});

// This utility function should be able to take an array (list) of objects and return a reference object. The reference object must be keyed by each item's title, with the values being each item's corresponding id. e.g.
// [{ article_id: 1, title: 'A' }]
// will become
// { A: 1 }

//Test Notes:

describe("makeRefObj", () => {});

describe("formatComments", () => {});
