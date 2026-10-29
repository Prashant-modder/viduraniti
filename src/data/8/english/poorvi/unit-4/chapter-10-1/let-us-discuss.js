export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Arrange the events in order of occurrence in the story.",
    items: [
      {
        n: 1, type: "order",
        items: [
          "1. Rakesh discovered that the small, well-rooted twig, had grown into a cherry tree.",
          "2. Rakesh was sent to live with his grandfather in Mussoorie.",
          "3. Rakesh pressed the cherry seed into the soft soil with his thumb.",
          "4. The cherry tree grew quickly after the rains arrived early.",
          "5. Rakesh bought a bunch of cherries and ate most of them.",
          "6. A goat entered the garden and ate all the leaves of the young cherry tree.",
          "7. Rakesh's parents grew maize, rice, and barley in a village.",
          "8. Rakesh sprinkled water on the cherry tree and surrounded it with pebbles.",
          "9. Grandfather told Rakesh that cherry trees were tough.",
          "10. Rakesh kept rolling the last cherry seed in his mouth."
        ],
        answer: "**Correct Order:** 7, 2, 5, 10, 3, 1, 8, 4, 6, 9.\n(Parents grew maize -> Sent to Mussoorie -> Bought cherries -> Rolled last seed -> Pressed seed in soil -> Discovered twig -> Sprinkled water -> Rains/grew quickly -> Goat ate leaves -> Grandfather said trees are tough)"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Do you think the cherry tree would survive? Why do you think so?",
    items: [
      { n: 1, type: "long", question: "Provide your thoughts on the tree's survival after being eaten and cut.", answer: "Yes, because the story establishes that cherry trees are incredibly tough and resilient. Furthermore, nature has a powerful instinct to survive, and with Rakesh's constant love and protection, the deep roots of the tree allowed it to heal and sprout new shoots." }
    ]
  },
  {
    roman: "III",
    instruction: "Complete the Cause-Effect table given below based on your understanding of Part II of the story.",
    items: [
      {
        n: 1, type: "match", question: "Fill in the missing Causes and Effects.",
        left: [
          "1. A woman cut the cherry tree while cutting grass.",
          "2. (Cause missing: Why was Rakesh thinner but stronger?)",
          "3. A hairy caterpillar started eating the leaves of the cherry tree.",
          "4. (Cause missing: Why did they gaze at the tree?)",
          "5. Rakesh tasted one of the small cherries during summer."
        ],
        right: [
          "(i) Grandfather scolded the woman.",
          "(ii) Rakesh was thinner but stronger when he came back.",
          "(iii) (Effect missing)",
          "(iv) Rakesh and Grandfather gazed at the tree as though it was a miracle.",
          "(v) (Effect missing)"
        ],
        answer: "1. (i) Grandfather scolded the woman.\n2. **(ii) Rakesh went home to his village to help his parents with ploughing and sowing.** -> Rakesh was thinner but stronger...\n3. A hairy caterpillar started eating the leaves -> **(iii) Rakesh removed it quickly and dropped it on dry leaves.**\n4. **(iv) The tree performed a miracle by producing a pale pink blossom.** -> Rakesh and Grandfather gazed at the tree...\n5. Rakesh tasted one of the small cherries -> **(v) He spat it out because it was too sour.**"
      }
    ]
  }
];
