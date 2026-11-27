export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const cover = {
  image: "image.png",
  alt: "Guneet, Asma, and Deepa holding Mario up in mid-air in the classroom while classmates watch",
  caption: "Mario discovers his true friends"
};

export const intro = `A guided reading of "The Chair". The story is explained part by part in simple words, with the margin glossary listed under each part.`;

export const parts = [
  {
    heading: "Part I: Grandfather's Bet and the Invisible Chair",
    image: "images/grandpa-chair.png",
    imageAlt: "Grandfather pretending to hand an invisible chair to Mario at home",
    explain: `Mario loves boasting about how popular he is and how many friends he has at school. One day, his grandfather bets him a fruit chaat that most of those schoolmates are only companions or partners, not real friends. Mario agrees eagerly, but wonders how to test them. Grandpa offers to help, goes to the attic, and returns pretending to carry something completely unseen. He tells Mario it is a special invisible chair: sitting on it is tricky because you cannot see it, yet if Mario takes it to school and manages to sit on it, its magic will reveal his true friends.`,
    glossary: [
      { word: "showed off", meaning: "boasted" },
      { word: "accepted", meaning: "agreed to" },
      { word: "readily", meaning: "without any problem" },
      { word: "attic", meaning: "a storage space in a house just under the roof" },
      { word: "invisible", meaning: "impossible to see" }
    ]
  },
  {
    heading: "Part II: Falling in Front of the Class",
    image: "images/mario-falling.png",
    imageAlt: "Mario sitting on the classroom floor after falling while classmates point and laugh",
    explain: `Brave and firm in his resolve, Mario carries the invisible chair to school. During break time, he asks everyone to stand in a circle, steps into the centre, and announces they are about to see something astonishing. When he tries to sit down, he misses completely and lands on his backside, sending his classmates into laughter. Brushing it off as a small technical hitch, Mario tries again—and falls again to even louder laughter. Still, he refuses to quit and keeps trying.`,
    glossary: [
      { word: "determined", meaning: "firm in decision" },
      { word: "amazing", meaning: "very surprising" }
    ]
  },
  {
    heading: "Part II: Experiencing the Real Magic",
    image: "images/mario-held-up.png",
    imageAlt: "Guneet, Asma, and Deepa supporting Mario in mid-air while others look on",
    explain: `Suddenly, on his next attempt, Mario does not hit the floor—he stays seated right in mid-air! Looking around, he experiences the true magic Grandpa promised: three buddies, Guneet, Asma, and Deepa, are holding him up steadily so he will not fall, whereas many others he had called friends did nothing except mock every tumble. Mario leaves with his three caring friends and explains Grandpa's clever lesson: real friends support us instead of enjoying our misfortune. That evening all four children visit Grandpa—who won the bet—for stories and plenty of fruit chaat, and they remain friends for life.`,
    glossary: [
      { word: "experienced", meaning: "felt" }
    ]
  }
];

export const characters = [
  { name: "Mario", traits: ["boastful at first", "brave", "determined", "learns to value real friends"] },
  { name: "Grandfather", traits: ["wise", "clever", "playful", "affectionate"] },
  { name: "Guneet, Asma, and Deepa", traits: ["loyal", "caring", "supportive", "true friends"] }
];

export const themes = [
  "True friends care for us and hold us up when we fall; fake friends laugh at our misfortune.",
  "A few loyal friends matter far more than a big crowd of casual companions.",
  "Wisdom and gentle humour can teach life's best lessons."
];
