export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook pages 153-154): a brother and sister discuss the Rainbow Mountain in Peru.

export const sections = [
  {
    roman: "I",
    instruction: `You will listen to a brother and sister discuss a natural phenomenon. As you listen, mark the four true statements from 1–6 given below. (Transcript for teacher on page 153)`,
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/rainbow-mountain.png", alt: "The colourful striped Rainbow Mountain with a blue sky and white clouds" },
        question: "Mark the four true statements.",
        columns: ["Statement", "True or False?"],
        rows: [
          ["1. The brother was taken aback to see the posted pictures.", "______"],
          ["2. The brother admitted to not knowing about his sister's favourite picture.", "______"],
          ["3. The sister stated that the rainbow mountain was like any other mountain.", "______"],
          ["4. The brother was aware of the reason for the formation of colours on the mountain.", "______"],
          ["5. The brother was surprised to learn about the mountain being covered with snow till recently.", "______"],
          ["6. The sister understood nature's role in the beauty of the mountain.", "______"]
        ],
        answer: [
          ["1. The brother was taken aback to see the posted pictures.", "False - he liked the pictures."],
          ["2. The brother admitted to not knowing about his sister's favourite picture.", "True"],
          ["3. The sister stated that the rainbow mountain was like any other mountain.", "False - she was amazed by its many colours."],
          ["4. The brother was aware of the reason for the formation of colours on the mountain.", "True - he explained that layers of minerals were deposited."],
          ["5. The brother was surprised to learn about the mountain being covered with snow till recently.", "True"],
          ["6. The sister understood nature's role in the beauty of the mountain.", "True - she said it was as if nature painted the mountain."]
        ]
      }
    ]
  }
];
