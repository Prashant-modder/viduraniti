export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Geography", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: `Work in pairs. Discuss the place that you have enjoyed travelling to. Talk about who you went with, how you travelled, and what you learnt from the experience.`,
    items: [
      {
        n: 1, type: "activity",
        answer: [
          "*(Personal answer - sample.)*",
          "I enjoyed my trip to Jaipur very much. I went with my parents and my younger sister, and we travelled by train. We visited the Amer Fort, the City Palace and the Hawa Mahal, and ate dal baati churma. I learnt how the kings of Rajasthan built forts on hills for protection, and I saw how the people there wear bright clothes that suit the desert land."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Which State or Union Territory of India do you live in? Write the following details about it.`,
    items: [
      {
        n: 1, type: "activity",
        question: `1. Part of the country—North, East, Northeast, West, South or Centre<br>2. Its capital 3. Language 4. River(s)<br>5. Tourist attraction 6. Food`,
        answer: [
          "*(Personal answer - sample for Kerala. Write the details of your own State or Union Territory.)*",
          "1. Part of the country: South",
          "2. Capital: Thiruvananthapuram",
          "3. Language: Malayalam",
          "4. Rivers: Periyar, Bharathapuzha",
          "5. Tourist attraction: the backwaters of Alappuzha",
          "6. Food: appam with vegetable stew, puttu and kadala curry"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Work in pairs. Recall the names of the states of our country which have 'Pradesh' in their names. Mention if it is in the North, East, Northeast, West, South or Centre of our country. Recall any special feature about each 'Pradesh'. Share your answers with your classmates and the teacher.`,
    items: [
      {
        n: 1, type: "table",
        columns: ["First Part of the Name", "Second Part of the Name", "Part of the Country", "Special Feature"],
        rows: [
          ["1.", { text: "Pradesh", rowspan: 4 }, "______", "______"],
          ["2.", "______", "______"],
          ["3.", "______", "______"],
          ["4.", "______", "______"]
        ],
        answer: [
          ["1. Himachal", { text: "Pradesh", rowspan: 4 }, "North", "A hill state with snow-covered mountains and apple orchards"],
          ["2. Arunachal", "Northeast", "The easternmost state, covered with thick forests; it is the home of red pandas"],
          ["3. Madhya", "Centre", "Lies in the heart of India and has many tiger reserves and the Sanchi stupa"],
          ["4. Andhra", "South", "Has a long coastline on the Bay of Bengal and is famous for the Tirupati temple"]
        ]
      }
    ]
  }
];
