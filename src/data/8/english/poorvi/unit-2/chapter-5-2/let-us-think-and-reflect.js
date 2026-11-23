export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the given extracts and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `*Extract (first four lines, paraphrased):* The woman was old, ragged and grey, and bent with the chill of the winter's day. The street was wet from recent snow, and her feet were aged and slow.`,
        parts: [
          {
            label: "i", type: "mcq",
            question: "What does the phrase 'ragged and grey' refer to?",
            options: ["A. the woman's emotional state that day", "B. the woman's old and worn-out appearance", "C. the weather conditions of the particular day", "D. the colour of the street and the surroundings"],
            answer: "**B. the woman's old and worn-out appearance** - ragged clothes and grey hair."
          },
          {
            label: "ii", type: "fill",
            question: "The woman was 'bent' with the chill of the Winter's day because she was ______ .",
            answer: "...**old and frail**, so the cold made her stoop and shiver."
          },
          {
            label: "iii", type: "table",
            question: "Identify the fact and the opinion.",
            columns: ["Sentence", "Fact or opinion?"],
            rows: [
              ["A. The street was wet with recent snow.", "______"],
              ["B. The woman was too weak to cross the street on her own.", "______"]
            ],
            answer: [
              ["A. The street was wet with recent snow.", "Fact"],
              ["B. The woman was too weak to cross the street on her own.", "Opinion (a judgement or inference about her)"]
            ]
          },
          {
            label: "iv", type: "short",
            question: "Why do you think the woman's feet were described as 'aged and slow'?",
            answer: "To show her age and weakness. She can only walk slowly and unsteadily, and the slippery snow makes it worse, so we feel how vulnerable she is."
          }
        ]
      },
      {
        n: 2,
        passage: `*Extract (paraphrased):* He guided her trembling feet along, proud that his own were firm and strong. Then he went back to his friends, his young heart happy and well content.`,
        parts: [
          {
            label: "i", type: "short",
            question: "What does the contrast between the 'trembling feet' of the old woman and the 'firm and strong' feet of the boy emphasise?",
            answer: "It emphasises the difference between old age and youth - her weakness and his strength. It also shows that the strong should use their strength to help the weak."
          },
          {
            label: "ii", type: "fill",
            question: "The poem tells us that the boy was 'proud' that his feet were strong. This tells us that the boy was ______ . (arrogant about being strong/grateful for his ability to help)",
            answer: "**grateful for his ability to help** - his pride is not arrogance but joy at being able to be of use."
          },
          {
            label: "iii", type: "mcq",
            question: "What is the boy most likely to tell his friends on getting back?",
            options: ["A. I'm so glad I could help her.", "B. I'm worried about her safety.", "C. I'm surprised she forgot to thank me.", "D. I'm thankful for all your support."],
            answer: "**A. I'm so glad I could help her.** - he returned happy and content."
          },
          {
            label: "iv", type: "rectify",
            question: "Rectify the false sentence: The young boy's actions were driven by a logical decision.",
            answer: "The young boy's actions were driven by **compassion (kindness and empathy)**, not by a logical decision. He acted from his heart."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "long",
        question: "What might be the old woman's fears as she waited for a long time at the crossing?",
        answer: "She may have feared being knocked down by the carriages and horses on the slippery road, falling in the snow and hurting herself, or being left standing in the cold for ever because nobody cared. She may also have felt afraid and helpless because she was alone."
      },
      {
        n: 2, type: "long",
        question: "How does the poet show the helplessness of the old woman? Support your answer with evidence from the poem.",
        answer: "The poet describes her as 'alone, uncared for' in a crowd that did not notice her anxious glance. She is 'so meek, so timid, afraid to stir', for fear of the carriage wheels and the horses' feet. Her 'aged and slow' feet and the slippery street add to our sense that she cannot manage on her own."
      },
      {
        n: 3, type: "long",
        question: "Why does the boy decide to help the old woman? What does this tell us about him?",
        answer: "The boy sees her as 'somebody's mother' and thinks of his own mother, hoping that someone would help her in the same way. This shows that he is kind, compassionate and thoughtful, and that he has the courage to do the right thing when others do not."
      },
      {
        n: 4, type: "long",
        question: "How was the boy's approach towards the old woman different from that of the other boys in the group?",
        answer: "The other boys were wrapped up in their own fun, hurried past and did not even notice her. The boy stopped, spoke gently and politely, offered his help and guided her across the street. He also treated her with respect and thought of her as someone's mother."
      },
      {
        n: 5, type: "long",
        question: "Justify the appropriateness of the title of the poem.",
        answer: "The title 'Somebody's Mother' sums up the poem's message. The boy helps the woman because she is somebody's mother, and he hopes that his own mother will be helped in the same way. She is also a mother who blesses him at the end. The title reminds us that every elderly person is part of someone's family and deserves care and respect."
      },
      {
        n: 6, type: "long",
        question: "What does the poem suggest about the role of empathy and humanity in society?",
        answer: "Society becomes kind and safe when people care for strangers as they would for their own family. One boy's empathy helped the woman and made him happy, and showed that kindness comes back to us. The poem suggests that humanity is shown in small acts of help, not in grand deeds."
      }
    ]
  }
];
