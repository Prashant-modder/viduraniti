export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension", "Character traits"] };

export const sections = [
  {
    roman: "I",
    instruction: `Read the extracts given below and answer the questions that follow.`,
    items: [
      {
        n: 1,
        passage: `*Before beginning this story, let me put you in the picture. I am Anita, fourteen years old. My brother Anand, one year younger than me, caused all that hoo-ha with his burglar alarm. The trouble with him is that he thinks he is a scientist. He loves tinkering with all sorts of electrical gadgets, tools, dynamos, planks of wood, and things like that. And he keeps creating 'inventions' that never work out as they are supposed to.*`,
        parts: [
          { label: "i", type: "fill", question: `Complete the following sentence suitably by choosing the correct option from those given in the brackets.<br>When Anita says, "...let me put you in the picture", she wants to _________ (introduce/summarise) the situation for the benefit of the readers.`, answer: "**introduce** - she is giving the readers the background (who she and Anand are) before the story begins." },
          { label: "ii", type: "mcq", question: `Anand loves 'tinkering' with all sorts of electrical gadgets. This means that he enjoys _________ gadgets.`, options: [`A. dismantling and creating`, `B. labelling or naming`, `C. repairing or improving`, `D. collecting and displaying`], answer: "**A.** Tinkering means experimenting and fiddling, and Anand takes gadgets apart and builds new things from the parts." },
          { label: "iii", type: "mcq", question: `Which of the following options most suitably describes Anand's personality?`, options: [`A. methodical and cautious`, `B. creative and experimental`, `C. energetic and hasty`, `D. shy and reserved`], answer: "**B.** He keeps creating and trying out new inventions." },
          { label: "iv", type: "short", question: `Based on the extract, compare what Anita thinks of her brother Anand with what he thinks of himself.`, answer: "Anita thinks that Anand only *thinks* he is a scientist, because his inventions never work out as they are supposed to. Anand, on the other hand, is sure that he is a real scientist and inventor." }
        ]
      },
      {
        n: 2,
        passage: `*I was about to direct him upstairs, when Anand said quickly, "The one next to this one."*\n\n*"You silly goose!" I said angrily as soon as the man had gone.*\n\n*"That's your room. He'll come back as mad as mad can be."*\n\n*"At least it will give us some time to think of something," Anand said. "He'll take a while to locate the light switch. Let's shout." All of a sudden there was a crash followed by a loud scream. More strange noises emerged from the next room—a few muffled thumps, an eerie whine, and a low, humming sound.*`,
        parts: [
          { label: "i", type: "fill", question: `Complete the sentence given below with a suitable reason.<br>Anita was angry with Anand because ____________.`, answer: "...Anand had sent the burglar to the room next to theirs, which was really Anand's own room, and Anita was afraid that the man would come back furious." },
          { label: "ii", type: "short", question: `Which action of Anand shows his presence of mind?`, answer: "Anand quickly sent Boppa to the next room instead of their father's room. This gave the children time to think and to shout for help." },
          { label: "iii", type: "mcq", question: `What might be the cause of the strange noises emerging from the next room?`, options: [`A. The intruder moving furniture around`, `B. Anand's time machine getting activated`, `C. The intruder locating the light switch`, `D. Anand's invention malfunctioning`], answer: "**B.** Boppa had walked into the room where the time machine was, and the humming and whining sounds came from the machine being started." },
          { label: "iv", type: "mcq", question: `Which of the following best describes the atmosphere in this extract?`, options: [`A. relaxing`, `B. peaceful`, `C. tense`, `D. sad`, `E. suspenseful`, `F. joyful`, `(a) A, D and E`, `(b) B and F`, `(c) C and E`, `(d) Only D`], answer: "**(c) C and E.** The strange noises, the burglar and the children locked in the room make the atmosphere tense and suspenseful." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Complete the table with the suitable traits of the characters based on evidence from the text. Choose the traits given in the box below. An example has been done for you.`,
    items: [
      {
        n: 1, type: "table",
        wordBox: ["creative", "curious", "careful", "responsible", "bothersome", "confident"],
        columns: ["Character", "Traits", "Evidence from the Text"],
        rows: [
          [{ text: "Anand", rowspan: 3 }, "1. bothersome", "And this is not the first time he's got on Papa's nerves or frightened someone half to death in the house."],
          ["2. ______", "He loves tinkering with all sorts of electrical gadgets, tools, dynamos, planks of wood, and things like that. And he keeps creating 'inventions' that never work out as they are supposed to."],
          ["3. ______", "\"Nothing will go wrong this time. I've planned it out carefully. See the blueprint.\""],
          [{ text: "Anita", rowspan: 3 }, "1. ______", "\"We're old enough to look after ourselves, Ma...\""],
          ["2. ______", "\"But how does the alarm know that a burglar is opening the door?\""],
          ["3. ______", "\"Now clean up this mess before anyone gets home.\""]
        ],
        answer: [
          [{ text: "Anand", rowspan: 3 }, "1. bothersome", "And this is not the first time he's got on Papa's nerves or frightened someone half to death in the house."],
          ["2. creative", "He loves tinkering with all sorts of electrical gadgets, tools, dynamos, planks of wood, and things like that. And he keeps creating 'inventions' that never work out as they are supposed to."],
          ["3. confident", "\"Nothing will go wrong this time. I've planned it out carefully. See the blueprint.\""],
          [{ text: "Anita", rowspan: 3 }, "1. responsible", "\"We're old enough to look after ourselves, Ma...\""],
          ["2. curious", "\"But how does the alarm know that a burglar is opening the door?\""],
          ["3. careful", "\"Now clean up this mess before anyone gets home.\""]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Answer the following questions.`,
    items: [
      { n: 1, type: "long", question: `What prompted Anand to create the burglar alarm?`, answer: "There had been a rush of thefts in the colony, and Anand got it into his head that what was needed was a burglar alarm. As soon as Papa left for the office and Ma for the market, he began work on it." },
      { n: 2, type: "long", question: `How did Anand's father become the target of the burglar alarm?`, answer: "Anand had rigged the alarm to work only when the door was opened gently, as a thief would open it. Papa always opens the door softly, so he set off the alarm. The water bag fell on his head and he was left soaking wet and angry." },
      { n: 3, type: "long", question: `How did Anand's parents and sister react to his ideas?`, answer: "Papa was angry and strict. After the water bag he said 'NO' to the time machine, and he locked up his tool box and hid the key. Ma was worried about her oven and mixer, yet she felt sorry for Anand and persuaded Papa to at least look at the machine. Anita was doubtful, warned Anand not to bring her into trouble and told him to clean up the mess." },
      { n: 4, type: "long", question: `How did Anand behave when he was on his 'inventing binges'?`, answer: "He took apart all the gadgets in the house to collect parts, and the house echoed with hammering, sawing and clattering. He turned his room into a network of wires, springs, levers and bulbs, would not let anyone in, and even forgot to comb his hair, so that he looked wild." },
      { n: 5, type: "long", question: `Why did Mr. Sharma not believe Anand when he spoke about his time machine?`, answer: "Mr. Sharma thought that Anand was simply being imaginative. He smiled fondly, remarked 'What an imagination this boy has!' and sent the children to bed. A time machine that could carry a man into the past was too hard for him to believe." },
      { n: 6, type: "long", question: `Give an ending to this story, explaining what might have happened to Boppa.`, answer: ["*(Personal answer - sample.)*", "Boppa was so frightened by the humming machine and the flashing bulbs that he ran out through the back window of the room in the confusion, leaving his scarf behind. He was caught by the police soon afterwards near the railway station while he was trying to escape from the colony, and the thefts in the neighbourhood stopped. Anand, of course, never gave up his belief that Boppa had travelled into the past."] }
    ]
  }
];
