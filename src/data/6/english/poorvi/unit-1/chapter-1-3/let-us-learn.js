export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Grammar", "Punctuation"] };

export const sections = [
  {
    roman: "I",
    instruction: "Study the highlighted words in the following lines: â€¢ I'm feeling so sleepy. â€¢ It's a thief. â€¢ They're awake. The highlighted words given in the above sentences have one letter missing in each. What are they? Share them with your teacher and classmates. (The missing letters are marked by an apostrophe (' ).) Now, write the full words with the missing letter.",
    items: [
      {
        n: 1, type: "short",
        question: "The highlighted words given in the above sentences have one letter missing in each. What are they?",
        answer: "- In **I'm** -> the missing letter is **a** (I am).\n- In **It's** -> the missing letter is **i** (It is).\n- In **They're** -> the missing letter is **a** (They are)."
      },
      {
        n: 2,
        question: "Now, write the full words with the missing letter.",
        parts: [
          { label: "1", type: "fill", question: "______ feeling so sleepy.", answer: "**I am**" },
          { label: "2", type: "fill", question: "______ a thief.", answer: "**It is**" },
          { label: "3", type: "fill", question: "______ awake.", answer: "**They are**" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Expand the following words. Two examples have been done for you. Use the contracted form of these words in sentences of your own.",
    items: [
      {
        n: 1, type: "table",
        question: "Expand each contracted word and write a sentence using the contracted form.",
        columns: ["S. No.", "Contracted Words", "Expanded Form", "Sentences"],
        rows: [
          ["1.", "what's", "what is", "______"],
          ["2.", "I'll", "______", "______"],
          ["3.", "I'd", "______", "______"],
          ["4.", "we'll", "______", "______"],
          ["5.", "that's", "______", "______"],
          ["6.", "we're", "______", "______"],
          ["7.", "don't", "______", "______"],
          ["8.", "you'll", "______", "______"],
          ["9.", "must've", "must have", "______"]
        ],
        answer: [
          ["1.", "what's", "what is", "What's the time right now?"],
          ["2.", "I'll", "I will (or I shall)", "I'll finish my homework before dinner."],
          ["3.", "I'd", "I would (or I had)", "I'd like a glass of cold water, please."],
          ["4.", "we'll", "we will (or we shall)", "We'll visit our grandparents this Sunday."],
          ["5.", "that's", "that is", "That's a very clever idea!"],
          ["6.", "we're", "we are", "We're preparing a play for the school assembly."],
          ["7.", "don't", "do not", "Don't forget to lock the front door."],
          ["8.", "you'll", "you will", "You'll enjoy reading this comic book."],
          ["9.", "must've", "must have", "He must've left his umbrella on the bus."]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Study the highlighted words and the words in the brackets in the following sentences from the story: 1. I am feeling so sleepy. [am + feel + ing] 2. What are you looking at? [are + look + ing] 3. Somebody is trying to get in. [is + try + ing] 4. They are saying something. [are + say + ing] 5. Perhaps, they are talking about their money. [are + talk + ing]. (Verbs that describe what someone or something is doing at the moment of speaking are in the present progressive tense.)",
    items: [
      {
        n: 1, type: "fill",
        question: "Now, choose the correct option.\n\nThe sentences 1-5 refer to actions that ______. [are going on at the time of speaking/happened in the past/will take place in the future]",
        answer: "**are going on at the time of speaking**"
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Fill in the blanks to complete the following sentences.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "I ______ in Grade 6. [am + study + ing]", answer: "**am studying**" },
          { label: "2", type: "fill", question: "My friend ______ a story book. [is + read + ing]", answer: "**is reading**" },
          { label: "3", type: "fill", question: "We ______ a board game. [are + play + ing]", answer: "**are playing**" },
          { label: "4", type: "fill", question: "I ______ a new language. [am + learn + ing]", answer: "**am learning**" },
          { label: "5", type: "fill", question: "The teachers ______ in the staff room. [are + sit + ing]", answer: "**are sitting**" },
          { label: "6", type: "fill", question: "My mother ______ food in the kitchen. [is + cook + ing]", answer: "**is cooking**" }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Study the following picture and fill in the blanks with the present progressive form of verbs.",
    items: [
      {
        n: 1,
        figure: { src: "images/park-scene.png", alt: "A park scene with Govind and Anu playing football, Pema picking flowers, Anil holding a score card, their mother reading a book on a bench, a dog running after the ball, and birds flying in the sky" },
        parts: [
          { label: "1", type: "fill", question: "Govind and Anu ______ football.", answer: "**are playing**" },
          { label: "2", type: "fill", question: "Pema ______ flowers.", answer: "**is plucking** (also accepted: **is picking**)" },
          { label: "3", type: "fill", question: "Anil ______ the score card.", answer: "**is holding** (also accepted: **is showing**)" },
          { label: "4", type: "fill", question: "The mother ______ a book.", answer: "**is reading**" },
          { label: "5", type: "fill", question: "The dog ______ to catch the ball.", answer: "**is running** (also accepted: **is trying**)" },
          { label: "6", type: "fill", question: "The birds ______ in the sky.", answer: "**are flying**" }
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Study the following sentences from the story and complete the table. One example has been done for you. 1. I'd better listen closely. 2. When he's in the house, I'll call out softly to him. 3. Then I'll call out very loudly... (Words that give more information about the verb, such as how, when, where, etc. are called adverbs.)",
    items: [
      {
        n: 1, type: "table",
        question: "Complete the table.",
        columns: ["S. No.", "Sentence", "Question", "Word"],
        rows: [
          ["(i)", "I'd better listen closely.", "How does he listen?", "A. closely"],
          ["(ii)", "When he's in the house, I'll call out softly to him.", "How does she call out?", "B. ______"],
          ["(iii)", "Then I'll call out very loudly.", "How does she call out?", "C. ______"]
        ],
        answer: [
          ["(i)", "I'd better listen closely.", "How does he listen?", "A. closely"],
          ["(ii)", "When he's in the house, I'll call out softly to him.", "How does she call out?", "B. softly"],
          ["(iii)", "Then I'll call out very loudly.", "How does she call out?", "C. loudly"]
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: "Fill in the blanks with suitable adverbs from the box given below. There are two extra words that you do not need.",
    items: [
      {
        n: 1,
        wordBox: ["warmly", "gracefully", "smoothly", "beautifully", "funnily", "quickly", "hurriedly"],
        parts: [
          { label: "1", type: "fill", question: "He solved the mathematics problem ______.", answer: "**quickly**" },
          { label: "2", type: "fill", question: "The car moved ______ along the highway.", answer: "**smoothly**" },
          { label: "3", type: "fill", question: "The musician played the guitar ______.", answer: "**beautifully**" },
          { label: "4", type: "fill", question: "Shobha danced ______.", answer: "**gracefully**" },
          { label: "5", type: "fill", question: "Rohit left the house ______.", answer: "**hurriedly** *(Extra words not needed: warmly, funnily.)*" }
        ]
      }
    ]
  },
  {
    roman: "VIII",
    instruction: "Fill in the blanks with suitable adverbs from the box given below. There are two extra words that you do not need.",
    items: [
      {
        n: 1, type: "blanks",
        wordBox: ["honestly", "brightly", "peacefully", "sweetly", "angrily", "slowly", "tirelessly"],
        question: "Fill in the blanks with suitable adverbs from the box.",
        passage: "Once upon a time in a small forest, animals lived 1. ______. The wise old tortoise moved 2. ______ but always won the race against the proud rabbit. The ants worked 3. ______, gathering food for the winter. The kind-hearted lion ruled the jungle 4. ______, giving everyone a chance to speak. The birds sang 5. ______, making everyone in the forest happy.",
        answer: [
          "1. **peacefully**",
          "2. **slowly**",
          "3. **tirelessly**",
          "4. **honestly**",
          "5. **sweetly**",
          "*(Extra words not needed: brightly, angrily.)*"
        ]
      }
    ]
  },
  {
    roman: "IX",
    instruction: "Study the following sentences from the story and choose the correct option. 1. Oh, hum! What a hard day it has been! 2. Ah, at last, they've stopped their chatter! 3. What should we do? 4. What should we name our child?",
    items: [
      {
        n: 1,
        parts: [
          { label: "(i)", type: "fill", question: "Sentence 1. expresses a feeling of ______. (tiredness/joy)", answer: "**tiredness**" },
          { label: "(ii)", type: "fill", question: "Sentence 2. expresses a feeling of ______. (wonder/relief)", answer: "**relief**" },
          { label: "(iii)", type: "fill", question: "Sentences 3. and 4. ask ______. (answers/questions)", answer: "**questions**" }
        ]
      }
    ]
  },
  {
    roman: "X",
    instruction: "Punctuate the following sentences and write whether they are exclamatory or interrogative sentences. (Sentences that express a strong feeling are called exclamatory sentences. They are marked by an exclamation mark (!). Sentences that ask questions are called interrogative sentences. They are marked by a question mark (?).)",
    items: [
      {
        n: 1, type: "table",
        question: "Punctuate each sentence and identify whether it is exclamatory or interrogative.",
        columns: ["Sentence", "Punctuated Sentence", "Type"],
        rows: [
          ["1. Wow, what an intelligent man he is", "______", "______"],
          ["2. Oh how big the hole is", "______", "______"],
          ["3. Do you like to read comic books", "______", "______"],
          ["4. What is your favourite story", "______", "______"]
        ],
        answer: [
          ["1. Wow, what an intelligent man he is", "Wow, what an intelligent man he is!", "Exclamatory"],
          ["2. Oh how big the hole is", "Oh, how big the hole is!", "Exclamatory"],
          ["3. Do you like to read comic books", "Do you like to read comic books?", "Interrogative"],
          ["4. What is your favourite story", "What is your favourite story?", "Interrogative"]
        ]
      }
    ]
  }
];
