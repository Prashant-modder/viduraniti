export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: `Look at the pictures given below and sort them into natural and man-made wonders.`,
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/wonders-sort.png", alt: "Eight pictures: 1 living root bridge, 2 a palace, 3 a meadow with pine forest, 4 an ice stupa, 5 a decorated footbridge, 6 a fountain in a garden, 7 a moonrise over a mountain, 8 a river rushing through rocks" },
        question: "Sort the pictures. Natural: ______, ______, ______, and ______. Man-made: ______, ______, ______, and ______.",
        columns: ["Type", "Picture numbers"],
        rows: [["Natural", "______"], ["Man-made", "______"]],
        answer: [
          ["Natural", "1, 3, 7 and 8 (the root bridge, the meadow and forest, the moonlit mountain, the rushing river)"],
          ["Man-made", "2, 4, 5 and 6 (the palace, the ice stupa, the decorated footbridge, the fountain)"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Which of these wonders—man-made or natural—are more appealing and why? Share your answers with your classmates and teacher.`,
    items: [
      { n: 1, type: "activity", question: "Which of these wonders—man-made or natural—are more appealing and why?", answer: "*(Personal answer - sample.)* I find natural wonders more appealing because no human made them. A mountain or a waterfall is shaped over thousands of years and gives me a feeling of calm and amazement. Man-made wonders like palaces are also beautiful, but they remind me of human skill rather than of nature's power." }
    ]
  },
  {
    roman: "III",
    instruction: `Work in pairs. Write down two wonders of nature that have amazed you. Discuss what makes them impressive. Share your answers with your classmates and teacher.`,
    items: [
      { n: 1, type: "activity", question: "Write down two wonders of nature that have amazed you. Discuss what makes them impressive.", answer: "*(Personal answer - sample.)* (1) A rainbow after rain - it appears suddenly and fills the sky with seven colours. (2) A waterfall - the sheer power of falling water and its roar make it impressive." }
    ]
  },
  {
    roman: "IV",
    instruction: `Work in groups of four. Complete the web chart given below with words that you associate with the phrase, 'Nature's Power'. Share your answers with your classmates and teacher.`,
    items: [
      { n: 1, type: "activity", question: "Complete the web chart with words that you associate with the phrase, 'Nature's Power'.", answer: ["*(Group activity - sample words.)*", "**Nature's Power:** earthquake, volcano, flood, cyclone, thunder, lightning, tsunami, waterfall, ocean waves, wildfire, rainfall, sunshine."] }
    ]
  }
];
