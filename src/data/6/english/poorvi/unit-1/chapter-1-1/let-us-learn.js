export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Complete the vocabulary and grammar exercises below.",
    items: [
      {
        n: 1, type: "blanks",
        wordBox: ["promised", "spending", "cheated", "luck", "remember", "huge", "difficult", "market"],
        question: "Read the following words from the story. Use the words correctly to complete the paragraph given below. There are two extra words in the box that you do not need.",
        passage: `There was a farmer who had a ______ coconut plantation. He worked hard and did not depend on ______. Every day was ______ but he did not give up. One day, a man bought a bag of coconuts from him, and ______ to pay him the money the next day. Days passed and the man did not pay him anything. The farmer felt ______. About two months later, he met the same man and asked him about his money. The man said, "Oh! I had forgotten. Now, I ______ buying coconuts from you." And he paid the money.`,
        answer: [
          "1. **huge**",
          "2. **luck**",
          "3. **difficult**",
          "4. **promised**",
          "5. **cheated**",
          "6. **remember**",
          "*(Extra words not needed: spending, market.)*"
        ]
      },
      {
        n: 2, type: "table",
        question: "Read the words from the story in Column A. Read the new words in Column B. Complete the meanings of the words given in Column B. Meanings of some words are given below. (The words given in each row of the table above have the same sounds but different spellings and meanings. Such words are called homophones.)",
        columns: ["Column A", "Column B", "Meaning of words in Column B"],
        rows: [
          ["I", "eye", "______"],
          ["your", "you're", "short form of 'you are'"],
          ["dew", "due", "happening at some time in the future"],
          ["son", "sun", "______"],
          ["one", "won", "past tense of win"],
          ["ate", "eight", "______"],
          ["see", "sea", "______"]
        ],
        answer: [
          ["I", "eye", "the organ of sight in the body"],
          ["your", "you're", "short form of 'you are'"],
          ["dew", "due", "happening at some time in the future"],
          ["son", "sun", "the star that gives light and heat to the earth"],
          ["one", "won", "past tense of win"],
          ["ate", "eight", "the number 8"],
          ["see", "sea", "a large body of salty water"]
        ]
      },
      {
        n: 3, type: "activity",
        question: "Choose four pairs of homophones from the table above, and for each pair write a sentence that uses both homophones in the same sentence. Check your answers by sharing them with your teacher and classmates. An example has been given below:",
        example: "I ate eight bananas for breakfast today.",
        answer: [
          "*(Sample sentences.)*",
          "1. **I / eye:** **I** got a speck of dust in my left **eye**.",
          "2. **son / sun:** The farmer's **son** worked under the bright morning **sun**.",
          "3. **one / won:** Our team **won** the match by just **one** run.",
          "4. **see / sea:** From the lighthouse, we could **see** the deep blue **sea**."
        ]
      },
      {
        n: 4, type: "table",
        wordBox: ["because", "before", "as soon as", "as"],
        question: "Match the phrases in Column A with the phrases in Column B. Use the connecting words given in the middle column to make meaningful sentences. Now, write the new sentences in your notebook.",
        columns: ["Column A", "Connecting Words", "Column B"],
        rows: [
          ["The children submitted their work (When?)", "because", "the bell rang."],
          ["He did not want to try rock climbing (Why?)", "before", "there was a traffic jam."],
          ["The children ran towards the gate (When?)", "as soon as", "the deadline."],
          ["Nitin was late to school today (Why?)", "as", "of his fear of heights."]
        ],
        answer: [
          ["The children submitted their work", "before", "the deadline. -> **The children submitted their work before the deadline.**"],
          ["He did not want to try rock climbing", "because", "of his fear of heights. -> **He did not want to try rock climbing because of his fear of heights.**"],
          ["The children ran towards the gate", "as soon as", "the bell rang. -> **The children ran towards the gate as soon as the bell rang.**"],
          ["Nitin was late to school today", "as", "there was a traffic jam. -> **Nitin was late to school today as there was a traffic jam.**"]
        ]
      },
      {
        n: 5, type: "activity",
        question: "Here are two sentences with letter 'b'. Read them slowly the first time. As you read them a few more times, read them faster each time. 'Bunty bhaiya bought a big bunch of bananas. A big bunch of bananas was bought by Bunty bhaiya.' Now, try to create a tongue twister on your own and share it with your peers.",
        answer: [
          "*(Speaking and creative activity - sample tongue twisters.)*",
          "- **M**adhumati **m**ade **m**any **m**arkets **m**erry with **m**angoes.",
          "- **R**ama **r**egularly **r**aised **r**ows of **r**ipe **r**ed **r**adishes.",
          "- **S**even **s**miling **s**ages **s**ang **s**oft **s**ongs by the **s**ea."
        ]
      }
    ]
  }
];
