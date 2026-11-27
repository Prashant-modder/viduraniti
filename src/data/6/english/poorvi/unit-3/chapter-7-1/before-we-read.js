export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "A tree is useful to us in many ways. Mention some of these uses. Write them in the picture given below.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/tree-uses.png", alt: "A tree with four cloud-shaped spaces in its canopy, one filled with 'Some parts of trees are used in preparing medicines' and three blank" },
        question: "Mention some uses of trees to fill the cloud spaces in the tree picture.",
        columns: ["Use of trees"],
        rows: [
          ["Some parts of trees are used in preparing medicines"],
          ["______"],
          ["______"],
          ["______"]
        ],
        answer: [
          ["Some parts of trees are used in preparing medicines"],
          ["Trees give us cool shade, fresh air (oxygen), and clean our surroundings."],
          ["Trees provide fruits, flowers, leaves, and timber for furniture and homes."],
          ["Trees give shelter and nesting places to birds, squirrels, and other animals."]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Neem is a common tree in our country. Discuss in groups of four and fill Columns 1 and 2 with what you know about the neem tree and what you want to know.",
    items: [
      {
        n: 1, type: "table",
        question: "Fill Columns 1 and 2 with what you know about the neem tree and what you want to know.",
        columns: ["Column 1. What do you know?", "Column 2. What do you want to know?"],
        rows: [
          ["• ______", "• ______"],
          ["• ______", "• ______"],
          ["• ______", "• ______"],
          ["• ______", "• ______"]
        ],
        answer: [
          ["• Neem leaves taste bitter.", "• Where did the neem tree first grow?"],
          ["• People use neem twigs (*datun*) to clean their teeth.", "• Why is it called 'Neem', and what are its other names?"],
          ["• Dry neem leaves protect stored clothes and grains from insects.", "• How is neem useful to farmers and crops?"],
          ["• Neem is used in soaps, toothpastes, and home remedies.", "• Which parts of the neem tree are used in medicines?"]
        ]
      }
    ]
  }
];
