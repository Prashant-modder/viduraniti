export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Word search", "Subject-verb agreement"] };

export const sections = [
  {
    roman: "I",
    instruction: `Read the words from the text given in Column 1 and match them with suitable pictures in Column 2.`,
    items: [
      {
        n: 1, type: "match",
        figure: { src: "images/word-pictures.png", alt: "Six pictures labelled (i) to (vi): a treehouse, a plateau, people rafting, pebbles, wetlands and a glacier" },
        left: ["glaciers", "treehouse", "wetlands", "plateaus", "pebbles", "rafting"],
        right: ["", "", "", "", "", ""],
        leftLabels: ["1.", "2.", "3.", "4.", "5.", "6."],
        rightLabels: ["(i)", "(ii)", "(iii)", "(iv)", "(v)", "(vi)"],
        answer: ["F", "A", "E", "B", "D", "C"]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Read the situations given in Column 1. Choose the associated words from the text given in the box below and write them in Column 2. An example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        wordBox: ["blink", "scary", "existed", "amazing", "splashed", "floating"],
        columns: ["Column 1", "Column 2"],
        rows: [
          [`1. In the middle of the night, the little boy heard a loud noise. He felt so afraid that he couldn't sleep.`, "scary"],
          [`2. There used to be a bookstore near my house. But it is now shifted to the town.`, "______"],
          [`3. The flashes of light from the car made her suddenly close and open her eyes several times.`, "______"],
          [`4. The children jumped into the pool and threw water at each other with loud noises.`, "______"],
          [`5. My grandmother's place is so beautiful with all green paddy fields and palm trees. It was a great experience.`, "______"],
          [`6. When I looked up at the sky, the clouds were not staying at one place. They were moving across the sky.`, "______"]
        ],
        answer: [
          [`1. In the middle of the night, the little boy heard a loud noise. He felt so afraid that he couldn't sleep.`, "scary"],
          [`2. There used to be a bookstore near my house. But it is now shifted to the town.`, "existed"],
          [`3. The flashes of light from the car made her suddenly close and open her eyes several times.`, "blink"],
          [`4. The children jumped into the pool and threw water at each other with loud noises.`, "splashed"],
          [`5. My grandmother's place is so beautiful with all green paddy fields and palm trees. It was a great experience.`, "amazing"],
          [`6. When I looked up at the sky, the clouds were not staying at one place. They were moving across the sky.`, "floating"]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `The following word grid has six words related to 'travel' used in the lesson. Circle the words in the grid. You can search horizontally and vertically. The last letter of each word has been highlighted.`,
    items: [
      {
        n: 1, type: "short",
        figure: { svg: "<svg viewBox=\"0 0 304 334\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" style=\"max-width:340px;width:100%;color:currentColor\"><g transform=\"translate(2,2)\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\".4\" stroke-width=\"1\" class=\"fg-line\"><line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\"/><line x1=\"0\" y1=\"30\" x2=\"300\" y2=\"30\"/><line x1=\"0\" y1=\"60\" x2=\"300\" y2=\"60\"/><line x1=\"0\" y1=\"90\" x2=\"300\" y2=\"90\"/><line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\"/><line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\"/><line x1=\"0\" y1=\"180\" x2=\"300\" y2=\"180\"/><line x1=\"0\" y1=\"210\" x2=\"300\" y2=\"210\"/><line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\"/><line x1=\"0\" y1=\"270\" x2=\"300\" y2=\"270\"/><line x1=\"0\" y1=\"300\" x2=\"300\" y2=\"300\"/><line x1=\"0\" y1=\"330\" x2=\"300\" y2=\"330\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"330\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"330\"/><line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"330\"/><line x1=\"90\" y1=\"0\" x2=\"90\" y2=\"330\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"330\"/><line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"330\"/><line x1=\"180\" y1=\"0\" x2=\"180\" y2=\"330\"/><line x1=\"210\" y1=\"0\" x2=\"210\" y2=\"330\"/><line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"330\"/><line x1=\"270\" y1=\"0\" x2=\"270\" y2=\"330\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"330\"/></g><g transform=\"translate(2,2)\" font-family=\"sans-serif\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" class=\"fg-ink\"><text x=\"15.0\" y=\"21.0\">C</text><text x=\"45.0\" y=\"21.0\">E</text><text x=\"75.0\" y=\"21.0\">H</text><text x=\"105.0\" y=\"21.0\">B</text><text x=\"135.0\" y=\"21.0\">O</text><text x=\"165.0\" y=\"21.0\">A</text><text x=\"195.0\" y=\"21.0\" font-weight=\"700\">T</text><text x=\"225.0\" y=\"21.0\">T</text><text x=\"255.0\" y=\"21.0\">R</text><text x=\"285.0\" y=\"21.0\">A</text><text x=\"15.0\" y=\"51.0\">T</text><text x=\"45.0\" y=\"51.0\">M</text><text x=\"75.0\" y=\"51.0\">A</text><text x=\"105.0\" y=\"51.0\">T</text><text x=\"135.0\" y=\"51.0\">B</text><text x=\"165.0\" y=\"51.0\">D</text><text x=\"195.0\" y=\"51.0\">R</text><text x=\"225.0\" y=\"51.0\">O</text><text x=\"255.0\" y=\"51.0\">V</text><text x=\"285.0\" y=\"51.0\" font-weight=\"700\">E</text><text x=\"15.0\" y=\"81.0\">R</text><text x=\"45.0\" y=\"81.0\">F</text><text x=\"75.0\" y=\"81.0\">T</text><text x=\"105.0\" y=\"81.0\">F</text><text x=\"135.0\" y=\"81.0\">Y</text><text x=\"165.0\" y=\"81.0\">I</text><text x=\"195.0\" y=\"81.0\">O</text><text x=\"225.0\" y=\"81.0\">U</text><text x=\"255.0\" y=\"81.0\">F</text><text x=\"285.0\" y=\"81.0\">I</text><text x=\"15.0\" y=\"111.0\">P</text><text x=\"45.0\" y=\"111.0\">G</text><text x=\"75.0\" y=\"111.0\">I</text><text x=\"105.0\" y=\"111.0\">C</text><text x=\"135.0\" y=\"111.0\">A</text><text x=\"165.0\" y=\"111.0\">K</text><text x=\"195.0\" y=\"111.0\">I</text><text x=\"225.0\" y=\"111.0\" font-weight=\"700\">R</text><text x=\"255.0\" y=\"111.0\">B</text><text x=\"285.0\" y=\"111.0\">F</text><text x=\"15.0\" y=\"141.0\">D</text><text x=\"45.0\" y=\"141.0\">R</text><text x=\"75.0\" y=\"141.0\">A</text><text x=\"105.0\" y=\"141.0\">S</text><text x=\"135.0\" y=\"141.0\">T</text><text x=\"165.0\" y=\"141.0\">R</text><text x=\"195.0\" y=\"141.0\">A</text><text x=\"225.0\" y=\"141.0\">I</text><text x=\"255.0\" y=\"141.0\" font-weight=\"700\">N</text><text x=\"285.0\" y=\"141.0\">T</text><text x=\"15.0\" y=\"171.0\">N</text><text x=\"45.0\" y=\"171.0\">E</text><text x=\"75.0\" y=\"171.0\">X</text><text x=\"105.0\" y=\"171.0\">R</text><text x=\"135.0\" y=\"171.0\">S</text><text x=\"165.0\" y=\"171.0\">E</text><text x=\"195.0\" y=\"171.0\">A</text><text x=\"225.0\" y=\"171.0\">F</text><text x=\"255.0\" y=\"171.0\">A</text><text x=\"285.0\" y=\"171.0\">A</text><text x=\"15.0\" y=\"201.0\">W</text><text x=\"45.0\" y=\"201.0\">A</text><text x=\"75.0\" y=\"201.0\">L</text><text x=\"105.0\" y=\"201.0\">K</text><text x=\"135.0\" y=\"201.0\">E</text><text x=\"165.0\" y=\"201.0\" font-weight=\"700\">D</text><text x=\"195.0\" y=\"201.0\">R</text><text x=\"225.0\" y=\"201.0\">M</text><text x=\"255.0\" y=\"201.0\">E</text><text x=\"285.0\" y=\"201.0\">U</text><text x=\"15.0\" y=\"231.0\">S</text><text x=\"45.0\" y=\"231.0\">C</text><text x=\"75.0\" y=\"231.0\">Z</text><text x=\"105.0\" y=\"231.0\">L</text><text x=\"135.0\" y=\"231.0\">K</text><text x=\"165.0\" y=\"231.0\">G</text><text x=\"195.0\" y=\"231.0\">A</text><text x=\"225.0\" y=\"231.0\">E</text><text x=\"255.0\" y=\"231.0\">W</text><text x=\"285.0\" y=\"231.0\">G</text><text x=\"15.0\" y=\"261.0\">M</text><text x=\"45.0\" y=\"261.0\">H</text><text x=\"75.0\" y=\"261.0\">N</text><text x=\"105.0\" y=\"261.0\">M</text><text x=\"135.0\" y=\"261.0\">B</text><text x=\"165.0\" y=\"261.0\">R</text><text x=\"195.0\" y=\"261.0\">L</text><text x=\"225.0\" y=\"261.0\">J</text><text x=\"255.0\" y=\"261.0\">S</text><text x=\"285.0\" y=\"261.0\">D</text><text x=\"15.0\" y=\"291.0\">L</text><text x=\"45.0\" y=\"291.0\">E</text><text x=\"75.0\" y=\"291.0\">K</text><text x=\"105.0\" y=\"291.0\">D</text><text x=\"135.0\" y=\"291.0\">E</text><text x=\"165.0\" y=\"291.0\">N</text><text x=\"195.0\" y=\"291.0\">S</text><text x=\"225.0\" y=\"291.0\">K</text><text x=\"255.0\" y=\"291.0\">Q</text><text x=\"285.0\" y=\"291.0\">Y</text><text x=\"15.0\" y=\"321.0\">E</text><text x=\"45.0\" y=\"321.0\" font-weight=\"700\">D</text><text x=\"75.0\" y=\"321.0\">S</text><text x=\"105.0\" y=\"321.0\">Q</text><text x=\"135.0\" y=\"321.0\">U</text><text x=\"165.0\" y=\"321.0\">A</text><text x=\"195.0\" y=\"321.0\">B</text><text x=\"225.0\" y=\"321.0\">L</text><text x=\"255.0\" y=\"321.0\">R</text><text x=\"285.0\" y=\"321.0\">M</text></g></svg>", alt: "A grid of letters with 11 rows and 10 columns; the last letter of each hidden word is in bold" },
        answerFigure: { svg: "<svg viewBox=\"0 0 304 334\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" style=\"max-width:340px;width:100%;color:currentColor\"><g transform=\"translate(2,2)\" fill=\"none\" stroke=\"currentColor\" stroke-opacity=\".4\" stroke-width=\"1\" class=\"fg-line\"><line x1=\"0\" y1=\"0\" x2=\"300\" y2=\"0\"/><line x1=\"0\" y1=\"30\" x2=\"300\" y2=\"30\"/><line x1=\"0\" y1=\"60\" x2=\"300\" y2=\"60\"/><line x1=\"0\" y1=\"90\" x2=\"300\" y2=\"90\"/><line x1=\"0\" y1=\"120\" x2=\"300\" y2=\"120\"/><line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\"/><line x1=\"0\" y1=\"180\" x2=\"300\" y2=\"180\"/><line x1=\"0\" y1=\"210\" x2=\"300\" y2=\"210\"/><line x1=\"0\" y1=\"240\" x2=\"300\" y2=\"240\"/><line x1=\"0\" y1=\"270\" x2=\"300\" y2=\"270\"/><line x1=\"0\" y1=\"300\" x2=\"300\" y2=\"300\"/><line x1=\"0\" y1=\"330\" x2=\"300\" y2=\"330\"/><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"330\"/><line x1=\"30\" y1=\"0\" x2=\"30\" y2=\"330\"/><line x1=\"60\" y1=\"0\" x2=\"60\" y2=\"330\"/><line x1=\"90\" y1=\"0\" x2=\"90\" y2=\"330\"/><line x1=\"120\" y1=\"0\" x2=\"120\" y2=\"330\"/><line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"330\"/><line x1=\"180\" y1=\"0\" x2=\"180\" y2=\"330\"/><line x1=\"210\" y1=\"0\" x2=\"210\" y2=\"330\"/><line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"330\"/><line x1=\"270\" y1=\"0\" x2=\"270\" y2=\"330\"/><line x1=\"300\" y1=\"0\" x2=\"300\" y2=\"330\"/></g><g transform=\"translate(2,2)\" font-family=\"sans-serif\" font-size=\"16\" text-anchor=\"middle\" fill=\"currentColor\" class=\"fg-ink\"><text x=\"15.0\" y=\"21.0\">C</text><text x=\"45.0\" y=\"21.0\">E</text><text x=\"75.0\" y=\"21.0\">H</text><text x=\"105.0\" y=\"21.0\">B</text><text x=\"135.0\" y=\"21.0\">O</text><text x=\"165.0\" y=\"21.0\">A</text><text x=\"195.0\" y=\"21.0\" font-weight=\"700\">T</text><text x=\"225.0\" y=\"21.0\">T</text><text x=\"255.0\" y=\"21.0\">R</text><text x=\"285.0\" y=\"21.0\">A</text><text x=\"15.0\" y=\"51.0\">T</text><text x=\"45.0\" y=\"51.0\">M</text><text x=\"75.0\" y=\"51.0\">A</text><text x=\"105.0\" y=\"51.0\">T</text><text x=\"135.0\" y=\"51.0\">B</text><text x=\"165.0\" y=\"51.0\">D</text><text x=\"195.0\" y=\"51.0\">R</text><text x=\"225.0\" y=\"51.0\">O</text><text x=\"255.0\" y=\"51.0\">V</text><text x=\"285.0\" y=\"51.0\" font-weight=\"700\">E</text><text x=\"15.0\" y=\"81.0\">R</text><text x=\"45.0\" y=\"81.0\">F</text><text x=\"75.0\" y=\"81.0\">T</text><text x=\"105.0\" y=\"81.0\">F</text><text x=\"135.0\" y=\"81.0\">Y</text><text x=\"165.0\" y=\"81.0\">I</text><text x=\"195.0\" y=\"81.0\">O</text><text x=\"225.0\" y=\"81.0\">U</text><text x=\"255.0\" y=\"81.0\">F</text><text x=\"285.0\" y=\"81.0\">I</text><text x=\"15.0\" y=\"111.0\">P</text><text x=\"45.0\" y=\"111.0\">G</text><text x=\"75.0\" y=\"111.0\">I</text><text x=\"105.0\" y=\"111.0\">C</text><text x=\"135.0\" y=\"111.0\">A</text><text x=\"165.0\" y=\"111.0\">K</text><text x=\"195.0\" y=\"111.0\">I</text><text x=\"225.0\" y=\"111.0\" font-weight=\"700\">R</text><text x=\"255.0\" y=\"111.0\">B</text><text x=\"285.0\" y=\"111.0\">F</text><text x=\"15.0\" y=\"141.0\">D</text><text x=\"45.0\" y=\"141.0\">R</text><text x=\"75.0\" y=\"141.0\">A</text><text x=\"105.0\" y=\"141.0\">S</text><text x=\"135.0\" y=\"141.0\">T</text><text x=\"165.0\" y=\"141.0\">R</text><text x=\"195.0\" y=\"141.0\">A</text><text x=\"225.0\" y=\"141.0\">I</text><text x=\"255.0\" y=\"141.0\" font-weight=\"700\">N</text><text x=\"285.0\" y=\"141.0\">T</text><text x=\"15.0\" y=\"171.0\">N</text><text x=\"45.0\" y=\"171.0\">E</text><text x=\"75.0\" y=\"171.0\">X</text><text x=\"105.0\" y=\"171.0\">R</text><text x=\"135.0\" y=\"171.0\">S</text><text x=\"165.0\" y=\"171.0\">E</text><text x=\"195.0\" y=\"171.0\">A</text><text x=\"225.0\" y=\"171.0\">F</text><text x=\"255.0\" y=\"171.0\">A</text><text x=\"285.0\" y=\"171.0\">A</text><text x=\"15.0\" y=\"201.0\">W</text><text x=\"45.0\" y=\"201.0\">A</text><text x=\"75.0\" y=\"201.0\">L</text><text x=\"105.0\" y=\"201.0\">K</text><text x=\"135.0\" y=\"201.0\">E</text><text x=\"165.0\" y=\"201.0\" font-weight=\"700\">D</text><text x=\"195.0\" y=\"201.0\">R</text><text x=\"225.0\" y=\"201.0\">M</text><text x=\"255.0\" y=\"201.0\">E</text><text x=\"285.0\" y=\"201.0\">U</text><text x=\"15.0\" y=\"231.0\">S</text><text x=\"45.0\" y=\"231.0\">C</text><text x=\"75.0\" y=\"231.0\">Z</text><text x=\"105.0\" y=\"231.0\">L</text><text x=\"135.0\" y=\"231.0\">K</text><text x=\"165.0\" y=\"231.0\">G</text><text x=\"195.0\" y=\"231.0\">A</text><text x=\"225.0\" y=\"231.0\">E</text><text x=\"255.0\" y=\"231.0\">W</text><text x=\"285.0\" y=\"231.0\">G</text><text x=\"15.0\" y=\"261.0\">M</text><text x=\"45.0\" y=\"261.0\">H</text><text x=\"75.0\" y=\"261.0\">N</text><text x=\"105.0\" y=\"261.0\">M</text><text x=\"135.0\" y=\"261.0\">B</text><text x=\"165.0\" y=\"261.0\">R</text><text x=\"195.0\" y=\"261.0\">L</text><text x=\"225.0\" y=\"261.0\">J</text><text x=\"255.0\" y=\"261.0\">S</text><text x=\"285.0\" y=\"261.0\">D</text><text x=\"15.0\" y=\"291.0\">L</text><text x=\"45.0\" y=\"291.0\">E</text><text x=\"75.0\" y=\"291.0\">K</text><text x=\"105.0\" y=\"291.0\">D</text><text x=\"135.0\" y=\"291.0\">E</text><text x=\"165.0\" y=\"291.0\">N</text><text x=\"195.0\" y=\"291.0\">S</text><text x=\"225.0\" y=\"291.0\">K</text><text x=\"255.0\" y=\"291.0\">Q</text><text x=\"285.0\" y=\"291.0\">Y</text><text x=\"15.0\" y=\"321.0\">E</text><text x=\"45.0\" y=\"321.0\" font-weight=\"700\">D</text><text x=\"75.0\" y=\"321.0\">S</text><text x=\"105.0\" y=\"321.0\">Q</text><text x=\"135.0\" y=\"321.0\">U</text><text x=\"165.0\" y=\"321.0\">A</text><text x=\"195.0\" y=\"321.0\">B</text><text x=\"225.0\" y=\"321.0\">L</text><text x=\"255.0\" y=\"321.0\">R</text><text x=\"285.0\" y=\"321.0\">M</text></g><g transform=\"translate(2,2)\" fill=\"none\" stroke=\"#1a7f5a\" stroke-width=\"2.5\"><rect x=\"93\" y=\"3\" width=\"114\" height=\"24\" rx=\"12\"/><rect x=\"153\" y=\"33\" width=\"144\" height=\"24\" rx=\"12\"/><rect x=\"213\" y=\"3\" width=\"24\" height=\"114\" rx=\"12\"/><rect x=\"123\" y=\"123\" width=\"144\" height=\"24\" rx=\"12\"/><rect x=\"3\" y=\"183\" width=\"174\" height=\"24\" rx=\"12\"/><rect x=\"33\" y=\"123\" width=\"24\" height=\"204\" rx=\"12\"/></g></svg>", alt: "The same letter grid with the six hidden words circled" },
        answer: [
          "The six words are:",
          "- **BOAT** - row 1, from the 4th to the 7th letter, across",
          "- **DROVE** - row 2, from the 6th to the 10th letter, across",
          "- **TOUR** - 8th column, from row 1 to row 4, down",
          "- **TRAIN** - row 5, from the 5th to the 9th letter, across",
          "- **WALKED** - row 7, from the 1st to the 6th letter, across",
          "- **REACHED** - 2nd column, from row 5 to row 11, down"
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Read the following sentences from the text and underline the subject and the verb.`,
    items: [
      {
        n: 1,
        reference: {
          title: "Subject-verb agreement (rules from the book, in short)",
          body: `The verb changes according to whether the subject is singular or plural and which person it is. Choosing the correct verb for the subject is called **subject-verb agreement**.\n\n- A subject and its verb must agree even if other words come between them: *The formation of paragraphs **is** important in writing.*\n- When the subjects are considered one by one, the verb is singular: *Every man and woman **has** the right to vote.*\n- A collective noun (class, committee, audience, team) takes a singular verb when the group acts as one unit: *The committee **decides** on the new policy tomorrow.*\n- 'Each', 'either', 'every', 'much' and 'neither' always take singular verbs: *Each of the children **was** given a gift.*\n- Words that end in 's' but mean one thing are singular: *Mathematics **is** an interesting subject.*\n- With 'pair of' (glasses, scissors, pants, tongs) the verb agrees with 'pair': *This pair of scissors **is** sharp.*\n- When subjects are joined by 'or' or 'nor', the verb agrees with the subject nearer to it: *Neither the students nor the teacher **wants** to cancel the trip. Either the manager or the employees **are** responsible for the mistake.*`
        },
        parts: [
          { label: "1", type: "short", question: `Amma and Appa are fast asleep.<br>(When the subject of a sentence has two or more nouns or pronouns that are connected by 'and', we use a plural verb).`, answer: "Subject: **Amma and Appa**. Verb: **are**." },
          { label: "2", type: "short", question: `It's hot, dry, and there is sand everywhere.<br>(In case the subject is 'it', the verb that follows is either 'is' or 'was' depending on the tense of the sentence).`, answer: "First clause - subject: **It**, verb: **'s (is)**. Second clause - subject: **sand**, verb: **is**." },
          { label: "3", type: "short", question: `There are so many hills here, and beaches too.<br>(When we begin a sentence with 'there', the subject comes after the verb).`, answer: "Subject: **hills (and beaches)**. Verb: **are**." }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: `Choose the correct option from the words given in the brackets.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: `A pair of sunglasses _________ (is/are) essential when travelling to sunny destinations.`, answer: "**is** - the subject is 'pair', which is singular." },
          { label: "2", type: "fill", question: `Either the tour guide or the tourists _________ (has/have) to arrive first at the meeting point.`, answer: "**have** - the verb agrees with the nearer subject, 'tourists'." },
          { label: "3", type: "fill", question: `The information on travel expenses _________ (is/are) useful for first-time travellers.`, answer: "**is** - 'information' is singular." },
          { label: "4", type: "fill", question: `Neither the flight crew nor the pilot _________ (was/were) aware of the delay.`, answer: "**was** - the nearer subject, 'pilot', is singular." },
          { label: "5", type: "fill", question: `The news about the heavy rains _________ (makes/make) many people reconsider their vacation plans.`, answer: "**makes** - 'news' is singular." },
          { label: "6", type: "fill", question: `A pair of binoculars _________ (is/are) useful for spotting wildlife on a safari.`, answer: "**is** - the subject is 'pair'." },
          { label: "7", type: "fill", question: `The hill stations in India _________ (remains/remain) a popular travel destination during winter.`, answer: "**remain** - 'hill stations' is plural." },
          { label: "8", type: "fill", question: `Keeping accounts _________ (is/are) important for spending money wisely during travel.`, answer: "**is** - 'keeping accounts' is one activity, so it is singular." },
          { label: "9", type: "fill", question: `Either the ticket or the bus passes _________ (need/needs) to be used for travelling in the tourist bus.`, answer: "**need** - the nearer subject, 'bus passes', is plural." },
          { label: "10", type: "fill", question: `Neither the passengers nor the taxi driver _________ (was/were) aware of the best route to the hotel.`, answer: "**was** - the nearer subject, 'taxi driver', is singular." }
        ]
      }
    ]
  }
];
