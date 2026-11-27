export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Discussion"] };

// Note on Section I item 2: The printed heading says "Circle the odd one", and item 2 asks
// "Who entered the house? guest, robber, Kotwal". At this point in the story (p. 22), only the
// robber has entered (and "robber" is also the unwelcome outsider compared to guest and Kotwal).

export const sections = [
  {
    roman: "I",
    instruction: "Circle the odd one.",
    items: [
      {
        n: 1, type: "short",
        question: "The characters are: husband, wife, children",
        answer: "**children** - only the husband and wife are present in the house; they do not have children."
      },
      {
        n: 2, type: "short",
        question: "Who entered the house? guest, robber, Kotwal",
        answer: "**robber** - at this stage of the story, it is the robber (thief) who has broken into the house."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Write whether True or False.",
    items: [
      {
        n: 1, type: "table",
        question: "Write whether True or False.",
        columns: ["Statement", "True / False"],
        rows: [
          ["1. The man tells his plan to his wife.", "______"],
          ["2. The thief wants to know where they kept their jewels.", "______"]
        ],
        answer: [
          ["1. The man tells his plan to his wife.", "True"],
          ["2. The thief wants to know where they kept their jewels.", "False - the thief wants to know where they keep their **money**."]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Discuss these questions as you read the story.",
    items: [
      {
        n: 1, type: "activity",
        question: "Along with your classmates, call out the name 'Rama'- softly, loudly and very loudly.",
        answer: "*(Class activity.)* Practise voice modulation together: whisper 'Rama!' softly (as if inside a room), call 'Rama!' louder (as if across a yard), and shout 'RAMA!' very loudly (as if calling someone down the street)."
      },
      {
        n: 2, type: "activity",
        question: "What do you think will happen next in the story?",
        answer: "*(Class discussion - sample answer.)* Rama, the village kotwal, will hear his name being called loudly, run to the couple's house, discover the thief hiding inside, and arrest him."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Work in pairs to match the words in Column A with the meanings in Column B. Check your answers by sharing them with your teacher and classmates.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the words in Column A with the meanings in Column B.",
        left: [
          "1. wonder",
          "2. yard",
          "3. chatter",
          "4. instead",
          "5. closely",
          "6. perhaps"
        ],
        right: [
          "(i) in place of someone or something",
          "(ii) carefully",
          "(iii) an area outside a building",
          "(iv) talk for a long time about unimportant things",
          "(v) maybe",
          "(vi) a feeling of surprise"
        ],
        answer: ["F", "C", "D", "A", "B", "E"]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Fill in the boxes with suitable words as you read the story. (RAMA TO THE RESCUE)",
    items: [
      {
        n: 1, type: "table",
        question: "Complete the story map for 'Rama to the Rescue'.",
        columns: ["Box", "Details from the story"],
        rows: [
          ["Main Characters", "______"],
          ["Setting", "______"],
          ["Other Characters", "______"],
          ["Problem", "______"],
          ["Solution", "______"]
        ],
        answer: [
          ["Main Characters", "The husband and his wife"],
          ["Setting", "A house in a village, late at night"],
          ["Other Characters", "The thief (robber) and Rama (the village kotwal)"],
          ["Problem", "A thief digs his way into the couple's house at night to steal their money."],
          ["Solution", "The couple cleverly pretends to discuss naming their child 'Rama' and calls out 'Rama!' louder and louder until Rama, the village kotwal, hears them, rushes to the house, and arrests the thief."]
        ]
      }
    ]
  }
];
