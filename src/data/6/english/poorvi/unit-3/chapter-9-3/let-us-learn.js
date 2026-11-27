export const meta = { title: "Let Us Learn", order: 3, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "You have read the uses of spices in the letter. Complete the following table with the help of your teacher. You may use the words from the box given below.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/spices-properties.png", alt: "Six spice photographs: turmeric, fenugreek, cinnamon, clove, black pepper, and cardamom" },
        wordBox: [
          "Part of the plant: root/bark/leaves/flower buds/fruit/seeds",
          "Texture: rough/soft/silky",
          "Taste: bitter/sweet/sour/salty/spicy"
        ],
        question: "Complete the table with the part of the plant, colour, texture, and taste of each spice.",
        columns: ["Name", "Part of the plant", "Colour", "Texture", "Taste"],
        rows: [
          ["Turmeric", "______", "______", "______", "______"],
          ["Fenugreek", "______", "______", "______", "______"],
          ["Cinnamon", "______", "______", "______", "______"],
          ["Clove", "______", "______", "______", "______"],
          ["Black pepper", "______", "______", "______", "______"],
          ["Cardamom", "______", "______", "______", "______"]
        ],
        answer: [
          ["Turmeric", "root *(rhizome)*", "yellow / golden-orange", "rough (whole) / soft (powder)", "bitter / mildly spicy"],
          ["Fenugreek", "seeds", "yellowish-brown", "rough / hard", "bitter"],
          ["Cinnamon", "bark", "brown", "rough", "sweet and spicy"],
          ["Clove", "flower buds", "dark brown", "rough", "spicy"],
          ["Black pepper", "fruit *(dried berries)*", "black", "rough", "spicy"],
          ["Cardamom", "fruit / seeds", "green", "rough (pod)", "sweet and spicy"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the sentences given below:\n• You may share them with your friends.\n• You should try to remember these cures.\n• It can help control cough and cold.\n• You must consult an elder before you use them.\n• I need to soak the methi seeds overnight.\n• I used to put heeng water on your tummy.\n(The underlined words are known as helping verbs. These are called modal verbs or modals. Each modal verb has a different function.)",
    items: [
      {
        n: 1, type: "match",
        question: "The words given in Column A are helping verbs. Match the helping verbs in Column A with their functions in Column B.",
        left: [
          "(i) may",
          "(ii) should",
          "(iii) can",
          "(iv) must",
          "(v) need to",
          "(vi) used to"
        ],
        right: [
          "A. past habit",
          "B. suggestion",
          "C. compulsion",
          "D. advice",
          "E. ability",
          "F. necessity"
        ],
        answer: ["B", "D", "E", "C", "F", "A"]
      },
      {
        n: 2, type: "blanks",
        question: "Complete the following dialogues with any four modals from the table given above. (Use a modal only once.)",
        passage: "Ajay  : Anand had fever last week. He (i) ______ take good rest.\nSuman : Yes, he (ii) ______ or he will fall ill again.\nAjay  : He (iii) ______ take grandmother's natural cures.\nSuman : Yes, we (iv) ______ remember how effective they are.",
        answer: [
          "(i) **should** *(advice)*",
          "(ii) **must** *(compulsion)*",
          "(iii) **can** *(or **may** — suggestion/ability)*",
          "(iv) **need to** *(necessity)*"
        ]
      }
    ]
  }
];
