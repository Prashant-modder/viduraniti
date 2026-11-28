export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the following lines and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `He spent all his time to learn about the magic potion. People cheated him often, promising to tell him about it, but he did not give up. His wife, Madhumati, was tired of this and also worried because she saw how much money Rama Natha was spending. She was sure that soon they would be without money.`,
        parts: [
          {
            label: "(i)", type: "fill",
            question: "Complete the sentence with a suitable reason.\n\nRama Natha did not 'give up' because ______.",
            answer: "...he firmly **believed that a magic potion existed** and was determined to learn how to turn objects into gold."
          },
          {
            label: "(ii)", type: "table",
            question: "Read the column which shows 'what happened' and write the correct outcome in the next column.",
            columns: ["What Happened", "Outcome"],
            rows: [
              ["A. People promised to tell Rama Natha about the magic potion.", "______"],
              ["B. Rama Natha was spending a lot of money.", "______"]
            ],
            answer: [
              ["A. People promised to tell Rama Natha about the magic potion.", "People cheated him often, yet he did not give up."],
              ["B. Rama Natha was spending a lot of money.", "Madhumati was tired and worried that soon they would be without money."]
            ]
          },
          {
            label: "(iii)", type: "table",
            question: "Write whether the following statements are True or False.",
            columns: ["Statement", "True / False"],
            rows: [
              ["A. Madhumati was troubled about what her husband did.", "______"],
              ["B. Rama Natha was very happy digging his fields.", "______"],
              ["C. The sage wanted to show the right path to Rama Natha.", "______"]
            ],
            answer: [
              ["A. Madhumati was troubled about what her husband did.", "True"],
              ["B. Rama Natha was very happy digging his fields.", "False"],
              ["C. The sage wanted to show the right path to Rama Natha.", "True"]
            ]
          }
        ]
      },
      {
        n: 2,
        passage: `Carefully, he took the bottle to the sage. The sage smiled and muttered something over the water. Then he returned the bottle and said, "Try it out." Rama Natha sprinkled a few drops on a copper vessel and waited for it to turn to gold. To his surprise nothing happened!`,
        parts: [
          {
            label: "(i)", type: "mcq",
            question: "Choose the option that lists the events given below in the correct order.\n\nA. The sage smiled.\nB. Rama Natha gave the bottle to the sage.\nC. Rama Natha dropped a few drops of water on a copper vessel.\nD. He said something in a low voice over the water.\nE. Rama Natha waited to see if the magic worked.",
            options: ["(a) A, E, D, B, C", "(b) B, A, D, C, E", "(c) C, D, A, B, E", "(d) A, D, B, E, C"],
            answer: "**(b) B, A, D, C, E**"
          },
          {
            label: "(ii)", type: "fill",
            question: "Fill in the blank with the correct word from the lines given above.\n\nSeeing that the plant had dried up, the gardener ______ some water on it.",
            answer: "**sprinkled**"
          },
          {
            label: "(iii)", type: "short",
            question: "How might Rama Natha have felt when nothing happened to the copper vessel?",
            answer: "Rama Natha must have felt shocked, disappointed, and angry, thinking he had been cheated and had wasted six precious years of his life."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "long",
        question: "What did the sage ask Rama Natha to do to make the magic potion?",
        answer: "The sage asked Rama Natha to plant banana plants, water and look after them himself, and collect five litres of winter morning dew from the leaves with his own hands. Once he stored five litres in a bottle, he had to bring it to the sage to chant magic words over it."
      },
      {
        n: 2, type: "long",
        question: "Why did the sage ask Rama Natha to do everything himself?",
        answer: "The sage wanted Rama Natha to stop being lazy and work on his neglected land with his own hands. Doing the work himself would make him turn his empty fields into a rich plantation and learn that hard work is the true secret of wealth."
      },
      {
        n: 3, type: "long",
        question: "How could Rama Natha have a big banana plantation after six years?",
        answer: "Winter lasts only a few months, so to collect five litres of dew he needed many banana leaves. Rama Natha cleared his large empty fields and kept planting more and more rows of banana plants year after year, tending them with great care until he had a huge banana plantation."
      },
      {
        n: 4, type: "long",
        question: "How did the sage make Rama Natha believe that there is no magic potion?",
        answer: "When the dew failed to turn the copper vessel into gold, the sage called Madhumati forward with a big box filled with shining gold coins. He explained that the coins came from selling the bananas grown through Rama Natha's hard work and Madhumati's efforts, proving that hard work—not magic—created the wealth."
      },
      {
        n: 5, type: "table",
        question: "Fill in the 'before' and 'after' table about Rama Natha.",
        columns: ["What he did before meeting the sage", "What he did after meeting the sage"],
        rows: [
          ["(i) ______", "(i) ______"],
          ["(ii) ______", "(ii) ______"]
        ],
        answer: [
          ["(i) He did not look after his large tracts of land and left his fields empty.", "(i) He cleaned his large fields and planted rows and rows of banana plants."],
          ["(ii) He wasted his time and money searching for a magic potion and getting cheated by people.", "(ii) He tended his plantation carefully, collected dew for six years, and worked even harder after learning the value of hard work."]
        ]
      }
    ]
  }
];
