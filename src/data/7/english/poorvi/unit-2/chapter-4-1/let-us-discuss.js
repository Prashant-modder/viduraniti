export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I (Part I)",
    instruction: "Complete the following sentence by selecting a suitable reason.",
    items: [
      {
        n: 1, type: "mcq", question: "The Cat's-food-Man suggests to Doctor Dolittle that he should become an animal doctor because he believes that Dolittle...",
        options: [
          "1. earns less fee by treating human patients",
          "2. enjoys the company of animals as they speak less",
          "3. dislikes spending time with human patients",
          "4. knows more about animals than the local veterinarians"
        ],
        answer: "**4. knows more about animals than the local veterinarians**"
      }
    ]
  },
  {
    roman: "II (Part I)",
    instruction: "Fill in the blanks by choosing the suitable option given in the brackets.",
    items: [
      {
        n: 1, type: "fill", question: "Doctor Dolittle reacts to Polynesia's information about animal languages with both excitement and ______ (certainty/curiosity). He rushes to ______ (write/memorise) the bird words...",
        answer: "...excitement and **curiosity**. He rushes to **write** the bird words she provides..."
      }
    ]
  },
  {
    roman: "I (Part II)",
    instruction: "What became a common sight in Puddleby after Doctor Dolittle started treating animals?",
    items: [
      {
        n: 1, type: "mcq", question: "Select the correct option.",
        options: [
          "1. Humans talking to farm animals",
          "2. Farm animals wearing glasses",
          "3. Farm animals learning bird language",
          "4. Birds riding atop farm animals"
        ],
        answer: "**2. Farm animals wearing glasses**"
      }
    ]
  },
  {
    roman: "II (Part II)",
    instruction: "What challenges do you think Doctor Dolittle might face if more and more animals come to him for help?",
    items: [
      {
        n: 1, type: "short", question: "How might he overcome these challenges?",
        answer: "He might face challenges like overcrowding in his house, managing different species that don't get along, and running out of medicine. He overcame the overcrowding by making special doors and tunnels (like the mouse tunnel to the cellar) so animals could enter patiently and systematically."
      }
    ]
  },
  {
    roman: "III (Part II)",
    instruction: "Arrange the following events in correct order according to the story.",
    items: [
      {
        n: 1, type: "order",
        items: [
          "1. Doctor Dolittle decides to stop being a doctor for people...",
          "2. Animals from near and far come... crowding his garden.",
          "3. A man with a stomach-ache visits... suggests he should treat animals.",
          "4. Polynesia teaches Doctor Dolittle animal languages...",
          "5. A plough horse with vision problems visits...",
          "6. The parrot, Polynesia, encourages Doctor Dolittle...",
          "7. Doctor Dolittle installs special doors for different animals...",
          "8. Doctor Dolittle's ability to communicate helps him diagnose...",
          "9. Doctor Dolittle gains fame among animals worldwide...",
          "10. Word spreads, and people start bringing their sick pets..."
        ],
        answer: "**Correct Order:** 3, 6, 4, 1, 10, 5, 8, 2, 7, 9.\n(Man visits [3] -> Parrot encourages [6] -> Teaches language [4] -> Stops being human doctor [1] -> People bring sick pets [10] -> Plough horse visits [5] -> Diagnoses effectively [8] -> Animals crowd garden [2] -> Installs special doors [7] -> Gains fame worldwide [9].)"
      }
    ]
  }
];
