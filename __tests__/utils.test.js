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
    formatDates(input);

    expect(input).not.toBe([]);
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

describe("makeRefObj", () => {
  test("If input is an empty array, return an empty object", () => {
    expect(makeRefObj([])).toEqual({});
  });
  test("Make sure the original array isn't mutated", () => {
    const input = [];
    makeRefObj(input);

    expect(input).not.toBe([]);
  });
  test("If the inputted array contains one object, return a new reference object.", () => {
    let input = [{ article_id: 1, title: "A" }];
    let output = { A: 1 };

    expect(makeRefObj(input)).toEqual(output);
  });
  test("If the inputted array contains more than one object, return a new reference object.", () => {
    let input = [
      { article_id: 1, title: "A" },
      { article_id: 2, title: "B" },
    ];
    let output = { A: 1, B: 2 };

    expect(makeRefObj(input)).toEqual(output);
  });
});

xdescribe("formatComments", () => {
  test("When input is an empty array, return a new empty array.", () => {
    expect(formatComments([], {})).toEqual([]);
  }),
  test("Checks the created_by property has been renamed to an author key [1 object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const refObj = { A: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0]).toHaveProperty("author");
  });
  test("Checks the created_by property has been renamed to an author key [More than one object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1448282163389,
      },
    ];
    const refObj = { A: 1, B: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0]).toHaveProperty("author");
    expect(input[1]).toHaveProperty("author");
  });
  test("Checks the belongs_to property has been renamed to an article_id key [1 object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const refObj = { A: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0]).toHaveProperty("article_id");
  });
  test("Checks the belongs_to property has been renamed to an article_id key [More than one object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1448282163389,
      },
    ];
    const refObj = { A: 1, B: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0]).toHaveProperty("article_id");
    expect(input[1]).toHaveProperty("article_id");
  });
  test("The value of the new article_id key must be the id corresponding to the original title value provided. [1 object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const refObj = { A: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0].article_id).toEqual(1);
  });
  test("The value of the new article_id key must be the id corresponding to the original title value provided. [More than one object]", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1448282163389,
      },
    ];
    const refObj = { A: 1, B: 2 };
    const input = formatComments(commentArr, refObj);

    expect(input[0].article_id).toEqual(1);
    expect(input[1].article_id).toEqual(2);
  });
  test("The created_value is a reformatted date. [1 Object]", () => {
    const date = new Date(1511354163389).toDateString();

    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
    ];
    const refObj = { A: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0].created_at).toBe(date);
  });
  test("The created_value is a reformatted date. [More than one object]", () => {
    const date = new Date(1511354163389).toDateString();
    const date2 = new Date(1511354163274).toDateString();

    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1511354163274,
      },
    ];
    const refObj = { A: 1 };
    const input = formatComments(commentArr, refObj);

    expect(input[0].created_at).toBe(date);
    expect(input[1].created_at).toBe(date2);
  });
  test("Make sure the original array isn't mutated", () => {
    const commentArr = [
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1448282163389,
      },
    ];
    const refObj = { A: 1, B: 1 };
    formatComments(commentArr, refObj);

    expect(commentArr).toEqual([
      {
        body:
          "Oh, I've got compassion running out of my nose, pal! I'm the Sultan of Sentiment!",
        belongs_to: "They're not exactly dogs, are they?",
        created_by: "butter_bridge",
        votes: 16,
        created_at: 1511354163389,
      },
      {
        body:
          "Replacing the quiet elegance of the dark suit and tie with the casual indifference of these muted earth tones is a form of fashion suicide, but, uh, call me crazy — onyou it works.",
        belongs_to: "Living in the shadow of a great man",
        created_by: "icellusedkars",
        votes: 100,
        created_at: 1448282163389,
      },
    ]);
  });
});
