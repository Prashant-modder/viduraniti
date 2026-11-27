export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Work in pairs and share your responses with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "India celebrates many harvest festivals. When is the harvest festival celebrated in your region and how is it celebrated?",
        answer: "*(Personal answer - sample.)* In our region, Makar Sankranti / Pongal / Lohri is celebrated in mid-January (and Baisakhi / Bihu in April). Families clean and decorate their homes, cook sweet dishes from freshly harvested rice and jaggery, sing folk songs, fly kites or light bonfires, and express gratitude for a bountiful harvest."
      },
      {
        n: 2,
        question: "A hymn refers to a song of praise.",
        parts: [
          {
            label: "(i)", type: "activity",
            question: "To whom do we offer a hymn?",
            answer: "*(Class discussion - sample answer.)* We offer a hymn to God, divine forces, or sacred elements of nature such as the sun, rain, and Mother Earth."
          },
          {
            label: "(ii)", type: "activity",
            question: "When and where do we sing a hymn?",
            answer: "*(Class discussion - sample answer.)* We sing hymns during morning prayers, festivals, harvest celebrations, school assemblies, and visits to temples or places of worship."
          },
          {
            label: "(iii)", type: "activity",
            question: "Why do we offer it?",
            answer: "*(Class discussion - sample answer.)* We offer a hymn to express gratitude, reverence, joy, and devotion, and to pray for blessings, peace, and prosperity."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Some poets and authors use words that are no longer a part of common usage. Such words are called archaic words. Work in pairs. Read the sentences given below. Match the underlined archaic words in Column 1 with their meanings in Column 2. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "match",
        passage: "'Thou art my friend, and I trust thee. Thy kindness is great, and everything that is mine is thine.'",
        question: "Match the underlined archaic words in Column 1 with their meanings in Column 2.",
        leftHead: "Column 1",
        rightHead: "Column 2",
        leftLabels: ["1.", "2.", "3.", "4.", "5."],
        rightLabels: ["(i)", "(ii)", "(iii)", "(iv)", "(v)"],
        left: ["thou", "art", "thee", "thy", "thine"],
        right: ["yours", "you (object)", "you (subject)", "are", "your"],
        answer: ["C", "D", "B", "E", "A"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Work in pairs. Read the paragraph and select the correct meaning for each underlined word from the options given below. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1,
        passage: "Under the golden 1. **radiance** of the evening sun, the villagers gathered to pay 2. **tribute** to their 3. **cherished** elder, who had dedicated his life to their well-being. His wise 4. **counsel** had guided generations, steering them through challenges. Known for his 5. **munificent** spirit, he never hesitated to share his resources generously.",
        parts: [
          { label: "1", type: "mcq", question: "radiance :", options: ["(i) glow", "(ii) brilliance"], answer: "**(i) glow**" },
          { label: "2", type: "mcq", question: "tribute :", options: ["(i) respect", "(ii) gratitude"], answer: "**(i) respect**" },
          { label: "3", type: "mcq", question: "cherished :", options: ["(i) preserved", "(ii) loved"], answer: "**(ii) loved**" },
          { label: "4", type: "mcq", question: "counsel :", options: ["(i) advice", "(ii) decision"], answer: "**(i) advice**" },
          { label: "5", type: "mcq", question: "munificent :", options: ["(i) rich", "(ii) generous"], answer: "**(ii) generous**" }
        ]
      }
    ]
  }
];
