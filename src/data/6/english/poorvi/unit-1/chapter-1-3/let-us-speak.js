export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Listen to your teacher pronounce the contractions and repeat after your teacher. (We use contracted form of the verbs while speaking and expanded form of the verbs while writing.)",
    items: [
      {
        n: 1, type: "activity",
        wordBox: ["I'll", "it's", "don't", "I'm", "I'd", "he's", "that's", "we'll", "they're", "you're", "we're", "what's"],
        question: "Listen to your teacher pronounce the contractions and repeat after your teacher.",
        answer: "*(Speaking practice.)* Say each contraction smoothly as one beat: I'll (I will), it's (it is), don't (do not), I'm (I am), I'd (I would/had), he's (he is), that's (that is), we'll (we will), they're (they are), you're (you are), we're (we are), what's (what is)."
      },
      {
        n: 2, type: "activity",
        wordBox: ["can't", "won't", "I've", "wouldn't", "shouldn't", "didn't"],
        question: "Now, speak these contractions clearly along with your teacher and classmates.",
        answer: "*(Speaking practice.)* Pronounce the ending /t/ and /v/ sounds clearly: can't (cannot), won't (will not), I've (I have), wouldn't (would not), shouldn't (should not), didn't (did not)."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Discuss in pairs:",
    items: [
      {
        n: 1, type: "table",
        question: "Why do you think it's important for people to keep their house and themselves safe? Tick the suitable reasons.",
        columns: ["Reason", "Tick (Suitable?)"],
        rows: [
          ["(i) To be safe from injury", "______"],
          ["(ii) To keep family members and pets safe", "______"],
          ["(iii) To stop accidents from happening", "______"],
          ["(iv) To make sure they visit the doctor regularly", "______"],
          ["(v) To stop robbery", "______"],
          ["(vi) To pay the electricity bill", "______"],
          ["(vii) To save money", "______"]
        ],
        answer: [
          ["(i) To be safe from injury", "Tick"],
          ["(ii) To keep family members and pets safe", "Tick"],
          ["(iii) To stop accidents from happening", "Tick"],
          ["(iv) To make sure they visit the doctor regularly", "No tick"],
          ["(v) To stop robbery", "Tick"],
          ["(vi) To pay the electricity bill", "No tick"],
          ["(vii) To save money", "No tick"]
        ]
      },
      {
        n: 2, type: "activity",
        wordBox: [
          "I think it's important because ... /",
          "I feel it's necessary as ... /",
          "The reason we need to look at safety is ..."
        ],
        question: "Now, use the given hints to share your reasons in complete sentences with your teacher and classmates.",
        answer: [
          "*(Pair discussion - sample sentences.)*",
          "- I think it's important because keeping our house secure protects us from injury and stops robbery.",
          "- I feel it's necessary as we must keep our family members and pets safe at all times.",
          "- The reason we need to look at safety is to stop preventable accidents from happening at home."
        ]
      },
      {
        n: 3, type: "activity",
        wordBox: [
          "I think they should ... /",
          "I suppose they could ... /",
          "They must ... /",
          "They should ... /",
          "How about ... /",
          "It might be better to ..."
        ],
        question: "Use the given hints to share three ideas on how people can keep their houses and themselves safe. Share with your classmates and teachers.",
        answer: [
          "*(Pair discussion - sample ideas.)*",
          "1. They must lock all doors and windows properly at night and whenever they leave the house.",
          "2. I think they should keep emergency numbers like 112 and 100 saved and avoid opening the door to unknown strangers.",
          "3. It might be better to inform trusted neighbours when going out of town and keep gas cylinders and electrical switches turned off when not in use."
        ]
      }
    ]
  }
];
