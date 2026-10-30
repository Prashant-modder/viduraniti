export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the expressions from the poem given in Column 1 and match them with what they indicate in Column 2. Then fill in the blanks.",
    items: [
      {
        n: 1, type: "match", question: "Match the expressions.",
        left: ["1. miles away", "2. cinders red", "3. heart is warm", "4. day is loud", "5. engine steaming"],
        right: ["(i) The speaker's affection", "(ii) The fast and powerful movement", "(iii) The busy and noisy atmosphere", "(iv) The glow of the train's sparks", "(v) The distance of the train"],
        answer: [
          "1. miles away -> **(v) The distance of the train from the speaker**",
          "2. cinders red -> **(iv) The glow of the train's sparks lighting up the night sky**",
          "3. heart is warm -> **(i) The speaker's affection for their friends**",
          "4. day is loud -> **(iii) The busy and noisy atmosphere during the day**",
          "5. engine steaming -> **(ii) The fast and powerful movement of the train**"
        ]
      },
      {
        n: 2, type: "blanks", 
        question: "Fill in the blanks using the expressions from the table.",
        answer: "1. The train station is **miles away** from my house, so I have to leave early.\n2. During the winter, we sat around the fire and watched the **cinders red** glow in the dark.\n3. Meeting my old friends after years made my **heart is warm** with joy.\n4. The city market is always bustling; the **day is loud** and chaotic.\n5. We watched the old locomotive, its **engine steaming** as it prepared to depart."
      }
    ]
  }
];
