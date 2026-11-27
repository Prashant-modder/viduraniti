export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem", "Poetic devices"] };
export const sections = [
  {
    roman: "I",
    instruction: "Write the stanza number for the main idea of each stanza given below. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the stanza number (1-4) next to each main idea.",
        columns: ["Main idea", "Stanza number"],
        rows: [
          ["1. The speakers recognise the lord's kindness and praise him for nourishing the field.", ""],
          ["2. The speakers praise the generosity of the creator of the universe who ensures a rich harvest.", ""],
          ["3. The speakers devote their lives and work as a mark of respect to the lord and seek his support, wisdom, and care.", ""],
          ["4. The speakers pay homage to the Earth and appreciate her role in supporting life, by dedicating their harvest.", ""]
        ],
        answer: [
          ["1. The speakers recognise the lord's kindness and praise him for nourishing the field.", "Stanza 2"],
          ["2. The speakers praise the generosity of the creator of the universe who ensures a rich harvest.", "Stanza 1"],
          ["3. The speakers devote their lives and work as a mark of respect to the lord and seek his support, wisdom, and care.", "Stanza 4"],
          ["4. The speakers pay homage to the Earth and appreciate her role in supporting life, by dedicating their harvest.", "Stanza 3"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Fill in the blanks by choosing the appropriate words or phrases from within the brackets.",
    items: [
      {
        n: 1,
        figure: { src: "images/harvesting-crop.png", alt: "A village woman harvesting golden grain with a sickle in a field" },
        parts: [
          {
            label: "1", type: "fill",
            question: "The setting of the poem is a rural landscape, possibly during a ______ (harvest/religious) festival.",
            answer: "harvest"
          },
          {
            label: "2", type: "fill",
            question: "The tone of the poem is respectful and celebratory because it praises ______ (the men and women/nature and the Lord) with deep respect and gratitude.",
            answer: "nature and the Lord"
          },
          {
            label: "3", type: "fill",
            question: "In the line 'Thou art our Hands and our Heart and our Home', the letter 'h' is capitalised in 'Hands', 'Heart' and 'Home' because ______ (it represents the hard work of farmers/God resides in them).",
            answer: "God resides in them"
          }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Identify the poetic device used in the following lines from the poem.",
    items: [
      {
        n: 1, type: "short",
        question: "• Bright and munificent lord of the morn!\n• We bring thee our lives and our labours for tribute",
        answer: "Alliteration — repeated initial consonant sounds: /m/ in munificent ... morn and /l/ in lives ... labours."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Match the lines from the poem in Column 1 with their expressions in Column 2. Choose the appropriate poetic device from the box given below and write in Column 3.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["imagery", "alliteration", "simile", "metaphor", "personification"],
        question: "Match Column 1 with Column 2 and write the correct poetic device in Column 3.",
        columns: ["Column 1", "Column 2", "Column 3"],
        rows: [
          ["1. sweet and omnipotent mother", "(i) creates a clear description of the scene and appeals to the senses", ""],
          ["2. The wealth of our valleys, new-garnered and ripe", "(ii) implied comparison of growth and reaping with beginning and end of all life", ""],
          ["3. Thou art the Seed and the Scythe", "(iii) the earth is being given human-like qualities", ""]
        ],
        answer: [
          ["1. sweet and omnipotent mother", "(iii) the earth is being given human-like qualities", "personification"],
          ["2. The wealth of our valleys, new-garnered and ripe", "(i) creates a clear description of the scene and appeals to the senses", "imagery"],
          ["3. Thou art the Seed and the Scythe", "(ii) implied comparison of growth and reaping with beginning and end of all life", "metaphor"]
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Certain words or phrases are repeated in the same line of the poem. For example, The gold of our fields and the gold of our fruit;",
    items: [
      {
        n: 1, type: "long",
        question: "Find more such repetitions from the poem. What is the poet's purpose of using repetition in the poem?",
        answer: [
          "Examples of repetition within a line:",
          "- Lord of the lotus, lord of the harvest,",
          "- Lord of the rainbow, lord of the harvest,",
          "- Queen of the gourd-flower, queen of the harvest,",
          "- Lord of the Universe, Lord of our being,",
          "- We bring thee our songs and our garlands for tribute, / our thanks and our garlands / our love and our garlands / our lives and our labours",
          "- O Life of all life and all blessing, we hail thee,",
          "",
          "Purpose: Repetition gives the poem a musical, chant-like rhythm suitable for a communal hymn, emphasises the villagers' deep devotion and gratitude, and unites all four stanzas in a celebratory flow."
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "The poem uses symbolism to convey deeper meanings. Match the symbols in Column 1 with the meanings they convey in Column 2.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the symbols in Column 1 with the meanings they convey in Column 2.",
        leftHead: "Column 1",
        rightHead: "Column 2",
        leftLabels: ["1.", "2.", "3."],
        rightLabels: ["(i)", "(ii)", "(iii)"],
        left: [
          "Prithvi (the Earth)",
          "Surya (the Sun)",
          "Varuna (Rain)"
        ],
        right: [
          "light, energy, life—representing the giver of warmth and prosperity",
          "mercy and nourishment—crucial for agriculture and sustenance",
          "fertile land, motherhood, nurturing—the source of all life"
        ],
        answer: ["C", "A", "B"]
      }
    ]
  }
];
