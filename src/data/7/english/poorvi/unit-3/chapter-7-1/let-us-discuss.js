export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Cause and effect", "Sequencing"] };

export const sections = [
  {
    roman: "I",
    instruction: `Complete the cause-and-effect table given below.`,
    items: [
      {
        n: 1, type: "table",
        columns: ["Causes", "Effects"],
        rows: [
          ["1. Anand set up his burglar alarm and rigged it to work when the door was opened softly.", "______"],
          ["2. ______", "Anita was able to avoid any responsibility as Anand faced the consequences alone."],
          ["3. We watched the movie 'Back to the Future'.", "Anand: ______"],
          ["4. Papa firmly said 'NO' to trying out the time machine.", "______"]
        ],
        answer: [
          ["1. Anand set up his burglar alarm and rigged it to work when the door was opened softly.", "Papa, who always opens the door softly, set off the alarm and was soaked by the water bag. He was very angry."],
          ["2. Anita warned Anand not to bring her in if he got a scolding, and told him to say she was not involved.", "Anita was able to avoid any responsibility as Anand faced the consequences alone."],
          ["3. We watched the movie 'Back to the Future'.", "Anand: decided to build a time machine of his own and took apart the gadgets in the house to collect parts."],
          ["4. Papa firmly said 'NO' to trying out the time machine.", "Anand looked crestfallen. Ma persuaded Papa to at least take a look at the machine, but it could not be tried out that day."]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Do you think Anand was able to keep his promise regarding the time machine? If yes, why? If no, why not?`,
    items: [
      {
        n: 1, type: "long",
        answer: "Yes, he was. He had promised Ma half-heartedly, but he never touched the time machine while his parents were away. It was Boppa, the intruder, who walked into the room and switched it on. Anand was locked in the other room all the while and could only wish that he could see what was happening."
      }
    ]
  },
  {
    roman: "",
    instruction: `Arrange the following events in the correct order of occurrence.`,
    items: [
      {
        n: 1, type: "order",
        items: [
          `The door swings open, and they see Boppa, standing there with an evil grin.`,
          `Boppa is nowhere to be found, but his green scarf is lying near the time machine.`,
          `Mrs. Sharma, her husband, and Dr. Mohan unlock the door and enter the house to help the children.`,
          `Anita wakes Anand up, informing him that someone is trying to get into the house.`,
          `Anand misleads Boppa into entering his room instead of his father's room.`
        ],
        answer: [4, 1, 5, 3, 2]
      }
    ]
  }
];
