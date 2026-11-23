export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 151): a podcast on improving observation skills.

export const sections = [
  {
    roman: "I",
    instruction: `You will listen to a podcast about ways of improving observation skills. As you listen, mark the statements 1–4 as true or false. (Transcript for teacher on page 151)`,
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/podcast-girl.png", alt: "A girl wearing headphones recording a podcast" },
        question: "Mark each statement as true or false.",
        columns: ["Statement", "True or False?"],
        rows: [
          ["1. Observation skills help improve your common sense.", "______"],
          ["2. Rushing through tasks helps you focus better and observe more.", "______"],
          ["3. Taking notes or making sketches helps with what you observe.", "______"],
          ["4. Incorporating tips on observation skills will soon lead to success.", "______"]
        ],
        answer: [
          ["1. Observation skills help improve your common sense.", "False - they make us more aware, help decisions and improve memory."],
          ["2. Rushing through tasks helps you focus better and observe more.", "False - rushing leads to missed details."],
          ["3. Taking notes or making sketches helps with what you observe.", "True"],
          ["4. Incorporating tips on observation skills will soon lead to success.", "True - the speaker says you will soon notice things you never noticed before."]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `You will once again listen to the podcast. As you listen, complete the given sentences by filling in the blanks with one to three exact words you hear.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "It is important to slow down and ______ to notice several aspects around you more clearly.", answer: "**take your time**" },
          { label: "2", type: "fill", question: "The more senses like hearing and smelling you use, the more ______ you absorb.", answer: "**information**" },
          { label: "3", type: "fill", question: "People who are ______ tend to be better observers because they seek to understand what they notice.", answer: "**curious**" },
          { label: "4", type: "fill", question: "When you make a note of things, it helps reinforce the ______ in your memory.", answer: "**details**" },
          { label: "5", type: "fill", question: "Practising mindfulness helps a person stay ______ with their surroundings.", answer: "**present** (stay present in the moment and engaged)" }
        ]
      }
    ]
  }
];
