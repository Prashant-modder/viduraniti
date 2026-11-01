export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook pages 39-40).
// Part II: (ii) -> 5 is the loosest fit - none of the seven statements matches the grandmother exactly.

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to five people speak about school life. As you listen, circle the words from the box that the speakers use. Two of the words are not needed. (The transcript for the teacher is on page 39.)",
    items: [
      {
        n: 1, type: "short",
        question: "Which of these words do the speakers use? lawyer, desks, homemaker, principal, posters, newspapers, marriage, advertisements, careers, books",
        answer: [
          "**Words used:** **careers** and **homemaker** (Speaker i, the father) and **books** (Speaker iv, the student).",
          "**Not used:** lawyer, desks, posters, newspapers, marriage, advertisements.",
          "*'Principal' is only the role of Speaker (v); the speaker calls herself or himself the 'Head of an institution'.*"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the five speakers once again. As you listen, match each statement (1-7) to a speaker (i)-(v). Two statements are not needed.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the statements to the speakers.",
        left: [
          "1. Promotes active participation for all in school activities",
          "2. Comments on how school makes learning Mathematics joyful",
          "3. Believes in the power of education that leads to freedom of choice",
          "4. Shares that school also means companionship",
          "5. Understands that boys and girls have different abilities",
          "6. Persuades the parent to grant permission to attend school",
          "7. Believes that learning skills is not gender-based"
        ],
        right: [
          "Speaker (i) - Father",
          "Speaker (ii) - Grandmother",
          "Speaker (iii) - Teacher",
          "Speaker (iv) - Student",
          "Speaker (v) - Principal"
        ],
        answer: [
          "**(i) Father -> 3.** He says education gives freedom to make choices in life, whether his daughter or his son wants a career or to be a homemaker.",
          "**(ii) Grandmother -> 5.** She recalls that elders once treated girls and boys differently and kept girls at home to help, and she is glad that this has changed.",
          "**(iii) Teacher -> 7.** She talks about learning hands-on skills and giving equal respect to all kinds of work.",
          "**(iv) Student -> 4.** School gives her friends with whom she can share her feelings.",
          "**(v) Principal -> 1.** Students should take part in every school activity without worrying whether it is for girls or boys.",
          "**Not needed:** statements **2** and **6**."
        ]
      }
    ]
  }
];
