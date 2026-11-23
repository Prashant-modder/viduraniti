export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Crossword"] };

export const sections = [
  {
    roman: "I",
    instruction: `The verb 'draw' has different meanings in different contexts. Match the sentences in Column 1 with their appropriate meanings in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each use of 'draw' with its meaning.",
        left: [
          "His speech drew loud applause from the audience.",
          "The event will draw huge crowds from all neighbouring places.",
          "Plants draw water from the soil.",
          "I reached the station when the train was drawing into the station.",
          "The room was dark, so she drew the curtains to let the sunlight in.",
          "He drew a piece of paper from the folder."
        ],
        right: ["opened", "pulled out", "got a reaction", "attract", "moving", "absorb"],
        answer: ["C", "D", "F", "E", "A", "B"]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Fill in the crossword. Clues have been given below. You will find the words in the poem.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/crossword.png", alt: "Crossword grid with numbered clues" },
        question: `Across: 2. the fastest pace of a horse; 4. happen fast; 7. speaks very softly; 10. take hold of (something) and quickly remove it from its place; 11. having a lot of money; rich; 12. take hold of something suddenly and forcibly. Down: 1. runs away from a place; 3. possessing a great deal of strength or power; 5. a deep loud shout in pain or anger; 6. to act according to rules; 8. moved in a continuous flow in a specified direction; 9. a win after overcoming an enemy`,
        answer: [
          "**Across:** 2. GALLOP   4. SWIFT   7. WHISPERS   10. PLUCK   11. WEALTHY   12. SEIZE",
          "**Down:** 1. FLEES   3. MIGHTY   5. BELLOW   6. COMPLY   8. STREAMED   9. VICTORY"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `There are certain expressions that convey a sudden feeling or reaction. They can be used to express a variety of emotions and thoughts. Example: ... he whispers. "Hush!" ('Hush' denotes the act of silencing someone). Now, match the expressions in Column 1 with what emotions or reactions they convey, in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each expression with the emotion or reaction it conveys.",
        left: ["Phew!", "Eek!", "Ouch!", "Yippee!", "Whoa!", "Oops!", "Hey!"],
        right: ["surprise", "pain", "mistake", "attract attention", "relief", "delight", "alarm"],
        answer: ["E", "G", "B", "F", "A", "C", "D"]
      },
      {
        n: 2, type: "activity",
        question: "Now, create sentences using any five expressions from Column 1.",
        answer: [
          "*(Sample sentences.)*",
          "- **Phew!** I finished the paper just in time.",
          "- **Eek!** There is a lizard on the wall!",
          "- **Ouch!** I hit my toe against the table.",
          "- **Yippee!** We have a holiday tomorrow.",
          "- **Oops!** I spilled the milk."
        ]
      }
    ]
  }
];
