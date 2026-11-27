export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Identify the following people. How do they help us when we are in trouble?",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/helpers.png", alt: "Three community helpers: a police officer, a doctor, and a firefighter" },
        question: "Identify the following people. How do they help us when we are in trouble?",
        answer: [
          "1. **Police officer (left):** Keeps our neighbourhood safe, catches thieves and criminals, maintains law and order, and helps people in emergencies.",
          "2. **Doctor (middle):** Treats sick and injured people, gives medicines, and helps us recover when we fall ill or meet with an accident.",
          "3. **Firefighter (right):** Puts out fires quickly and rescues people and animals trapped in burning buildings or dangerous places."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the correct option to complete the sentence.",
    items: [
      {
        n: 1, type: "mcq",
        question: "The word 'rescue' means to ______.",
        options: ["1. make fun of someone", "2. save someone", "3. ask someone for help"],
        answer: "**2. save someone**"
      }
    ]
  },
  {
    roman: "III",
    instruction: "Work in pairs: Put a tick mark at the end of the phrases describing those who need to be rescued. Share your answers with your teacher and classmates.",
    items: [
      {
        n: 1, type: "table",
        question: "Put a tick mark at the end of the phrases describing those who need to be rescued.",
        columns: ["Phrase", "Needs to be rescued?"],
        rows: [
          ["1. A man stuck in a building on fire.", "______"],
          ["2. A woman buying vegetables in the market.", "______"],
          ["3. A dog who has hurt its leg.", "______"],
          ["4. A tree being cut down in a forest.", "______"]
        ],
        answer: [
          ["1. A man stuck in a building on fire.", "Tick - he is in immediate danger."],
          ["2. A woman buying vegetables in the market.", "No tick - she is safe doing everyday shopping."],
          ["3. A dog who has hurt its leg.", "Tick - the injured dog needs help and care."],
          ["4. A tree being cut down in a forest.", "Tick - the tree is in danger and needs to be saved."]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "The policeman in the story you are about to read is called the kotwal. Some people call him thaanedar. What do you call a policeman in your language? Share it with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "What do you call a policeman in your language?",
        answer: "*(Personal answer - samples across Indian languages.)* Hindi/Urdu: **sipahi**, **daroga**, or **thaanedar**; Tamil: **kavalar**; Marathi: **police / rakshak**; Telugu: **rakshaka bhatudu**; Bengali: **pulish / daroga**."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Imagine you are alone at home and you face a problem. Answer the following questions and share your answers with your teacher and classmates.",
    items: [
      {
        n: 1, type: "activity",
        question: "Will you solve the problem yourself or wait for someone to help you?",
        answer: "*(Personal answer - sample.)* If it is a small and safe problem, I will stay calm and try to solve it myself. If it is dangerous or an emergency, I will immediately call my parents, a trusted neighbour, or the emergency helpline for help."
      },
      {
        n: 2, type: "mcq",
        question: "How will you deal with the problem? Give a reason.",
        options: [
          "(i) Be worried about the problem and give up.",
          "(ii) Feel angry that only you have the problem.",
          "(iii) Think quickly about ways to solve the problem."
        ],
        answer: "**(iii) Think quickly about ways to solve the problem.** Staying calm and thinking clearly helps us find a safe and smart solution, whereas worrying or getting angry wastes time and makes matters worse."
      }
    ]
  }
];
