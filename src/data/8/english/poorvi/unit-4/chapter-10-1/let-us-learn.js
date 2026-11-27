export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar", "Punctuation"] };

export const sections = [
  {
    roman: "I",
    instruction: "Each word list has one word that does not match with the other words. Identify the odd word. One example has been done for you.",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "1", type: "short",
            question: "chop, trim, slice, mince (example given)",
            answer: "**trim** ('chop', 'slice' and 'mince' are words used for cutting with a knife; whereas 'trim' is to cut a part with a pair of scissors)."
          },
          {
            label: "2", type: "short",
            question: "plodded, galloped, scrambled, trudged",
            answer: "**galloped** ('plodded', 'scrambled', and 'trudged' describe slow, heavy, or difficult human movement, whereas 'galloped' describes the fast running of a horse)."
          },
          {
            label: "3", type: "short",
            question: "tender, delicate, soft, smooth",
            answer: "**smooth** ('tender', 'delicate', and 'soft' refer to gentleness or fragility, whereas 'smooth' refers to an even surface texture)."
          },
          {
            label: "4", type: "short",
            question: "stared, peered, pecked, gazed",
            answer: "**pecked** ('stared', 'peered', and 'gazed' are ways of looking, whereas 'pecked' is the action of a bird striking with its beak)."
          },
          {
            label: "5", type: "short",
            question: "growing, blossoming, progressing, planting",
            answer: "**planting** ('growing', 'blossoming', and 'progressing' describe natural development, whereas 'planting' is a human action to put a seed or sapling into the soil)."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the most suitable taste words given in the box below and write against the food items that follow. Now, use any five taste words and make sentences of your own.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["sweet", "sour", "tangy", "spicy", "salty", "bitter", "bland (tasteless)"],
        question: "Write the most suitable taste word against each food item.",
        columns: ["Food item", "Taste word"],
        rows: [
          ["1. tamarind", "______"],
          ["2. jaggery", "______"],
          ["3. neem leaves", "______"],
          ["4. paneer (cottage cheese)", "______"],
          ["5. lemon", "______"],
          ["6. pickle", "______"],
          ["7. a dish of vegetables", "______"]
        ],
        answer: [
          ["1. tamarind", "tangy (or sour)"],
          ["2. jaggery", "sweet"],
          ["3. neem leaves", "bitter"],
          ["4. paneer (cottage cheese)", "bland (tasteless)"],
          ["5. lemon", "sour"],
          ["6. pickle", "salty (or spicy/tangy)"],
          ["7. a dish of vegetables", "spicy"]
        ]
      },
      {
        n: 2, type: "activity",
        question: "Now, use any five taste words and make sentences of your own.",
        answer: [
          "*(Sample sentences.)*",
          "- **Sweet:** My grandmother makes delicious **sweet** laddoos during festivals.",
          "- **Sour:** The unripe mangoes we picked were very **sour**.",
          "- **Tangy:** The street chaat had a **tangy** tamarind chutney on top.",
          "- **Bitter:** Fresh **bitter** gourd juice is healthy even though I dislike its taste.",
          "- **Spicy:** We enjoyed a hot, **spicy** vegetable curry with rotis."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Choose the correct antonyms for the textual words given below from the box. There are two extra words that you will not need.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["growing", "ordinary", "unprotected", "cheerful", "hard", "wide", "fasting", "shaky", "fussing", "coldness"],
        question: "Write the correct antonym for each word.",
        columns: ["Word", "Antonym"],
        rows: [
          ["1. tender", "______"],
          ["2. sturdy", "______"],
          ["3. narrow", "______"],
          ["4. warmth", "______"],
          ["5. feasting", "______"],
          ["6. grumpy", "______"],
          ["7. sheltered", "______"],
          ["8. special", "______"]
        ],
        answer: [
          ["1. tender", "hard"],
          ["2. sturdy", "shaky"],
          ["3. narrow", "wide"],
          ["4. warmth", "coldness"],
          ["5. feasting", "fasting"],
          ["6. grumpy", "cheerful"],
          ["7. sheltered", "unprotected"],
          ["8. special", "ordinary"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the following lines from the text and underline all the verbs and identify the form of tense. The forms of tenses in the given statements are Simple Past Tense (1 and 3), Past Progressive Tense (2), and Past Perfect Tense (3). Now, fill in the blanks with the correct form of Simple Past, Past Progressive, or Past Perfect Tenses of the verbs given in brackets. One example has been done for you.",
    items: [
      {
        n: 1, type: "table",
        question: "Identify the verbs and their tense forms in the three sentences.",
        columns: ["Sentence", "Verbs and tense forms"],
        rows: [
          ["1. Rakesh was on his way home from school when he bought the cherries.", "______"],
          ["2. Rakesh was looking for Grandfather without finding him in any of his favourite places around the house.", "______"],
          ["3. Rakesh and Grandfather gazed at the tree as though it had performed a miracle.", "______"]
        ],
        answer: [
          ["1. Rakesh was on his way home from school when he bought the cherries.", "**was, bought** - Simple Past Tense"],
          ["2. Rakesh was looking for Grandfather without finding him in any of his favourite places around the house.", "**was looking** - Past Progressive Tense"],
          ["3. Rakesh and Grandfather gazed at the tree as though it had performed a miracle.", "**gazed** - Simple Past Tense; **had performed** - Past Perfect Tense"]
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Fill in the blanks with the correct form of Simple Past, Past Progressive, or Past Perfect Tenses of the verbs given in brackets.",
        passage: "(i) I was sitting (sit) with my grandparents in the garden, sharing the wonderful memories from my childhood. As we (ii) ______ (talk), I (iii) ______ (realise) how much wisdom they (iv) ______ (impart) to me over the years. While I (v) ______ (listen) to their stories for hours together, I (vi) ______ (remember) the times we (vii) ______ (spend) together planting flowers and learning about life. By the time I left, the sun (viii) ______ (set), and I (ix) ______ (feel) a deep sense of gratitude for the bond we (x) ______ (nurture) through love, care, and countless memories.",
        answer: [
          "(i) **was sitting** *(example)*",
          "(ii) **were talking**",
          "(iii) **realised**",
          "(iv) **had imparted**",
          "(v) **was listening**",
          "(vi) **remembered**",
          "(vii) **had spent**",
          "(viii) **had set**",
          "(ix) **felt**",
          "(x) **had nurtured**"
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Study the punctuation marks in the sentences from the text and the rules for full stop (.), comma (,), question mark (?), exclamation mark (!), colon (:), semicolon (;), apostrophe ('), quotation marks (\" \"), dash (--), and capitalisation. Now, punctuate the following paragraph appropriately.",
    items: [
      {
        n: 1, type: "rectify",
        question: `every sunday roshni would visit her grandparents house on their farm
come sit grandpa would say patting the bench on their porch
roshni loved these moments where the world slowed down and stories flowed like magic grandma would bring tea her eyes twinkling with joy
im excited to hear about your younger days the adventures the lessons and the memories roshni said eagerly
grandpa smiled softly his wrinkled hands resting on the cane ah the old days... when everything was simple and happiness was all we had
roshni could feel the warmth of those memories he sat in silence bound not by words but by a timeless bond`,
        answer: [
          "Every Sunday, Roshni would visit her grandparents' house on their farm.",
          "\"Come, sit,\" Grandpa would say, patting the bench on their porch.",
          "Roshni loved these moments, where the world slowed down and stories flowed like magic. Grandma would bring tea, her eyes twinkling with joy.",
          "\"I'm excited to hear about your younger days--the adventures, the lessons, and the memories,\" Roshni said eagerly.",
          "Grandpa smiled softly, his wrinkled hands resting on the cane. \"Ah, the old days... when everything was simple and happiness was all we had.\"",
          "Roshni could feel the warmth of those memories. He sat in silence, bound not by words, but by a timeless bond."
        ]
      }
    ]
  }
];
