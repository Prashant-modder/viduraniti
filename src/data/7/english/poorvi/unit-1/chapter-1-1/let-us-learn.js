export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "You have learnt that naming words are called nouns and only proper nouns begin with a capital letter. (Clue: has the River been given the qualities of a human being?)",
    items: [
      {
        n: 1, type: "long",
        question: "Why has the author used a capital letter for the 'River' even when it is a common noun?",
        answer: "The River is **personified** - it is given human qualities: it speaks, laughs, listens and gives advice. Because it behaves like a character with a personality of its own, the author treats it like a proper noun and writes it with a capital letter."
      }
    ]
  },
  {
    roman: "II",
    instruction: "There are a few words related to sound in the text. Pick the words from the text and write them next to the correct definition. Then fill in the blanks with suitable sound words.",
    items: [
      {
        n: 1, type: "match",
        question: "Write the sound word next to each definition.",
        left: [
          "1. made a high-pitched piercing sound",
          "2. to cause liquid to strike or fall on something",
          "3. a low continuous background noise",
          "4. to cry with loud uncontrollable gasps",
          "5. to make a soft dry sound, like paper or leaves moving",
          "6. took a short quick breath through the mouth due to surprise, pain or shock",
          "7. shaking rapidly to make continuous short, sharp sounds",
          "8. making a lot of noise",
          "9. made a long, high cry, usually because of pain or sadness"
        ],
        right: ["noisy", "splashed", "gasped", "shrieked", "murmuring", "sob", "rustle", "rattling", "wailed"],
        answer: [
          "1. **shrieked**",
          "2. **splashed**",
          "3. **murmuring**",
          "4. **sob**",
          "5. **rustle**",
          "6. **gasped**",
          "7. **rattling**",
          "8. **noisy**",
          "9. **wailed**"
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Fill in the blanks with suitable sound words from the list above.",
        passage: "The classroom turned (i) ______ when the students saw the teacher carrying the answer papers. The teacher flipped the pages with a (ii) ______ while the children (iii) ______, wondering about their marks. One student (iv) ______ in frustration, and the (v) ______ in the room kept growing. At last the teacher praised everyone's performance, and the students (vi) ______ with excitement.",
        answer: [
          "(i) **noisy**",
          "(ii) **rustle**",
          "(iii) **gasped**",
          "(iv) **sobbed** (also accepted: wailed)",
          "(v) **murmuring**",
          "(vi) **shrieked**"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The word 'catamaran' is used in the text. It comes from the Tamil kattu maram, meaning 'tied wood'. Find out the meanings of these words and the Indian language each was borrowed from. An example has been given.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "karma (Sanskrit) - example given. What does it mean?", answer: "**Sanskrit** - action or deed; also the idea that our actions bring their results." },
          { label: "2", type: "short", question: "sahib", answer: "**Hindi-Urdu** (originally Arabic) - master or sir; a respectful way to address a man." },
          { label: "3", type: "short", question: "chutney", answer: "**Hindi** - a tasty relish made from fruit, vegetables or herbs with spices." },
          { label: "4", type: "short", question: "guru", answer: "**Sanskrit** - a teacher or guide; also an expert in a field." },
          { label: "5", type: "short", question: "verandah", answer: "**Hindi** - a roofed, open platform along the outside of a house." },
          { label: "6", type: "short", question: "jungle", answer: "**Hindi** (from Sanskrit) - a thick forest or wild land overgrown with plants." },
          { label: "7", type: "short", question: "areca", answer: "**Malayalam** - a palm tree whose nut (the areca or betel nut) is chewed with betel leaf." },
          { label: "8", type: "short", question: "palanquin", answer: "**Sanskrit** (through Pali and Hindi) - a covered seat for one person, carried on poles by bearers." }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Chandu, the fisherman, has a catamaran that the River preferred to a ship. Some boats used in different parts of our country are: canoe, catamaran, coracle and shikara.",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "i", type: "activity",
            question: "Which one would you like to travel in?",
            answer: "*(Personal choice - sample.)* I would choose a **shikara**, because it has a roof and cushioned seats, and gliding slowly over a calm lake lets me enjoy the view."
          },
          {
            label: "ii", type: "activity",
            question: "Make a colourful drawing of a boat that you would like to travel in.",
            answer: "*(Drawing activity.)* Draw the hull, the deck, a sail or a canopy, and ripples on the water. Add the sun, a few birds and some trees on the bank, colour boldly, and label the parts of your boat."
          }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Solve the crossword puzzle based on words related to water transport.",
    items: [
      {
        n: 1, type: "crossword",
        question: "Complete the crossword using the clues.",
        grid: { rows: 8, cols: 11 },
        given: [[1,7],[1,11],[2,1],[2,11],[3,11],[4,2],[4,7],[4,9],[4,11],[5,1],[7,2],[7,11],[8,2],[8,8],[8,9],[8,10]],
        entries: [
          { n: 1, dir: "across", row: 2, col: 1, answer: "SHIP", clue: "a large vessel used for transporting goods or passengers by sea" },
          { n: 2, dir: "across", row: 4, col: 6, answer: "BOAT", clue: "a small vessel for travelling on water, moved by oars, sails or an engine" },
          { n: 3, dir: "across", row: 5, col: 1, answer: "RAFT", clue: "a flat floating structure for travelling across water" },
          { n: 4, dir: "across", row: 8, col: 4, answer: "STEAMER", clue: "a boat or ship driven by steam" },
          { n: 5, dir: "down", row: 1, col: 7, answer: "CANOE", clue: "a small, light, narrow boat, pointed at both ends and moved with a paddle" },
          { n: 6, dir: "down", row: 1, col: 11, answer: "TUGBOAT", clue: "a boat with a powerful engine that pulls large ships into and out of port" },
          { n: 7, dir: "down", row: 4, col: 2, answer: "YACHT", clue: "a boat with sails, sometimes an engine, used for racing or pleasure; rhymes with 'cot'" }
        ],
        answer: [
          "**Across:** 1. SHIP   2. BOAT   3. RAFT   4. STEAMER",
          "**Down:** 5. CANOE   6. TUGBOAT   7. YACHT"
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "'She goes down towards the sea ... over the mountains and down to the sea.' The words towards, over and down are prepositions. Prepositions are words that show the relationship between nouns or pronouns and other parts of a sentence - direction, location, time or logical links between ideas. Fill in the blanks with the suitable prepositions given in the brackets.",
    items: [
      {
        n: 1, type: "blanks",
        question: "Fill in the blanks with suitable prepositions.",
        passage: "Jahnavi takes the River's advice and goes to school. On her first day 1. ______ (at/in/on) school, Jahnavi stood nervously 2. ______ (in/outside/above) the gate, clutching her bag close to her. The bell rang and she hurried 3. ______ (outside/through/inside) the bustling classroom. She found a seat 4. ______ (among/between/from) two friendly classmates. The teacher greeted them warmly and started the lesson 5. ______ (about/in/for) numbers. Jahnavi listened attentively, feeling excited 6. ______ (at/about/for) the new adventure ahead.",
        answer: [
          "1. **at**",
          "2. **outside**",
          "3. **inside**",
          "4. **between**",
          "5. **about**",
          "6. **about**"
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: "In 'A kingfisher swept down', the word 'down' is an adverb. Words like on, off, up and down can be both prepositions and adverbs. Example: 'She ran up the stairs' (preposition) and 'She rang me up' (adverb). Fill in the blanks with prepositions or adverbs as shown in the brackets.",
    boxes: [
      {
        type: "box", kind: "remember",
        body: "A preposition is always followed by an object (a noun), whereas an adverb tells you more about the action (the verb)."
      }
    ],
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "The cat jumped ______ the table. (preposition)", answer: "**on** (also: off, onto)" },
          { label: "2", type: "short", question: "The children played ______ until dark. (adverb)", answer: "**outside** (also: on)" },
          { label: "3", type: "short", question: "She quickly ran ______ the park. (preposition)", answer: "**through** (also: across, around, into)" },
          { label: "4", type: "short", question: "The helicopter was hovering ______ . (adverb)", answer: "**overhead** (also: above, around)" },
          { label: "5", type: "short", question: "We were just walking ______ , chatting. (adverb)", answer: "**along** (also: around, about)" },
          { label: "6", type: "short", question: "After thoroughly wiping his shoes, he stepped ______ . (adverb)", answer: "**inside** (also: in)" },
          { label: "7", type: "short", question: "She drove slowly ______ the sharp curve. (preposition)", answer: "**around** (also: through, along)" },
          { label: "8", type: "short", question: "He placed the keys ______ the mat before leaving. (preposition)", answer: "**under** (also: on)" }
        ]
      }
    ]
  }
];
