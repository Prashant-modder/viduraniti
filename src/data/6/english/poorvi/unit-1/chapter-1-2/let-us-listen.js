export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 37).

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to what the crow did after he lost his food. As you listen, mark the given statements as True or False. (refer to page 37 for transcript)",
    items: [
      {
        n: 1, type: "table",
        question: "Mark the given statements as True or False.",
        columns: ["Statement", "True / False"],
        rows: [
          ["1. The crow was unhappy that he lost his food.", "______"],
          ["2. The crow thought that his lovely feathers made him smart.", "______"],
          ["3. The crow wanted to tell his friends not to be proud.", "______"]
        ],
        answer: [
          ["1. The crow was unhappy that he lost his food.", "True"],
          ["2. The crow thought that his lovely feathers made him smart.", "False"],
          ["3. The crow wanted to tell his friends not to be proud.", "True"]
        ]
      }
    ]
  }
];
