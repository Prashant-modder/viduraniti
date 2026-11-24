export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension", "Imagination"] };

export const sections = [
  {
    roman: "I",
    instruction: `Read the extract given below and answer the questions that follow.`,
    items: [
      {
        n: 1,
        passage: `*When night comes I bury my face in my arms and dream that my paper boats float on and on under the midnight stars.*\n\n*The fairies of sleep are sailing in them, and the lading is their baskets full of dreams.*`,
        parts: [
          { label: "i", type: "mcq", question: `Select the option that is most likely to be the speaker as per the extract.`, figure: { src: "images/sleeping-postures.png", alt: "Four icons of a person lying on a pillow in different positions, labelled A, B, C and D" }, options: [`A.`, `B.`, `C.`, `D.`], answer: "**A.** In A the person lies curled on one side with the arms folded in front of the face, which matches 'I bury my face in my arms'. In B the arms rest on the stomach, in C the hands are behind the head and in D one arm is raised." },
          { label: "ii", type: "short", question: `What can be inferred about the speaker's feelings when night comes?`, answer: "The speaker feels calm, safe and dreamy. He looks forward to the night, because sleep lets his imagination carry the paper boats on and on under the stars." },
          { label: "iii", type: "mcq", question: `What kind of beings are the 'fairies of sleep' imagined as? Select the most appropriate option.`, options: [`A. mischievous`, `B. gentle`, `C. fearsome`, `D. playful`], answer: "**B. gentle.** They sail quietly through the night and carefully carry baskets of dreams." },
          { label: "iv", type: "fill", question: `Fill in the blank by selecting the correct option from those given in the brackets.<br>The phrase 'lading is their baskets full of dreams' suggests that the speaker imagines the fairies of sleep carefully _________________ (carrying his dreams /collecting his wishes) in their baskets.`, answer: "**carrying his dreams** - the 'lading' (load) of the boats is the baskets of dreams that the fairies bring." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Answer the following questions.`,
    items: [
      { n: 1, type: "long", question: `Why do you think the poet writes his personal details on the paper boats?`, answer: "He writes his name and the name of his village on the boats because he hopes that someone in a faraway, strange land will find them and know who he is. He wants to reach out to the world and make friends with an unknown person, so the details are a way of introducing himself." },
      { n: 2, type: "long", question: `The poet talks about the imagination of a child. Support this view with examples from the poem.`, answer: "A child's imagination fills the poem. He imagines that someone in a strange land will find his boats and know him. He thinks that the little clouds are white sails sent by a playmate in the sky to race with his boats. At night he dreams that the boats float under the midnight stars with the fairies of sleep sailing in them and their baskets full of dreams." },
      { n: 3, type: "long", question: `How does the poet bring together imagination and reality to make the poem more interesting?`, answer: "The poem begins with real things: a running stream, paper boats, the garden, shiuli flowers and clouds. The poet then joins them to imagined things: a distant stranger finding the boats, a playmate in the sky, fairies of sleep and baskets of dreams. By moving from the everyday world to the dream world, he makes a simple game into a magical journey." }
    ]
  }
];
