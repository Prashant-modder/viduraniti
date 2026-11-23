export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 99).

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to a woman read the special broadcast of the news. As you listen, arrange the pictures in the correct sequence of the events that took place. (Transcript for the teacher on page 99.)",
    items: [
      {
        n: 1, type: "order",
        figure: { src: "images/rohan-pictures.png", alt: "Six numbered pictures: a woman struggling in a river, her rescue, a woman on the bank with a boy nearby, a prize ceremony, a boy diving in, and a woman falling into the water" },
        question: "Arrange the pictures in the correct sequence.",
        items: [
          "Picture 1 - the woman struggles in the water",
          "Picture 2 - the woman is pulled to safety",
          "Picture 3 - the woman is at the river bank with Rohan nearby",
          "Picture 4 - Rohan receives the award on the stage",
          "Picture 5 - Rohan dives into the river",
          "Picture 6 - the woman falls into the river"
        ],
        answer: [3, 6, 1, 5, 2, 4]
      }
    ]
  },
  {
    roman: "II",
    instruction: "You will once again listen to the special broadcast of the news. As you listen, complete the following sentences with one to three exact words.",
    items: [
      {
        n: 1, type: "blanks",
        question: "Complete the sentences.",
        passage: "1. The woman was having a difficult time staying afloat due to the ______ . 2. Rohan leapt into the river to save the woman without any ______ . 3. Rohan's act of bravery was witnessed by ______ . 4. Rohan was honoured at the Vigyan Bhawan for his incredible courage and ______ . 5. Rohan proved that when it comes to saving lives, age is ______ .",
        answer: [
          "1. **strong currents**",
          "2. **hesitation**",
          "3. **onlookers**",
          "4. **selfless act** (also: bravery)",
          "5. **no barrier**"
        ]
      }
    ]
  }
];
