export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions"] };
export const sections = [
  {
    roman: "I",
    instruction: "Complete the following statements with suitable reasons.",
    items: [
      { n: 1, type: "fill", question: "Leroy's nickname was Encyclopedia and everyone called him by that name because...", answer: "...he read more books than anyone and his head was filled with facts from A to Z." },
      { n: 2, type: "fill", question: "At the dinner table on Tuesday night, Chief Brown stared at his cream-of-mushroom soup as...", answer: "...he had a mystery case that he could not solve." },
      { n: 3, type: "fill", question: "Encyclopedia sat quietly at the dinner table because...", answer: "...he knew his parents were discussing the facts of the case specifically for his benefit." },
      { n: 4, type: "fill", question: "Nolan put the will on the kitchen table because...", answer: "...he had suffered a stroke, realized he was dying, and wanted to leave his property and the secret code to Davenport." }
    ]
  },
  {
    roman: "II",
    instruction: "Do you think Chief Brown would need Leroy's help to solve this case?",
    items: [
      { n: 1, type: "long", question: "If yes, why? If no, why not?", answer: "Yes, Chief Brown absolutely needed Leroy's help. Even though Chief Brown was smart, neither he nor Mrs. Brown could figure out the anagram code (Nom Utes Sweden Hurts). It required Leroy's unique ability to look beyond obvious meanings." }
    ]
  },
  {
    roman: "III",
    instruction: "Identify which of the following statements from part I and II are facts or opinions.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "short", question: "Encyclopedia's father was the Chief of Police.", answer: "**Fact**" },
          { label: "2", type: "short", question: "Everyone thought that Chief Brown must be the smartest police chief...", answer: "**Opinion**" },
          { label: "3", type: "short", question: "An encyclopedia is a book or set of books filled with facts...", answer: "**Fact**" },
          { label: "4", type: "short", question: "Leroy's friends said that he was like a library and computer rolled into one...", answer: "**Opinion**" },
          { label: "5", type: "short", question: "Two masked men held up the Diamond Mart on Sixth Avenue.", answer: "**Fact**" },
          { label: "6", type: "short", question: "Nolan and Davenport had met while both were in prison...", answer: "**Fact**" },
          { label: "7", type: "short", question: "Chief Brown's hunch was that Davenport and Nolan decided to hide the loot...", answer: "**Opinion**" },
          { label: "8", type: "short", question: "Nolan wrote a four words code to tell Davenport where he had hidden the stolen jewellery.", answer: "**Fact**" }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Complete the table by choosing the character traits of Leroy given in the box below.",
    items: [
      {
        n: 1, type: "match", question: "Match Evidences to Traits (cleverness, knowledgeable, keen listener, gentle, humble).",
        left: [ "1. He read more books than anyone...", "2. Encyclopedia never spoke of the help he gave his father...", "3. Encyclopedia sat quietly...", "4. Usually, he needed to ask only one question..." ],
        right: ["knowledgeable", "humble", "keen listener", "cleverness"],
        answer: ["1. knowledgeable", "2. humble", "3. keen listener", "4. cleverness"]
      }
    ]
  }
];
