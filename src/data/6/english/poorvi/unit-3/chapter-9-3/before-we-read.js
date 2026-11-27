export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "A spice is any seed, fruit, root, bark, leaf or any other part of a plant used to give taste and colour to our food. Try to recall the names of three spices that are used for cooking in your home. Write them below and share your answers with your teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Write the names of three spices that are used for cooking in your home (1, 2, 3).",
        answer: "*(Personal answer - sample.)* 1. **Turmeric (*haldi*)**   2. **Cumin seeds (*jeera*)**   3. **Cardamom (*elaichi*)**"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Given below are pictures of some spices. Work in pairs and write what you call them in your language. Their names in English are given in the last column. Share your answers with your teacher.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/spices-table.png", alt: "Ten photographs of common Indian spices: turmeric, fenugreek, cumin seeds, asafoetida, cinnamon, clove, ginger, black pepper, fennel seeds, and cardamom" },
        question: "Write what you call each spice in your language (sample answers shown in Hindi, as used in Daadi's letter).",
        columns: ["S.No.", "Name in your language", "Name in English"],
        rows: [
          ["1.", "______", "Turmeric"],
          ["2.", "______", "Fenugreek"],
          ["3.", "______", "Cumin seeds"],
          ["4.", "______", "Asafoetida"],
          ["5.", "______", "Cinnamon"],
          ["6.", "______", "Clove"],
          ["7.", "______", "Ginger"],
          ["8.", "______", "Black pepper"],
          ["9.", "______", "Fennel seeds"],
          ["10.", "______", "Cardamom"]
        ],
        answer: [
          ["1.", "Haldi", "Turmeric"],
          ["2.", "Methi", "Fenugreek"],
          ["3.", "Jeera", "Cumin seeds"],
          ["4.", "Heeng", "Asafoetida"],
          ["5.", "Dalchini", "Cinnamon"],
          ["6.", "Laung", "Clove"],
          ["7.", "Adrak", "Ginger"],
          ["8.", "Kali mirch", "Black pepper"],
          ["9.", "Saunf", "Fennel seeds"],
          ["10.", "Elaichi", "Cardamom"]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Do you know if these spices can be used for something else other than cooking? Let us find out by reading the letter given below.",
    items: [
      {
        n: 1, type: "activity",
        question: "Can these spices be used for something else other than cooking?",
        answer: "Yes! Besides giving taste, aroma, and colour to food, kitchen spices are used as traditional home remedies to improve digestion, relieve coughs, colds, toothaches, and body pain, and support general health (always under an elder's guidance)."
      }
    ]
  }
];
