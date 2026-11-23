export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem"] };

export const sections = [
  {
    roman: "I",
    instruction: "Arrange the events of the poem in the correct order of occurrence. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "order",
        question: "Arrange the events in the correct order.",
        items: [
          "The boy returned to his friends, feeling proud of what he had done.",
          "The old woman stood alone at the crossing, hesitant to move.",
          "A group of schoolboys passed by, playing and laughing.",
          "The boy offered to help the old woman cross the street.",
          "The woman prayed for the boy who helped her.",
          "The children hurried past the old woman without offering help.",
          "The woman placed her hand on the boy's arm, and he guided her safely across the street.",
          "The boy thought about his own mother and hoped someone would help her one day."
        ],
        answer: [2, 3, 6, 4, 7, 1, 8, 5]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Fill in the blanks by choosing the correct answer from the options given in the brackets.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The central theme of the poem is ______ . (kindness and empathy/adventure and courage)", answer: "**kindness and empathy**" },
          { label: "2", type: "fill", question: "The tone of the poem is ______ . (humorous and playful/sympathetic and hopeful)", answer: "**sympathetic and hopeful** - the poet feels for the old woman and ends on a hopeful note." },
          { label: "3", type: "fill", question: "The poem is written in couplets with ______ lines in each stanza. (four/two)", answer: "**four** - most stanzas are made of two rhyming couplets (some run a little longer)." },
          { label: "4", type: "fill", question: "The structure of the poem gives a rhythmic flow that reflects both the ______ . (narrative and emotions/story's pace and message)", answer: "**story's pace and message** - the steady beat moves the story along and carries its message." },
          { label: "5", type: "fill", question: "The poem follows a rhyme scheme of ______ . (AABB/ABAB)", answer: "**AABB** - the lines rhyme in pairs (grey/day, snow/slow)." }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Pick examples from the poem for the following poetic devices.",
    items: [
      {
        n: 1, type: "short",
        question: "Simile",
        answer: "The boys came 'like a flock of sheep' - the noisy group of schoolboys is compared to sheep moving together."
      },
      {
        n: 2, type: "short",
        question: "Alliteration",
        answer: [
          "- **slippery street** (s)",
          "- **hurt or harm** (h)",
          "- **heart happy** (h)"
        ]
      },
      {
        n: 3, type: "short",
        question: "Repetition",
        answer: "The phrase **'somebody's mother'** is repeated, and so are the words describing the woman - **old, grey, aged** - and the pattern 'so meek, so timid'. Repetition stresses her age and the poem's message."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Complete the following sentences appropriately explaining the imagery.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The poem uses imagery to describe scenes of a bustling street. We know this by the phrase ______ .", answer: "**'the throng of human beings who passed her by'** (also: 'with laughter and shout' and 'carriage wheels or the horses' feet') - these show a busy, noisy street." },
          { label: "2", type: "fill", question: "The line 'The street was wet with a recent snow' suggests a cold and ______ weather, emphasising the woman's helplessness.", answer: "**slippery** (or icy) - the wet, snowy street makes crossing dangerous for a weak, old person." }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Complete the following sentence with a suitable reason.",
    items: [
      {
        n: 1, type: "fill",
        question: "The poet repeats the phrase 'Somebody's mother' because it ______ .",
        answer: "...reminds us that every old person is someone's mother and deserves the same love and respect as our own family. It is the boy's reason for helping and the heart of the poem's message."
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Complete the analogy.",
    items: [
      {
        n: 1, type: "fill",
        question: "The old woman : vulnerable and neglected :: the young boy : ______",
        answer: "**strong and compassionate** (or caring and helpful)"
      }
    ]
  }
];
