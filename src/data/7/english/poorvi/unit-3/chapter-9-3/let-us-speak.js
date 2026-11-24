export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking", "Preferences"] };

export const sections = [
  {
    roman: "",
    instruction: `Read the questions listed below. Which of the two given options do you prefer?`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "activity", question: `How do you like to travel?`, options: [`Bus`, `train`], answer: "*(Personal answer - sample.)* I like to travel by train, because I can sit by the window, walk about and enjoy the view." },
          { label: "2", type: "activity", question: `What kind of a trip do you like?`, options: [`Family trip`, `school trip`], answer: "*(Personal answer - sample.)* I like a family trip, because we can plan it together and I can spend time with my parents and grandparents." },
          { label: "3", type: "activity", question: `Where would you like to go?`, options: [`Beaches`, `mountains`], answer: "*(Personal answer - sample.)* I would like to go to the mountains, because the air is fresh and the views are magnificent." },
          { label: "4", type: "activity", question: `What do you like to do on a trip?`, options: [`Adventure activities`, `sightseeing`], answer: "*(Personal answer - sample.)* I like sightseeing, because I learn about the history and culture of a place." },
          { label: "5", type: "activity", question: `When do you like to travel?`, options: [`Winter`, `summer`], answer: "*(Personal answer - sample.)* I like to travel in winter, because the weather is pleasant and I do not get tired in the heat." },
          { label: "6", type: "activity", question: `What kind of places would you like to visit?`, options: [`Historic monuments`, `wildlife sanctuaries`], answer: "*(Personal answer - sample.)* I would like to visit wildlife sanctuaries, because I love watching animals and birds in their natural homes." },
          { label: "7", type: "activity", question: `How long a trip would you like?`, options: [`Short`, `long`], answer: "*(Personal answer - sample.)* I would like a long trip, because it gives enough time to see many places without hurrying." }
        ]
      },
      {
        n: 2, type: "activity",
        reference: {
          title: "Phrases to use",
          body: `- I prefer... to... because...\n- I would rather... than... because...\n- I like... better than... as...\n- ... is or are better than... because...\n- ... appeal or appeals to me more than... as...\n- I am alright with both, but I prefer... because...\n- Given a choice, I would go for... over... as...`
        },
        question: `Now, work in pairs and tell each other about your preferences with respect to the questions. You may use the phrases given below to speak about your choices.`,
        answer: [
          "*(Pair activity - sample conversation.)*",
          "**A:** How do you like to travel?",
          "**B:** I prefer train to bus because I can move about and look out of the window. What about you?",
          "**A:** I am alright with both, but I prefer the bus because it takes me right to the town.",
          "**A:** Where would you like to go?",
          "**B:** Given a choice, I would go for the mountains over the beaches, as the weather is cool. And you?",
          "**A:** I would rather go to a beach than the mountains because I love the sea and sand."
        ]
      }
    ]
  }
];
