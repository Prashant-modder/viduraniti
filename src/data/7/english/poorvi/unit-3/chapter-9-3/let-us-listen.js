export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening", "Agartala"] };

// Answers are based on the teacher's transcript (textbook page 138): how Agartala got its name and the importance of agar.

export const sections = [
  {
    roman: "",
    instruction: `You will listen to a girl speak about the story of how Agartala got its name and the importance of agar. As you listen, choose the correct option for the questions given below. (Transcript for the teacher on pg. 138)`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "mcq", question: `What does the word 'Agartala' mean?`, options: [`(i) under the agar tree`, `(ii) beside the agar tree`, `(iii) around the agar tree`], answer: "**(i) under the agar tree** - 'agar' is a tree and 'tala' means underneath." },
          { label: "2", type: "mcq", question: `Which of these is another name for agarwood trees?`, options: [`(i) gharuwood`, `(ii) sandalwood`, `(iii) rosewood`], answer: "**(i) gharuwood** - the speaker also mentions aloeswood and eaglewood." },
          { label: "3", type: "mcq", question: `What kind of smell does agarwood have?`, options: [`(i) woody and citrusy`, `(ii) woody and flowery`, `(iii) fresh and citrusy`], answer: "**(ii) woody and flowery**" },
          { label: "4", type: "mcq", question: `How is agarwood formed?`, options: [`(i) when the tree dries`, `(ii) when the tree dies`, `(iii) when the tree gets infected`], answer: "**(iii) when the tree gets infected** - the hurt or infected tree makes a dark, sticky, sweet-smelling oil to protect itself." },
          { label: "5", type: "mcq", question: `What is agarwood used to make?`, options: [`(i) incense and edible oil`, `(ii) perfumes and wood carvings`, `(iii) gum and candies`], answer: "**(ii) perfumes and wood carvings** (it is also used for incense)." }
        ]
      }
    ]
  }
];
