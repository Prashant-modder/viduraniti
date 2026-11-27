export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 101, "Peepal Baba").

export const sections = [
  {
    roman: "I",
    instruction: "You will now listen to a boy speaking to his mother. As you listen, select the correct statements. (refer to page 101 for transcript)",
    items: [
      {
        n: 1, type: "table",
        question: "Select the correct statements based on the listening transcript.",
        columns: ["Statement", "Correct / Incorrect"],
        rows: [
          ["1. The mother was surprised to know that Peepal Baba had planted trees all over the country.", "______"],
          ["2. The mother disliked the work being done by Peepal Baba.", "______"],
          ["3. The mother wanted to know more about Peepal Baba.", "______"],
          ["4. The boy decided to take care of trees by listening to Peepal Baba's journey.", "______"],
          ["5. The boy was worried about what his teacher had told him.", "______"]
        ],
        answer: [
          ["1. The mother was surprised to know that Peepal Baba had planted trees all over the country.", "Correct"],
          ["2. The mother disliked the work being done by Peepal Baba.", "Incorrect - she praised his great work."],
          ["3. The mother wanted to know more about Peepal Baba.", "Correct"],
          ["4. The boy decided to take care of trees by listening to Peepal Baba's journey.", "Correct"],
          ["5. The boy was worried about what his teacher had told him.", "Incorrect - he was excited and inspired."]
        ]
      }
    ]
  }
];
