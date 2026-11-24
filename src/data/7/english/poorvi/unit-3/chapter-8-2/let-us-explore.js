export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Shiuli", "Riddles", "Research"] };

export const sections = [
  {
    roman: "I",
    instruction: `Shiuli flowers often find a mention in Rabindranath Tagore's poems. These flowers are found in many parts of our country. Look at the pictures of shiuli flowers and recall what you call them in your language.`,
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/shiuli-flowers.png", alt: "A heap of shiuli flowers, white with orange stalks" },
        question: `Find out names of some more trees or plants in your locality which have fragrant flowers. Write their names in your language and English language. Draw any two flowers and colour them.`,
        answer: [
          "*(Class discussion - sample answer.)*",
          "**Shiuli** is the night-flowering jasmine or coral jasmine (botanical name *Nyctanthes arbor-tristis*). It is called shiuli or shephali in Bengali, harsingar in Hindi, parijata in Sanskrit, parijatak in Marathi, pavizhamalli in Tamil and Malayalam, and parijatamu in Telugu. It is the state flower of West Bengal.",
          "More fragrant flowers (Hindi - English): chameli - jasmine, genda - marigold, gulab - rose, rajnigandha - tuberose, kamal - lotus, champa - champak (frangipani), maulsari - bullet wood (Spanish cherry).",
          "To draw: pick any two flowers from the list, draw the petals and the stalk neatly, and colour them with the natural colours."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: `Solve the riddles given below. Share your answers with your classmates and the teacher.`,
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", figure: { src: "images/riddle-thinker-1.png", alt: "A boy in a yellow shirt thinking with his hand on his chin" }, question: `I have water that you cannot drink,<br>People come to see how in me the Sun sinks.<br>I can be rough, I can be calm,<br>I hold within myself plenty of charm.<br>My depths tell a never-ending tale.<br>Who am I with dolphins and the whale?`, answer: "**The sea** (or the ocean). Its salty water cannot be drunk, the Sun seems to sink into it at sunset, and dolphins and whales live in it." },
          { label: "2", type: "short", figure: { src: "images/riddle-thinker-2.png", alt: "A girl with long hair thinking with her hand on her chin" }, question: `I sit in stillness, but move with the wind,<br>My surface mirrors the world you are in.<br>The trees around me live happily,<br>In me, you can take a dip daily.<br>Home to ducks, frogs, fish, and all,<br>Can you guess what I am, after all?`, answer: "**A pond** (or a lake). Its still water reflects the world, ripples when the wind blows, and ducks, frogs and fish live in it." },
          { label: "3", type: "short", figure: { src: "images/riddle-thinker-3.png", alt: "A boy in a green shirt thinking with his hand on his chin" }, question: `I gently travel through valleys deep,<br>My soft murmur can make you sleep.<br>Little paper boats float on me in rain<br>The merry laughter of the kids I gain.<br>You may sit beside me without any fear,<br>Who am I who skips along, crystal clear?`, answer: "**A stream.** It flows gently, murmurs softly, carries paper boats in the rain and skips along over the stones, as in the poem." },
          { label: "4", type: "short", figure: { src: "images/riddle-thinker-4.png", alt: "A girl in a yellow scarf thinking with her hand on her chin" }, question: `I have a bed, but I do not sleep.<br>I have a bank, but no money I keep.<br>I carry stories, old and new,<br>High mountains to the oceans blue.<br>I journey far to meet the sea,<br>Can you guess, who I can be?`, answer: "**A river.** A river has a bed and banks, and it flows from the high mountains to the sea." }
        ]
      }
    ]
  }
];
