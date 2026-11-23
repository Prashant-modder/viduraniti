export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 100).

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to the passage about Evelyn Glennie's journey in overcoming her hearing loss through music and turning a physical disability into a success story. (Transcript for the teacher on page 100.) After listening, match the words in Column 1 with their meanings in Column 2.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the words with their meanings.",
        left: ["percussionist", "impaired", "vibrations", "determination", "gradual"],
        right: [
          "a person who plays drums and similar instruments",
          "the ability to keep going despite difficulties",
          "slow and steady over time",
          "physical sensations caused by sound",
          "damaged or weakened"
        ],
        answer: ["A", "E", "D", "B", "C"]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the passage once again and state whether the statements given below are true or false.",
    items: [
      {
        n: 1, type: "table",
        question: "Write True or False.",
        columns: ["Statement", "True or False?"],
        rows: [
          ["1. Evelyn Glennie became deaf suddenly.", "______"],
          ["2. Her headmistress ignored the signs of her hearing loss.", "______"],
          ["3. Ron Forbes was a percussionist who helped Evelyn.", "______"],
          ["4. Evelyn used her skin and bones to sense music.", "______"],
          ["5. She gave up on music after her diagnosis.", "______"]
        ],
        answer: [
          ["1. Evelyn Glennie became deaf suddenly.", "False - her hearing loss was gradual."],
          ["2. Her headmistress ignored the signs of her hearing loss.", "False - the headmistress urged her parents to take her to a specialist."],
          ["3. Ron Forbes was a percussionist who helped Evelyn.", "True"],
          ["4. Evelyn used her skin and bones to sense music.", "True - she felt sound in her skin, cheekbones and body."],
          ["5. She gave up on music after her diagnosis.", "False - she was determined to pursue music."]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following questions in one or two words.",
    items: [
      {
        n: 1, type: "short",
        question: "How did Evelyn turn her disability into strength?",
        answer: "By **sensing sound and vibrations through her body** (with determination and hard work)."
      },
      {
        n: 2, type: "short",
        question: "What role did Ron Forbes play in her life?",
        answer: "He was her **teacher and mentor** - he spotted her potential and taught her to sense music some other way."
      },
      {
        n: 3, type: "short",
        question: "What lessons can we learn from Evelyn's story about how to treat others who have different abilities or challenges?",
        answer: "**Respect and encouragement** - we should believe in their potential, support them and never discourage them."
      }
    ]
  }
];
