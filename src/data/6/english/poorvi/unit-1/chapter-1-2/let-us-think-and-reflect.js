export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Look at the pictures and number them in the order that they happen in the poem.",
    items: [
      {
        n: 1, type: "order",
        figure: { src: "images/story-order.png", alt: "Four pictures showing scenes from The Raven and the Fox in a 2 by 2 grid" },
        question: "Number the four pictures in the order that they happen in the poem (listed top-left, top-right, bottom-left, bottom-right).",
        items: [
          "Top-left: Reynard the Fox looks up and flatters Mr Raven perched on a branch with the morsel.",
          "Top-right: Reynard the Fox runs away happily with the morsel in his mouth.",
          "Bottom-left: Mr Raven picks up and holds the morsel of food in his beak on the ground.",
          "Bottom-right: Mr Raven opens his beak and the morsel falls down towards the Fox."
        ],
        answer: [3, 1, 4, 2]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the following lines and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `Sir Raven, you are a handsome bird.
Such feathers! If you would only sing,
The birds of these woods would call you King.`,
        parts: [
          {
            label: "(i)", type: "mcq",
            question: "'Such feathers' refer to ______ feathers.",
            options: ["A. shiny and beautiful", "B. black and dull", "C. grey and long", "D. short and unattractive"],
            answer: "**A. shiny and beautiful**"
          },
          {
            label: "(ii)", type: "short",
            question: "Why would the birds of the woods call the Raven 'King'?",
            answer: "According to the Fox's flattery, the Raven already looked handsome with fine feathers, and if he sang sweetly as well, the other birds would admire him so much that they would make him their King."
          },
          {
            label: "(iii)", type: "short",
            question: "Why does the Fox address the Raven as 'Sir'?",
            answer: "The Fox addresses the Raven as 'Sir' to show fake respect and flatter him into feeling proud, so that the Raven opens his beak and drops the morsel."
          }
        ]
      },
      {
        n: 2,
        passage: `The Raven, who did not see the joke,
Forgot that his voice was just a croak.
He opened his beak, in his foolish pride-`,
        parts: [
          {
            label: "(i)", type: "short",
            question: "Why did the Raven open his beak?",
            answer: "The Raven opened his beak to sing, because he believed the Fox's flattering words and wanted to show off."
          },
          {
            label: "(ii)", type: "fill",
            question: "Complete the following with one word from the given lines.\n\nFox : clever : : Raven : ______",
            answer: "**foolish**"
          }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "short",
        question: "Why does the Raven forget that his voice is just a croak?",
        answer: "The Raven gets carried away by the Fox's sweet flattery and foolish pride, so he stops thinking sensibly and forgets that he can only croak."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "How does Reynard make the Raven sing?",
        answer: "Reynard flatters the Raven by calling him 'Sir Raven', praising his handsome appearance and feathers, and claiming that if he sang, all the birds of the woods would call him King."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "Why does Reynard say that pride is not wise?",
        answer: "Reynard says that pride is unwise because false pride makes people careless and easy to fool—just as pride caused the Raven to drop his own food."
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "Give one reason why the teaching is quite a surprise.",
        answer: "The teaching is a surprise because the Raven expected praise and admiration from the Fox, not a trick that left him hungry and taught him a hard lesson about flattery."
      }
    ]
  },
  {
    roman: "VII",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "activity",
        question: "Imagine someone praises you too much. How would you react?",
        answer: "*(Personal answer - sample.)* I would thank the person politely, stay humble, and pause to think whether the praise is genuine or if they are trying to get something from me. I would not let excessive praise make me careless or proud."
      }
    ]
  }
];
