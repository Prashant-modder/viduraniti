export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 72).

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to a talk about some outdoor activities that two friends spend their time doing. As you listen, answer the given question in one or two word(s) only. (refer to page 72 for transcript)",
    items: [
      {
        n: 1, type: "short",
        question: "What do the two friends purchase and use on the park bench?",
        answer: "**comic book**"
      }
    ]
  },
  {
    roman: "II",
    instruction: "You will once again listen to the talk about some outdoor activities of the two friends. As you listen, circle the pictures that show these activities.",
    items: [
      {
        n: 1, type: "short",
        figure: { src: "images/outdoor-activities.png", alt: "Six numbered illustrations of two boys doing outdoor activities: 1 reading a comic book on a park bench, 2 one riding a cycle while the other walks, 3 eating ice-cream, 4 walking in a park, 5 reading separately on a mat, 6 both cycling" },
        question: "Which of the six numbered pictures (1-6) show the activities mentioned in the talk?",
        answer: [
          "**Circle pictures 1, 3, 4, and 6:**",
          "- **Picture 1:** Sitting on a park bench reading a comic book together.",
          "- **Picture 3:** Eating ice-cream together.",
          "- **Picture 4:** Taking walks together in the nearby park.",
          "- **Picture 6:** Both going cycling around the neighbourhood.",
          "*(Pictures 2 and 5 are not circled: both friends cycle together, and they read together on a park bench rather than separately on a mat.)*"
        ]
      }
    ]
  }
];
