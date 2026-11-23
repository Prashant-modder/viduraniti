export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking", "Pronunciation"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read aloud the list of words from the poem that end in '-ed'. As you read, focus on the final sound of each word and place them in the appropriate columns. One example has been done for you. Note: adjectives that come before a noun and end with '-ed' have /id/ as the final sound.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["ragged", "aged", "waited", "heeded", "offered", "paused", "guided", "whispered"],
        question: "Sort the words by the final sound.",
        columns: ["/id/ sound", "/d/ sound", "/t/ sound"],
        rows: [["______", "______", "______"]],
        answer: [[
          "ragged, aged, waited, heeded, guided",
          "offered, paused, whispered",
          "(none in this list - words like 'passed' or 'asked' belong here)"
        ]]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Work in pairs. Narrate an incident where you helped someone in the past. Take turns to speak and use the cue cards (at school - classmate explaining a concept; in the neighbourhood - cleanliness campaign; at the market place - elderly carrying bags; in the playground - a friend gets injured) and the prompts.",
    items: [
      {
        n: 1, type: "activity",
        wordBox: [
          "It all started when...",
          "The day began like any other...",
          "I still remember...",
          "At that moment, I realised...",
          "I was completely taken by surprise...",
          "A wave of relief/joy/excitement washed over me...",
          "From that day on...",
          "This experience taught me the value of..."
        ],
        question: "Narrate an incident where you helped someone.",
        answer: [
          "*(Sample narration.)*",
          "The day began like any other. I was in the market with my mother when I saw an elderly man struggling with two heavy bags. At that moment, I realised that no one was stopping to help. I walked up and asked, 'May I carry one for you?' He smiled and gave me a bag, and we walked together to the bus stop. A wave of joy washed over me when he blessed me. This experience taught me the value of small acts of kindness."
        ]
      }
    ]
  }
];
