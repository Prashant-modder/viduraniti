export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Pronunciation", "-ough words"] };

export const sections = [
  {
    roman: "I",
    instruction: `Read the following sentences from the text.`,
    items: [
      {
        n: 1, type: "activity",
        reference: {
          title: "Sentences from the text and the pronunciation note",
          body: `*As usual, I had to be involved, though I'd have preferred to finish my novel.*\n\n*"We're old enough to look after ourselves, Ma," I said.*\n\nThe word 'though' rhymes with 'low', and the word 'enough' rhymes with 'puff'. Many English words end in -ough, and they are pronounced in very different ways.`
        },
        wordBox: ["bough", "dough", "through", "cough", "thought", "plough"],
        question: `Listen to the teacher say these words aloud and notice how they are pronounced.`,
        answer: [
          "*(Listening and speaking activity - notes.)*",
          "- though rhymes with *low*; enough rhymes with *puff*.",
          "- Listen for the different ends: through (*threw*), cough (*off*), dough (*go*), bough and plough (*now*), thought (*taught*).",
          "- Repeat each word after the teacher, slowly first and then at normal speed."
        ]
      },
      {
        n: 2, type: "table",
        wordBox: ["bough", "dough", "through", "cough", "thought", "plough"],
        question: `Now, work in pairs. Pronounce these words out loud and put them in the correct boxes given below.`,
        columns: ["Sounds like 'oo'", "Sounds like 'off'", "Sounds like 'o'", "Sounds like 'ow'", "Sounds like 'aw'"],
        rows: [["______", "______", "______", "______", "______"]],
        answer: [["through", "cough", "dough", "bough, plough", "thought"]]
      },
      {
        n: 3, type: "activity",
        question: `Share more words that sound similar to the words in the table.`,
        answer: [
          "*(Class discussion - sample answer.)*",
          "- Sounds like 'oo': too, blue, who, grew",
          "- Sounds like 'off': trough, scoff, off",
          "- Sounds like 'o': though, although, go, snow",
          "- Sounds like 'ow': now, cow, how, brow",
          "- Sounds like 'aw': bought, fought, caught, ought"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Read the story given below aloud. Check the correct pronunciation with the teacher.`,
    items: [
      {
        n: 1, type: "activity",
        passage: `In spite of a nagging **cough**, the woman continued working in her farm, right **through** the **rough** weather. She filled up the **trough** with water for her cows and **ploughed** the fields to plant the seeds. She then plucked some raw mangoes from a low **bough** of a mango tree to make a spicy chutney. **Though** the day had been **tough**, she smiled peacefully as she had already prepared **dough** to make **enough** rotis for dinner.`,
        answer: [
          "*(Reading-aloud activity - the bold words sound like this.)*",
          "- **cough** and **trough** end like *off*.",
          "- **through** sounds like *threw*.",
          "- **rough**, **tough** and **enough** end like *puff*.",
          "- **ploughed** and **bough** have the *ow* sound, as in *now*.",
          "- **though** and **dough** end like *low*."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Now try saying this tongue twister fast as many times as you can clearly.`,
    items: [
      {
        n: 1, type: "activity",
        passage: `*The boy with the tough dough on the rose bough fell in the trough and caught a cough.*`,
        answer: [
          "*(Speaking activity - tips.)*",
          "- Say it slowly first, getting each -ough ending right: tough (*puff*), dough (*low*), bough (*now*), trough and cough (*off*).",
          "- Then speed up a little at a time, and take turns with a partner to see who can say it clearly the most times."
        ]
      }
    ]
  }
];
