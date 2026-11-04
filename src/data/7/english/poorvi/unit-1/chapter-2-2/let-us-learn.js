export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write the opposites of the following words taken from the poem.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the opposite of each word.",
        columns: ["Word", "Opposite"],
        rows: [["1. up", "______"], ["2. fast", "______"], ["3. glad", "______"], ["4. win", "______"], ["5. succeed", "______"]],
        answer: [["1. up", "down"], ["2. fast", "slow"], ["3. glad", "sad"], ["4. win", "lose"], ["5. succeed", "fail"]]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the correct meaning of the underlined words in the following sentences from the box. Frame sentences of your own for these words.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["1. work very hard and/or for a long time", "2. prepared themselves for something difficult", "3. an attempt to do something new or difficult", "4. to try very hard to achieve something"],
        question: "Match the underlined word to its meaning, then write your own sentence.",
        columns: ["Sentence", "Meaning (1-4)"],
        rows: [
          ["(i) Please make every endeavour to arrive on time.", "______"],
          ["(ii) Ants toil tirelessly to save food for rainy season.", "______"],
          ["(iii) We encourage all students to strive to do their best.", "______"],
          ["(iv) The sailors braced themselves against the strong wind.", "______"]
        ],
        answer: [
          ["(i) Please make every endeavour to arrive on time.", "3 - an attempt to do something new or difficult"],
          ["(ii) Ants toil tirelessly to save food for rainy season.", "1 - work very hard and/or for a long time"],
          ["(iii) We encourage all students to strive to do their best.", "4 - to try very hard to achieve something"],
          ["(iv) The sailors braced themselves against the strong wind.", "2 - prepared themselves for something difficult"]
        ]
      },
      {
        n: 2, type: "activity",
        question: "Frame sentences of your own using endeavour, toil, strive and braced.",
        answer: [
          "*(Sample sentences.)*",
          "- Our team made a great **endeavour** to clean the park.",
          "- Farmers **toil** in the fields from dawn to dusk.",
          "- I will **strive** to improve my handwriting.",
          "- The players **braced** themselves for the big match."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The poem uses words that show distance. For example: a long way up, inch by inch, higher and higher, half-yard higher. Classify the words or phrases in the box based on the distance (far or near). You may take the help of a dictionary.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["proximity", "middle of nowhere", "vicinity", "adjacent", "remoteness", "yonder", "afar", "a stone's throw", "light year", "hairline", "farther"],
        question: "Write each word or phrase under Far or Near.",
        columns: ["Far", "Near"],
        rows: [["______", "______"]],
        answer: [[
          "remoteness, middle of nowhere, yonder, afar, light year, farther",
          "proximity, vicinity, adjacent, a stone's throw, hairline"
        ]]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the following line from the poem: 'Twas a delicate thread it had to tread. Now repeat the line five to six times. Are you able to say it clearly? Create more tongue twisters of your own.",
    items: [
      {
        n: 1, type: "activity",
        question: "Say the line five to six times and create tongue twisters of your own.",
        answer: [
          "*(Speaking activity - samples.)*",
          "- Silly spiders spin silken strings swiftly.",
          "- Brave Bruce bravely braced his brain for another brave try.",
          "- Tiny tigers tried to tie ten tight ties.",
          "Tip: start slowly, say each word clearly, and then speed up."
        ]
      }
    ]
  }
];
