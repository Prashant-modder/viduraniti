export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write whether the following sentences are True or False.",
    items: [
      {
        n: 1, type: "table",
        question: "Write True or False for each statement.",
        columns: ["Statement", "True / False"],
        rows: [
          ["1. The bird changed its house two times.", "______"],
          ["2. The neighbours tell the bird about the world.", "______"]
        ],
        answer: [
          ["1. The bird changed its house two times.", "True *(it moved from the pale blue eggshell to the straw nest, and then out of the nest into the tree and open sky)*."],
          ["2. The neighbours tell the bird about the world.", "False *(neither the bird nor its neighbours know how the world is made)*."]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the following lines from the poem and answer the questions given below.",
    items: [
      {
        n: 1,
        passage: `I thought the world was made of straw,
And nestled by my mother.`,
        parts: [
          {
            label: "(i)", type: "short",
            question: "Who lived in the nest along with the baby bird?",
            answer: "The baby bird's **mother** lived in the nest along with it."
          },
          {
            label: "(ii)", type: "mcq",
            question: "Complete the following by choosing the correct option.\n\nThe bird thought the world was made of straw because ______.",
            options: [
              "A. it lived in a straw hut",
              "B. its nest was made of straw",
              "C. its mother fed straw to it",
              "D. there was straw all around"
            ],
            answer: "**B. its nest was made of straw**"
          },
          {
            label: "(iii)", type: "short",
            question: "Which word tells us that the baby bird was warm and comfortable?",
            answer: "**nestled**"
          }
        ]
      },
      {
        n: 2,
        passage: `I said the world is made of leaves,
I have been very blind.`,
        parts: [
          {
            label: "(i)", type: "short",
            question: "Why did the bird think the world was made of leaves?",
            answer: "When the bird fluttered out of its straw nest onto the tree branches, it saw green leaves all around it and assumed the whole world was made of leaves."
          },
          {
            label: "(ii)", type: "mcq",
            question: "What does the set of words 'I said' mean?",
            options: ["A. flew", "B. shouted", "C. spoke", "D. cried"],
            answer: "**C. spoke**"
          },
          {
            label: "(iii)", type: "fill",
            question: "Fill in the blanks to complete the sentence.\n\nThe bird felt that it had been very blind because it could not __ __ __ the leaves from __ n __ __ __ e the nest.",
            answer: "**see** ... **inside**"
          }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "Why did the baby bird think that its first world was small, round and blue?",
        answer: "Before hatching, the baby bird lived inside a small, round, pale blue eggshell. Since it could not see anything outside the shell, it thought the shell was the entire world."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "Where did the bird go when it fluttered from its straw nest?",
        answer: "When it fluttered from its straw nest, the bird hopped out onto the leafy branches of the tree to see what it could find."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "short",
        question: "What quality did the bird say it had, when it flew away?",
        answer: "It said it was **quite fit for grown-up labours**—meaning it had grown strong, independent, and ready to take care of itself."
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Answer the following question.",
    items: [
      {
        n: 1, type: "activity",
        question: "Who do you think were the bird's neighbours? Why do you think so? Discuss.",
        answer: "*(Class discussion - sample answer.)* The bird's neighbours were the other birds and creatures living in nearby trees and flying across the sky. Just like the bird, they too fly through the vast world without fully knowing how this huge universe was created."
      }
    ]
  }
];
