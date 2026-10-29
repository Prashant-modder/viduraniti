export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write the stanza number for the main idea of each stanza given below.",
    items: [
      {
        n: 1, type: "match", question: "Match the main ideas to the stanzas.",
        left: [
          "1. The speakers recognise the lord's kindness and praise him for nourishing the field.",
          "2. The speakers praise the generosity of the creator of the universe who ensures a rich harvest.",
          "3. The speakers devote their lives and work as a mark of respect to the lord and seek his support, wisdom, and care.",
          "4. The speakers pay homage to the Earth and appreciate her role in supporting life, by dedicating their harvest."
        ],
        right: ["Stanza 1", "Stanza 2", "Stanza 3", "Stanza 4"],
        answer: [
          "1. **Stanza 2** (Praising Varuna/Rain for nourishing/fostering grain)",
          "2. **Stanza 1** (Praising Surya/Sun for prospering the sowing - OR Stanza 4 depending on interpretation of 'creator', but 3 matches Stanza 4 better. Let's look closely: Stanza 4 is Brahma, creator of universe. So 2 is **Stanza 4**)",
          "3. **Stanza 4** (Devote lives/labours, seek succour/counsel/care)",
          "4. **Stanza 3** (Homage to Earth/Prithvi)"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Fill in the blanks by choosing the appropriate words or phrases from within the brackets.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "fill", question: "The setting of the poem is a rural landscape, possibly during a ______ (harvest/religious) festival.", answer: "**harvest**" },
          { label: "2", type: "fill", question: "The tone of the poem is respectful and celebratory because it praises ______ (the men and women/nature and the Lord) with deep respect and gratitude.", answer: "**nature and the Lord**" },
          { label: "3", type: "fill", question: "In the line 'Thou art our Hands and our Heart and our Home', the letter 'h' is capitalised... because ______ (it represents the hard work of farmers/God resides in them).", answer: "**God resides in them** (or to show divine reverence/presence in every aspect of life)." }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Identify the poetic device used in the following lines from the poem.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "short", question: "Bright and munificent lord of the morn!", answer: "**Metaphor** (or Imagery / Personification of the sun)." },
          { label: "2", type: "short", question: "We bring thee our lives and our labours for tribute", answer: "**Alliteration** (repetition of the 'l' sound in lives and labours)." }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Match the lines from the poem with their expressions and choose the appropriate poetic device (imagery, alliteration, simile, metaphor, personification).",
    items: [
      {
        n: 1, type: "match", question: "Match the lines to expressions and devices.",
        left: ["1. sweet and omnipotent mother", "2. The wealth of our valleys, new-garnered and ripe", "3. Thou art the Seed and the Scythe"],
        right: ["(i) creates a clear description of the scene and appeals to the senses", "(ii) implied comparison of growth and reaping with beginning and end of all life", "(iii) the earth is being given human-like qualities"],
        answer: [
          "1. sweet and omnipotent mother - **(iii) earth is given human-like qualities** -> **Personification**",
          "2. The wealth of our valleys, new-garnered and ripe - **(i) creates a clear description...** -> **Imagery**",
          "3. Thou art the Seed and the Scythe - **(ii) implied comparison of growth...** -> **Metaphor**"
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Certain words or phrases are repeated in the same line of the poem. Find more such repetitions and state the purpose.",
    items: [
      {
        n: 1, type: "activity", question: "What is the poet's purpose of using repetition in the poem?",
        answer: "Examples of repetition: \"Thine is the bounty... Thine is the bounty\", \"We bring thee our... We bring thee our\", \"Thou art... Thou art\". The poet uses repetition to emphasize the deep gratitude of the people, to create a musical, rhythmic chant appropriate for a hymn, and to show the absolute power of the divine."
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Match the symbols in Column 1 with the meanings they convey in Column 2.",
    items: [
      {
        n: 1, type: "match", question: "Match symbols to meanings.",
        left: ["1. Prithvi (the Earth)", "2. Surya (the Sun)", "3. Varuna (Rain)"],
        right: ["(i) light, energy, life representing the giver of warmth and prosperity", "(ii) mercy and nourishment—crucial for agriculture and sustenance", "(iii) fertile land, motherhood, nurturing—the source of all life"],
        answer: [
          "1. Prithvi - **(iii) fertile land, motherhood, nurturing...**",
          "2. Surya - **(i) light, energy, life...**",
          "3. Varuna - **(ii) mercy and nourishment...**"
        ]
      }
    ]
  }
];
