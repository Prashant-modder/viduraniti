export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Comprehension", "Poem"] };

export const sections = [
  {
    roman: "I",
    instruction: `Arrange the events in order of occurrence in the poem. The last one has been marked for you. Share your answers with your classmates and teacher.`,
    items: [
      {
        n: 1, type: "order",
        question: "Arrange the events in order of occurrence in the poem. The last one has been marked for you (10).",
        items: [
          "Gopi paints a bowl of *khichdi*, which becomes real and amazes the villagers.",
          "The Zamindar orders Gopi to paint treasures for him.",
          "Gopi is told to gather food but instead sits drawing pictures in the sand.",
          "Gopi returns to the village with the Zamindar and his men chasing her.",
          "The Zamindar throws Gopi into prison.",
          "Gopi paints a road and a horse to escape.",
          "Gopi uses the magic brush to paint useful items for the villagers.",
          "Gopi paints a wide river, stopping the Zamindar and his men.",
          "A man gives a magic brush to Gopi to paint only for the poor.",
          "Gopi scares the Zamindar away, and celebrates with the villagers."
        ],
        answer: [3, 9, 1, 7, 2, 5, 6, 4, 8, 10]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Fill in the blanks by choosing the correct answer from the box given below.`,
    items: [
      {
        n: 1, type: "blanks",
        wordBox: ["triumphant and celebratory", "tension and suspense", "playful and innocent"],
        question: "Fill in the blanks.",
        passage: "The tone of the poem shifts throughout, reflecting the different moods of the story. Initially, the tone is 1. ______ as Gopi uses her imagination to draw in the sand, and later when the Zamindar enters the story, the tone shifts to one of 2. ______ . In the final part of the poem, the tone becomes 3. ______ as Gopi escapes, the Zamindar is defeated, and the villagers rejoice.",
        answer: ["1. **playful and innocent**", "2. **tension and suspense**", "3. **triumphant and celebratory**"]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Fill in the blanks by choosing the correct option from within the brackets.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The poem mostly follows a simple rhyme scheme, ______ , which adds a rhythmic flow. (ABCB, ABBA, ABAB)", answer: "**ABCB** - in most stanzas the second and fourth lines rhyme, while the first and third do not." },
          { label: "2", type: "fill", question: "This poem belongs to the ______ poetry genre, which tells a story through verse. (descriptive, narrative or ballad, free style)", answer: "**narrative or ballad** - it tells the story of Gopi, the brush and the Zamindar from beginning to end." }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Give examples from the poem for the following explanations.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "The poem is rich in imagery, creating clear pictures in the reader's mind. For example, ______ .", answer: "The picture of Gopi sketching in the sand beneath the banyan; the village streaming into the house to see the bowl of *khichdi*; the mighty, wide river with fast, deep currents that stops the Zamindar's men." },
          { label: "2", type: "short", question: "What is the effect of repetition in the line—'On you, and you and you!'?", answer: "The repeated 'you' makes the threat sound frightening, as if the beast would pick out each pursuer in turn. It adds rhythm, builds tension and makes the Zamindar and his men feel personally targeted, so they flee." }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: `Match the phrases from the poem in Column 1 with what they symbolise in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each phrase with what it symbolises.",
        left: ["The magic paintbrush", "The grand fortress", "The river and the beast"],
        right: ["greed and the desire for wealth", "barriers to protect Gopi from the Zamindar's anger", "the power of art and imagination to change the world"],
        answer: ["C", "A", "B"]
      }
    ]
  },
  {
    roman: "VI",
    instruction: `Identify whether the following statement is true or false.`,
    items: [
      {
        n: 1, type: "short",
        question: "While Gopi uses the magic brush to help others, the Zamindar wants to use it for personal gain. This contrast drives the moral of the story.",
        answer: "**True.** Gopi paints food and useful things for the poor villagers, while the Zamindar demands a fortress and treasure for himself. The moral - that talent and power should be used to help others, not for greed - comes from this contrast."
      }
    ]
  }
];
