export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 152). Statements 2 and 5 are not needed.

export const sections = [
  {
    roman: "I",
    instruction: `You will listen to five speakers speak about a magical power they wish for. As you listen, match statements 1–7 with speakers (i)–(v). There are two statements you do not need. (Transcript for teacher on page 152 )`,
    items: [
      {
        n: 1, type: "match",
        question: "Match the statements to the speakers. Statements 2 and 5 are not needed - no speaker matches them.",
        left: [
          "Power of healing ailments",
          "Ability to end poverty in the world",
          "Power to control the weather as per need",
          "Ability to make wise business decisions",
          "Power to predict one's own future clearly",
          "Ability to remember information quickly",
          "Power to move around without using vehicles"
        ],
        right: ["Speaker (i)", "Speaker (ii)", "Speaker (iii)", "Speaker (iv)", "Speaker (v)"],
        leftHead: "Statements",
        answer: ["D", "", "E", "A", "", "B", "C"]
      }
    ]
  }
];
