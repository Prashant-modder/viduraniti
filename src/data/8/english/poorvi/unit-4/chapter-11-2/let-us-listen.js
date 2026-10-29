export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I",
    instruction: "Listen to the talk about paddy cultivation. Number the events in the correct order in which they happen.",
    items: [
      {
        n: 1, type: "order",
        items: [
          "1. Transplanting of seedlings",
          "2. Ploughing of soil",
          "3. Threshing of grains",
          "4. Puddling of land",
          "5. Harvesting of paddy",
          "6. Irrigating the field (Note: Irrigation is continuous, but conceptually fits after sowing/before growth)",
          "7. Milling of rice"
        ],
        answer: "**Correct Order based on transcript:**\n1. Ploughing of soil\n2. Puddling of land\n3. Irrigating the field (or Nursery stage)\n4. Transplanting of seedlings\n5. Harvesting of paddy\n6. Threshing of grains\n7. Milling of rice"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the correct option to answer the questions that follow.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "mcq", question: "What is the main step in preparing the soil for cultivation of rice?", options: ["(i) Ploughing the soil", "(ii) Clearing the soil", "(iii) Puddling the soil"], answer: "**(iii) Puddling the soil**" },
          { label: "2", type: "mcq", question: "How long does it take for rice seeds to grow into seedlings before being transplanted?", options: ["(i) 2-3 weeks", "(ii) 4-5 weeks", "(iii) 6-7 weeks"], answer: "**(ii) 4-5 weeks**" },
          { label: "3", type: "mcq", question: "Why is drying rice grains important after threshing?", options: ["(i) To get rice seeds...", "(ii) To separate the rice grains easily", "(iii) To store the rice grains for longer"], answer: "**(iii) To store the rice grains for longer (and process further)**" }
        ]
      }
    ]
  }
];
