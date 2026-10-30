export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the words from the text given in Column 1 and match them with suitable pictures in Column 2.",
    items: [
      {
        n: 1, type: "activity", question: "Match the words (glaciers, treehouse, wetlands, pebbles, rafting, plateaus) to pictures.",
        answer: "*(Visual matching activity identifying geographical and travel features based on text descriptions.)*"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the associated words from the text given in the box (blink, scary, existed, amazing, splashed, floating).",
    items: [
      {
        n: 1, type: "short", question: "Match context to words.",
        answer: "1. loud noise, afraid couldn't sleep -> **scary**\n2. used to be a bookstore -> **existed**\n3. close and open eyes -> **blink**\n4. threw water at each other -> **splashed**\n5. beautiful green paddy fields -> **amazing**\n6. clouds moving across the sky -> **floating**"
      }
    ]
  },
  {
    roman: "III",
    instruction: "The following word grid has six words related to 'travel' used in the lesson. Circle the words in the grid.",
    items: [
      { n: 1, type: "activity", question: "Find travel words in the grid.", answer: "*(Visual activity. Hidden words include TRAIN, BOAT, RAFT, SURF, and TRAVEL.)*" }
    ]
  },
  {
    roman: "IV & V",
    instruction: "Subject-Verb Agreement: Choose the correct option from the words given in the brackets.",
    items: [
      {
        n: 1, type: "blanks", passage: "Choose the correct verb form (is/are, has/have, was/were, makes/make, etc.).",
        answer: [
          "1. A pair of sunglasses **is** essential when travelling to sunny destinations.",
          "2. Either the tour guide or the tourists **have** to arrive first at the meeting point. *(Rule: matches the closer subject 'tourists')*",
          "3. The information on travel expenses **is** useful for first-time travellers.",
          "4. Neither the flight crew nor the pilot **was** aware of the delay. *(Rule: matches the closer subject 'pilot')*",
          "5. The news about the heavy rains **makes** many people reconsider their vacation plans. *(Rule: 'news' is singular)*",
          "6. A pair of binoculars **is** useful for spotting wildlife on a safari.",
          "7. The hill stations in India **remain** a popular travel destination during winter.",
          "8. Keeping accounts **is** important for spending money wisely during travel.",
          "9. Either the ticket or the bus passes **need** to be used for travelling in the tourist bus. *(Rule: matches 'passes')*",
          "10. Neither the passengers nor the taxi driver **was** aware of the best route to the hotel."
        ]
      }
    ]
  }
];
