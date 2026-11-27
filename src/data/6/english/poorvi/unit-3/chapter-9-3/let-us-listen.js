export const meta = { title: "Let Us Listen", order: 4, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 102, "Spices that Heal us").

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to the benefits of Tulsi (Holy Basil), a common herb. As you listen, complete the fact sheet given below. (refer to page 102 for transcript)",
    items: [
      {
        n: 1, type: "table",
        question: "Complete THE WONDER HERB fact sheet.",
        columns: ["THE WONDER HERB", "Details"],
        rows: [
          ["1. Name", "Tulsi   |   Family: ______"],
          ["2. First found in", "______"],
          ["3. Now found", "everywhere in India"],
          ["4. Known as", "The ______ of herbs"],
          ["5. Can decrease levels of", "______ and cholesterol"],
          ["6. Used to treat disorders of", "breathing and ______"],
          ["7. Is used to make", "mouth wash and ______"],
          ["8. We can have Tulsi leaves by", "eating them ______ or adding them while making ______"]
        ],
        answer: [
          ["1. Name", "Tulsi   |   Family: **basil**"],
          ["2. First found in", "**north central India**"],
          ["3. Now found", "everywhere in India"],
          ["4. Known as", "The **Queen** of herbs"],
          ["5. Can decrease levels of", "**glucose** and cholesterol"],
          ["6. Used to treat disorders of", "breathing and **digestion**"],
          ["7. Is used to make", "mouth wash and **toothpaste** *(also: herbal hand sanitisers)*"],
          ["8. We can have Tulsi leaves by", "eating them **raw** or adding them while making **tea**"]
        ]
      }
    ]
  }
];
