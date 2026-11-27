export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Safety", "Activity"] };

// Note on item 2 (Maze): DRAW_REPLACEMENTS is set to skip, so no drawn solution overlay is
// included. Text guidance is provided; students should trace the maze visually with a pencil.

export const sections = [
  {
    roman: "I",
    instruction: "Complete the activities below.",
    items: [
      {
        n: 1, type: "activity",
        question: "Find out from your teacher or parents what you would do in the following situations.\n\nWho will you call if ...\nâ€¢ you see fire\nâ€¢ you see someone getting hurt\nâ€¢ you see a wounded animal\nâ€¢ you see someone suspicious\nâ€¢ you find a lost child\nâ€¢ you get lost",
        answer: [
          "*(Emergency numbers in India â€” always inform a trusted adult nearby as well; **112** is India's national all-in-one emergency number.)*",
          "- **you see fire:** Call the Fire Brigade (**101** or **112**) and alert adults immediately.",
          "- **you see someone getting hurt:** Call an Ambulance (**102** or **108**, or **112**) and call an adult or doctor for first aid.",
          "- **you see a wounded animal:** Inform your parents/teacher and call a local veterinary clinic, municipal animal rescue, or an animal welfare helpline.",
          "- **you see someone suspicious:** Inform your parents, a trusted adult, or a security guard right away, and call the Police (**100** or **112**).",
          "- **you find a lost child:** Stay in a safe public place with a trusted adult, inform the nearest police officer, or call Police (**100** / **112**) or Childline (**1098**).",
          "- **you get lost:** Stay calm and do not go with strangers. Ask a uniformed police officer, security guard, or shopkeeper to call your parents' phone number (or dial **100** / **112** / **1098**)."
        ]
      },
      {
        n: 2, type: "activity",
        figure: { src: "images/kotwal-maze.png", alt: "A maze puzzle where the village kotwal at the top-left must find the right path to catch the thief at the bottom-right" },
        question: "Find the right path for the kotwal to catch the thief.",
        answer: [
          "*(Maze activity â€” trace lightly with a pencil on the printed picture.)*",
          "1. **Start** at the opening directly below the kotwal in the top-left corner and move **down** along the left corridor.",
          "2. Avoid the short dead-end loops on the far left and top-right; turn **right** into the central passages and weave around the middle horizontal barriers.",
          "3. **Tip:** If you get stuck at a dead end, try tracing **backwards** from the open gap just above the thief at the bottom-right towards the middle corridors until the two paths meet."
        ]
      }
    ]
  }
];
