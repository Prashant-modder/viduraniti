export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Rhyming", "Adjectives"] };

export const sections = [
  {
    roman: "I",
    instruction: "Let us write some rhyming words. One has been done for you.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the rhyming words from each stanza of the poem and add a new rhyming word for each.",
        columns: ["Row", "Stanza 1", "Stanza 2", "Stanza 3", "Stanza 4"],
        rows: [
          ["Poem word 1", "well", "______", "______", "______"],
          ["Poem word 2", "shell", "______", "______", "______"],
          ["New rhyming word", "fell", "______", "______", "______"]
        ],
        answer: [
          ["Poem word 1", "well", "other", "find", "labours"],
          ["Poem word 2", "shell", "mother", "blind", "neighbours"],
          ["New rhyming word", "fell", "brother (or another)", "kind (or mind)", "favours (or harbours)"]
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Now, complete a new stanza with rhyming words at the end of each line.",
        passage: "I fly high and I fly low,\nBut one thing I surely k ______,\nWhenever I wish to rest,\nMy little nest is the ______t.",
        answer: [
          "1. **know** (rhymes with *low*)",
          "2. **best** (rhymes with *rest*)"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "The poet uses words like 'pale', 'blue', 'round', 'straw' and 'little' to describe the bird's nest. Read a few more describing words. Now, use the describing words given in the box to create six sentences based on the given picture.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/birdhouse.png", alt: "A small wooden birdhouse with a pointed red roof and round entrance hole hanging from a thin brown branch with green leaves" },
        wordBox: ["pointed", "green", "thin", "brown", "small", "wooden", "hanging", "round"],
        question: "Use the describing words in the box to create six sentences based on the picture.",
        answer: [
          "*(Sample sentences.)*",
          "1. A **small** bird is perched outside its cosy birdhouse.",
          "2. The birdhouse is a **wooden** shelter with a **pointed** red roof.",
          "3. It has a **round** entrance hole for the bird to hop inside.",
          "4. The **hanging** birdhouse is tied gently to a tree branch.",
          "5. It hangs from a **thin** **brown** branch high above the ground.",
          "6. Fresh **green** leaves grow brightly along the branch above the birdhouse."
        ]
      }
    ]
  }
];
