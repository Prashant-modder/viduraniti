export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing", "Paragraph"] };

export const sections = [
  {
    roman: "I",
    instruction: `Think about different vocations that you see around or you are currently studying.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/vocations.png", alt: "Five people in work clothes: an electrician, a mechanic, a chef, a nurse and a graphic designer" },
        question: `For example: electrician, mechanic, chef, nurse, graphic designer. You may add more vocations to the list given here.`,
        answer: [
          "*(Class discussion - sample answer.)*",
          "More vocations: carpenter, plumber, farmer, tailor, teacher, driver, potter, weaver, pilot, painter, police officer, firefighter."
        ]
      },
      {
        n: 2, type: "activity",
        reference: {
          title: "Hints",
          body: `- why you like this vocation\n- what training is needed\n- what tools and equipment are required\n- who would your co-workers be\n- highlight the importance of team work\n- how you would deal with the customers\n- how you plan to pursue it with a sense of pride`
        },
        question: `Now, choose a vocation and write a paragraph. You may use the hints given below.`,
        answer: [
          "*(Personal answer - sample.)*",
          "I would like to become a chef, because I enjoy cooking and I love to see people smile when they eat something that I have made. To become a chef, I would have to train in a catering institute and then work under an experienced chef in a restaurant kitchen. A chef needs knives, pans, ovens and other kitchen tools, and must keep all of them spotlessly clean. My co-workers would be assistant cooks, waiters and the kitchen helpers, and we would have to work together like a team, because a meal is ready on time only when everybody does their part. I would treat every customer politely, listen to their likes and dislikes, and accept complaints calmly. I would pursue this career with pride, because good food is one of the simplest ways to make people happy."
        ]
      }
    ]
  }
];
