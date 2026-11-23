export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: `Fill in the blanks with the correct expressions from the text given in the box below.`,
    items: [
      {
        n: 1,
        wordBox: ["came into existence", "to no end", "in full glory", "in disbelief", "to name a few", "age-old problem"],
        parts: [
          { label: "1", type: "fill", question: "I have read many stories ______ .", answer: "**to name a few** (Panchatantra, Jataka tales, to name a few)" },
          { label: "2", type: "fill", question: "Do you know when this little town ______ ?", answer: "**came into existence**" },
          { label: "3", type: "fill", question: "His hard work has helped him ______ .", answer: "**to no end**" },
          { label: "4", type: "fill", question: "There are no simple solutions to the ______ of traffic jams.", answer: "**age-old problem**" },
          { label: "5", type: "fill", question: "He opened the ancient wooden box and stared at the treasure ______ .", answer: "**in disbelief**" },
          { label: "6", type: "fill", figure: { src: "images/garden.png", alt: "A colourful garden with flowers in bloom" }, question: "The garden is ______ in spring with lots of beautiful flowers in bloom.", answer: "**in full glory**" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Select the correct synonyms from the box given below that match the list of words in 1–5. You may refer to a thesaurus.`,
    items: [
      {
        n: 1, type: "table",
        wordBox: ["colossal", "exotic", "serene", "enigmatic", "spectacular"],
        question: "Select the correct synonym for each list of words.",
        columns: ["Words", "Synonym from the box"],
        rows: [["1. mysterious, puzzling, baffling", "______"], ["2. mighty, gigantic, huge", "______"], ["3. breath-taking, stunning, awe-inspiring", "______"], ["4. peaceful, calm, tranquil", "______"], ["5. unusual, peculiar, foreign", "______"]],
        answer: [["1. mysterious, puzzling, baffling", "enigmatic"], ["2. mighty, gigantic, huge", "colossal"], ["3. breath-taking, stunning, awe-inspiring", "spectacular"], ["4. peaceful, calm, tranquil", "serene"], ["5. unusual, peculiar, foreign", "exotic"]]
      }
    ]
  },
  {
    roman: "III",
    instruction: `The expressions 'hide-and-seek' and 'flora and fauna' are used in the text. These are called binomials—a pair of fixed words joined by 'and' or 'or'. The binomials are mostly synonyms, antonyms, rhyming words, same sound words (alliterations), etc. Match the binomials in Column 1 with their meanings in Column 2. You may refer to a dictionary.`,
    items: [
      {
        n: 1, type: "match",
        question: "Match each binomial with its meaning.",
        left: ["odds and ends", "on and off", "mix and match", "all or nothing", "part and parcel", "pick and choose", "sooner or later", "leaps and bounds"],
        right: [
          "put different things together to get a range of possibilities",
          "complete part of or belong to",
          "choose only the best (things, people, etc.)",
          "at some time in the future",
          "sometimes, occasionally",
          "increase or develop very quickly",
          "small, unimportant things",
          "something to be done completely or not at all"
        ],
        answer: ["G", "E", "A", "H", "B", "C", "D", "F"]
      },
      {
        n: 2, type: "activity",
        question: "Use the binomials given in Column 1 in sentences of your own.",
        answer: [
          "*(Sample sentences.)*",
          "- The shelf was full of **odds and ends** like buttons, keys and ribbons.",
          "- It rained **on and off** the whole day.",
          "- You can **mix and match** the shirts and trousers.",
          "- In a test of courage it is **all or nothing**.",
          "- Homework is **part and parcel** of school life.",
          "- You cannot **pick and choose** the rules you like.",
          "- **Sooner or later** the truth comes out.",
          "- Her reading has improved by **leaps and bounds**."
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Study the highlighted words in the following sentences from the text. In the given sentences, the highlighted words 'living', 'striking', and 'rugged' are examples of verbs used as adjectives. Such verbs are called participles. Now, fill in the blanks using present participle or past participle form of the verbs in the box given below.`,
    items: [
      {
        n: 1,
        wordBox: ["stand", "amaze", "carve", "scatter", "glow"],
        reference: {
          title: "Participles",
          body: `Sentences from the text: *The **living** root bridges are one of Meghalaya's most beautiful…* and *…creating a **striking** visual contrast against the surrounding **rugged** terrain.*\n\n**Participles** are verb forms that can function as **adjectives**, and they come in two types: **present participles** ('living' and 'striking') usually ending in -ing, and **past participles** ('rugged') usually ending in -ed, -d, -t, -en, or -n (though irregular verbs may vary).\n\nPresent participles are used to describe ongoing or continuous actions. For example, People have seen these lights **moving** quickly in random directions but often **hanging** out in one spot for a while before **fading**.\n\nPast participles usually describe actions that have already been completed. For example, When the vehicles are parked at the **indicated** spot, they begin moving forward at a speed of almost 20 km/h.`
        },
        parts: [
          { label: "1", type: "fill", question: "The ______ marble monument looks even more spectacular in the moonlight.", answer: "**glowing**" },
          { label: "2", type: "fill", question: "The ______ view of the Himalayas from Darjeeling attracts visitors from all over the world.", answer: "**amazing**" },
          { label: "3", type: "fill", question: "The Sun Temple in Konark features intricately ______ stone wheels and walls.", answer: "**carved**" },
          { label: "4", type: "fill", question: "______ at a height of 182 m, the Statue of Unity is dedicated to Sardar Vallabhbhai Patel.", answer: "**Standing**" },
          { label: "5", type: "fill", question: "The ______ islands of the Andaman and Nicobar offer some of the cleanest beaches in India.", answer: "**scattered**" }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: `Study the highlighted word in the following sentence from the text. Crossing the many waterways without bridges was difficult for people in the past, during monsoons. In the given sentence, the highlighted word 'crossing', is one example of a verb used as a noun. Such a verb is called gerund. Underline the gerunds and participles in the following sentences. Write 'G' for gerunds and 'P' for participles in the space provided. One example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        reference: {
          title: "Gerunds",
          body: `**Gerunds** are verb forms that can function as **nouns** and they end in -ing. They can serve as the subject, complement, or object in a sentence, as well as the object of a preposition.\n\n- Subject of a sentence: **Swimming** is my favourite hobby.\n- Subject complement: Her passion is **painting**.\n- Object of a verb: I enjoy **reading** books in my free time.\n- Object of a preposition: She is interested in **learning** new languages.\n- After certain verbs: Shekar avoided **talking** about his weekend plans.`
        },
        question: "Write 'G' for gerunds and 'P' for participles.",
        columns: ["Sentence", "G or P"],
        rows: [
          ["1. Dancing is a great way to express emotions.", "G"],
          ["2. Travelling can broaden your perspective.", "______"],
          ["3. The falling leaves signalled the arrival of autumn.", "______"],
          ["4. She enjoys cooking new recipes for her family.", "______"],
          ["5. Reading helps improve your vocabulary.", "______"],
          ["6. He watched the shimmering stars in the night sky.", "______"],
          ["7. Forgetting the keys inside, Kanchan locked the door.", "______"]
        ],
        answer: [
          ["1. Dancing is a great way to express emotions.", "G"],
          ["2. Travelling can broaden your perspective.", "G (subject of the sentence)"],
          ["3. The falling leaves signalled the arrival of autumn.", "P (describes 'leaves')"],
          ["4. She enjoys cooking new recipes for her family.", "G (object of 'enjoys')"],
          ["5. Reading helps improve your vocabulary.", "G (subject of the sentence)"],
          ["6. He watched the shimmering stars in the night sky.", "P (describes 'stars')"],
          ["7. Forgetting the keys inside, Kanchan locked the door.", "P (a participle phrase describing Kanchan)"]
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: `Combine the following pairs of sentences using participles or gerunds. You may use the clues given in brackets. One example has been done for you.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "Nitesh entered the room. He saw his friend sitting in the corner. (participle)  Answer: Entering the room, Nitesh saw his friend sitting in the corner.", answer: "*(Example given in the book.)*" },
          { label: "2", type: "short", question: "Smitha walked carelessly. She slipped on the doormat. (participle)", answer: "**Walking** carelessly, Smitha slipped on the doormat." },
          { label: "3", type: "short", question: "Sleep for eight hours. It is good for health. (gerund)", answer: "**Sleeping** for eight hours is good for health." },
          { label: "4", type: "short", question: "Ranjith felt happy about the result. He called his parents. (participle)", answer: "**Feeling** happy about the result, Ranjith called his parents." },
          { label: "5", type: "short", question: "Father encouraged Meena. Meena joined the course. (gerund)", answer: "Father's **encouraging** Meena led to her **joining** the course." }
        ]
      }
    ]
  }
];
