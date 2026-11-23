export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Donald J. Sobol (adapted)";

export const cover = {
  image: "image.png",
  alt: "Chief Brown, Mrs. Brown and Leroy having dinner at the dining table",
  caption: "Dinner-table detectives"
};

export const intro = `A guided reading of "The Case of the Fifth Word", an adapted story by Donald J. Sobol. It follows Encyclopedia Brown, the boy detective, as he decodes a dying man's message. The story is explained part by part, with the difficult words from the margin listed under each part.`;

export const parts = [
  {
    heading: "Meet Encyclopedia Brown",
    image: "images/leroy-thinking.png",
    imageAlt: "Leroy thinking with his hand on his chin",
    explain: `Encyclopedia Brown is a boy from Idaville, USA, whose father is the Chief of Police. When the Chief meets a case he cannot solve, he clears his desk, puts on his hat and goes home to dinner, because Encyclopedia usually solves it before the meal ends. The Chief would love to boast about his son, but no one would believe that the best detective alive is an eighth grader. Encyclopedia himself never mentions his help; he does not want to seem different from other boys. Only his parents and teachers call him by his real name, Leroy. Everyone else uses the nickname because he has read more books than anyone in town and never forgets a fact.`,
    glossary: [
      { word: "nickname", meaning: "pet name" }
    ]
  },
  {
    heading: "A Mystery at the Dinner Table",
    image: "images/nursery.png",
    imageAlt: "Two men with potted plants in a palm-tree nursery",
    explain: `On Tuesday night Chief Brown stares at his soup, and Leroy and his mother understand that a mystery is bothering him. He tells them that Tim Nolan has died. Five years earlier, two masked men robbed the Diamond Mart on Sixth Avenue and escaped with a million dollars' worth of jewellery. Nolan was questioned but never arrested. The Chief believes that Nolan and his friend Daniel Davenport, whom he met in prison in South Carolina, committed the robbery, but there is no proof. A clerk thought she recognised Nolan when a gunman's mask slipped, yet she refused to testify, and the jewellery never turned up. Davenport has not been seen since. The Chief's men have searched Nolan's house without success. Nolan suffered from a bad heart, had a stroke and, with his last strength, left his will on the kitchen table. It gives everything he owned, including his palm-tree nursery, to Davenport.`,
    glossary: [
      { word: "in a matter-of-fact manner", meaning: "without showing much emotion" },
      { word: "hold-ups", meaning: "robberies conducted with the use of threat or violence" },
      { word: "nursery", meaning: "a place where young plants and trees are grown for sale" },
      { word: "testify", meaning: "make a statement in court to prove that something is true" },
      { word: "hunch", meaning: "a strong feeling about something" },
      { word: "loot", meaning: "stolen goods" },
      { word: "stroke", meaning: "a sudden serious illness causing inability to move" }
    ]
  },
  {
    heading: "Four Strange Words",
    image: "images/calendar-note.png",
    imageAlt: "A will and a sheet from a desk calendar on a desk",
    explain: `Nothing is suspicious about the will itself, but a sheet from Nolan's desk calendar was clipped to it. The Chief has copied it into his pocket notebook. It has Davenport's name and address, and below them four words: Nom Utes Sweden Hurts. Mrs. Brown cannot understand them and passes the notebook to Leroy. Leroy leans back and closes his eyes, as he does when thinking hardest, and then asks only one question: is there a young fir tree in Nolan's nursery? The Chief says there is exactly one, on the south side of the house, and asks how Leroy knew. "The four words say so," says Leroy.`,
    glossary: [
      { word: "will", meaning: "(here) a legal document that says what is to happen to somebody's money and property after their death" },
      { word: "leafed through", meaning: "quickly turned (the pages)" }
    ]
  },
  {
    heading: "Mrs. Brown Tries and Fails",
    image: "images/mrs-brown-leroy.png",
    imageAlt: "Mrs. Brown and Leroy standing together",
    explain: `Mrs. Brown, a former English teacher, explains each word separately: Nom is short for nominative, the Utes are an American Indian tribe, Sweden is a country and Hurts is just hurts. Yet she confesses that she cannot figure out the message. Leroy reminds her that Davenport disappeared right after the hold-up. The two men must have hidden the jewellery and, a week or so ago, Nolan moved it to a new place. Nolan probably tried to phone Davenport, failed and wrote the four words while dying. The code is simple for Davenport, especially since it is written on a calendar, but it means little to anyone not looking for a hiding place. When his mother begs him to say what the words mean, Leroy answers, "Under the fifth word."`,
    glossary: [
      { word: "confessed", meaning: "admitted" },
      { word: "code", meaning: "hidden message" }
    ]
  },
  {
    heading: "What Was the Fifth Word?",
    image: "images/calendar.png",
    imageAlt: "A desk calendar",
    explain: `The four words are days of the week with the letters d-a-y dropped. Nom is Mon(day) with its letters reversed, Utes is Tues(day), Sweden is Wednes(day) and Hurts is Thurs(day). The unwritten fifth word is Fir, or Fri(day). Nolan had therefore hidden the jewellery under the young fir tree. It was found inside a twenty-gallon jug of earth from which the fir tree grew in his nursery, exactly as Leroy had foreseen.`,
    glossary: [
      { word: "foreseen", meaning: "predicted" }
    ]
  }
];

export const characters = [
  { name: "Leroy (Encyclopedia) Brown", traits: ["knowledgeable", "clever", "humble", "keen listener"] },
  { name: "Chief Brown", traits: ["smart and quick", "proud of his son", "trusts Leroy with hard cases"] },
  { name: "Mrs. Brown", traits: ["former teacher", "curious", "supportive"] },
  { name: "Tim Nolan", traits: ["former prisoner", "nursery owner", "wrote the secret message as he was dying"] },
  { name: "Daniel Davenport", traits: ["Nolan's friend and suspected partner", "disappeared after the hold-up"] }
];

export const themes = [
  "Observation and logical thinking can solve problems that others find baffling.",
  "Humility: being talented does not mean showing off.",
  "Looking beyond the obvious meaning of words reveals hidden messages.",
  "Family teamwork: parents and child solve the mystery over dinner."
];
