export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "The poet says, 'With special friends I feel I'm blessed'. Select the words that are similar to the meaning of being blessed, from those given below.",
    items: [
      {
        n: 1, type: "short",
        wordBox: ["excited", "grateful", "understood", "thankful", "relaxed"],
        question: "Select the words that are similar to the meaning of being blessed.",
        answer: "**grateful** and **thankful**"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Good friends have a lot of qualities. Let us list some.",
    items: [
      {
        n: 1, type: "short",
        question: "Complete the quality words: loyal, h e __ __ f __ l, k __ __ d, c __ __ i n g, h o __ __ __ t",
        answer: "**loyal**, **helpful**, **kind**, **caring**, **honest**"
      },
      {
        n: 2,
        question: "Now, fill in the blanks with the words you just listed above.",
        parts: [
          { label: "1", type: "fill", question: "My friend is always ______ to me even when I make a mistake.", answer: "**kind**" },
          { label: "2", type: "fill", question: "My friend shares things with me. She is very ______.", answer: "**helpful**" },
          { label: "3", type: "fill", question: "My friend is ______ because he always supports me.", answer: "**loyal**" },
          { label: "4", type: "fill", question: "My friend never lies. She is an ______ person.", answer: "**honest**" },
          { label: "5", type: "fill", question: "My friend and I believe in ______ for each other.", answer: "**caring**" }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Think of any three of your friends. Write three sentences on why you like each one of them.",
    items: [
      {
        n: 1, type: "activity",
        question: "Write three sentences on why you like each of three friends.",
        answer: [
          "*(Personal answer - sample.)*",
          "1. I like **Riya** because she is honest, always shares her lunch with me, and helps me understand difficult maths sums.",
          "2. I like **Dev** because he is cheerful, plays fairly during sports, and makes everyone laugh when we feel tired.",
          "3. I like **Sana** because she is a patient listener, never judges anyone, and encourages me before every competition."
        ]
      }
    ]
  }
];
