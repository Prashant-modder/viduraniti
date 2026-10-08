export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

const transcript = {
  title: "Teacher's transcript (textbook pages 46–47)",
  body: `Hello everybody! Today I'll be narrating a story about a quick-witted courtier in the kingdom of Vijayanagara.

A renowned scholar, proud of his abilities, once visited the kingdom of Vijayanagara. You see, he wanted to challenge the scholars in the court of King Krishnadeva Raya. The court scholars did not want to accept the challenge as they were worried of being defeated by the visitor. Besides this, they were also afraid that the king would be angry if they refused to face the scholar. They knew that only the quick-witted Tenali Rama would be able to manage the situation. So, naturally, they asked him for a solution. As expected, Rama told them that he would accept the challenge.

The next day, Rama arrived at the palace. Rama and the challenger sat facing each other. There was a bundle wrapped in silk kept near Rama. He placed his hand on the bundle and said to the visitor, "Let us start by discussing the merits of tila-kashta-mahisha-bandhana". The visitor was taken aback. He had read thousands of works. But he had never heard of this work. He had no idea what to say. The scholar had to accept his defeat. Ashamed, he quietly left the palace.

Now, the king was curious to know about the great work Rama had mentioned. Rama smiled and removed the silk cloth. There was a huge bundle of sticks tied with a thick rope! The king was puzzled and asked for an explanation. Rama told him, "O king! til is sesame; kashta is stick, tilakashta means sticks of sesame plants". Then, displaying the rope Rama said, "This is the rope used to tie a buffalo—mahisha means buffalo, bandhana means the rope used for tying—so, this is tila-kashta-mahisha-bandhana."

The king burst out laughing. The poor visitor had become scared hearing such a difficult name. In this way, Rama had taught the arrogant scholar a lesson.`
};

export const sections = [
  {
    roman: "I",
    instruction: "Listen to a woman narrating a story. Fill in the blanks by selecting the correct options.",
    items: [
      {
        n: 1,
        reference: transcript,
        parts: [
          {
            label: "1",
            type: "mcq",
            question: "The rope tying the bundle of sticks was ______.",
            options: ["(i) loose", "(ii) thick", "(iii) short"],
            answer: "**(ii) thick.** The story says there was a huge bundle of sticks tied with a thick rope."
          },
          {
            label: "2",
            type: "mcq",
            question: "The scholar is finally referred to as ______.",
            options: ["(i) irritable", "(ii) mischievous", "(iii) arrogant"],
            answer: "**(iii) arrogant.** The narrator ends by saying Rama had taught the arrogant scholar a lesson."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the story once again. Number the events in the correct order of occurrence.",
    items: [
      {
        n: 1,
        reference: transcript,
        type: "order",
        items: [
          "The great scholar was ashamed because he did not know what to say.",
          "Rama accepted the challenge thrown by the visitor.",
          "Rama had a bundle tied in silk when he came to the palace.",
          "The king laughed at the explanation given by Rama.",
          "The visitor wanted to show his superiority over others in the palace.",
          "Rama showed the work to be a bundle of sticks tied together by a rope.",
          "The king wanted to know more about the work mentioned by Rama.",
          "The court scholars were afraid of the king's anger."
        ],
        answer: [5, 8, 2, 3, 1, 7, 6, 4]
      }
    ]
  }
];