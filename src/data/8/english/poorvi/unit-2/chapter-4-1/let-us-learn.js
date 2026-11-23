export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Match the expressions from the text in Column 1 with the most suitable situations given in Column 2. Now, complete the following sentences using the expressions from Column 1.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the expressions with the situations.",
        left: ["Fight to the last man", "Foil the plan", "Deliver a blow", "Hold their ground"],
        right: [
          "A sports team scores a last-minute goal, giving them the lead and shaking the opponent's confidence.",
          "The soldiers fought valiantly until each one laid down his life for the nation.",
          "Soldiers stay in their position and fight back, even though the enemy is stronger.",
          "A spy disrupts the enemy's efforts to invade a country by intercepting their communications."
        ],
        answer: ["B", "D", "A", "C"]
      },
      {
        n: 2, type: "blanks",
        wordBox: ["fight to the last man", "foil the plan", "deliver a blow", "hold their ground"],
        question: "Complete the sentences using the expressions.",
        passage: "A. The detective managed to ______ by finding the hidden evidence before the culprit could get rid of it. B. The company's new advertising campaign was meant to ______ to their competitors' sales. C. The hikers chose to ______ despite the heavy rain, refusing to turn back on their journey. D. Despite being heavily outnumbered, the soldiers vowed to defend their homeland and ______ , refusing to surrender to the enemy forces.",
        answer: [
          "A. **foil the plan**",
          "B. **deliver a blow**",
          "C. **hold their ground**",
          "D. **fight to the last man**"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the highlighted words in the sentence from the text: 'A contingent of troops posted to Jammu and Kashmir was air-lifted into Srinagar...' There are many such collective nouns used in the context of armed forces. Match the collective nouns in Column 1 to their meanings in Column 2. You may refer to a dictionary.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the collective nouns with their meanings.",
        left: ["regiment", "squadron", "fleet", "battalion"],
        right: [
          "a large body of troops ready for battle, especially an infantry unit",
          "a permanent unit of an army typically commanded by a lieutenant colonel/colonel and divided into several companies",
          "a small unit, typically comprising 12-24 aircraft and their crews, used in air force, naval or army aviation services",
          "a group of ships sailing together, engaged in the same activity, or under the same ownership"
        ],
        answer: ["B", "C", "D", "A"]
      },
      {
        n: 2, type: "blanks",
        wordBox: ["regiment", "squadron", "fleet", "battalion"],
        question: "Fill in the blanks with words from Column 1.",
        passage: "A. The commanding officer addressed the entire ______ of soldiers during the morning assembly. B. The admiral ordered the entire ______ to set sail for battle. C. The ______ of infantry advanced slowly through the dense forest. D. A ______ of fighter jets was sent to intercept the enemy planes.",
        answer: ["A. **regiment**", "B. **fleet**", "C. **battalion**", "D. **squadron**"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Read the following words from the text and fill in the blanks with the correct words by taking clues from the meanings given below. Now, create a list of at least five other verbs that begin with 'over' and frame sentences of your own.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["overwhelm", "overthrow", "overrun"],
        question: "Write the word for each meaning.",
        columns: ["Meaning", "Word"],
        rows: [
          ["1. To take and seize control", "______"],
          ["2. To invade or occupy an area in large numbers", "______"],
          ["3. To flood or overpower someone or something emotionally", "______"]
        ],
        answer: [
          ["1. To take and seize control", "overthrow"],
          ["2. To invade or occupy an area in large numbers", "overrun"],
          ["3. To flood or overpower someone or something emotionally", "overwhelm"]
        ]
      },
      {
        n: 2, type: "activity",
        question: "List five other verbs that begin with 'over' and frame sentences of your own.",
        answer: [
          "*(Sample answer.)*",
          "- **overcome** - She overcame her fear of speaking on stage.",
          "- **overlook** - Please do not overlook the small mistakes in your answer.",
          "- **overtake** - The bus overtook a slow-moving truck.",
          "- **overflow** - The river overflowed its banks after the heavy rain.",
          "- **overhear** - I overheard my teachers talking about the school trip."
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "In the following pairs of words, 'c' is used for nouns, while 's' is used for verbs: advice (noun) and advise (verb); practice (noun) and practise (verb); device (noun) and devise (verb); council (noun) and counsel (verb). Now, fill in the blanks correctly with the words given in the brackets.",
    items: [
      {
        n: 1, type: "table",
        question: "Fill in the blanks (i) and (ii) in each sentence.",
        columns: ["Sentence", "(i)", "(ii)"],
        rows: [
          ["1. The teacher's (i) ___ is always helpful, and she continues to (ii) ___ students on their career choices. (advice/advise)", "______", "______"],
          ["2. The musician believes that daily (i) ___ helps a lot, so she is always ready to (ii) ___ her harmonium lessons. (practice/practise)", "______", "______"],
          ["3. The scientist uses a strange (i) ___ for experiments and plans to (ii) ___ new methods for his analysis. (device/devise)", "______", "______"],
          ["4. The village (i) ___ met to discuss issues and decided to (ii) ___ the villagers on important matters. (council/counsel)", "______", "______"]
        ],
        answer: [
          ["1. advice / advise", "advice", "advise"],
          ["2. practice / practise", "practice", "practise"],
          ["3. device / devise", "device", "devise"],
          ["4. council / counsel", "council", "counsel"]
        ]
      },
      {
        n: 2, type: "short",
        question: "Read the highlighted word in the sentence from the text: 'Most importantly, his story is a reminder of the sacrifices made by countless men and women in defence of the motherland.' What is the difference between 'defence' and 'defense'?",
        answer: "There is **no difference in meaning**. 'Defense' is the American spelling and 'defence' is the British spelling, which is the preferred spelling here. The word mostly means the act of protecting someone or something against attack or criticism."
      }
    ]
  },
  {
    roman: "V",
    instruction: "The highlighted verbs in the sentences from the text are singular or plural and agree with the subject of the sentence. This is called Subject-Verb Agreement. Now, fill in the blanks by choosing the correct verb given within brackets.",
    items: [
      {
        n: 1, type: "table",
        question: "Choose the correct verb.",
        columns: ["Sentence", "Answer"],
        rows: [
          ["1. The bouquet of flowers ______ (is/are) beautiful.", "______"],
          ["2. Neither the teacher nor the students ______ (was/were) aware of the change in the schedule.", "______"],
          ["3. Each of the participants ______ (has/have) submitted their projects on time.", "______"],
          ["4. The data collected by the researchers ______ (shows/show) significant trends.", "______"],
          ["5. One of the players ______ (was/were) injured during the match.", "______"],
          ["6. Either the children or their guardian ______ (has/have) to attend the meeting.", "______"],
          ["7. A pair of shoes ______ (is/are) missing from the rack.", "______"],
          ["8. Neither of the statements ______ (is/are) true.", "______"],
          ["9. The members of the jury ______ (has deliver/have delivered) their verdict to the court.", "______"],
          ["10. Mathematics ______ (is/are) an interesting subject for many students.", "______"]
        ],
        answer: [
          ["1. The bouquet of flowers ___ beautiful.", "is (the subject is 'bouquet')"],
          ["2. Neither the teacher nor the students ___ aware...", "were (the verb agrees with the nearer subject, 'students')"],
          ["3. Each of the participants ___ submitted...", "has ('each' is singular)"],
          ["4. The data collected by the researchers ___ significant trends.", "show (data is traditionally plural; 'shows' is also used today)"],
          ["5. One of the players ___ injured...", "was ('one' is singular)"],
          ["6. Either the children or their guardian ___ to attend...", "has (the nearer subject is 'guardian')"],
          ["7. A pair of shoes ___ missing...", "is ('pair' is singular)"],
          ["8. Neither of the statements ___ true.", "is ('neither' is singular)"],
          ["9. The members of the jury ___ their verdict...", "have delivered (the subject is 'members')"],
          ["10. Mathematics ___ an interesting subject...", "is (a subject name is singular)"]
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Read the following passage and correct the incorrect usage of verbs. One example has been done for you: 'A battalion of soldiers stand at attention as the National flag are raised.' -> 'A battalion of soldiers stands at attention as the National flag is raised.'",
    items: [
      {
        n: 1, type: "activity",
        question: "Correct the verbs: 'Each soldier salute with pride while the commander and his assistants inspects the parade. The sound of marching feet echo through the air as a group of cadets prepare for their drill. Meanwhile, a convoy of military vehicles pass by, drawing cheers from the gathered crowd.'",
        answer: "Each soldier **salutes** with pride while the commander and his assistants **inspect** the parade. The sound of marching feet **echoes** through the air as a group of cadets **prepares** for their drill. Meanwhile, a convoy of military vehicles **passes** by, drawing cheers from the gathered crowd."
      }
    ]
  }
];
