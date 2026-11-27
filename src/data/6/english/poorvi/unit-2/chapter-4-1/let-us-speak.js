export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Gajaraj and Buntee had a wonderful time with each other even if they were 'unlikely' friends. Talk to your friend and find out your common likes and dislikes. Share your answers with the class.",
    items: [
      {
        n: 1, type: "table",
        question: "Fill in your likes, your friend's likes, and what both of you like.",
        columns: ["I am ______ / I like:", "Both of us like:", "My friend is ______ / My friend likes:"],
        rows: [
          ["• ______", "• ______", "• ______"],
          ["• ______", "• ______", "• ______"]
        ],
        answer: [
          ["I am Aarav — I like: • reading comic books", "• playing badminton", "My friend is Kabir — My friend likes: • painting"],
          ["• solving maths puzzles", "• eating mangoes", "• playing the tabla"]
        ]
      },
      {
        n: 2, type: "activity",
        wordBox: [
          "My friend and I like to play. Both of us want ______.",
          "I like to ______ but my friend likes to ______.",
          "We are different as she/he is ______ and I am ______."
        ],
        question: "Now, tell your classmates about your friend. You may take help of the cues given below.",
        answer: [
          "*(Speaking activity - sample.)*",
          "- My friend and I like to play. Both of us want **to join the school badminton team**.",
          "- I like to **read comic books** but my friend likes to **paint landscapes**.",
          "- We are different as he is **quiet and artistic** and I am **talkative and fond of puzzles**—yet we are the best of friends!"
        ]
      }
    ]
  }
];
