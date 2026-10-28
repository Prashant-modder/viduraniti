export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Select the appropriate word from the brackets that correctly replaces the underlined word in the sentences from the text.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "mcq", question: "A sundial with a **strange** device. (unusual, peculiar, new, rare, external)", answer: "**peculiar**" },
          { label: "2", type: "mcq", question: "... which Mrs. Jones thinks rather **nice**. (pleasant, superior, agreeable, gentle, charming)", answer: "**pleasant** (or agreeable)" },
          { label: "3", type: "mcq", question: "They are so **delicate**... (delicious, fragile, dainty, graceful, weak)", answer: "**fragile** (or dainty)" },
          { label: "4", type: "mcq", question: "\"Where is this lovely thing?\" I **cried**. (exclaimed, wept, shouted, announced, whispered)", answer: "**exclaimed**" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the type of instruments in Column 1 with their definitions in Column 2. Column 3 shows one example of each type of instrument. Add more examples in Column 3.",
    items: [
      {
        n: 1,
        type: "match",
        question: "Match definitions for: implement, tool, equipment, appliance, gadget.",
        left: ["1. implement", "2. tool", "3. equipment", "4. appliance", "5. gadget"],
        right: [
          "(i) something that is electrical and is used to do work in the house",
          "(ii) something small that is mechanical or electronic",
          "(iii) something that works on being moved by hand",
          "(iv) a set of necessary items for a particular purpose",
          "(v) something used by hand to make or repair"
        ],
        answer: [
          "1 - (iii) (spade, knife)",
          "2 - (v) (hammer, screwdriver)",
          "3 - (iv) (cricket bat, helmet)",
          "4 - (i) (mixer grinder, washing machine)",
          "5 - (ii) (mobile phone, laptop)"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Complete the table by making new words in Column 1 using the hints given in Column 2. Replace the first letter of the given word to create new words.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "Base word: **dice**\n(i) cut into small pieces\n(ii) grain that we cook\n(iii) plural of mouse\n(iv) bad habit", answer: "(i) **slice** (or mince)\n(ii) **rice**\n(iii) **mice**\n(iv) **vice**" },
          { label: "2", type: "short", question: "Base word: **soil**\n(i) heat something\n(ii) work very hard\n(iii) length of wire in a circle\n(iv) sheets to wrap food items", answer: "(i) **boil**\n(ii) **toil**\n(iii) **coil**\n(iv) **foil**" }
        ]
      }
    ]
  }
];
