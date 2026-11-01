export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 39-40).
// Part II: Speaker (ii) -> 5 is the loosest fit; no statement matches the grandmother exactly.

export const sections = [
  {
    roman: "I",
    instruction: "Read the words in the box. You will listen to five people speak about school life. As you listen, circle the words that are used by the speakers. There are two words you do not need. (Transcript for the teacher on page 39.)",
    items: [
      {
        n: 1, type: "short",
        wordBox: ["lawyer", "desks", "homemaker", "principal", "posters", "newspapers", "marriage", "advertisements", "careers", "books"],
        question: "Which of these words do the speakers use?",
        answer: [
          "**Words used:** **careers** and **homemaker** (Speaker i, the father) and **books** (Speaker iv, the student).",
          "**Not used:** lawyer, desks, posters, newspapers, marriage, advertisements.",
          "*'Principal' appears only as the label for Speaker (v); that speaker calls herself or himself the 'Head of an institution'. The transcript does not match the box exactly, so check with your teacher.*"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "You will once again listen to the five speakers. As you listen, match each statement 1-7 to each speaker (i)-(v). There are two statements that you do not need.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the statements to the speakers. Statements 2 and 6 are not needed - no speaker matches them.",
        left: [
          "Promotes active participation for all in school activities",
          "Comments on how school makes learning Mathematics joyful",
          "Believes in the power of education that leads to freedom of choice",
          "Shares that school also means companionship",
          "Understands that boys and girls have different abilities",
          "Persuades the parent to grant permission to attend school",
          "Believes that learning skills is not gender-based"
        ],
        right: [
          "Speaker (i) - Father",
          "Speaker (ii) - Grandmother",
          "Speaker (iii) - Teacher",
          "Speaker (iv) - Student",
          "Speaker (v) - Principal"
        ],
        answer: ["E", "", "A", "D", "B", "", "C"]
      }
    ]
  }
];
