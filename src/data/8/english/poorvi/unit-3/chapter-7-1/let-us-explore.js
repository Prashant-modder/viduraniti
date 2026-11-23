export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Optical illusions", "Games"] };

export const sections = [
  {
    roman: "I",
    instruction: `Work in pairs. Read the words and observe the images given below. Check if your answers match. Share your answers with your classmates and teacher. These are optical illusions which may trick the eye and make you think that you can see two different things.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/optical-illusions.png", alt: "Six optical illusions: 1 the word 'teach', 2 the word 'hate', 3 the word 'good', 4 a tree, 5 a penguin and a face, 6 a row of pillars and people" },
        question: "Observe the six images. What can you see in each?",
        answer: [
          "*(Observation activity - possible readings; compare with your partner.)*",
          "- **1. 'teach'** - an ambigram: turn the page upside down or look from the other side and a second word appears.",
          "- **2. 'hate'** - another ambigram; the same lettering can be read differently when turned.",
          "- **3. 'good'** - turn it around and read it again: it hides a second word, an opposite in meaning.",
          "- **4. the tree** - look at the gaps between the branches and leaves for a hidden second picture.",
          "- **5. penguin or face** - the black shape is a penguin, but the same outline is the hair and back of a human head, with the pale shape forming the face.",
          "- **6. pillars or people** - the white columns and the dark gaps between them can be seen as a row of pillars or as a row of faces and figures.",
          "The lesson: our brain chooses between two possible pictures, and it can switch between them."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Read the steps to play a language game—Name the Mystery Object.`,
    items: [
      {
        n: 1, type: "activity",
        reference: {
          title: "Steps and example",
          body: `1. Divide the class into teams.\n2. Each team chooses an object and prepares three hints to enable the other teams to name the object.\n3. Each team takes turns to name the object given by the other team.\n4. If a team names the object with the first hint, they get 20 points, with the second hint 10 points, and with the third hint 5 points.\n\n**One example with three hints:**\n\n(i) I display information for all to share, with a swipe I'm clean and bare.\n\n(ii) I am rectangular or a square, whom neither teacher nor student can spare.\n\n(iii) I am mostly black, sometimes green, now in white too I am seen.`
        },
        question: "Play the game: choose an object and prepare three hints.",
        answer: [
          "*(Sample hints - object: a clock.)*",
          "(i) I have a face but no eyes, and hands but no fingers.",
          "(ii) I tick all day, yet I never run away.",
          "(iii) I tell you when to wake up and when school begins. What am I?  **Answer: a clock**",
          "*(The example in the book is a board - blackboard or whiteboard.)*"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: `Visit the library and look for an encyclopedia. What is it? Check how it is different from a dictionary. Share your answers with your classmates and teacher.`,
    items: [
      {
        n: 1, type: "table",
        question: "Compare an encyclopedia and a dictionary.",
        columns: ["Feature", "Encyclopedia", "Dictionary"],
        rows: [["Purpose", "______", "______"], ["Content", "______", "______"], ["Example of use", "______", "______"]],
        answer: [
          ["Purpose", "Gives detailed information about people, places, events and ideas", "Gives the meaning, spelling, pronunciation and use of words"],
          ["Content", "Long articles on topics, often with pictures, maps and diagrams", "Short entries for single words in alphabetical order"],
          ["Example of use", "Finding out about the Nalanda university", "Finding out what 'enigmatic' means"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: `A thesaurus is a reference book or digital tool that provides a collection of words with similar meanings, allowing users to find alternative words or phrases to express the same idea. Choose any five words and find out their alternative words from the thesaurus.`,
    items: [
      {
        n: 1, type: "table",
        question: "Write five words and their alternatives.",
        columns: ["Word", "Alternatives from a thesaurus"],
        rows: [["1. clever", "______"], ["2. mystery", "______"], ["3. hide", "______"], ["4. solve", "______"], ["5. suspicious", "______"]],
        answer: [
          ["1. clever", "smart, bright, intelligent, sharp"],
          ["2. mystery", "puzzle, riddle, secret, enigma"],
          ["3. hide", "conceal, bury, tuck away, cover"],
          ["4. solve", "crack, decode, work out, figure out"],
          ["5. suspicious", "doubtful, fishy, shady, distrustful"]
        ]
      }
    ]
  }
];
