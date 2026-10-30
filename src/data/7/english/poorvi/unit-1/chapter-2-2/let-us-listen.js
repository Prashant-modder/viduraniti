export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

export const sections = [
  {
    roman: "I & II",
    instruction: "Listen to a story about an ant. Answer the questions.",
    items: [
      {
        n: 1, parts: [
          { label: "1", type: "mcq", question: "What was the ant known for?", options: ["(i) determination", "(ii) strength", "(iii) beauty"], answer: "**(i) determination**" },
          { label: "2", type: "mcq", question: "Why was the ant unable to take the roti home?", options: ["(i) It was stuck under a rock.", "(ii) It was too heavy to carry.", "(iii) It was pulled by other ants."], answer: "**(ii) It was too heavy to carry.**" },
          { label: "3", type: "mcq", question: "What was the bird doing?", options: ["(i) playing with the ant", "(ii) searching for food", "(iii) building a nest"], answer: "**(iii) building a nest** (Implied by transcript: picking up twigs/leaves to build)." },
          { label: "4", type: "mcq", question: "How did the bird make the ant feel?", options: ["(i) proud", "(ii) inspired", "(iii) relaxed"], answer: "**(ii) inspired**" },
          { label: "5", type: "mcq", question: "How did the fellow ants help?", options: ["(i) by advising...", "(ii) by standing still...", "(iii) by joining the ant in her efforts"], answer: "**(iii) by joining the ant in her efforts**" }
        ]
      }
    ]
  }
];
