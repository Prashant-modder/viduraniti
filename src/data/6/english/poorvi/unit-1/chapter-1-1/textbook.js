export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Sudha Murty";

export const cover = {
  image: "image.png",
  alt: "Rama Natha looking happily at his green banana plantation",
  caption: "Rama Natha's banana plantation"
};

export const intro = `A guided reading of "A Bottle of Dew" by Sudha Murty. The story is explained part by part in simple words, with the margin glossary words listed under each part.`;

export const parts = [
  {
    heading: "Part I: Rama Natha's Strange Dream",
    image: "images/dew-leaf.png",
    imageAlt: "Morning dew drops resting on a green banana leaf",
    explain: `Rama Natha inherits large areas of fertile land from his wealthy landlord father, yet he never spends a single day taking care of his fields. Instead, he holds a strange belief that a magical liquid exists which can turn any ordinary object into solid gold. He spends all his time chasing this secret, and dishonest people repeatedly cheat him with false promises. Even so, he refuses to stop trying. His wife, Madhumati, grows tired and anxious as she watches their savings shrink, fearing they will soon be left penniless.`,
    glossary: [
      { word: "large tracts of land", meaning: "large areas of land" },
      { word: "potion", meaning: "a liquid with magical properties" },
      { word: "give up", meaning: "stop trying" }
    ]
  },
  {
    heading: "Part I: Sage Mahipati's Advice",
    image: "images/sage-mahipati.png",
    imageAlt: "Sage Mahipati speaking with Rama Natha under trees",
    explain: `When a well-known sage named Mahipati arrives in town, Rama Natha becomes his follower and asks him about the gold-making potion. To Rama Natha's delight, the sage says he learned of such a recipe during his travels in the Himalayas, though making it is difficult. Rama Natha must grow banana plants, water and care for them himself, and gather morning dew from their leaves in winter until he fills a bottle with five litres. Only then will the sage chant magic words over the dew to turn it into the potion. Worried that winter is short, Rama Natha asks how long it will take. The sage replies that he may plant as many banana plants as he likes, provided he tends them and gathers the dew with his own hands.`,
    glossary: [
      { word: "dew", meaning: "small drops of water on leaves that form during night" },
      { word: "chant", meaning: "to repeat or sing a word or phrase" }
    ]
  },
  {
    heading: "Part II: Six Years of Hard Work",
    image: "images/banana-plantation.png",
    imageAlt: "Rama Natha standing proudly beside rows of fruit-bearing banana trees",
    explain: `After speaking with his wife, Rama Natha clears his long-neglected fields and plants rows upon rows of banana plants. He looks after them carefully and collects winter morning dew from the leaves, while Madhumati helps him, harvests the ripe bananas, and sells them at a good price in the market. Year after year, Rama Natha expands the fields until they have a massive banana plantation. After six steady years of effort, his bottle finally holds five litres of dew.`,
    glossary: [
      { word: "tended", meaning: "looked after" }
    ]
  },
  {
    heading: "Part II: The Real Secret of Gold",
    explain: `Rama Natha brings the bottle carefully to Sage Mahipati. The sage smiles, speaks softly over the water, and hands it back for Rama Natha to test. When Rama Natha sprinkles a few drops onto a copper vessel and nothing happens, he feels shocked and angry, accusing the sage of wasting six valuable years of his life. Smiling calmly, the sage calls Madhumati forward. She opens a large box gleaming with stacks of gold coins. Mahipati then explains that no magic potion exists: Rama Natha's hard work on the land and Madhumati's market sales produced all that wealth. Knowing Rama Natha would never have listened to plain advice earlier, the sage had used a clever trick. Grateful and wiser, Rama Natha works even harder on his plantation from that day onward.`,
    glossary: [
      { word: "muttered", meaning: "spoke in a low voice" },
      { word: "precious", meaning: "valuable" },
      { word: "wisdom", meaning: "deep understanding" }
    ]
  }
];

export const characters = [
  { name: "Rama Natha", traits: ["wealthy landlord's son", "gullible at first", "determined", "becomes hardworking and wise"] },
  { name: "Madhumati", traits: ["practical", "caring", "hardworking", "supportive partner"] },
  { name: "Sage Mahipati", traits: ["wise", "patient", "clever guide", "understands human nature"] }
];

export const themes = [
  "Hard work is the only true 'magic' that creates wealth and success.",
  "Blind belief in shortcuts leads to loss and cheating.",
  "Wise guidance and family teamwork can turn neglected resources into prosperity."
];
