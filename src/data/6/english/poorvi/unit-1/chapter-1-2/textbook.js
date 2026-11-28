export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Jean de La Fontaine";

export const cover = {
  image: "image.png",
  alt: "Reynard the Fox looking up at Mr Raven perched on a tree branch with a piece of food in his beak",
  caption: "Mr Raven and Reynard the Fox"
};

export const intro = `A guided reading of the fable poem "The Raven and the Fox" by Jean de La Fontaine. The poem has four short rhyming stanzas and is explained stanza by stanza in simple words.`;

export const parts = [
  {
    heading: "Stanza 1: The Raven and His Morsel",
    image: "images/raven-and-fox.png",
    imageAlt: "A fox sitting under a tree looking up at a raven holding food in its beak",
    explain: `Mr Raven sits high up on the branch of a tree, while Reynard the Fox watches him eagerly from the ground below. In his large beak, Mr Raven holds a delicious piece of food—a prize so tempting that the hungry Fox would travel a long way to get it.`,
    glossary: [
      { word: "perched", meaning: "sat on a branch" },
      { word: "limb", meaning: "branch of a tree" },
      { word: "morsel", meaning: "a small piece of food" },
      { word: "seek", meaning: "to look for something" }
    ]
  },
  {
    heading: "Stanza 2: The Fox's Flattery",
    explain: `Reynard speaks to Mr Raven in a sweet, admiring voice. He addresses him politely as "Sir Raven", compliments his good looks and fine feathers, and adds a clever bait: if only Mr Raven would sing, all the birds living in the woods would declare him their King.`,
    glossary: [
      { word: "woods", meaning: "a smaller area of forest with similar kind of trees" }
    ]
  },
  {
    heading: "Stanza 3: Foolish Pride",
    explain: `Mr Raven fails to spot the Fox's trick. Carried away by false pride, he completely forgets that his voice is only a harsh croak. As soon as he opens his beak to sing, the tasty piece of food that Reynard has been watching falls straight down.`,
    glossary: [
      { word: "pride", meaning: "feeling that you are better than others" },
      { word: "eyed", meaning: "looked with interest at something" }
    ]
  },
  {
    heading: "Stanza 4: A Surprising Lesson",
    explain: `Reynard laughs in triumph after snatching the food and gives Mr Raven a blunt piece of advice: ignore sweet flattery that makes you feel overly pleased with yourself. Being proud is foolish, the Fox remarks, and this unexpected lesson has surely come as a surprise.`,
    glossary: []
  }
];

export const characters = [
  { name: "Mr Raven", traits: ["proud", "easily flattered", "careless", "forgets his own weakness"] },
  { name: "Reynard the Fox", traits: ["cunning", "observant", "smooth-talking", "clever strategist"] }
];

export const themes = [
  "Beware of flatterers—sweet words often hide a selfish motive.",
  "Foolish pride blinds us to our own weaknesses and can cost us what we already have.",
  "Wise thinking matters more than vanity."
];
