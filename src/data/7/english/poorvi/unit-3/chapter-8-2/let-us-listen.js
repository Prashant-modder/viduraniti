export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 137): Sai and her father talk about origami.

export const sections = [
  {
    roman: "I",
    instruction: `You will listen to a conversation between a girl and her father about the art of paper folding called origami. As you listen, select the true statements from 1–7. (Transcript for the teacher on pg. 137)`,
    items: [
      {
        n: 1, type: "mcq",
        options: [
          `1. Sai was trying to make an origami boat.`,
          `2. Sai's father used to do origami as a child.`,
          `3. Paper was very expensive so it was used only for special occasions.`,
          `4. People have been making paper cranes for thousands of years.`,
          `5. There is a belief that if you make a thousand paper cranes, your wish will come true.`,
          `6. The art of origami is about enjoying the process.`,
          `7. Sai's father suggests making a paper bookmark next time.`
        ],
        answer: [
          "**The true statements are 2, 3, 5 and 6.**",
          "- **1 is false:** Sai was trying to make an origami crane.",
          "- **2 is true:** her father says he remembers doing origami at her age.",
          "- **3 is true:** in the early days paper was costly, so it was used only for special occasions such as religious ceremonies.",
          "- **4 is false:** people began making animals and flowers for fun only in the seventeenth century, so it has been hundreds of years, not thousands.",
          "- **5 is true:** it is believed that if you fold a thousand cranes you can make a wish and it will come true.",
          "- **6 is true:** the father says origami is about the process, patience and creativity, not just the final shape.",
          "- **7 is false:** he suggests making an origami paper boat next."
        ]
      }
    ]
  }
];
