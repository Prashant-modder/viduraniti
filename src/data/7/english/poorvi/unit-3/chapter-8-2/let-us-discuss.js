export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem", "Tone and mood", "Imagery"] };

export const sections = [
  {
    roman: "I",
    instruction: `Choose the correct words from the brackets to complete the summary of the poem given below.`,
    items: [
      {
        n: 1, type: "blanks",
        passage: `The poet sends paper boats down a 1. __________ (stream/river) each day, writing his name and the name of his 2. __________ (school/ village) on them. He hopes that someone in a 3. __________ (strange/familiar) land will find them and know who he is. The poet fills his boats with 4. __________ (rose/shiuli) flowers from his garden, hoping they will be safely carried to another land at 5. __________ (night/morning). As he launches his boats, he imagines that the 6. __________ (clouds/birds) in the sky are like friends, racing with his boats. At night, he dreams that his paper boats continue to 7. __________ (swim/float) under the midnight stars, with the fairies of sleep sailing in them, their baskets full of 8. __________ (dreams/fruits).`,
        answer: ["1. **stream**", "2. **village**", "3. **strange**", "4. **shiuli**", "5. **night**", "6. **clouds**", "7. **float**", "8. **dreams**"]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Choose the correct option for the following.`,
    items: [
      {
        n: 1, type: "mcq",
        question: `The theme of the poem is ________________.`,
        options: [`1. innocence`, `2. imagination`, `3. ignorance`, `4. playfulness`, `5. travel`, `(i) 1, 2 and 3`, `(ii) 3, 4 and 5`, `(iii) 1, 4 and 5`, `(iv) 1, 2 and 4`],
        answer: "**(iv) 1, 2 and 4.** The poem shows a child's innocence, imagination and playfulness. It is not about ignorance, and the boats' journey is imagined, so travel is not its theme."
      }
    ]
  },
  {
    roman: "III",
    instruction: `Identify whether the following statement is true or false.`,
    items: [
      { n: 1, type: "short", question: `The setting of the poem is a natural, outdoor environment.`, answer: "**True.** The child sits beside a running stream, with the garden, the sky and the clouds around, and then dreams of the midnight stars." }
    ]
  },
  {
    roman: "IV",
    instruction: `Complete the following sentence by choosing the correct word given within the brackets.`,
    items: [
      {
        n: 1, type: "blanks",
        passage: `The tone is ____________________ (sad and serious/gentle and wishful) and the mood is ____________________ (thoughtful/boring).`,
        answer: ["1. **gentle and wishful**", "2. **thoughtful**"]
      }
    ]
  },
  {
    roman: "V",
    instruction: `Identify the examples of alliteration from the poem.`,
    items: [
      {
        n: 1, type: "short",
        answer: [
          "Alliteration is the repetition of the same sound at the beginning of nearby words. Examples from the poem:",
          "- **big black letters** (b)",
          "- **Day by day** (d)",
          "- **load my little boats** (l)",
          "- **sleep are sailing** (s)"
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: `Fill in the blanks with suitable words from the poem.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: `The repetition of words ___________ and ___________ emphasises the passage of time.`, answer: "**day** and **day** (in 'Day by day'). The repeated words show that the child floats a boat every single day." },
          { label: "2", type: "fill", question: `The poet uses imagery like ___________ and ___________ to create a clear picture in the minds of the readers.`, answer: "**big black letters** and **white bulging sails** (other acceptable images: blooms of the dawn, baskets full of dreams, midnight stars)." }
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: `Match the descriptions in Column 1 with what they symbolise in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        left: [`the child's innocence, dreams, hopes, and messages sent out into the world`, `purity, beauty, and the start of a new day`, `the vast universe and the child's dreams continuing through the night`],
        right: [`midnight stars`, `paper boats`, `shiuli flowers`],
        leftLabels: ["1.", "2.", "3."],
        rightLabels: ["(i)", "(ii)", "(iii)"],
        answer: ["B", "C", "A"]
      }
    ]
  }
];
