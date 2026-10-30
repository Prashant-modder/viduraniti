export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "The poet has used phrases like 'blooms of the dawn'. Select words from Column 1 and Column 2 and combine them with 'of'.",
    items: [
      {
        n: 1, type: "match", question: "Create phrases with 'of'.",
        left: ["wings", "waves", "dreams", "songs", "glimmers", "cries", "tears", "roars", "shadows"],
        right: ["the birds", "the wind", "the evening", "the children", "the rain", "the stars", "the thunder", "the ocean", "the clouds"],
        answer: [
          "wings of **the birds**",
          "waves of **the ocean**",
          "dreams of **the evening** (or the children)",
          "songs of **the rain**",
          "glimmers of **the stars**",
          "cries of **the children**",
          "tears of **the clouds**",
          "roars of **the thunder**",
          "shadows of **the evening** (or the clouds)"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "The poet uses words like 'dawn', 'night' and 'midnight' to show different parts of the day. Write the words in the appropriate columns.",
    items: [
      {
        n: 1, type: "activity", question: "Categorize time words (twilight, dawn, nightfall, sunset, noontime, night-time, dusk, sunrise, noon, daybreak, midnight, sunup, forenoon, sundown, noonday, midday).",
        answer: "**Morning:** dawn, sunrise, daybreak, sunup, forenoon\n**Afternoon:** noontime, noon, noonday, midday\n**Evening:** twilight, sunset, dusk, sundown\n**Night:** nightfall, night-time, midnight"
      }
    ]
  },
  {
    roman: "III",
    instruction: "Match the words from the text given in Column 1 with their opposites in Column 2.",
    items: [
      {
        n: 1, type: "match", question: "Match the opposites.",
        left: ["1. strange", "2. dawn", "3. launch", "4. bulging", "5. float", "6. lading"],
        right: ["(i) halt", "(ii) emptying", "(iii) sink", "(iv) dusk", "(v) ordinary", "(vi) shrinking"],
        answer: [
          "1. strange -> **(v) ordinary**",
          "2. dawn -> **(iv) dusk**",
          "3. launch -> **(i) halt**",
          "4. bulging -> **(vi) shrinking**",
          "5. float -> **(iii) sink**",
          "6. lading -> **(ii) emptying**"
        ]
      }
    ]
  }
];
