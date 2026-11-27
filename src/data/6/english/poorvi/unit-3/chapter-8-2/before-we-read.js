export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

// Note on Section I: The printed textbook page 85 includes "Think of a time when you worked hard.
// What did you do then? • How did it help you? • How did it make you feel?" directly beneath the
// bird-tree picture prompt (an apparent NCERT carry-over from Unit 1); kept verbatim per Q1.

export const sections = [
  {
    roman: "I",
    instruction: "Look at the picture and discuss what you see in the picture with your teacher and classmates. Think of a time when you worked hard. What did you do then? • How did it help you? • How did it make you feel? Also, discuss in groups.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/birds-tree.png", alt: "A leafy green tree with a green parrot perched on a lower branch, baby chicks in a straw nest, and a red bird flying towards the nest" },
        question: "Look at the picture and discuss what you see in the picture with your teacher and classmates. Think of a time when you worked hard. What did you do then? How did it help you? How did it make you feel?",
        answer: [
          "*(Class discussion - sample answer.)*",
          "- **Picture:** I see a tall leafy tree where baby birds are sitting in a straw nest while a red parent bird flies towards them and a green parrot perches on a lower branch.",
          "- **Working hard:** Last month I worked hard to learn riding my bicycle smoothly without help. Practising every evening helped me gain balance and confidence, and it made me feel proud and happy."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer and discuss.",
    items: [
      {
        n: 1, type: "activity",
        question: "Where do you see birds? What do you see the birds doing?",
        answer: "*(Class discussion - sample answer.)* I see birds on trees, balconies, rooftops, parks, and electric wires. I see them chirping, pecking grains, building nests with twigs, feeding their chicks, drinking water, and soaring across the sky."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer and discuss.",
    items: [
      {
        n: 1, type: "activity",
        question: "Do you want to fly like a bird? Why?",
        answer: "*(Personal answer - sample.)* Yes, I would love to fly like a bird so I could feel the cool breeze high in the sky, see rivers, mountains, and cities from above, and travel freely wherever I wish."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Answer and discuss.",
    items: [
      {
        n: 1, type: "activity",
        question: "What does a baby bird think about its world?",
        answer: "*(Class discussion - sample answer.)* Before it grows feathers and flies out, a baby bird probably thinks its tiny eggshell or warm straw nest is the entire world, because that is all it can see around it."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Read the sentences and replace the underlined words with their correct meanings.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["at last", "light", "labour", "fluttered"],
        question: "Replace the underlined words with their correct meanings from the Meanings column.",
        columns: ["S.No.", "Sentences", "Meanings"],
        rows: [
          ["1.", "The colour of the feather was not dark but **pale**.", "at last"],
          ["2.", "The butterfly **moved lightly and quickly** on to the flower.", "light"],
          ["3.", "**Finally**, I finished my bird painting after trying many times.", "labour"],
          ["4.", "The pretty flowers were the prize for the gardener's **hard work**.", "fluttered"]
        ],
        answer: [
          ["1.", "The colour of the feather was not dark but **light**.", "pale -> light"],
          ["2.", "The butterfly **fluttered** on to the flower.", "moved lightly and quickly -> fluttered"],
          ["3.", "**At last**, I finished my bird painting after trying many times.", "Finally -> at last"],
          ["4.", "The pretty flowers were the prize for the gardener's **labour**.", "hard work -> labour"]
        ]
      }
    ]
  }
];
