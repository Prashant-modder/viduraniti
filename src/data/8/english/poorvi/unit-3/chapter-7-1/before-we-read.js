export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Puzzle"] };

export const sections = [
  {
    roman: "I",
    instruction: `Work in pairs. Solve the crossword puzzle given below with the clues in the form of anagrams. Note: An anagram is a word or phrase that is made by rearranging the letters in a different order to make a new word or phrase. For example, 'Neat' is an anagram of 'a net'.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/crossword.png", alt: "Crossword grid with 13 numbered clues" },
        question: `Across: 3. Declare 6. Tucks 7. Heart 9. Felt 10. Sown 12. Sword 13. Evil. Down: 1. Aces 2. Read 4. Tool 5. Alps 6. Hooks 8. Mane 11. Loves`,
        answer: [
          "*(Puzzle - answers worked out from the grid.)*",
          "**Across:** 3. CLEARED   6. STUCK   7. EARTH   9. LEFT   10. OWNS   12. WORDS   13. LIVE",
          "**Down:** 1. CASE   2. DEAR   4. LOOT   5. PALS   6. SHOOK   8. NAME   11. SOLVE",
          "Notice that 1 Down spells **CASE** - the key word of the chapter title. (The two shaded squares carry no clue.)"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Work in pairs. Match the different meanings of 'case' in Column 2 with the correct usage in the sentences in Column 1. Share your answers with your classmates and teacher.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each use of 'case' with its meaning.",
        left: [
          "Lalit said that he could not sing but that was not the case as he sang melodiously later.",
          "The lawyer was waiting for the case to be taken up in court.",
          "My pencil case is a gift from my grandmother.",
          "The subject of a formal letter is written in title case."
        ],
        right: ["writing format", "container", "situation", "matter"],
        answer: ["C", "D", "B", "A"]
      },
      {
        n: 2, type: "short",
        question: `Now, read the following text and find out which 'case' the title refers to.`,
        answer: "The title uses 'case' in the sense of a **matter** - a crime or mystery that the police are investigating (here, the missing jewellery) - and 'the fifth word' is the clue that solves it."
      }
    ]
  }
];
