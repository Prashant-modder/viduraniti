export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Languages"] };

// Note on regional language attribution: "Nimb" (Hindi) is stated directly in the text (p. 77).
// Regional variants such as Nimbamond and Nimbe vary across local dialects and reference lists;
// verify any state-specific usage with your teacher in class.

export const sections = [
  {
    roman: "I",
    instruction: "When people from Persia came to India and saw that a common tree of their country was freely growing here, they started calling the tree Azad Darakhte Hindi. So, the scientific name of Neem in Latin became Azadirachta indica. Neem has different names in the Indian languages. Discuss with your teacher and find out which Indian languages these names belong to.",
    items: [
      {
        n: 1, type: "table",
        question: "Find out which Indian languages these names for Neem belong to.",
        columns: ["Name", "Nimb", "Nim", "Leemba", "Nimori", "Nimbamond", "Nimbe", "Nimo"],
        rows: [
          ["Indian (Language)", "______", "______", "______", "______", "______", "______", "______"]
        ],
        answer: [[
          "Indian (Language)",
          "Hindi (also Sanskrit/Marathi)",
          "Bengali / Punjabi / Urdu / Assamese",
          "Marathi / Gujarati (Limba / Limdo)",
          "Rajasthani / Hindi regional dialects",
          "Regional Indian dialect (verify local state name with teacher)",
          "Konkani / Kannada regional variant of Nimba",
          "Odia / Sindhi"
        ]]
      }
    ]
  }
];
