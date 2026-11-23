export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "The grid given below has the antonyms of the words from the text. Locate these words in the grid horizontally, vertically and diagonally. One example has been done for you: bent - STRAIGHT. You may refer to a dictionary.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["firm", "meek", "merry", "kind", "anxious", "bent"],
        question: "Write the antonym of each word and say where it is in the grid.",
        columns: ["Word", "Antonym", "Where in the grid"],
        rows: [
          ["firm", "______", "______"],
          ["meek", "______", "______"],
          ["merry", "______", "______"],
          ["kind", "______", "______"],
          ["anxious", "______", "______"],
          ["bent", "STRAIGHT", "last row, left to right (example)"]
        ],
        answer: [
          ["firm", "SOFT", "diagonally, going up and to the right from the S in row 8 (S-O-F-T)"],
          ["meek", "BOLD", "down column 3, from row 4 (B-O-L-D)"],
          ["merry", "SAD", "down column 8, from row 4 (S-A-D)"],
          ["kind", "RUDE", "down column 4, from row 2 (R-U-D-E)"],
          ["anxious", "CALM", "down column 1, from row 3 (C-A-L-M)"],
          ["bent", "STRAIGHT", "last row, left to right (example)"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the words from the text given in Column 1 with the underlined phrases in Column 2.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the words with the phrases.",
        left: ["hastened", "heeded", "stir", "lend", "piled", "offered"],
        right: [
          "The mother heard the baby move slightly in the cradle at night.",
          "It is our duty to give support to the poor.",
          "The students worked quickly to complete the project and submit it on time.",
          "All the boxes were kept in a heap at one place.",
          "They came forward to help us when we were in need.",
          "The stranded people were brought to safety because they paid attention to our advice."
        ],
        answer: ["C", "F", "A", "B", "D", "E"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "In the poem, the poet uses the idiom 'lend a hand' which means 'help somebody'. Some more idioms using 'hand' are given in Column 1. Match these idioms with their meanings in Column 2. You may refer to a dictionary.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the idioms with their meanings.",
        left: ["get out of hand", "try your hand at something", "give somebody a free hand", "give somebody a big hand", "work hand in hand", "have your hands full"],
        right: [
          "do something new",
          "applaud somebody",
          "work together",
          "become difficult to control",
          "be very busy",
          "allow somebody to do something with full freedom"
        ],
        answer: ["D", "A", "F", "B", "C", "E"]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Complete the following analogy by filling in the blanks with the correct words from the poem.",
    items: [
      {
        n: 1, type: "table",
        question: "Complete each analogy.",
        columns: ["Analogy", "Answer"],
        rows: [
          ["1. ______ : winter :: heat : summer", "______"],
          ["2. hurt : ______ :: old : aged", "______"],
          ["3. whispered : shouted :: humble : ______", "______"],
          ["4. eyes : ______ :: legs : walk", "______"],
          ["5. having a lot of money : wealthy :: densely packed people : ______", "______"]
        ],
        answer: [
          ["1. ___ : winter :: heat : summer", "chill (cold is to winter as heat is to summer)"],
          ["2. hurt : ___ :: old : aged", "harm ('without hurt or harm' - they mean the same, like old and aged)"],
          ["3. whispered : shouted :: humble : ___", "proud (opposites; the poem says the boy was 'proud')"],
          ["4. eyes : ___ :: legs : walk", "see (eyes are used to see, as legs are used to walk; the poem has 'glance')"],
          ["5. having a lot of money : wealthy :: densely packed people : ___", "crowded (the poem uses 'throng' and 'crowd')"]
        ]
      },
      {
        n: 2, type: "short",
        question: "'Lest the carriage wheels or the horses' feet / Should crowd her down in the slippery street.' What does 'lest' mean? Use it in a sentence.",
        answer: "'Lest' is a conjunction meaning 'to prevent something bad from happening' - it can be replaced with 'just in case'. *Example:* I wrote the address down lest I forget it (= just in case I forget it)."
      }
    ]
  }
];
