export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Grammar", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Match the expressions from the text in Column 1 with the most suitable situations given in Column 2. Then complete the sentences.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match Column 1 and 2.",
        left: [
          "1. Fight to the last man",
          "2. Foil the plan",
          "3. Deliver a blow",
          "4. Hold their ground"
        ],
        right: [
          "(i) A sports team scores a last-minute goal, giving them the lead and shaking the opponent's confidence.",
          "(ii) The soldiers fought valiantly until each one laid down his life for the nation.",
          "(iii) Soldiers stay in their position and fight back, even though the enemy is stronger.",
          "(iv) A spy disrupts the enemy's efforts to invade a country by intercepting their communications."
        ],
        answer: [
          "1 - (ii) (The soldiers fought valiantly...)",
          "2 - (iv) (A spy disrupts the enemy's efforts...)",
          "3 - (i) (A sports team scores a last-minute goal...)",
          "4 - (iii) (Soldiers stay in their position...)"
        ]
      },
      {
        n: 2,
        type: "blanks",
        passage: "A. The detective managed to ______ by finding the hidden evidence before the culprit could get rid of it.\nB. The company's new advertising campaign was meant to ______ to their competitors' sales.\nC. The hikers chose to ______ despite the heavy rain, refusing to turn back on their journey.\nD. Despite being heavily outnumbered, the soldiers vowed to defend their homeland and ______, refusing to surrender to the enemy forces.",
        answer: [
          "foil the plan",
          "deliver a blow",
          "hold their ground",
          "fight to the last man"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the collective nouns in Column 1 to their meanings in Column 2. Then fill in the blanks.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match collective nouns.",
        left: ["1. regiment", "2. squadron", "3. fleet", "4. battalion"],
        right: [
          "(i) a large body of troops ready for battle, especially an infantry unit",
          "(ii) a permanent unit of an army typically commanded by a lieutenant colonel",
          "(iii) small unit, typically comprising 12-24 aircrafts",
          "(iv) a group of ships sailing together"
        ],
        answer: [
          "1 - (ii) a permanent unit of an army...",
          "2 - (iii) small unit, typically comprising 12-24 aircrafts...",
          "3 - (iv) a group of ships sailing together...",
          "4 - (i) a large body of troops ready for battle..."
        ]
      },
      {
        n: 2,
        type: "blanks",
        passage: "A. The commanding officer addressed the entire ______ of soldiers during the morning assembly.\nB. The admiral ordered the entire ______ to set sail for battle.\nC. The ______ of infantry advanced slowly through the dense forest.\nD. A ______ of fighter jets was sent to intercept the enemy planes.",
        answer: [
          "battalion",
          "fleet",
          "regiment",
          "squadron"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Fill in the blanks with the correct words (overwhelm, overthrow, overrun) taking clues from the meanings. Then frame 5 other 'over' verbs.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "To take and seize control:", answer: "**overthrow**" },
          { label: "2", type: "short", question: "To invade or occupy an area in large numbers:", answer: "**overrun**" },
          { label: "3", type: "short", question: "To flood or overpower someone or something emotionally:", answer: "**overwhelm**" }
        ]
      },
      {
        n: 2,
        type: "activity",
        question: "Create a list of at least five other verbs that begin with 'over' and frame sentences of your own.",
        answer: "1. **Overcome:** She managed to overcome her fear of public speaking.\n2. **Overhear:** I happened to overhear their conversation at the cafe.\n3. **Overlook:** Do not overlook the small details in your project.\n4. **Overreact:** He tends to overreact when he loses a game.\n5. **Overtake:** The fast car tried to overtake the truck on the highway."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Fill in the blanks correctly with the words given in the brackets (noun 'c' vs verb 's').",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The teacher's (i) ______ is always helpful, and she continues to (ii) ______ students on their career choices. (advice/advise)", answer: "(i) **advice**, (ii) **advise**" },
          { label: "2", type: "fill", question: "The musician believes that daily (i) ______ helps a lot, so she is always ready to (ii) ______ her harmonium lessons. (practice/practise)", answer: "(i) **practice**, (ii) **practise**" },
          { label: "3", type: "fill", question: "The scientist uses a strange (i) ______ to (ii) ______ new methods for his analysis. (device/devise)", answer: "(i) **device**, (ii) **devise**" },
          { label: "4", type: "fill", question: "The village (i) ______ met to discuss issues and decided to (ii) ______ the villagers on important matters. (council/counsel)", answer: "(i) **council**, (ii) **counsel**" }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Subject-Verb Agreement: Fill in the blanks for the following sentences by choosing the correct verb given within brackets.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The bouquet of flowers ______ (shows/show) a mix of bright colours.", answer: "**shows** (Subject is 'bouquet')" },
          { label: "2", type: "fill", question: "Neither the teacher nor the students ______ (has/have) to attend the change in the schedule.", answer: "**have** (Proximity rule: 'students' is plural)" },
          { label: "3", type: "fill", question: "Each of the participants ______ (was/were) given a certificate.", answer: "**was** (Subject is 'Each')" },
          { label: "4", type: "fill", question: "The data collected by the researchers ______ (shows/show) significant trends.", answer: "**shows** (or 'show' depending on data treated as singular/plural, but 'shows' is universally accepted as a mass noun here)." },
          { label: "5", type: "fill", question: "One of the players ______ (has/have) sprained his ankle.", answer: "**has** (Subject is 'One')" },
          { label: "6", type: "fill", question: "Either the children or their guardian ______ (has/have) the tickets for the meeting.", answer: "**has** (Proximity rule: 'guardian' is singular)" },
          { label: "7", type: "fill", question: "A pair of shoes ______ (is/are) kept in the corner.", answer: "**is** (Subject is 'A pair')" },
          { label: "8", type: "fill", question: "Neither of the statements ______ (is/are) true.", answer: "**is** (Subject is 'Neither')" },
          { label: "9", type: "fill", question: "The members of the jury ______ (has delivered/have delivered) their verdict to the court.", answer: "**have delivered** (Subject is 'members')" },
          { label: "10", type: "fill", question: "Mathematics ______ (is/are) an interesting subject for many students.", answer: "**is**" }
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Read the following passage and correct the incorrect usage of verbs.",
    items: [
      {
        n: 1,
        type: "activity",
        question: "Correct the passage: Each soldier salute with pride while the commander and his assistants inspects the parade. The sound of marching feet echo through the air as a group of cadets prepare for their drill. Meanwhile, a convoy of military vehicles pass by...",
        answer: "Each soldier **salutes** with pride while the commander and his assistants **inspect** the parade. The sound of marching feet **echoes** through the air as a group of cadets **prepares** for their drill. Meanwhile, a convoy of military vehicles **passes** by, drawing cheers from the gathered crowd."
      }
    ]
  }
];
