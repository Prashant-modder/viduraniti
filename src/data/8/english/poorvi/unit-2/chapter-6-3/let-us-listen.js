export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I",
    instruction: "Listen to the passage about Evelyn Glennie's journey. Match the words with their meanings.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match words: percussionist, impaired, vibrations, determination, gradual.",
        left: ["1. percussionist", "2. impaired", "3. vibrations", "4. determination", "5. gradual"],
        right: [
          "(i) a person who plays drums and similar instruments",
          "(ii) the ability to keep going despite difficulties",
          "(iii) slow and steady over time",
          "(iv) physical sensations caused by sound",
          "(v) damaged or weakened"
        ],
        answer: [
          "1 - (i) a person who plays drums",
          "2 - (v) damaged or weakened",
          "3 - (iv) physical sensations caused by sound",
          "4 - (ii) the ability to keep going despite difficulties",
          "5 - (iii) slow and steady over time"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the passage once again and state whether the statements are true or false.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "Evelyn Glennie became deaf suddenly.", answer: "**False** (It was gradual)" },
          { label: "2", type: "short", question: "Her headmistress ignored the signs of her hearing loss.", answer: "**False** (She urged the parents to take her to a specialist)" },
          { label: "3", type: "short", question: "Ron Forbes was a percussionist who helped Evelyn.", answer: "**True**" },
          { label: "4", type: "short", question: "Evelyn used her skin and bones to sense music.", answer: "**True** (She felt vibrations in her cheekbones, skin, and hair)" },
          { label: "5", type: "short", question: "She gave up on music after her diagnosis.", answer: "**False**" }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following questions in one or two words.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "How did Evelyn turn her disability into strength?", answer: "Through **determination** (and feeling vibrations)." },
          { label: "2", type: "short", question: "What role did Ron Forbes play in her life?", answer: "**Mentor** (or guide)." },
          { label: "3", type: "short", question: "What lessons can we learn from Evelyn's story about how to treat others who have different abilities?", answer: "**Encouragement** (and not discouraging them like most teachers did)." }
        ]
      }
    ]
  }
];
