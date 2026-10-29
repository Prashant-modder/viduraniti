export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I",
    instruction: "Listen to a conversation between Monika and Toby (a Martian). Put a tick mark against the correct statements and a cross against the wrong ones.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "short", question: "Toby misses his school.", answer: "**Cross (x)** (He misses his planet/home)." },
          { label: "2", type: "short", question: "Monika accepts Toby as her friend.", answer: "**Tick (✓)**" },
          { label: "3", type: "short", question: "Monika asks Toby about one of his facial features.", answer: "**Tick (✓)** (She asks about his one big eye)." },
          { label: "4", type: "short", question: "Toby tells Monika that she had a banana for breakfast.", answer: "**Cross (x)** (He tells her she had an apple)." },
          { label: "5", type: "short", question: "Toby shares that he can see much clearer with a closed eye.", answer: "**Tick (✓)** (He says he can see beyond mountains/metals with his eye closed)." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the conversation again and fill in the blanks with the exact words you hear.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "fill", question: "Toby: I miss my ______ and home.", answer: "**people**" },
          { label: "2", type: "fill", question: "Toby: Well, we ______ don't need to eat anything. We get our ______ from the Sun.", answer: "**Martians**, **energy**" },
          { label: "3", type: "fill", question: "Monika: Oh! Don't you ever feel like having ice-creams and ______?", answer: "**chocolates**" },
          { label: "4", type: "fill", question: "Monika: Okay, tell me one thing. How are you able to see only with ______ eye?", answer: "**one**" },
          { label: "5", type: "fill", question: "Toby: I can see beyond mountains and ______, woods and even ______.", answer: "**clouds**, **metals**" }
        ]
      }
    ]
  }
];
