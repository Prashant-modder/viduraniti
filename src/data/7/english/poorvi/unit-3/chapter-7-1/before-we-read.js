export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Riddles", "Word grid"] };

export const sections = [
  {
    roman: "I",
    instruction: `Work in pairs and guess the invention.`,
    items: [
      {
        n: 1, type: "short",
        question: `I am a concept invented by ancient Indian mathematicians. I add value to numbers. Without me, calculations in the modern digital world would be impossible. Who am I?`,
        answer: "**Zero.** Ancient Indian mathematicians gave the world the zero and the place-value system, and the whole of modern digital calculation depends on them."
      },
      {
        n: 2, type: "short",
        question: `I am an ancient Indian practice, now popular globally. I focus on physical and mental well-being. What am I?`,
        answer: "**Yoga.** It joins physical postures, breathing and meditation, and it is now practised all over the world."
      }
    ]
  },
  {
    roman: "II",
    instruction: `Discuss in groups of four what you think the world today would have been like without inventions and discoveries.`,
    items: [
      {
        n: 1, type: "activity",
        answer: [
          "*(Class discussion - sample answer.)*",
          "- Without the wheel, the printing press and electricity, we would still travel on foot, copy books by hand and work only in daylight.",
          "- Without medicines and vaccines, diseases that are curable today would still be deadly.",
          "- Without the telephone, the internet and the aeroplane, people far apart could not talk quickly or meet easily.",
          "- Life would be slower, harder and much more local, and there would be far fewer chances to learn about the wider world."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Fill the grid given below with missing letters to complete the words. These words display qualities of an inventor.`,
    items: [
      {
        n: 1, type: "crossword",
        grid: { rows: 5, cols: 13 },
        given: [
          [1,1],[1,2],[1,4],[1,5],[1,7],[1,9],
          [2,1],[2,2],[2,7],[2,8],[2,9],
          [3,1],[3,2],[3,5],[3,6],[3,8],[3,10],[3,11],
          [4,1],[4,2],[4,3],[4,4],[4,7],[4,8],[4,9],[4,10],[4,11],
          [5,1],[5,4],[5,5],[5,7],[5,9],[5,10],[5,11]
        ],
        entries: [
          { n: 0, dir: "across", row: 1, col: 1, answer: "CREATIVITY" },
          { n: 0, dir: "across", row: 2, col: 1, answer: "CURIOSITY" },
          { n: 0, dir: "across", row: 3, col: 1, answer: "RISK-TAKING" },
          { n: 0, dir: "across", row: 4, col: 1, answer: "DETERMINATION" },
          { n: 0, dir: "across", row: 5, col: 1, answer: "IMAGINATION" }
        ]
      }
    ]
  }
];
