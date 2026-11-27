export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the following words from the text. Complete the following table by dividing the words into two parts. One has been done for you. (The words in Column A are called the root words. The sequences of letters that are in Column B which come after the root words are called suffixes.)",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["friendly", "suddenly", "talking", "carrying", "called", "showed"],
        question: "Divide each word into its root word (Column A) and suffix (Column B).",
        columns: ["Column A", "Column B"],
        rows: [
          ["1. friend", "ly"],
          ["2. ______", "______"],
          ["3. ______", "______"],
          ["4. ______", "______"],
          ["5. ______", "______"],
          ["6. ______", "______"]
        ],
        answer: [
          ["1. friend", "ly"],
          ["2. sudden", "ly"],
          ["3. talk", "ing"],
          ["4. carry", "ing"],
          ["5. call", "ed"],
          ["6. show", "ed"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the following root words with suitable suffixes. You can use a suffix more than once as shown. Use them to make sentences of your own. One has been done for you. [Note: Observe the changes in spelling in a few word combinations.]",
    items: [
      {
        n: 1, type: "table",
        question: "Match each root word with a suitable suffix, form the new word, and write a sentence.",
        columns: ["S. No.", "Root Word", "Suffix", "Word", "Sentence"],
        rows: [
          ["1.", "magic", "-ing", "magical", "The magician performed an amazing magical act."],
          ["2.", "care", "-al", "______", "______"],
          ["3.", "celebrate", "-ful", "______", "______"],
          ["4.", "laugh", "-ly", "______", "______"],
          ["5.", "wonder", "-ed", "______", "______"],
          ["6.", "help", "-tion", "______", "______"],
          ["7.", "friend", "-ous", "______", "______"],
          ["8.", "courage", "-ship", "______", "______"]
        ],
        answer: [
          ["1.", "magic", "-al", "magical", "The magician performed an amazing magical act."],
          ["2.", "care", "-ful (or -ing/-ed)", "careful", "Be careful while crossing the busy road."],
          ["3.", "celebrate", "-tion", "celebration", "We had a joyful celebration on Sports Day."],
          ["4.", "laugh", "-ing (or -ed)", "laughing", "The children were laughing happily during break time."],
          ["5.", "wonder", "-ful", "wonderful", "Grandpa told us a wonderful story in the evening."],
          ["6.", "help", "-ful (or -ing/-ed)", "helpful", "My classmates are very kind and helpful."],
          ["7.", "friend", "-ship (or -ly)", "friendship", "True friendship lasts a lifetime."],
          ["8.", "courage", "-ous", "courageous", "The courageous firefighter rescued the puppy safely."]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Read the following lines from the story: Mario, brave and determined, took the strange invisible chair ... You have already described the chair. Now, describe what kind of a person Mario is in the image given below. [Use words from the story. You may also use words of your own.] (The words that describe the quality of a person or a thing are called adjectives.)",
    items: [
      {
        n: 1, type: "short",
        figure: { src: "images/mario-adjectives.png", alt: "Illustration of Mario with four blank boxes around him for describing adjectives" },
        question: "Write four adjectives to describe Mario in the boxes around his picture.",
        answer: [
          "1. **brave**",
          "2. **determined**",
          "3. **friendly** *(also: boastful at first / strong-willed)*",
          "4. **curious** *(also: thankful / smart)*"
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Match each word (adjectives) in Column A with a suitable word (noun) in Column B. You can make more than one combination. One has been done as an example.",
    items: [
      {
        n: 1, type: "table",
        question: "Match adjectives in Column A with nouns in Column B, write the phrases, and use them in sentences.",
        columns: ["Column A Adjectives", "Column B Nouns", "Column C Phrases", "Column D Sentences"],
        rows: [
          ["1. brave", "friends", "brave soldier", "(i) The brave soldier marched ahead."],
          ["2. clever", "rain", "______", "______"],
          ["3. tasty", "soldier", "______", "______"],
          ["4. heavy", "plan", "______", "______"],
          ["5. slight", "peanuts", "______", "______"],
          ["6. true", "cold", "______", "______"]
        ],
        answer: [
          ["1. brave", "soldier", "brave soldier", "(i) The brave soldier marched ahead."],
          ["2. clever", "plan", "clever plan", "(ii) Grandfather thought of a clever plan to test Mario's friends."],
          ["3. tasty", "peanuts", "tasty peanuts", "(iii) We ate tasty peanuts on a cool winter evening."],
          ["4. heavy", "rain", "heavy rain", "(iv) Heavy rain flooded the school playground."],
          ["5. slight", "cold", "slight cold", "(v) Riya has a slight cold, so she drank warm soup."],
          ["6. true", "friends", "true friends", "(vi) True friends stand by us in difficult times."]
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Complete the paragraph with suitable adjective-noun pairings. Use the words in the box given below.",
    items: [
      {
        n: 1, type: "blanks",
        wordBox: ["old book", "magical adventures", "happy boy", "amazing stories", "fantastic adventures", "colourful creatures", "old castles"],
        question: "Complete the paragraph with suitable adjective-noun pairings from the box.",
        passage: "Once upon a time in a little village, a/an 1. ______ named Abhishek found a/an 2. ______ in the attic. He read 3. ______ about fairy lands, 4. ______ and 5. ______. Abhishek's eyes got big as he imagined these 6. ______. He told his friends about the stories, and they started to have their own 7. ______ when they played together.",
        answer: [
          "1. **happy boy**",
          "2. **old book**",
          "3. **amazing stories**",
          "4. **old castles** *(or **colourful creatures**)*",
          "5. **colourful creatures** *(or **old castles**)*",
          "6. **magical adventures** *(or **fantastic adventures**)*",
          "7. **fantastic adventures** *(or **magical adventures**)*"
        ]
      }
    ]
  }
];
