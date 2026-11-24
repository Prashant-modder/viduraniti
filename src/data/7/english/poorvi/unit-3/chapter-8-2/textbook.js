export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Rabindranath Tagore";

export const cover = {
  image: "image.png",
  alt: "Three paper boats of different sizes floating on a stream between green banks",
  caption: "Paper boats on the stream"
};

export const intro = `A guided reading of "Paper Boats", a gentle poem by Rabindranath Tagore. A child launches paper boats on a stream and dreams of where they will go. The poem is explained below in four parts, stanza by stanza, in simple words.`;

export const parts = [
  {
    heading: "Launching the boats (stanzas 1-3)",
    image: "image.png",
    imageAlt: "Paper boats floating down a stream between grassy banks",
    explain: `Every day the child sets his paper boats on the flowing stream, one after another. On each boat he writes his own name and the name of his village in big, dark letters. He hopes that someone in a distant, unknown land will find the boats and learn who he is.`,
    glossary: [
      { word: "running", meaning: "speedily flowing" },
      { word: "strange land", meaning: "an unknown and faraway place" }
    ]
  },
  {
    heading: "Boats full of shiuli (stanza 4)",
    image: "images/shiuli-flowers.png",
    imageAlt: "Heap of white shiuli flowers with orange stalks",
    explain: `The child fills his little boats with shiuli flowers picked from the garden. These are blooms of the early morning, and he hopes that they will be carried safely across the water and reach the shore when night has come.`,
    glossary: [
      { word: "shiuli", meaning: "the night-flowering jasmine, a small white flower with an orange stalk that blooms at night and falls at dawn" },
      { word: "blooms", meaning: "flowers" }
    ]
  },
  {
    heading: "Clouds that race the boats (stanzas 5-6)",
    image: "images/paper-boats-flowers.png",
    imageAlt: "Paper boats loaded with white flowers on blue water",
    explain: `After launching the boats, the child looks up and sees little white clouds swelling like sails in the sky. He wonders which friend of his, playing up in the sky, has sent them down on the wind to race his boats.`,
    glossary: [
      { word: "bulging", meaning: "swelling" },
      { word: "playmate", meaning: "a friend to play with" }
    ]
  },
  {
    heading: "The dream voyage (stanzas 7-8)",
    image: "images/paper-boats-flowers.png",
    imageAlt: "Paper boats with flowers floating on the water",
    explain: `At night the child hides his face in his arms and dreams that the boats sail on and on beneath the stars of midnight. In the dream, the fairies of sleep are the sailors, and the cargo they carry is baskets full of dreams.`,
    glossary: [
      { word: "lading", meaning: "loading; cargo" },
      { word: "burying", meaning: "putting" }
    ]
  }
];

export const characters = [
  { name: "The child (the speaker)", traits: ["innocent", "imaginative", "playful", "hopeful"] },
  { name: "The playmate in the sky", traits: ["imagined friend", "sends the clouds to race the boats"] },
  { name: "The fairies of sleep", traits: ["gentle", "imagined", "carry baskets of dreams"] }
];

export const themes = [
  "The innocence, imagination and playfulness of childhood.",
  "A wish to reach out to the unknown world and be known by it.",
  "Imagination joins the real world (stream, flowers, clouds) to the dream world.",
  "Hope and wonder: simple play can become a magical journey."
];
