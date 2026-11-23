export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Recall a time you helped someone. Write two words describing the following. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "What were your feelings after you helped?",
        answer: "*(Personal answer - sample.)* **Happy** and **satisfied**."
      },
      {
        n: 2, type: "activity",
        question: "What might have been the feelings of the person whom you helped?",
        answer: "*(Personal answer - sample.)* **Grateful** and **relieved**."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Work in pairs. Read the words given below. Circle the words you would associate with an elderly person and underline the words you would associate with a school student. Share the reasons for your choices with your classmates and teacher.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["strong", "worried", "trembling", "hastening", "firm", "bent", "merry", "grey", "slow", "guide", "helpful"],
        question: "Sort the words.",
        columns: ["Elderly person (circle)", "School student (underline)"],
        rows: [["______", "______"]],
        answer: [[
          "worried, trembling, bent, grey, slow",
          "strong, hastening, firm, merry (and helpful, guide - these can describe anyone)"
        ]]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Read the lines: 'The woman was old and ragged and grey / And bent with the chill of the Winter's day.' Select the suitable meaning of 'ragged' as used in these lines. There are four other meanings given. Discuss with your classmates and teacher.",
    items: [
      {
        n: 1, type: "short",
        question: "Which meaning of 'ragged' fits these lines?",
        answer: "**Meaning 1: (of clothes) old and torn; shabby.** The woman is old and poor, so her clothes are shabby. The other meanings (an uneven edge, not smooth or well-prepared, very tired) do not fit a description of her clothes and appearance."
      }
    ]
  }
];
