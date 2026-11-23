export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Comprehension", "Fact and opinion"] };

export const sections = [
  {
    roman: "I",
    instruction: `Complete the following statements with suitable reasons. Share your answers with your classmates and teacher.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", figure: { src: "images/leroy-thinking.png", alt: "Leroy thinking with his hand on his chin" }, question: "Leroy's nickname was Encyclopedia and everyone called him by that name because ______ .", answer: "...he read more books than anyone in Idaville and never forgot a fact, so his head was full of facts from A to Z, like an encyclopedia." },
          { label: "2", type: "fill", question: "At the dinner table on Tuesday night, Chief Brown stared at his cream-of-mushroom soup as ______ .", answer: "...he had a mystery he could not solve. Staring at his food was the sign that a case baffled him, and Leroy and his mother knew what it meant." },
          { label: "3", type: "fill", question: "Encyclopedia sat quietly at the dinner table because ______ .", answer: "...he knew that his parents were discussing the case for his benefit. He listened to all the facts first and said nothing until he had thought it over." },
          { label: "4", type: "fill", question: "Nolan put the will on the kitchen table because ______ .", answer: "...he realised that he was dying and, with his last strength, wanted to make sure the will was found. It left everything, including the nursery, to Davenport." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Do you think Chief Brown would need Leroy's help to solve this case? If yes, why? If no, why not?`,
    items: [
      {
        n: 1, type: "long",
        question: "Do you think Chief Brown would need Leroy's help to solve this case? If yes, why? If no, why not?",
        answer: "Yes. The police had already searched Nolan's house and found no trace of the jewellery, there was no proof against Nolan or Davenport, and nobody could make sense of the four strange words. Chief Brown always turns to Leroy when a case baffles him, and Leroy is the one who decodes the message."
      }
    ]
  },
  {
    roman: "III",
    instruction: `A fact is something that can be proven true or false. A fact is not based on people's beliefs. An opinion on the other hand is a belief, feeling, or judgement, and can vary from one person to another. An opinion cannot be proven. Identify which of the following statements from part I and II of the story are facts or opinions. One example has been done for you. Share your answers with your classmates and teacher.`,
    items: [
      {
        n: 1, type: "table",
        question: "Write Fact or Opinion for each statement.",
        columns: ["Statement", "Fact or Opinion?"],
        rows: [
          ["1. Encyclopedia's father was the Chief of Police.", "Fact"],
          ["2. Everyone thought that Chief Brown must be the smartest police chief in the country.", "______"],
          ["3. An encyclopedia is a book or set of books filled with facts from A to Z.", "______"],
          ["4. Leroy's friends said that he was like a library and computer rolled into one, and more user-friendly.", "______"],
          ["5. Two masked men held up the Diamond Mart on Sixth Avenue.", "______"],
          ["6. Nolan and Davenport had met while both were in prison in South Carolina.", "______"],
          ["7. Chief Brown's hunch was that Davenport and Nolan decided to hide the loot until things cooled down.", "______"],
          ["8. Nolan wrote a four words code to tell Davenport where he had hidden the stolen jewellery.", "______"]
        ],
        answer: [
          ["1. Encyclopedia's father was the Chief of Police.", "Fact"],
          ["2. Everyone thought that Chief Brown must be the smartest police chief in the country.", "Opinion - it is what people believe."],
          ["3. An encyclopedia is a book or set of books filled with facts from A to Z.", "Fact"],
          ["4. Leroy's friends said that he was like a library and computer rolled into one, and more user-friendly.", "Opinion - a friendly comparison, not provable."],
          ["5. Two masked men held up the Diamond Mart on Sixth Avenue.", "Fact"],
          ["6. Nolan and Davenport had met while both were in prison in South Carolina.", "Fact"],
          ["7. Chief Brown's hunch was that Davenport and Nolan decided to hide the loot until things cooled down.", "Opinion - a hunch is a feeling, not proven."],
          ["8. Nolan wrote a four words code to tell Davenport where he had hidden the stolen jewellery.", "Fact - the story confirms it at the end."]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `Complete the table by choosing the character traits of Leroy given in the box below. There is an extra word that you do not need. One example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        wordBox: ["cleverness", "knowledgeable", "keen", "listener", "gentle", "humble"],
        question: "Choose the trait that matches each piece of textual evidence.",
        columns: ["Textual Evidences", "Traits"],
        rows: [
          ["1. He read more books than anyone in Idaville, and he never forgot a fact.", "knowledgeable"],
          ["2. Encyclopedia never spoke of the help he gave his father. He didn't want to seem different from other boys.", "______"],
          ["3. Encyclopedia sat quietly. He knew his mother and father were discussing the case for his benefit.", "______"],
          ["4. Usually, he needed to ask only one question to solve a case before dessert.", "______"]
        ],
        answer: [
          ["1. He read more books than anyone in Idaville, and he never forgot a fact.", "knowledgeable"],
          ["2. Encyclopedia never spoke of the help he gave his father. He didn't want to seem different from other boys.", "humble"],
          ["3. Encyclopedia sat quietly. He knew his mother and father were discussing the case for his benefit.", "keen listener"],
          ["4. Usually, he needed to ask only one question to solve a case before dessert.", "cleverness"],
          ["*Extra word: gentle.*", ""]
        ]
      }
    ]
  }
];
