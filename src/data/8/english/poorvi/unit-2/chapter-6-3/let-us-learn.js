export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Replace the underlined words in each sentence with the correct synonym from the box. You may refer to a dictionary.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["essential", "swift", "lifelong", "momentary", "useful", "splendid"],
        question: "Write the synonym for the underlined word.",
        columns: ["Sentence", "Synonym"],
        rows: [
          ["1. He received the award in a magnificent ceremony.", "______"],
          ["2. I felt a fleeting joy when I received the appreciation for my song.", "______"],
          ["3. With today's instant communication, we can share information across the world in seconds.", "______"],
          ["4. Our school focuses on the core values - collaboration, innovation, and unity.", "______"],
          ["5. My teacher's advice on time management is a valuable reminder of the importance of planning.", "______"],
          ["6. Reading books and listening to music can give abiding pleasure that will last forever.", "______"]
        ],
        answer: [
          ["1. magnificent", "splendid"],
          ["2. fleeting", "momentary"],
          ["3. instant", "swift"],
          ["4. core", "essential"],
          ["5. valuable", "useful"],
          ["6. abiding", "lifelong"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the expressions from the text in Column 1 with their meanings in Column 2.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the expressions with their meanings.",
        left: ["in all humility", "hold their heads high", "to be quite honest", "to the best of your ability", "looked at in awe", "somewhere deep down"],
        right: [
          "to speak in a truthful way",
          "doing something using all your skills, talents, and knowledge",
          "observed with great respect and wonder",
          "being humble and having no feeling of self-importance",
          "in the innermost part of the self",
          "be confident and have a positive feeling"
        ],
        answer: ["D", "F", "A", "B", "C", "E"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Make as many words as you can out of the following words. One example has been done for you: community - city, toy, tune, unity, mutiny, cot.",
    items: [
      {
        n: 1, type: "table",
        question: "Make words from each word.",
        columns: ["Word", "Words you can make"],
        rows: [
          ["2. important", "______"],
          ["3. magnificent", "______"],
          ["4. satisfied", "______"],
          ["5. generation", "______"],
          ["6. achievement", "______"]
        ],
        answer: [
          ["2. important", "port, paint, point, print, mint, tram, pant, rat, ant, tip"],
          ["3. magnificent", "magic, game, image, mince, fine, cent, mine, fan, nice, tin"],
          ["4. satisfied", "fast, said, side, feast, sift, tied, aid, east, fits, fed"],
          ["5. generation", "nation, ration, orange, great, green, tone, iron, rate, gain, tire"],
          ["6. achievement", "achieve, chain, chime, event, vein, hive, mice, mine, thin, even"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Let us play a word game - antakshari. Write the word for each clue. Each new word begins with the last letter of the previous word. Continue the game; the first two words IMPORTANT and TROUBLE are given as an example.",
    items: [
      {
        n: 1, type: "table",
        question: "Solve the clues.",
        columns: ["Clue", "Word"],
        rows: [
          ["(i) major (synonym)", "IMPORTANT (example)"],
          ["(ii) problem (synonym)", "TROUBLE (example)"],
          ["(iii) uneven (antonym), starting with E", "______"],
          ["(iv) related to post office, starting with L", "______"],
          ["(v) our moral duty, starting with R", "______"],
          ["(vi) related to time, starting with Y", "______"],
          ["(vii) prosperous (synonym), starting with S", "______"],
          ["(viii) related to being alive, starting with L", "______"]
        ],
        answer: [
          ["(i) major (synonym)", "IMPORTANT"],
          ["(ii) problem (synonym)", "TROUBLE"],
          ["(iii) uneven (antonym), starting with E", "EQUAL"],
          ["(iv) related to post office, starting with L", "LETTER"],
          ["(v) our moral duty, starting with R", "RESPONSIBILITY"],
          ["(vi) related to time, starting with Y", "YEARS"],
          ["(vii) prosperous (synonym), starting with S", "SUCCESSFUL"],
          ["(viii) related to being alive, starting with L", "LIFE"]
        ]
      },
      {
        n: 2, type: "short",
        question: "How does the chain fit into the grid?",
        answer: "Each word begins with the last letter of the word before it and shares that cell: IMPORTANT-T-ROUBLE-E-QUAL-L-ETTER-R-ESPONSIBILIT-Y-EARS-S-UCCESSFU-L-IFE. The letters printed in the grid (L, R, Y, S, E) are the shared letters, and the last letter of LIFE is the E in the last row."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Study the highlighted punctuation marks in the sentences from the text. The long dash can be used to link words or numbers or to create a pause. The en dash (–) shows a span or range of numbers, dates or places; the em dash (—) adds extra information or shows a change in thought. Do not add spaces around the dash. Insert either an em dash or an en dash suitably.",
    items: [
      {
        n: 1, type: "table",
        question: "Insert an en dash (–) or an em dash (—).",
        columns: ["Sentence", "Answer"],
        rows: [
          ["(i) The conference will be held from March 15 __ March 20.", "______"],
          ["(ii) I have lived in Kanpur __ Raipur for five years now.", "______"],
          ["(iii) The artist __ known for her vibrant paintings __ will be showcasing her work in Guwahati.", "______"],
          ["(iv) The scores for the final match were 2 __ 3.", "______"],
          ["(v) My favourite snacks __ samosas, pakoras, and jalebis __ are all from India.", "______"],
          ["(vi) The train journey from Belagavi __ Bengaluru takes less than ten hours.", "______"],
          ["(vii) I just finished reading the book __ it was absolutely amazing!", "______"],
          ["(viii) The event will take place on September 1 __ September 5.", "______"]
        ],
        answer: [
          ["(i)", "March 15–March 20 (en dash: a range of dates)"],
          ["(ii)", "Kanpur–Raipur (en dash: from one place to the other; the textbook sentence is unclear)"],
          ["(iii)", "The artist—known for her vibrant paintings—will be... (em dash: extra information)"],
          ["(iv)", "2–3 (en dash: a score)"],
          ["(v)", "My favourite snacks—samosas, pakoras, and jalebis—are... (em dash: extra information)"],
          ["(vi)", "Belagavi–Bengaluru (en dash: a route)"],
          ["(vii)", "the book—it was absolutely amazing! (em dash: a change in thought)"],
          ["(viii)", "September 1–September 5 (en dash: a range of dates)"]
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "'Yours' and 'theirs' indicate possession. 'It's' does not indicate possession but is the contracted form of 'it is' or 'it has'. 'Its' shows that something belongs to it; 'you're' is 'you are' and 'your' shows possession; 'they're' is 'they are' and 'their' shows possession. Fill in the blanks by choosing the correct word from the options given in the brackets.",
    items: [
      {
        n: 1, type: "table",
        question: "Choose the correct word.",
        columns: ["Sentence", "Answer"],
        rows: [
          ["(i) Please remember to bring ______ (your/you're) assignment book.", "______"],
          ["(ii) The team celebrated ______ (their/they're) victory after the match.", "______"],
          ["(iii) ______ (its/it's) important to stay hydrated during the hot summer days.", "______"],
          ["(iv) I can't believe ______ (your/you're) going to the mango festival today.", "______"],
          ["(v) The students said ______ (they're/their) excited for the field trip tomorrow.", "______"],
          ["(vi) The tree lost ______ (its/it's) leaves in the winter.", "______"]
        ],
        answer: [
          ["(i)", "your"],
          ["(ii)", "their"],
          ["(iii)", "It's"],
          ["(iv)", "you're"],
          ["(v)", "they're"],
          ["(vi)", "its"]
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: "Prepositional phrases are groups of words that begin with a preposition and include a noun or pronoun as the object of the preposition. They give additional information about time, place, manner, cause, direction or relationship. Complete the sentences with suitable prepositional phrases.",
    items: [
      {
        n: 1, type: "table",
        question: "Complete each sentence.",
        columns: ["Sentence", "Prepositional phrase"],
        rows: [
          ["(i) The children played happily in ______ .", "______"],
          ["(ii) Nisha placed the vase on ______ .", "______"],
          ["(iii) We discussed the project in ______ .", "______"],
          ["(iv) Preethi found the lost book under ______ .", "______"],
          ["(v) The cat slept on ______ .", "______"]
        ],
        answer: [
          ["(i) The children played happily in ___ .", "in the garden"],
          ["(ii) Nisha placed the vase on ___ .", "on the table"],
          ["(iii) We discussed the project in ___ .", "in the classroom (or in great detail)"],
          ["(iv) Preethi found the lost book under ___ .", "under the bed"],
          ["(v) The cat slept on ___ .", "on the sofa"]
        ]
      }
    ]
  },
  {
    roman: "VIII",
    instruction: "Rearrange the following jumbled words and phrases into meaningful sentences.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "barked / at the strangers / the dog / loudly / the house / walking by", answer: "**The dog barked loudly at the strangers walking by the house.**" },
          { label: "2", type: "short", question: "wrote / my classmate / during the / a story / summer vacations", answer: "**My classmate wrote a story during the summer vacations.**" },
          { label: "3", type: "short", question: "enjoyed / under the trees / they / by the lake / a picnic", answer: "**They enjoyed a picnic by the lake under the trees.**" },
          { label: "4", type: "short", question: "in his / grandfather's room / hung / he / the painting", answer: "**He hung the painting in his grandfather's room.**" },
          { label: "5", type: "short", question: "studied / with great determination / for / students / the / exam", answer: "**The students studied for the exam with great determination.**" }
        ]
      }
    ]
  }
];
