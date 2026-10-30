export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Sensory Words: Complete the table with sensory words from the text in Column 2. Add new words in Column 3.",
    items: [
      {
        n: 1, type: "match", question: "Fill in the table.",
        left: ["What you see", "What you hear", "What you smell", "What you taste", "What you feel"],
        right: ["Column 2 (From Text)", "Column 3 (New Words)"],
        answer: [
          "**What you see**: panorama -> *New: vibrant, blinding, gloomy*",
          "**What you hear**: music -> *New: echoing, buzzing, deafening*",
          "**What you smell**: perfume -> *New: fragrant, pungent, earthy*",
          "**What you taste**: relish (or morsel) -> *New: sweet, bitter, spicy*",
          "**What you feel**: rough (or smooth/shaggy) -> *New: silky, coarse, prickly*"
        ]
      }
    ]
  },
  {
    roman: "II & III",
    instruction: "Identify the modal verbs in the following sentences. Choose the functions they express (possibility, necessity, polite request, ability, moral obligation).",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "short", question: "You can learn a lot from this experience.", answer: "**can** -> **ability** (or possibility)" },
          { label: "2", type: "short", question: "They might arrive late due to traffic.", answer: "**might** -> **possibility**" },
          { label: "3", type: "short", question: "She must finish her homework before dinner.", answer: "**must** -> **necessity**" },
          { label: "4", type: "short", question: "They ought to apologise for their mistake.", answer: "**ought to** -> **moral obligation**" },
          { label: "5", type: "short", question: "He would like to have some lassi, please.", answer: "**would** -> **polite request**" }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Fill in the blanks in Column 4 with appropriate modal verbs from Column 3.",
    items: [
      {
        n: 1, type: "blanks", passage: "Fill in the modal verbs based on the functions in Column 2.",
        answer: [
          "(i) **May** (or Can) I leave early today if I finish all my tasks? *(Permission)*",
          "(ii) I **must** (or have to) finish this by tomorrow. *(Obligation/Necessity)*",
          "(iii) You **should** (or ought to) consider all the pros and cons... *(Advice)*",
          "(iv) It **might** (or may) rain later today. *(Possibility)*",
          "(v) **Could** (or Would) you pass the salt, please? *(Polite request)*",
          "(vi) You **ought to** (or should) apologise for the mistake you made. *(Moral obligation)*",
          "(vii) We **shall** (or could) go to any park nearby for picnic. *(Suggestion)*"
        ]
      }
    ]
  }
];
