export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write two words that come to your mind when you think of friendship.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/word-search-grid.png", alt: "An 11 by 11 word-search grid with HELPFUL circled as an example and seven other bold starting letters" },
        question: "Write two words that come to your mind when you think of friendship. 1. Now, find some more words that are related to friendship from the grid given below. You can search horizontally or vertically. There are eight words. One word has been marked as an example. The first letter of each word has been given in bold.",
        answer: [
          "*(Two personal words - sample: **trust** and **kindness**.)*",
          "",
          "**Eight friendship words in the grid:**",
          "- **Horizontal:** 1. **LAUGHTER** (Row 1, Col 1-8), 2. **HELPFUL** (Row 3, Col 2-8 — example), 3. **HOPE** (Row 5, Col 1-4), 4. **LOYAL** (Row 7, Col 2-6), 5. **LOVING** (Row 10, Col 1-6).",
          "- **Vertical:** 6. **CARING** (Col 5, Row 6-11), 7. **TRUST** (Col 8, Row 5-9), 8. **SUPPORT** (Col 11, Row 5-11)."
        ]
      },
      {
        n: 2, type: "table",
        question: "Fill in the blanks to complete the words, which mean the same as 'friend' or 'friends' with the help of the meanings.",
        columns: ["Meaning", "Word"],
        rows: [
          ["(i) a person with whom you do activities together", "p _ r _ n _ r"],
          ["(ii) an informal word for friends", "b _ _ d _ _ s"],
          ["(iii) a person who you spend a lot of time with", "c _ m p _ n _ o _"],
          ["(iv) children who are in the same class as you at school", "c l _ s _ m _ t _ s"]
        ],
        answer: [
          ["(i) a person with whom you do activities together", "partner"],
          ["(ii) an informal word for friends", "buddies"],
          ["(iii) a person who you spend a lot of time with", "companion"],
          ["(iv) children who are in the same class as you at school", "classmates"]
        ]
      },
      {
        n: 3, type: "activity",
        question: "There are so many words for a friend. What do you call 'a friend' in your own language?",
        answer: "*(Personal answer - samples across Indian languages.)* Hindi/Urdu: **dost**, **mitra**, **sakha**, **saheli**; Tamil: **nanban / thozhi**; Bengali: **bondhu**; Marathi: **mitra / maitrin**; Punjabi: **yaar / dost**; Malayalam: **suhruthu / koottukaran**."
      }
    ]
  }
];
