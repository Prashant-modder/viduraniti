export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 136): Anita and Toby the Martian.

export const sections = [
  {
    roman: "I",
    instruction: `You will listen to a conversation between Anita and Toby. Toby is a Martian and is stranded on Earth. He has become Anita's friend. As you listen, choose the true statements from 1–5 given below. (Transcript for the teacher on pg. 136)`,
    items: [
      {
        n: 1, type: "mcq",
        options: [`1. Toby misses his school.`, `2. Anita accepts Toby as her friend.`, `3. Anita asks Toby about one of his facial features.`, `4. Toby tells Anita that she had a banana for breakfast.`, `5. Toby shares that he can see much clearer with a closed eye.`],
        answer: [
          "**The true statements are 2 and 3.**",
          "- **1 is false:** Toby misses his people and home, not his school.",
          "- **2 is true:** Anita says she is happy to have him as her friend.",
          "- **3 is true:** Anita asks how he can see with only one eye.",
          "- **4 is false:** Toby says that Anita had an apple for breakfast.",
          "- **5 is false:** Toby says he can see even with his eye closed, not that he sees more clearly."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Listen to the conversation again and fill in the blanks with the exact words you hear.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: `Toby: I miss my _________________ and home.`, answer: "**people**" },
          { label: "2", type: "fill", question: `Toby: Well, we _________________ don't need to eat anything. We get our _________________ from the Sun.`, answer: "**Martians**, **energy**" },
          { label: "3", type: "fill", question: `Anita: Oh! Don't you ever feel like having ice creams and _________________?`, answer: "**chocolates**" },
          { label: "4", type: "fill", question: `Anita: Okay, tell me one thing. How are you able to see with only_________________ eye?`, answer: "**one**" },
          { label: "5", type: "fill", question: `Toby: I can see beyond mountains and _________________, woods and even _________________.`, answer: "**clouds**, **metals**" }
        ]
      }
    ]
  }
];
