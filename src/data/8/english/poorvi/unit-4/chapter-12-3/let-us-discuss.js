export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Complete the table given below.",
    items: [
      {
        n: 1, type: "match", question: "Identify Who Said What.",
        left: [
          "1. It doesn't look encouraging.",
          "2. The rains came all these years without any such consultations...",
          "3. So many favourable conditions but still no rain."
        ],
        right: [
          "(i) Velu to himself",
          "(ii) People at the weather office to Velu",
          "(iii) Velu to the other villagers"
        ],
        answer: [
          "1. **Velu** -> **to himself**",
          "2. **Velu** -> **to the other villagers** (who suggested astrologers)",
          "3. **People at the weather office** -> **to Velu**"
        ]
      }
    ]
  },
  {
    roman: "II & III",
    instruction: "Discuss the old woman and the rain.",
    items: [
      { n: 1, type: "long", question: "Do you think the old woman would help Velu? If yes, why?", answer: "Yes, she helps him by offering him a fresh perspective. Instead of fixing the weather, she fixes his mindset, helping him see the drought not as a punishment, but as a necessary rest for his overworked land." },
      { n: 2, type: "short", question: "Will Velu's wait continue or will it rain?", answer: "His wait ends! By the time he walks back to his village with a new appreciation for the resting land, the clouds gather and it finally begins to rain." }
    ]
  }
];
