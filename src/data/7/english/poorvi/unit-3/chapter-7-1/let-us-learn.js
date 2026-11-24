export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Onomatopoeia", "Binomials", "Idioms", "Past perfect"] };

export const sections = [
  {
    roman: "I",
    instruction: `Read the highlighted word in the following sentence.`,
    items: [
      {
        n: 1, type: "table",
        reference: {
          title: "Sentence from the story and a note on onomatopoeia",
          body: `*It's quite simple. The moment the door opens, this alarm is tripped off and makes a **clanging** sound.*\n\nWords that imitate the actual sound of the thing they name are called **onomatopoeic words**. Examples are the 'boom' of a firework, the 'ding-dong' of a bell, the 'pitter-patter' of raindrops and the 'tick-tock' of a clock.`
        },
        wordBox: ["whispered angrily", "constant and loud construction noises", "sudden loud sound of breaking", "a continuous low and soothing sound"],
        question: `Read the sound words used in the story in Column 1. Complete Column 2 by matching expressions from the box given below. An example has been done for you.`,
        columns: ["Column 1", "Column 2"],
        rows: [
          ["(i) Crash", "sudden loud sound of breaking"],
          ["(ii) Humming", "______"],
          ["(iii) Hissed", "______"],
          ["(iv) Hammering, sawing, clattering", "______"]
        ],
        answer: [
          ["(i) Crash", "sudden loud sound of breaking"],
          ["(ii) Humming", "a continuous low and soothing sound"],
          ["(iii) Hissed", "whispered angrily"],
          ["(iv) Hammering, sawing, clattering", "constant and loud construction noises"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Read the highlighted phrase in the following sentence from the text.`,
    items: [
      {
        n: 1, type: "match",
        reference: {
          title: "Sentence from the story and a note on binomials",
          body: `*Well, that was the end of **peace and quiet** in the house.*\n\nA **binomial** is a pair of words, usually joined by a conjunction such as 'and' or 'or', that always appear together in the same order. The two words give one meaning or opposite meanings. In the exercise below, the words of Column 1 and Column 2 are joined by **and** or **or**.`
        },
        question: `Match the words in Column 1 with the correct pairs in Column 2 to make binomials.`,
        left: ["safe", "odds", "make", "pros", "now", "give"],
        right: ["break", "cons", "never", "take", "sound", "ends"],
        answer: ["E", "F", "A", "B", "C", "D"]
      },
      {
        n: 2,
        passage: `Complete the following sentences with suitable binomials from 1.`,
        parts: [
          { label: "i", type: "fill", question: `This project will be a ______________ moment for our team's success.`, answer: "**make or break**" },
          { label: "ii", type: "fill", question: `After a long journey, we were relieved to arrive home ______________.`, answer: "**safe and sound**" },
          { label: "iii", type: "fill", question: `Every friendship works well when there is a balance of ______________.`, answer: "**give and take**" },
          { label: "iv", type: "fill", question: `She organised all the ______________ in the cupboard, to make space for new clothes.`, answer: "**odds and ends**" },
          { label: "v", type: "fill", question: `Before making a decision, it is important to weigh the ______________ carefully.`, answer: "**pros and cons**" },
          { label: "vi", type: "fill", question: `This is our final chance to perform on stage, it is ______________.`, answer: "**now or never**" }
        ]
      },
      {
        n: 3, type: "blanks",
        wordBox: ["tripped off", "let up", "turned out", "ran out of", "rigged up"],
        question: `Complete the paragraph by using the phrasal verbs given in the box below.`,
        passage: `It had been raining and we (i) ___________ time to set up for the function, so we quickly (ii) ___________ some decorations using whatever materials we had. We accidentally (iii) ___________ the fire alarm because of the smoke from the bonfire. Thankfully, the rain (iv) ___________ just as the guests were arriving, and despite all the chaos, the function (v) ___________ to be a huge success.`,
        answer: ["(i) **ran out of**", "(ii) **rigged up**", "(iii) **tripped off**", "(iv) **let up**", "(v) **turned out**"]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Read the highlighted expressions in the following sentence from the text.`,
    items: [
      {
        n: 1,
        reference: {
          title: "Sentence from the story and a note on idioms",
          body: `*And this is not the first time he's **got on Papa's nerves** or **frightened someone half to death** in the house.*\n\nThe highlighted expressions are **idioms**. An idiom is a phrase whose meaning is different from the literal meaning of its words, and people understand it as a special saying. For example, 'It is raining cats and dogs' means that it is raining very heavily.`
        },
        wordBox: ["leaving the coast clear", "get on our nerves", "fell over ourselves", "frighten me half to death", "get a shelling"],
        passage: `Complete the following sentences by filling in the blanks with suitable idioms from the text given in the box below.`,
        parts: [
          { label: "1", type: "fill", question: `Shekhar knew he would _______________________ for breaking his mother's favourite flower vase.`, answer: "**get a shelling**" },
          { label: "2", type: "fill", question: `We _______________________ trying to help the injured dog and get it to the vet as quickly as possible.`, answer: "**fell over ourselves**" },
          { label: "3", type: "fill", question: `Faizy distracted Kanchan, _______________________ for us to get inside the room to prepare the birthday surprise.`, answer: "**leaving the coast clear**" },
          { label: "4", type: "fill", question: `The constant power fluctuations during meetings can _______________________.`, answer: "**get on our nerves**" },
          { label: "5", type: "fill", question: `When I am alone at home, any unexpected loud noise in the night can _______________________.`, answer: "**frighten me half to death**" }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Read the highlighted words in the given sentence.`,
    items: [
      {
        n: 1,
        reference: {
          title: "Sentence from the story and a note on the tenses",
          body: `*It **was** indeed the fellow who **had** recently **begun** sweeping out the compounds in our row of houses.*\n\nThe sentence speaks of two completed actions in the past: the more recent one (new action, simple past) and the earlier one (old action, past perfect).`
        },
        passage: `Underline the verbs in simple past and past perfect tense for the following sentences from the text.`,
        parts: [
          { label: "i", type: "short", question: `Ma had rushed in to see what the racket was all about and found Papa standing there, sopping wet and scowling.`, answer: "Past perfect: **had rushed**. Simple past: **found**." },
          { label: "ii", type: "short", question: `Anand had vanished by this time and reappeared only after dinner when Papa had cooled down.`, answer: "Past perfect: **had vanished**, **had cooled down**. Simple past: **reappeared**." }
        ]
      },
      {
        n: 2,
        passage: `Fill in the blanks with the simple past or past perfect form of the verbs given in brackets.`,
        parts: [
          { label: "i", type: "blanks", question: `After Rohan A. __________ (finish) his homework, he B. __________ (decide) to go for a walk. He C. __________ (leave) the house and D. __________ (realise) he E. __________ (forget) his keys inside.`, answer: ["A. **had finished**", "B. **decided**", "C. **left**", "D. **realised**", "E. **had forgotten**"] },
          { label: "ii", type: "blanks", question: `By the time we A. __________ (reach) the station, the train B. __________ (already/leave). We C. __________ (wait) for the next one to arrive.`, answer: ["A. **reached**", "B. **had already left**", "C. **waited**"] }
        ]
      },
      {
        n: 3, type: "table",
        question: `Combine the pairs of sentences using the time expressions in the boxes given below and rewrite them using the past perfect tenses. An example has been done for you.`,
        example: `Rohan had packed his suitcase before he left for the airport.`,
        columns: ["Old Actions", "Time Expressions", "New Actions"],
        answerHead: "Combined sentence (past perfect)",
        rows: [
          ["(i) Rohan packed his suitcase.", { text: "before, after, by the time, when", rowspan: 5 }, "He left for the airport."],
          ["(ii) We started work.", "He arrived in the morning."],
          ["(iii) They set up the tents.", "The others brought food and medicine."],
          ["(iv) The students became quiet.", "They heard the teacher coming."],
          ["(v) The villagers left the village.", "The flood submerged the entire area."]
        ],
        answer: [
          ["(i) Rohan packed his suitcase.", { text: "before, after, by the time, when", rowspan: 5 }, "He left for the airport.", "*(Example given in the book.)* Rohan had packed his suitcase before he left for the airport."],
          ["(ii) We started work.", "He arrived in the morning.", "We had started work by the time he arrived in the morning."],
          ["(iii) They set up the tents.", "The others brought food and medicine.", "They had set up the tents before the others brought food and medicine."],
          ["(iv) The students became quiet.", "They heard the teacher coming.", "The students had become quiet before they heard the teacher coming."],
          ["(v) The villagers left the village.", "The flood submerged the entire area.", "The villagers had left the village before the flood submerged the entire area."]
        ]
      }
    ]
  }
];
