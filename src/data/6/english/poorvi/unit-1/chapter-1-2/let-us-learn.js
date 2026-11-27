export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Poetic devices"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write the rhyming words from the poem. One has been done for you.",
    items: [
      {
        n: 1, type: "table",
        question: "Complete the rhyming pairs for each stanza.",
        columns: ["Stanza 1", "Stanza 2", "Stanza 3", "Stanza 4"],
        rows: [
          ["(i) limb-him", "(i) word-______", "(i) joke-______", "(i) know-______"],
          ["(ii) ______", "(ii) ______", "(ii) ______", "(ii) ______"]
        ],
        answer: [
          ["(i) limb-him", "(i) word-bird", "(i) joke-croak", "(i) know-glow"],
          ["(ii) beak-seek", "(ii) sing-King", "(ii) pride-eyed", "(ii) unwise-surprise"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Study the underlined words in the poem. 1. For the Raven held in his great big beak. The words 'big' and 'beak' begin with the same /b/ sound. 2. The song of sweet birds. (Alliteration is a repetition of consonant sounds at the beginning of words. When two or more words together, begin with the same sound, it is called alliteration.)",
    items: [
      {
        n: 1, type: "short",
        question: "Now, pick another example of alliteration from Stanza 2.",
        answer: "**'woods would'** (both words begin with the same /w/ sound, in the line *'The birds of these woods would call you King.'*; note also the repeated /s/ sound in *Said / Sir / Such / sing* and /k/ sound in *call ... King*)."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Choose the correct opposites from the box given below and complete the table. There are two extra words that you will not need.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["wise", "happy", "humility", "flew", "remembered", "notice", "dim", "cried", "silly"],
        question: "Complete the table with the correct opposites from the box.",
        columns: ["Words", "Opposites"],
        rows: [
          ["1. perched", "______"],
          ["2. forgot", "______"],
          ["3. foolish", "______"],
          ["4. pride", "______"],
          ["5. laughed", "______"],
          ["6. ignore", "______"],
          ["7. glow", "______"]
        ],
        answer: [
          ["1. perched", "flew"],
          ["2. forgot", "remembered"],
          ["3. foolish", "wise"],
          ["4. pride", "humility"],
          ["5. laughed", "cried"],
          ["6. ignore", "notice"],
          ["7. glow", "dim"]
        ]
      },
      {
        n: 2, type: "activity",
        question: "Use any four words from the table given above to make sentences of your own.",
        answer: [
          "*(Sample sentences.)*",
          "1. **perched:** A colourful kingfisher **perched** quietly on a low branch near the pond.",
          "2. **remembered:** Meera **remembered** to pack her geometry box before leaving for school.",
          "3. **wise:** A **wise** person thinks carefully before believing flattery.",
          "4. **humility:** Even after winning first prize, he spoke with great **humility**."
        ]
      }
    ]
  }
];
