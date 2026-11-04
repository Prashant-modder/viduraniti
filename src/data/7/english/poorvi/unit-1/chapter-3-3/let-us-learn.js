export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Sensory words are descriptive - they describe how we experience the world: how we see, hear, smell, taste or feel something. Complete the table with sensory words from the text in Column 2 for the five senses in Column 1. Add new words in Column 3.",
    items: [
      {
        n: 1, type: "table",
        question: "Complete the table of sensory words.",
        columns: ["Column 1", "Column 2 (from the text)", "Column 3 (new words)"],
        rows: [
          ["What you see", "panorama", "______"],
          ["What you hear", "music", "______"],
          ["What you smell", "perfume", "______"],
          ["What you taste", "relish", "______"],
          ["What you feel", "rough", "______"]
        ],
        answer: [
          ["What you see", "panorama (also: glimpse, outline, dawn)", "colourful, sparkling, glowing, dazzling"],
          ["What you hear", "music (also: song, strains)", "chirping, whisper, thunder, tinkling"],
          ["What you smell", "perfume (also: fragrance)", "aroma, fresh, musty, smoky"],
          ["What you taste", "relish (also: morsel)", "sweet, sour, spicy, bitter"],
          ["What you feel", "rough (also: smooth, shaggy, delicate)", "soft, cool, prickly, slippery"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the following sentences from the text and underline the verbs: 'I should divide the period into three parts.' 'On the first day, I should want to see...' 'The next day I should arise with the dawn...' 'I should behold with awe...' The words you have underlined are a combination of two verbs. In each of these sentences, 'should' is the modal verb (suggestion), and the second verb (divide, want, arise, behold) is the main verb.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the modal verb and the main verb in each sentence.",
        columns: ["Sentence", "Modal verb", "Main verb"],
        rows: [
          ["I should divide the period into three parts.", "______", "______"],
          ["On the first day, I should want to see...", "______", "______"],
          ["The next day I should arise with the dawn...", "______", "______"],
          ["I should behold with awe...", "______", "______"]
        ],
        answer: [
          ["I should divide the period into three parts.", "should", "divide"],
          ["On the first day, I should want to see...", "should", "want (to see)"],
          ["The next day I should arise with the dawn...", "should", "arise"],
          ["I should behold with awe...", "should", "behold"]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Modal verbs are auxiliary verbs that express necessity, possibility, permission or ability. They are used before the main verb. Common modal verbs include can, could, may, might, shall, should, will, would, must and ought to. Identify the modal verbs in the following sentences and choose the functions they express from the box.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["possibility", "necessity", "polite request", "ability", "moral obligation"],
        question: "Identify the modal verb and its function.",
        columns: ["Sentence", "Modal verb", "Function"],
        rows: [
          ["1. You can learn a lot from this experience.", "______", "______"],
          ["2. They might arrive late due to traffic.", "______", "______"],
          ["3. She must finish her homework before dinner.", "______", "______"],
          ["4. They ought to apologise for their mistake.", "______", "______"],
          ["5. He would like to have some lassi, please.", "______", "______"]
        ],
        answer: [
          ["1. You can learn a lot from this experience.", "can", "ability"],
          ["2. They might arrive late due to traffic.", "might", "possibility"],
          ["3. She must finish her homework before dinner.", "must", "necessity"],
          ["4. They ought to apologise for their mistake.", "ought to", "moral obligation"],
          ["5. He would like to have some lassi, please.", "would", "polite request"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the situations in Column 1 and functions in Column 2. Fill in the blanks in the sentences in Column 4 with appropriate modal verbs from Column 3. After filling in the blanks, explain the function of each modal verb you used to your classmates and the teacher.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["can", "could", "may", "might", "must", "ought to", "shall", "should", "will", "would"],
        question: "Fill in the blanks with suitable modal verbs.",
        columns: ["Situation", "Function", "Sentence"],
        rows: [
          ["1. You want to leave work early.", "permission", "(i) ______ I leave early today if I finish all my tasks?"],
          ["2. You have an important deadline tomorrow.", "obligation", "(ii) I ______ finish this report by tomorrow."],
          ["3. Your friend is thinking whether to join Art class.", "advice", "(iii) You ______ consider all the pros and cons before making a decision."],
          ["4. There are dark clouds in the sky.", "possibility", "(iv) It ______ rain later today."],
          ["5. Asking someone to pass the salt at the dinner table", "polite request", "(v) ______ you pass the salt, please?"],
          ["6. Advising someone to apologise for a mistake", "moral obligation", "(vi) You ______ apologise for the mistake you made."],
          ["7. Deciding where to go for picnic", "suggestion", "(vii) We ______ go to any park nearby for picnic."]
        ],
        answer: [
          ["1. You want to leave work early.", "permission", "(i) **May** (or Can/Could) I leave early today if I finish all my tasks?"],
          ["2. You have an important deadline tomorrow.", "obligation", "(ii) I **must** finish this report by tomorrow."],
          ["3. Your friend is thinking whether to join Art class.", "advice", "(iii) You **should** consider all the pros and cons before making a decision."],
          ["4. There are dark clouds in the sky.", "possibility", "(iv) It **might** (or may) rain later today."],
          ["5. Asking someone to pass the salt at the dinner table", "polite request", "(v) **Could** (or Would/Can) you pass the salt, please?"],
          ["6. Advising someone to apologise for a mistake", "moral obligation", "(vi) You **ought to** apologise for the mistake you made."],
          ["7. Deciding where to go for picnic", "suggestion", "(vii) We **could** (or can/shall) go to any park nearby for picnic."]
        ]
      }
    ]
  }
];
