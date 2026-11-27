export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 71).

export const sections = [
  {
    roman: "I",
    instruction: "Listen to the story about 'Unlikely Friends' (refer to page 71 for transcript) and complete the tasks below.",
    items: [
      {
        n: 1, type: "blanks",
        figure: { src: "images/cow-leopard.png", alt: "Photograph titled Unlikely Friends showing a cow sitting peacefully with a leopard" },
        question: "You will listen to a story about 'Unlikely Friends'. Use exact words from the story to fill up the missing details in the paragraph. (refer to page 71 for transcript)",
        passage: "The leopard is a ______ animal but it became a friend of a cow. When the leopard grew up, it left the village. It came in the ______ to meet the cow. The leopard would sit ______ the cow. They also played together. ______ were surprised at their friendship.",
        answer: [
          "1. **wild**",
          "2. **night**",
          "3. **beside**",
          "4. **The villagers** *(or **Villagers**)*"
        ]
      },
      {
        n: 2, type: "order",
        question: "Now, listen to the story again and number the sentences in correct order. The first one has been done for you. (Sentence 2 is pre-numbered 1.)",
        items: [
          "The leopard stopped coming regularly.",
          "The cow took care of the leopard cub as a mother. [1]",
          "The leopard came to meet the cow at night.",
          "The leopard left the village after growing up."
        ],
        answer: [2, 4, 3, 1]
      }
    ]
  }
];
