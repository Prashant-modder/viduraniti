export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// NOTE: both answers depend on the audio transcript (teacher's copy, page 39 of the textbook).
// They are marked pending: true until the transcript is added.

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to five people speak about school life. As you listen, circle the words from the box that the speakers use. Two of the words are not needed. (The transcript for the teacher is on page 39.)",
    items: [
      {
        n: 1, type: "short", pending: true,
        question: "Which of these words do the speakers use? lawyer, desks, homemaker, principal, posters, newspapers, marriage, advertisements, careers, books",
        answer: "*(Answer key pending - it depends on the audio transcript on page 39 of the textbook.)*"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the five speakers once again. As you listen, match each statement (1-7) to a speaker (i)-(v). Two statements are not needed.",
    items: [
      {
        n: 1, type: "match", pending: true,
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
        right: ["Speaker (i)", "Speaker (ii)", "Speaker (iii)", "Speaker (iv)", "Speaker (v)"],
        answer: "*(Answer key pending - it depends on the audio transcript on page 39 of the textbook.)*"
      }
    ]
  }
];
