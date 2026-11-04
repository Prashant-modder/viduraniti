export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Think and share with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Who inspires you to do your best?",
        answer: "*(Personal answer - sample.)* My elder sister inspires me. She never gives up on a problem, even when she gets it wrong several times, and she always says, 'One more try.' Watching her makes me want to do my best too."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Work in pairs, identify what you see in the pictures given below. What can we learn from them? Share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/learning-pictures.png", alt: "Six pictures: 1 a beehive with bees, 2 a spider on its web, 3 geese flying together, 4 a bird at a hanging nest, 5 a line of ants, 6 an apple tree with fruit" },
        question: "Identify each picture and write one thing we can learn from it.",
        columns: ["Picture", "What we can learn"],
        rows: [
          ["1", "______"], ["2", "______"], ["3", "______"], ["4", "______"], ["5", "______"], ["6", "______"]
        ],
        answer: [
          ["1. A beehive with bees", "Teamwork and hard work - thousands of bees build the hive and gather honey together."],
          ["2. A spider on its web", "Patience and persistence - a spider mends and rebuilds its web again and again."],
          ["3. Geese flying together", "Cooperation and perseverance - they fly long distances in a group and take turns to lead."],
          ["4. A bird at a hanging nest", "Effort and planning - a nest is built twig by twig with great care."],
          ["5. A line of ants", "Discipline and teamwork - ants carry food together and never give up."],
          ["6. A fruit tree", "Patience - a tree grows slowly over years before it gives fruit."]
        ]
      }
    ]
  }
];
