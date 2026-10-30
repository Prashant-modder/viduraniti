export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the extracts given below and answer the questions that follow.",
    items: [
      {
        n: 1, passage: `Before beginning this story, let me put you in the picture. I am Anita, fourteen years old. My brother Anand... caused all that hoo-ha with his burglar alarm. The trouble with him is that he thinks he is a scientist. He loves tinkering with all sorts of electrical gadgets...`,
        parts: [
          { label: "i", type: "fill", question: "When Anita says, '...let me put you in the picture', she wants to ______ (introduce/summarise) the situation for the benefit of the readers.", answer: "**introduce**" },
          { label: "ii", type: "mcq", question: "Anand loves 'tinkering' with all sorts of electrical gadgets. This means that he enjoys...", options: ["A. dismantling and creating", "B. labelling or naming", "C. repairing or improving", "D. collecting and displaying"], answer: "**A. dismantling and creating**" },
          { label: "iii", type: "mcq", question: "Which of the following options most suitably describes Anand's personality?", options: ["A. methodical and cautious", "B. creative and experimental", "C. energetic and hasty", "D. shy and reserved"], answer: "**B. creative and experimental**" },
          { label: "iv", type: "short", question: "Based on the extract, compare what Anita thinks of her brother Anand with what he thinks of himself.", answer: "Anita thinks her brother is a nuisance whose silly 'inventions' cause trouble and never work. In contrast, Anand thinks of himself as a brilliant, serious scientist and a genius." }
        ]
      },
      {
        n: 2, passage: `"I was about to direct him upstairs, when Anand said quickly, 'The one next to this one.'\n'You silly goose!' I said angrily as soon as the man had gone. 'That's your room. He'll come back as mad as mad can be.'\n'At least it will give us some time to think of something,' Anand said...`,
        parts: [
          { label: "i", type: "fill", question: "Anita was angry with Anand because...", answer: "...she thought he made a foolish mistake by directing the dangerous, armed thief into his own bedroom, risking making the thief even angrier." },
          { label: "ii", type: "short", question: "Which action of Anand shows his presence of mind?", answer: "Quickly misleading the thief into his heavily booby-trapped 'time machine' room to trap or distract him, buying them time to shout for help." },
          { label: "iii", type: "mcq", question: "What might be the cause of the strange noises emerging from the next room?", options: ["A. The intruder moving furniture", "B. Anand's time machine getting activated", "C. The intruder locating the switch", "D. Anand's invention malfunctioning"], answer: "**B. Anand's time machine getting activated**" },
          { label: "iv", type: "mcq", question: "Which of the following best describes the atmosphere in this extract? (A. relaxing, B. peaceful, C. tense, D. sad, E. suspenseful, F. joyful)", answer: "**(c) C and E** (Tense and suspenseful)." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Complete the table with the suitable traits of the characters based on evidence from the text.",
    items: [
      {
        n: 1, type: "match", question: "Match the character to traits (creative, curious, careful, responsible, bothersome, confident).",
        answer: "**Anita:**\n1. **careful**: \"Now clean up this mess before anyone gets home.\"\n2. **responsible**: \"We're old enough to look after ourselves, Ma...\"\n\n**Anand:**\n1. **bothersome**: \"And this is not the first time he's got on Papa's nerves...\"\n2. **creative**: \"He loves tinkering with all sorts of electrical gadgets...\"\n3. **confident**: \"Nothing will go wrong this time. I've planned it out carefully.\"\n4. **curious**: \"But how does the alarm know that a burglar is opening the door?\" *(Note: This was actually asked by Anita, but if placed for Anand, it shows technical curiosity. Based on strict text, Anita asks it. If we must assign 3 traits to Anand based on the prompt's layout: creative, confident, and bothersome fit him perfectly).* "
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following questions.",
    items: [
      { n: 1, type: "long", question: "What prompted Anand to create the burglar alarm?", answer: "There had been a recent rush of thefts in their colony, which gave Anand the idea that a burglar alarm was exactly what their house needed." },
      { n: 2, type: "long", question: "How did Anand's father become the target of the burglar alarm?", answer: "Anand rigged the alarm to go off and drop a water bag only when the door was opened 'stealthily' or gently. Because his father always opens the door softly, he accidentally triggered the trap and got completely soaked." },
      { n: 3, type: "long", question: "How did Anand's parents and sister react to his ideas?", answer: "Anita found them annoying and wanted to stay out of trouble. His father was strictly against them (locking up his tools and saying 'NO'). His mother was a bit more sympathetic and soothing, convincing the father to at least look at the inventions." },
      { n: 4, type: "long", question: "How did Anand behave when he was on his 'inventing binges'?", answer: "He acted like a 'savage.' He locked himself in his room, created a massive mess of wires and tools, made constant loud noises (hammering, sawing), and didn't even bother to comb his hair." },
      { n: 5, type: "long", question: "Why did Mr. Sharma not believe Anand when he spoke about his time machine?", answer: "Mr. Sharma thought it was just the wild, overactive imagination of a child. As an adult, he knew time machines weren't real and assumed the thief simply ran away out of a window or slipped past them." },
      { n: 6, type: "long", question: "Give an ending to this story, explaining what might have happened to Boppa.", answer: "*(Sample: Terrified by the flashing lights, whirring dynamos, and eerie humming of the 'time machine' in the dark, Boppa likely panicked, tripped over the wires, dropped his cudgel and scarf, and scrambled out of the window as fast as he could, vowing never to rob that house again!)*" }
    ]
  }
];
