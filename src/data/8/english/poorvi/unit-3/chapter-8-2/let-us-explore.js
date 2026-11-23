export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Magic", "Riddles", "Project"] };

export const sections = [
  {
    roman: "I",
    instruction: `Have you heard of India's famous magician, P. C. Sorcar Sr.? He is known as one of the 'World's Greatest Magician' and performed live magic shows in front of audiences and on television, internationally. He was awarded Padma Shri on 26 January 1964 for his contribution to the world of magic.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/sorcar.png", alt: "Poster of P. C. Sorcar, The World's Greatest Magician, in a red turban" },
        question: "(No question in the book.) Find out more about P. C. Sorcar Sr. and share one interesting fact with the class.",
        answer: [
          "*(Research activity - starting points.)*",
          "- He was a Bengali magician from India who took Indian magic to audiences around the world.",
          "- He staged live shows in many countries and on television, and received the Padma Shri in 1964.",
          "Share one fact in your own words with your classmates."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Words can also play tricks. Read the riddles about things that seem to be unreal and find what they refer to.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", figure: { src: "images/friends.png", alt: "Four friends chatting outdoors; one of them uses a white cane" }, question: "I can fill a room, but I take up no space. I'm often heard, but never seen. What am I?", answer: "**Sound** (for example music or an echo)." },
          { label: "2", type: "short", question: "The more you take, the more you leave behind. What am I?", answer: "**Footsteps.**" },
          { label: "3", type: "short", question: "I have cities but no houses, I have forests but no trees. What am I?", answer: "**A map.**" },
          { label: "4", type: "short", question: "I'm tall when I'm young and short when I'm old, in a dark room, my story is told.", answer: "**A candle.**" }
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `You are asked to create a magical object. What object would you create? Make a drawing with all its details and mention its special quality on the same sheet. Put up the sheet on the display board.`,
    items: [
      {
        n: 1, type: "activity",
        question: "You are asked to create a magical object. What object would you create?",
        answer: [
          "*(Drawing activity - sample.)*",
          "**The Kindness Compass.** It looks like a golden pocket compass with a heart-shaped needle. Instead of pointing north, it points to the nearest person who needs help. The more people it helps, the brighter it glows. It stops working if used for selfish reasons.",
          "Draw the compass with its dial and needle, add small icons around it (a helping hand, a meal, a book) and write its special quality on the same sheet."
        ]
      }
    ]
  }
];
