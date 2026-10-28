export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Complete the sentences by filling in the noun form of the textual words given in the brackets.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "Some word games need a lot of thought and ______ (deduce)", answer: "**deduction**" },
          { label: "2", type: "fill", question: "We need to make close ______ of animals... (observe)", answer: "**observation**" },
          { label: "3", type: "fill", question: "A detailed ______ of the documents shows a lot of errors. (scrutinise)", answer: "**scrutiny**" },
          { label: "4", type: "fill", question: "You should not make any false ______ against anyone. (accuse)", answer: "**accusations**" },
          { label: "5", type: "fill", question: "She was given an award in ______ of her contribution to literature. (recognise)", answer: "**recognition**" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the expressions in Column 1 with their meanings in Column 2.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match the expressions with meanings.",
        left: ["1. with all our hearts", "2. to be precise", "3. gain an audience with", "4. catch his breath", "5. erupts in applause", "6. grand scheme of things", "7. taken aback", "8. more than meets the eye"],
        right: ["(i) surprised", "(ii) starts cheering together", "(iii) hidden information", "(iv) exact and accurate", "(v) meeting someone", "(vi) complete sincerity", "(vii) pause or rest", "(viii) overall plan"],
        answer: ["1-(vi)", "2-(iv)", "3-(v)", "4-(vii)", "5-(ii)", "6-(viii)", "7-(i)", "8-(iii)"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Match the different meanings of 'face' and 'bear' with the correct usage in the sentences.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match words with sentences based on context.",
        left: ["face (front part of head)", "face (positioned towards)", "face (deal with)", "face (surface of a thing)", "bear (tolerate)", "bear (accept)", "bear (large mammal)", "bear (produce)"],
        right: ["(i) turn to face father", "(ii) face of the clock", "(iii) round, smiling face", "(iv) face life's challenges", "(i) bear fruit", "(ii) spotted a bear", "(iii) bear responsibilities", "(iv) can't bear the sound"],
        answer: ["face: 1-(iii), 2-(i), 3-(iv), 4-(ii)", "bear: 1-(iv), 2-(iii), 3-(ii), 4-(i)"]
      }
    ]
  },
  {
    roman: "IV & V",
    instruction: "Modals and their functions. Fill in the blanks in the story.",
    items: [
      {
        n: 1,
        type: "blanks",
        passage: "An old man, known for his wisdom, lived in a small village. One day, a young boy asked him, 'How 1. ______ (ability) I become wise like you?' The old man smiled and said, 'Wisdom 2. ______ (necessity) be earned through patience. You 3. ______ (suggestion) listen, more than you speak.' The boy thought for a while and replied, 'It 4. ______ (weak possibility) take years, but I'll try.' The old man nodded. 'You 5. ______ (obligation) learn from your mistakes too. Wisdom 6. ______ (possibility) come slowly, but it always arrives for those who seek it.' The boy knew he 7. ______ (ability) become wise if he followed the old man's advice.",
        answer: ["1. can", "2. must (or needs to)", "3. should", "4. might", "5. must", "6. may", "7. could"]
      }
    ]
  }
];
