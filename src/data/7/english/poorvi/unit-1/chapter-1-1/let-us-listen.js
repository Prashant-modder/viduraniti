export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to five people speak about school life. Circle the words that are used by the speakers.",
    items: [
      {
        n: 1, type: "short", question: "Which words are used? (lawyer, desks, homemaker, principal, posters, newspapers, marriage, advertisements, careers, books)",
        answer: "**Words used:** homemaker, careers, books."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match each statement 1-7 to each speaker (i)-(v).",
    items: [
      {
        n: 1, type: "match", question: "Match statements to speakers based on the transcript.",
        left: ["Speaker (i) - Father", "Speaker (ii) - Grandmother", "Speaker (iii) - Teacher", "Speaker (iv) - Student", "Speaker (v) - Principal"],
        right: ["Statements 1 to 7"],
        answer: [
          "**Speaker (i)** -> 3. Believes in the power of education that leads to freedom of choice.",
          "**Speaker (ii)** -> (Provides historical context that girls used to stay home, but doesn't strictly match the remaining statements. Fits the general theme of change.)",
          "**Speaker (iii)** -> 7. Believes that learning skills is not gender-based. (Focuses on dignity of labor and hands-on skills).",
          "**Speaker (iv)** -> 4. Shares that school also means companionship. (Shares feelings with friends).",
          "**Speaker (v)** -> 1. Promotes active participation for all in school activities. (Without bothering if for girls or boys)."
        ]
      }
    ]
  }
];
