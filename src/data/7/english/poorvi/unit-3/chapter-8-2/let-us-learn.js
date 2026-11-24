export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Phrases", "Vocabulary", "Opposites"] };

export const sections = [
  {
    roman: "I",
    instruction: `The poet has used phrases like 'blooms of the dawn' and 'fairies of sleep' in the poem. In the same way we can create phrases. Now, select words from Column 1 and Column 2 and combine them with 'of'. Write as many phrases as possible in Column 3. An example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        columns: ["Column 1", "", "Column 2", "Column 3"],
        rows: [
          ["wings", { text: "of", rowspan: 9 }, "the birds", "wings of the wind"],
          ["waves", "the wind", "______"],
          ["dreams", "the evening", "______"],
          ["songs", "the children", "______"],
          ["glimmers", "the rain", "______"],
          ["cries", "the stars", "______"],
          ["tears", "the thunder", "______"],
          ["roars", "the ocean", "______"],
          ["shadows", "the clouds", "______"]
        ],
        answer: [
          ["wings", { text: "of", rowspan: 9 }, "the birds", "wings of the wind"],
          ["waves", "the wind", "waves of the ocean"],
          ["dreams", "the evening", "dreams of the children"],
          ["songs", "the children", "songs of the birds"],
          ["glimmers", "the rain", "glimmers of the stars"],
          ["cries", "the stars", "cries of the children"],
          ["tears", "the thunder", "tears of the rain"],
          ["roars", "the ocean", "roars of the thunder"],
          ["shadows", "the clouds", "shadows of the evening"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `The poet uses words like 'dawn', 'night' and 'midnight' to show different parts of the day. The box given below has some more words. Write the words in the appropriate columns.`,
    items: [
      {
        n: 1, type: "table",
        wordBox: ["twilight", "dawn", "dusk", "sunrise", "noon", "daybreak", "nightfall", "sunset", "midnight", "sunup", "forenoon", "sundown", "noontime", "night-time", "noonday", "midday"],
        columns: ["Morning", "Afternoon", "Evening", "Night"],
        rows: [["______", "______", "______", "______"]],
        answer: [["dawn, sunrise, daybreak, sunup, forenoon", "noon, noontime, noonday, midday", "twilight, dusk, sunset, sundown, nightfall", "midnight, night-time"]]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Match the words from the text given in Column 1 with their opposites in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        left: ["strange", "dawn", "launch", "bulging", "float", "lading"],
        right: ["halt", "emptying", "sink", "dusk", "ordinary", "shrinking"],
        leftLabels: ["1.", "2.", "3.", "4.", "5.", "6."],
        rightLabels: ["(i)", "(ii)", "(iii)", "(iv)", "(v)", "(vi)"],
        answer: ["E", "D", "A", "F", "C", "B"]
      }
    ]
  }
];
