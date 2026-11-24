export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Crossword", "Heritage", "Festival"] };

export const sections = [
  {
    roman: "I",
    instruction: `Solve the crossword puzzle by identifying the States and Union Territories of India using the clues given.`,
    items: [
      {
        n: 1, type: "crossword",
        grid: { rows: 19, cols: 17 },
        given: [],
        entries: [
          { n: 2, dir: "across", row: 1, col: 10, answer: "LADAKH", clue: "Pangong Lake" },
          { n: 7, dir: "across", row: 6, col: 4, answer: "RAJASTHAN", clue: "Thar Desert" },
          { n: 9, dir: "across", row: 9, col: 2, answer: "PUDUCHERRY", clue: "Serenity Beach" },
          { n: 11, dir: "across", row: 11, col: 9, answer: "KARNATAKA", clue: "Hampi" },
          { n: 12, dir: "across", row: 13, col: 1, answer: "TELANGANA", clue: "Nagarjuna Sagar Dam" },
          { n: 14, dir: "across", row: 15, col: 1, answer: "SIKKIM", clue: "Thangka Paintings" },
          { n: 15, dir: "across", row: 17, col: 1, answer: "GUJARAT", clue: "Rann of Kutch" },
          { n: 16, dir: "across", row: 19, col: 13, answer: "BIHAR", clue: "Nalanda University" },
          { n: 1, dir: "down", row: 1, col: 5, answer: "MIZORAM", clue: "Dampa Tiger Reserve" },
          { n: 3, dir: "down", row: 1, col: 11, answer: "ANDAMAN", clue: "Cellular Jail" },
          { n: 4, dir: "down", row: 3, col: 15, answer: "MEGHALAYA", clue: "Double Decker Living Root Bridge" },
          { n: 5, dir: "down", row: 4, col: 7, answer: "GOA", clue: "Dudhsagar Falls" },
          { n: 6, dir: "down", row: 5, col: 9, answer: "UTTARAKHAND", clue: "Gangotri Glacier" },
          { n: 8, dir: "down", row: 6, col: 17, answer: "ODISHA", clue: "Chilika Lake" },
          { n: 10, dir: "down", row: 11, col: 4, answer: "JHARKHAND", clue: "Chota Nagpur Plateau" },
          { n: 13, dir: "down", row: 13, col: 16, answer: "HARYANA", clue: "Kurukshetra" }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `There are many ancient places to visit in India. For example, Kailasa, the majestic cave temples of Ellora. They are officially listed on the World Heritage list by UNESCO. These caves were carved out of the vertical basalt cliffs of the Sahyadri hills. You may visit this site to know more about these caves- https://indianculture.gov.in/stories/kailasa-majestic-temple-ellora`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/kailasa-temple.png", alt: "The Kailasa Temple at Ellora seen from above, carved out of rock (source: UNESCO)", caption: "The Kailasa Temple. Source: UNESCO" },
        answerFigure: { src: "images/rani-ki-vav.png", alt: "Carved walls and steps of Rani-ki-Vav, the Queen's Stepwell, seen from below (source: UNESCO)", caption: "Rani-ki-Vav. Source: UNESCO" },
        reference: {
          title: "Rani-ki-Vav (from the book, in short)",
          body: `Rani-ki-Vav, the Queen's Stepwell, is in Patan, Gujarat, and is also on UNESCO's World Heritage list. Stepwells are a special kind of water-storage system of the Indian subcontinent, built in ancient times. They grew from simple pits in sandy soil into grand, many-storeyed works of art and architecture.`
        },
        question: `Now, find out about the unique places in your village, region or state and share the details with your classmates and the teacher.`,
        answer: [
          "*(Class discussion - sample answer. Write about a place in your own village, region or state.)*",
          "**Rani-ki-Vav, Patan (Gujarat).** It is a stepwell built in the eleventh century by Queen Udayamati in memory of her husband, King Bhimdev I. Its walls and pillars are covered with carved sculptures, and its steps lead down several storeys to the water. UNESCO listed it as a World Heritage Site in 2014. Local people used such stepwells to store water and to meet in the cool shade."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `The Hornbill festival is a unique festival that is held annually in the Kisama village near Kohima, the capital of Nagaland. In groups of four, find out about this festival—when it is held, who participates in it, what its purpose is, what events are held, etc. Share your findings with your classmates and the teacher.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/hornbill.png", alt: "A great hornbill with a large orange-yellow beak sitting on a leafy branch" },
        answer: [
          "*(Class discussion - sample answer based on the official and news sources.)*",
          "- **When and where:** every year from 1 to 10 December, at the Naga Heritage Village in Kisama, about 12 km from Kohima. The first festival was held in December 2000, and 1 December is Nagaland's Statehood Day.",
          "- **Who takes part:** the Naga tribes of Nagaland (16 major tribes and their sub-tribes). Each tribe has its own morung (hut) at the heritage village. Visitors from India and other countries also come.",
          "- **Purpose:** to show and preserve the culture and heritage of Nagaland, to bring its different tribes together in unity and to encourage the younger generation to value their traditions. It is called the 'Festival of Festivals'.",
          "- **Events:** traditional dances and songs, folk music, Naga food, handicrafts and handloom stalls, indigenous sports and games, a music festival with the Hornbill International Rock Festival, and cycling and biking events."
        ]
      }
    ]
  }
];
