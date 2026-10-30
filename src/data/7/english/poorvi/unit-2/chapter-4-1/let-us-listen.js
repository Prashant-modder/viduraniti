export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to an announcement. State whether the following statement is true or false.",
    items: [
      {
        n: 1, type: "short", question: "Dr. Dolittle's new clinic presents an offer of free medicines.",
        answer: "**False.** (The announcement says he will ensure they receive the best care, but it does not mention free medicines.)"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Complete the details given below with one or two exact words you hear.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "fill", question: "The new clinic is located in the town of ______.", answer: "**Woodstock**" },
          { label: "2", type: "fill", question: "The address is 12, ______ Lane.", answer: "**Rose**" },
          { label: "3", type: "fill", question: "The clinic is open Monday to Friday from ______ a.m. to 5 p.m.", answer: "**9**" },
          { label: "4", type: "fill", question: "Special timings for ______ are on Saturdays from 11 a.m. to 2 p.m.", answer: "**birds**" },
          { label: "5", type: "fill", question: "Dr. Dolittle will ensure that animals get the ______.", answer: "**best care**" },
          { label: "6", type: "fill", question: "All animals—horses, cows, ______ wild animals, and others are welcome.", answer: "**pets** (or 'pets and')" }
        ]
      }
    ]
  }
];
