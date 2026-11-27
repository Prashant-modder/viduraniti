export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Anonymous";

export const cover = {
  image: "image.png",
  alt: "A little bird fluttering above its straw nest on a leafy green tree branch",
  caption: "A little bird discovers the wide world"
};

export const intro = `A guided reading of the poem "What a Bird Thought" (Anonymous). Each of the four stanzas shows a stage in a young bird's life and how its picture of the world keeps growing wider.`;

export const parts = [
  {
    heading: "Stanza 1: Inside the Pale Blue Shell",
    image: "images/bird-nest-tree.png",
    imageAlt: "A bird flying above its nest on a branch with leaves falling gently",
    explain: `The bird begins by remembering its very first home—an eggshell. Living snugly and happily inside it, the baby bird believed the entire world was tiny, round, and crafted out of light blue shell.`,
    glossary: [
      { word: "pale", meaning: "light in colour" }
    ]
  },
  {
    heading: "Stanza 2: Cosy in the Straw Nest",
    explain: `Next, after hatching, the little bird lived safely in a small nest and wanted nothing else. Cuddled warmly beside its mother, it thought the whole world was woven out of straw.`,
    glossary: [
      { word: "nestled", meaning: "settled warmly and comfortably" }
    ]
  },
  {
    heading: "Stanza 3: Out Among the Leaves",
    explain: `One day, eager to explore, the young bird flapped lightly out of its nest onto the tree branches. Seeing green leaves all around, it declared that the world was really made of leaves and wondered how shortsighted it had been earlier.`,
    glossary: [
      { word: "fluttered", meaning: "moved lightly and quickly" }
    ]
  },
  {
    heading: "Stanza 4: Flying Beyond the Tree",
    explain: `At last, grown strong and ready for adult tasks, the bird soared out past the tree into the wide sky. Now it realises that the world is far too huge and wondrous to describe simply—neither it nor any of its fellow birds truly know how the world is made.`,
    glossary: [
      { word: "at length", meaning: "at last; finally" },
      { word: "labours", meaning: "hard work; grown-up tasks" }
    ]
  }
];

export const characters = [
  { name: "The Young Bird", traits: ["innocent at first", "curious", "growing independent", "humble and observant"] }
];

export const themes = [
  "Our view of the world grows larger as we step out and explore.",
  "Growing up brings new perspectives and independence.",
  "True wisdom means recognising how much we still have to learn."
];
