export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Eliza Cook";

export const cover = {
  image: "image.png",
  alt: "King Bruce sitting on his throne, thinking, while a spider hangs from the ceiling",
  caption: "King Bruce and the spider"
};

export const intro = `A guided reading of the poem "Try Again" by Eliza Cook. The poem has fourteen stanzas and tells the old story of King Bruce of Scotland and a spider. It is explained here in the order of the stanzas, in simple words.`;

export const parts = [
  {
    heading: "A King in Despair (stanzas 1-3)",
    image: "images/king-bruce.png",
    imageAlt: "King Bruce resting his chin on his hand",
    explain: `King Bruce throws himself down alone to think. He is a monarch and wears a crown, but his heart is sinking. He has been trying to do a great deed to make his people glad, and however often he tries, he cannot succeed. He feels so low and so grieved that he finally says he will give it all up.`,
    glossary: [
      { word: "monarch", meaning: "a king or queen" },
      { word: "despair", meaning: "a feeling of having lost all hope" },
      { word: "grieved", meaning: "deeply sad" },
      { word: "pondered", meaning: "thought about something carefully" }
    ]
  },
  {
    heading: "The Spider Drops Down (stanzas 4-5)",
    image: "images/spider.png",
    imageAlt: "A spider hanging from a silk thread",
    explain: `At that very moment a spider drops down on a fine, silken thread. The King stops thinking and watches to see what the spider will do. The ceiling dome is a long way up, and the spider hangs by a very thin rope. King Bruce cannot guess how it will get back to its web.`,
    glossary: [
      { word: "clue", meaning: "(old use) a thread" },
      { word: "divine", meaning: "(here) to guess or work out" }
    ]
  },
  {
    heading: "Nine Brave Attempts (stanzas 6-10)",
    image: "images/spider-web.png",
    imageAlt: "A large spider web with a spider hanging below it",
    explain: `The spider begins to cling and crawl straight up with great effort, but it slips and falls back almost to the ground. It does not complain. It rests for a moment, feeling a little dizzy and faint, then steadies its head and climbs again - this time half a yard higher. The thread is delicate and its feet grow tired, but it keeps going. Up and down, now fast and now slow, it makes nine brave attempts. The King thinks the foolish creature will surely stop trying after so many falls.`,
    glossary: [
      { word: "endeavour", meaning: "a serious effort" },
      { word: "mounted", meaning: "climbed up" },
      { word: "strive", meaning: "to try very hard to achieve something" },
      { word: "toils", meaning: "works very hard" }
    ]
  },
  {
    heading: "The Last Climb (stanzas 11-12)",
    explain: `But the insect goes up once more. It is an anxious minute - the spider is only a foot from its web, and the King wonders whether it will lose or win. Steadily, steadily, inch by inch, it goes higher and higher. A bold little run at the very last moment takes it back to its home.`,
    glossary: [
      { word: "cot", meaning: "(here) a small home" }
    ]
  },
  {
    heading: "King Bruce Tries Again (stanzas 13-14)",
    image: "images/trophy-girl.png",
    imageAlt: "A girl holding up a trophy",
    explain: `The King cries out "Bravo!" He says that all honour belongs to those who try. The spider has defied despair and conquered - so why should he not do the same? King Bruce braces his mind and tries once more, as he had tried before. This time he does not fail.`,
    glossary: [
      { word: "defied", meaning: "refused to obey or accept" },
      { word: "braced", meaning: "prepared (himself) for something difficult" }
    ]
  }
];

export const characters = [
  { name: "King Bruce", traits: ["sad and discouraged at first", "observant", "learns from the spider", "determined at the end"] },
  { name: "The spider", traits: ["persistent", "brave", "patient", "never complains"] }
];

export const themes = [
  "Perseverance: if at first you don't succeed, try again.",
  "Failure is a stepping stone to success.",
  "Inspiration can come from the smallest creature.",
  "Never give in to despair."
];
