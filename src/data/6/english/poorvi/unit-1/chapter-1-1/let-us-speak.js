export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read aloud the following words from the story. All these words have the letter 's' in them. But the sound of letter 's' is not always the same. In sage and promising - the letter 's' has a /s/ sound; in wisdom - the letter 's' has a /z/ sound; in trees - the letter 's' has a /z/ sound; in surprise - the first letter 's' has a /s/ sound and the second has a /z/ sound. Now, speak each word clearly along with your teacher and classmates. Your teacher will now say some words. Listen carefully to the sound of 's'. Write the sound next to the word.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["sage", "promising", "wisdom", "trees", "surprise"],
        question: "Listen carefully to the sound of 's'. Write the sound next to each word: beds, sand, clothes, sea, was, keys, bags, nose.",
        columns: ["Word", "Sound of 's' (/s/ or /z/)"],
        rows: [
          ["beds", "______"],
          ["sand", "______"],
          ["clothes", "______"],
          ["sea", "______"],
          ["was", "______"],
          ["keys", "______"],
          ["bags", "______"],
          ["nose", "______"]
        ],
        answer: [
          ["beds", "/z/"],
          ["sand", "/s/"],
          ["clothes", "/z/"],
          ["sea", "/s/"],
          ["was", "/z/"],
          ["keys", "/z/"],
          ["bags", "/z/"],
          ["nose", "/z/"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Discuss the following questions with a partner. You may use the hints given in brackets while speaking.",
    items: [
      {
        n: 1, type: "activity",
        question: "What does hard work mean to you? (It means ... / It is something ... / Well, you see ... /What I mean is ...)",
        answer: "*(Pair discussion - sample answer.)* Well, you see, hard work means putting in sincere and steady effort to reach a goal without looking for shortcuts. What I mean is that even when a task feels slow or difficult, we keep trying patiently until we succeed."
      },
      {
        n: 2, type: "activity",
        question: "Give three reasons why you think hard work is important. (Firstly, I feel ... because ... / Secondly, I think ... since ... /Lastly, I believe ... as ... )",
        answer: "*(Pair discussion - sample answer.)* Firstly, I feel hard work is important because it helps us learn new skills and improve every day. Secondly, I think it builds confidence since we know our success comes from our own effort. Lastly, I believe it brings lasting rewards, as we saw in the story of Rama Natha."
      },
      {
        n: 3, type: "activity",
        question: "Share three ideas you would give to someone who needs to work hard. (To begin with, it is important that ... /Next, you could ... / Finally, I think you should ... )",
        answer: "*(Pair discussion - sample answer.)* To begin with, it is important that you set a clear goal and make a small daily plan. Next, you could divide big tasks into smaller steps and practise a little every day. Finally, I think you should stay patient, learn from mistakes, and never give up."
      }
    ]
  }
];
