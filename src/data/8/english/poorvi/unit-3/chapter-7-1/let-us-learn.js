export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: `Match the phrasal verbs from the text given in Column 1 with their meanings in Column 2. You may refer to a dictionary.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each phrasal verb with its meaning.",
        left: ["put on", "cooled down", "turned up", "make of", "figure out", "got away with"],
        right: ["appeared, been discovered", "solve a problem", "became normal or calmed", "wear (clothes, hat, etc.)", "escaped without being punished", "have an idea or understanding of something"],
        answer: ["D", "C", "A", "F", "B", "E"]
      },
      {
        n: 2,
        passage: "Now, fill in the blanks with the phrasal verbs given in Column 1.",
        wordBox: ["put on", "cooled down", "turned up", "make of", "figure out", "got away with"],
        parts: [
          { label: "A", type: "fill", question: "Finally, some important evidence about the case has ______ .", answer: "**turned up**" },
          { label: "B", type: "fill", question: "After I ______ , I understood that I had made a big mistake.", answer: "**cooled down**" },
          { label: "C", type: "fill", question: "I couldn't ______ why he was angry with me.", answer: "**figure out**" },
          { label: "D", type: "fill", question: "He ______ his special coat and went to his friend's birthday party.", answer: "**put on**" },
          { label: "E", type: "fill", question: "Ravi forgets to do his homework but he ______ it as teacher didn't ask for it that day.", answer: "**got away with**" },
          { label: "F", type: "fill", question: "I do not know what to ______ his behaviour.", answer: "**make of**" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Fill in the blanks in the following sentences by choosing the correct word pairs from the box given below.`,
    items: [
      {
        n: 1,
        wordBox: ["week/weak", "dying/dyeing", "fore/four", "peace/piece", "break/brake"],
        parts: [
          { label: "1", type: "fill", question: "After running for 50 kilometres last ______ , I felt ______ for two days.", answer: "**week**, **weak**" },
          { label: "2", type: "fill", question: "When the committee met yesterday, they brought ______ local cases to the ______ .", answer: "**four**, **fore**" },
          { label: "3", type: "fill", question: "While learning to drive, Rina used too much force on the ______ , causing the car to ______ down.", answer: "**brake**, **break**" },
          { label: "4", type: "fill", question: "He has composed a beautiful ______ of music in order to bring ______ to thousands of people.", answer: "**piece**, **peace**" },
          { label: "5", type: "fill", question: "She was busy ______ her hair not caring about the ______ flowers in her garden.", answer: "**dyeing**, **dying**" }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Leroy solved the mystery of the missing fifth word with his critical thinking abilities. Work in pairs to solve the puzzles given in the illustrations below and infer what they say. One example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/rebus-puzzles.png", alt: "Eight picture puzzles; the example shows SECRET three times with an arrow, answer: Top secret" },
        question: "Answer: Top secret (example). Now solve the eight puzzles.",
        columns: ["Puzzle", "What it says"],
        rows: [["1. AGED AGED AGED (middle one underlined)", "______"], ["2. Try  stand / 2", "______"], ["3. Up arrow and 'uu'", "______"], ["4. GO It It It It", "______"], ["5. six 'sense' (last one circled)", "______"], ["6. M1LLION", "______"], ["7. ONCE above a clock", "______"], ["8. ROADS across and down", "______"]],
        answer: [
          ["1. AGED AGED AGED (middle one underlined)", "Middle-aged"],
          ["2. Try  stand / 2", "Try to understand (stand under 2 = understand; 2 = to)"],
          ["3. Up arrow and 'uu'", "Up to you (our best reading - check with your teacher)"],
          ["4. GO It It It It", "Go for it (four = for)"],
          ["5. six 'sense' (last one circled)", "Sixth sense"],
          ["6. M1LLION", "One in a million"],
          ["7. ONCE above a clock", "Once upon a time"],
          ["8. ROADS across and down", "Crossroads"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Spoonerism is a mistake made when speaking, where the first sounds of the words in a phrase or a sentence are exchanged with each other. This usually gives a funny meaning. Some examples of spoonerism are saying 'wrong load' instead of 'long road', 'round of mice' instead of 'mound of rice'. Find the correct order for the following spoonerisms.`,
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/spoonerism-mice.png", alt: "Mice around a heap of rice in a bowl" },
        question: "Find the correct order for each spoonerism.",
        columns: ["Spoonerism", "Correct phrase"],
        rows: [["1. knowing sits", "______"], ["2. it's roaring with pain.", "______"], ["3. plaster man", "______"], ["4. blarm wanket", "______"], ["5. tars and crucks", "______"], ["6. shake a tower", "______"], ["7. bead a rook", "______"], ["8. mardon me padam", "______"]],
        answer: [
          ["1. knowing sits", "sewing kits (the first sounds are swapped; check with your teacher)"],
          ["2. it's roaring with pain.", "it's pouring with rain."],
          ["3. plaster man", "master plan"],
          ["4. blarm wanket", "warm blanket"],
          ["5. tars and crucks", "cars and trucks"],
          ["6. shake a tower", "take a shower"],
          ["7. bead a rook", "read a book"],
          ["8. mardon me padam", "pardon me madam"]
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: `Read the following sentences from the text and study the highlighted words (that, what, where, who, while, when, as, because of, before). Now, fill in the blanks with the words in the box given below to complete the following sentences. There are two extra words that you do not need.`,
    items: [
      {
        n: 1, type: "blanks",
        figure: { src: "images/detective-book.png", alt: "A book titled Detective story" },
        wordBox: ["where", "why", "who", "though", "which", "when", "because", "whose", "if", "how"],
        question: "Fill in the blanks.",
        passage: "Detective stories are exciting, keeping readers guessing (i) ______ the real culprit is. They take place in settings (ii) ______ clues are hidden carefully. (iii) ______ the mystery seems tricky, a clever detective always finds answers. Readers often wonder (iv) ______ criminals leave small but important clues. The challenge is to decide (v) ______ suspect is guilty. (vi) ______ the truth is revealed, everything makes sense. But one may wonder (vii) ______ they could have solved it themselves. These stories are fun (viii) ______ they make readers think till the very end.",
        answer: ["(i) **who**", "(ii) **where**", "(iii) **Though**", "(iv) **why**", "(v) **which**", "(vi) **When**", "(vii) **if**", "(viii) **because**", "*Extra words: whose, how.*"]
      }
    ]
  },
  {
    roman: "VI",
    instruction: `Combine the following pairs of sentences using the word given in brackets. One example has been done for you.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "We gave him the signal. He was waiting for the signal. (that)  Answer: We gave him the signal that he was waiting for.", answer: "*(Example given in the book.)*" },
          { label: "2", type: "short", question: "We went to a place. The incident occurred there. (where)", answer: "We went to the place **where** the incident occurred." },
          { label: "3", type: "short", question: "Teacher said she would retire soon. She is now nearly sixty. (who)", answer: "The teacher, **who** is now nearly sixty, said she would retire soon." },
          { label: "4", type: "short", question: "It was the day. Half the class was absent. (when)", answer: "It was the day **when** half the class was absent." }
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: `Read the following sentences from the text. The given sentences are the direct words of the speaker, hence, they are in direct speech. While reporting these direct words to someone else at some other time and some other place, we make certain modifications in person, tense, and adverbs of place and time. There are two types of Interrogative sentences. They are Wh- questions and Yes/No questions. Now, follow these steps to transform the sentences given as examples from direct speech to indirect speech.`,
    items: [
      {
        n: 1, type: "table",
        reference: {
          title: "Rules for changing direct speech to indirect speech",
          body: `**Tense Changes (Time Shift)**\n\n- Present → Past\n- Past → Past Perfect\n- Past Perfect → No change\n- Present Progressive → Past Progressive\n- Past Progressive → Past Perfect Progressive\n- Present Perfect → Past Perfect\n- Present Modal (e.g., will) → Past Modal (e.g., would)\n- Past Modal → No change\n\n**Pronoun Changes (Subject-Perspective Shift)**\n\n- I → she/he\n- you (singular) → she/he\n- you (plural) → us\n- we → they\n- my → her/his\n- our → their\n- your → her/his/their\n- me → her/him\n- us → them\n- mine → hers/his\n- ours → theirs\n- yours → hers/his/theirs\n\n**Time and Place Changes**\n\n- now → then\n- ago → before\n- today → that day\n- tomorrow → the following day\n- yesterday → the day before\n- next week/month/year → the following week/month/year\n- here → there\n- this → that\n- these → those\n\n**Steps for Reporting Wh- questions and Yes/No questions**\n\n1. Replace the reporting verb 'said' with words like 'asked', 'inquired', 'interrogated', or 'questioned'.\n2. Convert the interrogative sentence into a declarative one.\n3. Apply the appropriate tense shift as per the rules of tense changes.\n4. Remove quotation marks and the question mark.\n5. Omit the conjunction 'that' in the reported speech.\n6. In Wh- questions, place the Wh- word immediately after the reporting verb in the reported speech.\n7. In Yes/No questions, use 'if' or 'whether' immediately after the reporting verb in the reported speech.`
        },
        question: "Indirect Speech: complete (i) to (v).",
        columns: ["Direct speech", "Indirect speech"],
        rows: [
          ["1. \"What's suspicious about that?\" Mrs. Brown asked.", "(i) Mrs. Brown asked ______ ."],
          ["2. \"What do you make of the four words, Leroy?\"", "(ii) Mrs. Brown questioned Leroy ______ ."],
          ["3. \"Wasn't he mixed up in a jewellery robbery a few years ago?\"", "(iii) Mrs. Brown inquired ______ ."],
          ["4. \"Didn't you search Nolan's house, dear?\"", "(iv) Mrs. Brown asked Chief Brown ______ ."],
          ["5. \"Is there a young fir tree in Mr. Nolan's palm-tree nursery?\"", "(v) Mrs. Brown inquired ______ ."]
        ],
        answer: [
          ["1. \"What's suspicious about that?\" Mrs. Brown asked.", "(i) Mrs. Brown asked **what was suspicious about that**."],
          ["2. \"What do you make of the four words, Leroy?\"", "(ii) Mrs. Brown questioned Leroy **what he made of the four words**."],
          ["3. \"Wasn't he mixed up in a jewellery robbery a few years ago?\"", "(iii) Mrs. Brown inquired **if/whether he had not been mixed up in a jewellery robbery a few years before**."],
          ["4. \"Didn't you search Nolan's house, dear?\"", "(iv) Mrs. Brown asked Chief Brown **if/whether he had not searched Nolan's house**."],
          ["5. \"Is there a young fir tree in Mr. Nolan's palm-tree nursery?\"", "(v) Mrs. Brown inquired **if/whether there was a young fir tree in Mr. Nolan's palm-tree nursery**. (In the story it is Leroy who asks; the textbook frame uses Mrs. Brown.)"]
        ]
      }
    ]
  },
  {
    roman: "VIII",
    instruction: `Rewrite the following sentences in Reported Speech.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "\"Why did you stop talking to me?\" asked Rohan. Rohan questioned ______ .", answer: "Rohan questioned **why I had stopped talking to him**." },
          { label: "2", type: "short", question: "\"Did you enjoy the family gathering yesterday?\" asked my aunt. My aunt asked ______ .", answer: "My aunt asked **if/whether I had enjoyed the family gathering the day before**." },
          { label: "3", type: "short", question: "\"When will you visit us again?\" asked my grandmother. My grandmother inquired ______ .", answer: "My grandmother inquired **when I would visit them again**." },
          { label: "4", type: "short", question: "Madavi said to Ravi, \"Will you come with me to meet our old teacher tomorrow?\" asked Madavi. Madavi asked Ravi ______ .", answer: "Madavi asked Ravi **if/whether he would go with her to meet their old teacher the following day**." },
          { label: "5", type: "short", question: "My friend said, \"What gift are you planning to give your brother?\" My friend inquired ______ .", answer: "My friend inquired **what gift I was planning to give my brother**." },
          { label: "6", type: "short", question: "\"Shall I carry these notebooks to the staffroom, Ma'am?\" asked Veenu. Veenu asked her teacher ______ .", answer: "Veenu asked her teacher **if/whether she should carry those notebooks to the staffroom**." }
        ]
      }
    ]
  },
  {
    roman: "IX",
    instruction: `Read the conversation between Aditi and Rahul. Complete the following paragraph by transforming the dialogue in indirect speech.`,
    items: [
      {
        n: 1, type: "blanks",
        figure: { src: "images/package-man.png", alt: "A man in a hooded jacket leaving a package near a lift" },
        question: "Aditi: Did you see anyone leave a package near the lift? Rahul: I noticed a man wearing a blue jacket drop it off. Aditi: What time did you see this happen? Rahul: It was around 6:45 p.m. Aditi: Were you able to see his face? Rahul: He wore a hood and so I couldn't see his face.",
        passage: "Aditi asked Rahul 1. ______ .\n\nRahul replied that he had noticed a man wearing a blue jacket drop it off.\n\nAditi asked Rahul 2. ______ .\n\nRahul replied that it had been around 6.45 p.m.\n\nAditi further inquired 3. ______ .\n\nRahul said that he had worn a hood, so he couldn't see his face.",
        answer: [
          "1. **if/whether he had seen anyone leave a package near the lift**",
          "2. **what time he had seen that happen**",
          "3. **if/whether he had been able to see his face**"
        ]
      }
    ]
  }
];
