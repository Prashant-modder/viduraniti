export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the poem again. Identify the main idea of each stanza. There are two extra sentences are given.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the matching stanza number (Stanza 1-4) beside the four main ideas (two sentences are extra).",
        columns: ["Sentence", "Stanza"],
        rows: [
          ["1. The bird steps out into the world.", "______"],
          ["2. The bird lived happily in a small world.", "______"],
          ["3. The bird becomes blind due to leaves.", "______"],
          ["4. The bird flies away as an adult.", "______"],
          ["5. The bird is unhappy with the straw nest.", "______"],
          ["6. The bird lived in a cosy nest with its mother.", "______"]
        ],
        answer: [
          ["1. The bird steps out into the world.", "Stanza 3"],
          ["2. The bird lived happily in a small world.", "Stanza 1"],
          ["3. The bird becomes blind due to leaves.", "*(Extra sentence — not used)*"],
          ["4. The bird flies away as an adult.", "Stanza 4"],
          ["5. The bird is unhappy with the straw nest.", "*(Extra sentence — not used)*"],
          ["6. The bird lived in a cosy nest with its mother.", "Stanza 2"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Look at the pictures 1-4 and write the matching line from the poem for each.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/poem-stages.png", alt: "Four numbered illustrations: 1 a pale oval egg, 2 a mother bird and chicks in a straw nest, 3 a young bird perched on a leafy branch, 4 a bird flying away from the branch" },
        question: "Write the matching line from the poem for each picture (1-4).",
        columns: ["Picture", "Matching line from the poem"],
        rows: [
          ["1. (Pale egg)", "______"],
          ["2. (Straw nest with mother)", "______"],
          ["3. (Bird among green leaves)", "______"],
          ["4. (Bird flying beyond the tree)", "______"]
        ],
        answer: [
          ["1. (Pale egg)", "I thought the world was small and round, / And made of pale, blue shell."],
          ["2. (Straw nest with mother)", "I thought the world was made of straw, / And nestled by my mother."],
          ["3. (Bird among green leaves)", "I said the world is made of leaves,"],
          ["4. (Bird flying beyond the tree)", "At length I flew beyond the tree,"]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following with a word from the poem and check the answers with your partner.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "What was the shape of the bird's first house? _ O _ _ _", answer: "**ROUND**" },
          { label: "2", type: "fill", question: "What was the bird's second nest made of? _ _ R _ _", answer: "**STRAW**" },
          { label: "3", type: "fill", question: "What did the bird see when it came out of its nest? L _ _ _ E _", answer: "**LEAVES**" },
          { label: "4", type: "fill", question: "What did the bird do at the end? _ _ _ W", answer: "**FLEW**" }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Now, recite the poem aloud along with your teacher and classmates.",
    items: [
      {
        n: 1, type: "activity",
        question: "Recite the poem aloud along with your teacher and classmates.",
        answer: "*(Class recitation activity.)* Read smoothly with rhythm and gentle pauses at commas, emphasising the rhyming pairs (well/shell, other/mother, find/blind, labours/neighbours) and expressing wonder in the last stanza."
      }
    ]
  }
];
