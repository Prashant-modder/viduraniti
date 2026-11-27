export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 73).
// Note on item 3: The transcript says "That made me comfortable in the school", while the
// printed sentence uses a negative frame ("it was not so ______"), so "difficult" fits best.

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to Manu talk about her friend, Monika. As you listen, fill in the blanks with words that you hear. (refer to page 73 for transcript) You will listen to the girl once again.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "Manu found it ______ when she took admission in the school.", answer: "**difficult**" },
          { label: "2", type: "fill", question: "Manu met ______ and was helped by her in many ways.", answer: "**Monika**" },
          { label: "3", type: "fill", question: "So, it was not so ______ for the new girl to adjust in the school.", answer: "**difficult**" },
          { label: "4", type: "fill", question: "Both friends experienced difficult and ______ moments together.", answer: "**happy**" },
          { label: "5", type: "fill", question: "Manu is ______ to Monika for making her life easy and finding a friend.", answer: "**thankful**" }
        ]
      }
    ]
  }
];
