export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Study these words from the text. Put the compound words given above in their trees. (These words are known as compound words. There are three types of compound words, based on how the words are separated: Open compound words: spaces between the words. Closed compound words: no spaces between the words. Hyphenated compound words: hyphens between the words.) You may add some more words:",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/compound-trees.png", alt: "Three tree outlines labelled Open compound words, Closed compound words, and Hyphenated compound words" },
        wordBox: ["something", "well known", "childhood", "neem oil", "grandmother", "well trained", "cleanliness-parting", "seed powder", "thought-provoking"],
        question: "Sort the compound words into Open, Closed, and Hyphenated compound words (and add a few more examples).",
        columns: ["Open compound words", "Closed compound words", "Hyphenated compound words"],
        rows: [
          ["______", "______", "______"],
          ["______", "______", "______"],
          ["______", "______", "______"],
          ["______", "______", "______"]
        ],
        answer: [
          ["well known", "something", "cleanliness-parting"],
          ["neem oil", "childhood", "thought-provoking"],
          ["well trained", "grandmother", "*(added)* cost-effective"],
          ["seed powder *(added: ice cream)*", "*(added)* toothpaste, courtyard", "*(added)* well-known, kind-hearted"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Words that tell us what a person is doing are called verbs. In the table given below, match the verbs in the first column showing action in the present to verbs in the second column showing action in the past. Make a sentence with any one form of the verb. One has been done for you.",
    items: [
      {
        n: 1, type: "table",
        question: "Match the present and past forms of each verb and write a sentence.",
        columns: ["Present", "Past", "Answer", "Sentence"],
        rows: [
          ["1. become", "(i) made", "1. (iv)", "I want to become a teacher when I grow up."],
          ["2. find", "(ii) gave", "______", "______"],
          ["3. make", "(iii) told", "______", "______"],
          ["4. discover", "(iv) became", "______", "______"],
          ["5. tell", "(v) found", "______", "______"],
          ["6. give", "(vi) discovered", "______", "______"]
        ],
        answer: [
          ["1. become", "(i) made", "1. (iv) became", "I want to become a teacher when I grow up."],
          ["2. find", "(ii) gave", "2. (v) found", "Amber found many interesting facts about the neem tree."],
          ["3. make", "(iii) told", "3. (i) made", "Neem oil is used to make soaps and toothpaste."],
          ["4. discover", "(iv) became", "4. (vi) discovered", "Scientists discovered many medicinal uses of neem."],
          ["5. tell", "(v) found", "5. (iii) told", "Neem Baba told Amber the story of his name."],
          ["6. give", "(vi) discovered", "6. (ii) gave", "The Iranians gave the tree the name 'Neem'."]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Amber speaks to Neem Baba as if speaking to a person. This figure of speech is called personification. Let us look at some more examples:\n• The leaves whispered in the wind.\n• The flowers danced merrily in the breeze.\nNow, discuss it with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Discuss personification with your classmates and teacher and share more examples.",
        answer: [
          "*(Class discussion - sample examples of personification.)*",
          "- The cool shade of the old banyan tree **welcomed** the tired travellers.",
          "- The morning sun **smiled** gently over the green fields.",
          "- The angry thunder **roared** across the dark clouds."
        ]
      }
    ]
  }
];
