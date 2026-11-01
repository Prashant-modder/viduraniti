# ---------------------------------------------------------------------------
# Class 7 English (Poorvi) - Unit 1: Learning Together
#   Chapter 1-1  The Day the River Spoke
#   Chapter 1-2  Try Again
#   Chapter 1-3  Three Days to See
#
# Run from the project root (the folder that contains "src"):
#   powershell -ExecutionPolicy Bypass -File .\create-unit-1.ps1
#
# Re-running overwrites the generated .js files. Images are not touched:
# unzip unit-1-images.zip into the project root once.
# ---------------------------------------------------------------------------

$root = (Get-Location).Path
$base = "src\data\7\english\poorvi\unit-1"

$files = [ordered]@{}

# ---- index.js
$files["index.js"] = @'
export const unit = {
  label: "Unit 1: Learning Together",
  slug: "unit-1"
};
'@

# ---- chapter-1-1/animations/story.js
$files["chapter-1-1\animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated retelling of Jahnavi and the River." };
'@

# ---- chapter-1-1/before-we-read.js
$files["chapter-1-1\before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Close your eyes and quietly listen to the sounds around you for a minute. Share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Are they trying to tell you something?",
        answer: [
          "*(Class discussion - sample answer.)*",
          "Yes. Birdsong tells us that the day has begun, rustling leaves tell us the wind is blowing, and a distant rumble warns us that rain may be on its way. When we stay quiet and listen, the world around us seems to be speaking."
        ]
      },
      {
        n: 2, type: "activity",
        question: "Do you think the things around you also listen to you all day long?",
        answer: [
          "*(Class discussion - sample answer.)*",
          "In a poetic sense, yes. A pet answers to its name, and a quiet tree or river feels like a patient listener when we share our worries. Scientifically, objects do not hear us, but paying attention to our surroundings makes us feel connected to them - which is exactly what this story is about."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Jahnavi was a bright young girl who lived with her parents and three brothers in a coastal village in India. Her parents worked on the farm. She had a dream. Share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "What could that dream be?",
        answer: "Her dream could be to go to school, learn to read and write, and find out the reasons behind the things she wonders about - perhaps even to become a teacher one day."
      },
      {
        n: 2, type: "activity",
        question: "How could she make her dream come true?",
        answer: [
          "- She could tell her parents clearly how much she wants to study.",
          "- She could ask a teacher or an elder for help.",
          "- She could listen in at school and learn whatever she can until she is allowed to join.",
          "- Above all, she must keep believing in herself and not give up."
        ]
      },
      {
        n: 3, type: "activity",
        question: "What is your dream? What can you do to make your dream come true?",
        answer: "*(Personal answer - sample.)* My dream is to become a doctor. To make it come true, I will study regularly, ask questions whenever I do not understand, read widely, and keep trying even when things get difficult."
      }
    ]
  }
];
'@

# ---- chapter-1-1/discover-to-interest.js
$files["chapter-1-1\discover-to-interest.js"] = @'
export const meta = { title: "Discover to Interest", order: 9, tags: ["Links", "Further reading"] };

export const sections = [
  {
    roman: "I",
    instruction: "Explore related topics after reading the chapter.",
    items: [
      {
        n: 1, type: "activity",
        question: "What can I look up after reading?",
        answer: [
          "- **Beti Bachao Beti Padhao** - a government campaign for the education and welfare of the girl child.",
          "- **Right to Education Act (RTE)** - the law that guarantees free and compulsory education for children aged 6 to 14.",
          "- **Boats of India** - the canoe, catamaran, coracle and shikara: where each is used and what it is made of.",
          "- **Words borrowed from Indian languages** - such as catamaran, jungle, verandah and chutney, and how they entered English.",
          "- **Emperor Ashoka** - the king in the lesson Jahnavi overheard in the classroom.",
          "- **Rivers of India** - why many are worshipped, and the stories and songs told about them.",
          "- **The full story** - read the original story, *The Day the River Spoke*, if your library has it."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/exam-notes.js
$files["chapter-1-1\exam-notes.js"] = @'
export const meta = { title: "Exam Notes", status: "published", tags: ["Revision"] };

export const blocks = [
  {
    type: "keypoints",
    title: "Story at a glance",
    items: [
      "Jahnavi, nearly ten, lives in a coastal village and longs to go to school, but she has to mind her younger brothers while her mother works in the fields.",
      "Her mother keeps saying 'maybe later', so Jahnavi feels she is now too old - and too scared - to ask again.",
      "The River, personified and written with a capital R, is a gentle, wise mentor. It listens, reassures her and gives practical advice.",
      "The River says that little girls can do as much as little boys, and reminds Jahnavi of her courage with the lizard, the snake and the trains.",
      "Its advice: slip into the school quietly, sit and listen - and remember, 'it's up to you'.",
      "Jahnavi takes the first step. The teacher supports her, her mother approves and her father agrees to let her study.",
      "Jahnavi decides to become a teacher and bring all the girls of her village to school."
    ]
  },
  {
    type: "keypoints",
    title: "Characters",
    items: [
      "Jahnavi - curious, brave, hard-working and determined, though shy and afraid at first.",
      "The River - wise, affectionate, humorous and encouraging; a personified friend and guide.",
      "Jahnavi's mother - loving; once wished to study herself and now supports her daughter.",
      "Jahnavi's father - worried at first, but agrees after the teacher's visit.",
      "The teacher - kind and understanding; finds a way to bring Jahnavi into school.",
      "Gopi (Ettan), Meena, Ramu and Appu - the children around Jahnavi; Ramu goes to school, and Appu is the baby she minds.",
      "Chandu - the fisherman whose catamaran the River likes; he may take Jahnavi to see a ship one day."
    ]
  },
  {
    type: "keypoints",
    title: "Literary devices",
    items: [
      "Personification - the River speaks, laughs, listens and gives advice.",
      "Imagery - vivid pictures of nature, such as the kingfisher's wings, 'an arrow of blue' in the sunlight.",
      "Sound words - shrieked, rustle, rattling, murmuring, wailed.",
      "Repetition - 'I couldn't' repeated to show Jahnavi's fear.",
      "Dialogue - the conversation between Jahnavi and the River carries the story."
    ]
  },
  {
    type: "grammar",
    title: "Prepositions and adverbs",
    rule: "A **preposition** shows the relation between a noun/pronoun and the rest of the sentence (towards, over, down, at, inside, between, about) and is always followed by an object. Words like **on, off, up, down** can be prepositions (She ran *up* the stairs) or adverbs (She rang me *up*). An adverb tells more about the verb and has no object after it.",
    examples: ["She ran up the stairs. (preposition)", "She rang me up. (adverb)"]
  },
  {
    type: "keypoints",
    title: "Capital letter for 'River'",
    items: [
      "A common noun begins with a capital letter only when it is personified, as with the River."
    ]
  },
  {
    type: "vocab",
    items: [
      { word: "splashed", meaning: "fell in drops, making a sound", use: "A big bright tear splashed down her nose." },
      { word: "slithered", meaning: "moved by sliding from side to side", use: "A green lizard slithered down to the river's edge." },
      { word: "murmuring", meaning: "speaking in a low voice", use: "a sleepy, murmuring voice" },
      { word: "startled", meaning: "surprised", use: "Jahnavi was startled." },
      { word: "thicket", meaning: "a dense group of bushes and trees", use: "a thicket of bamboo" },
      { word: "shrieked", meaning: "made a high-pitched sound", use: "Parrots shrieked." },
      { word: "rustle", meaning: "light sound made by leaves rubbing against each other", use: "Why do bamboo trees rustle?" },
      { word: "conspiratorially", meaning: "secretly", use: "the River said conspiratorially" },
      { word: "clump", meaning: "a small group of trees growing together", use: "the snake in the bamboo clump" },
      { word: "rattling", meaning: "noise made by shaking things", use: "trains rattling past the bridge" },
      { word: "catamaran", meaning: "a kind of boat", use: "Chandu's catamaran" },
      { word: "wailed", meaning: "(here) complained in a loud voice", use: "'They'd never let me!' wailed Jahnavi." }
    ]
  },
  {
    type: "likely",
    items: [
      { marks: 1, q: "Who owns the catamaran that the River likes?", a: "Chandu, the fisherman." },
      {
        marks: 2,
        q: "Why was Jahnavi crying at the beginning of the story?",
        a: "She wanted to go to school like Ettan and Meena, but she was kept at home to mind her little brother. She also feared that she was now too old and too scared to go."
      },
      {
        marks: 3,
        q: "Why did the River laugh when Jahnavi said she would be scared at school?",
        a: "Jahnavi was not afraid of a green lizard, of the snake in the bamboo clump or of loud trains. The River found it funny that someone so brave thought a classroom would scare her, and its laugh was meant to build her confidence."
      },
      {
        marks: 3,
        q: "What advice did the River give Jahnavi? What does it show about the River?",
        a: "The River advised her to slip into the school one morning, sit quietly and listen, and said it was up to her. This shows that the River is caring, wise and practical - it encourages Jahnavi to act for herself instead of simply feeling sorry for her."
      },
      {
        marks: 3,
        q: "Why does the author write 'River' with a capital letter?",
        a: "The River is personified: it talks, laughs and gives advice like a human character. Giving it a capital letter treats it like a proper noun - a character with an identity of its own."
      },
      {
        marks: 5,
        q: "Write a short character sketch of Jahnavi.",
        a: "Jahnavi is a curious girl who wants to know why spiders are yellow in yellow flowers, why bamboo rustles and where the moon goes. She is responsible - she minds her little brothers without complaint - and she is brave, since she is unafraid of lizards, snakes and trains. At first she is shy and doubtful ('I couldn't!'), but with the River's encouragement she finds the courage to go to school. Her dream of becoming a teacher and bringing other girls to school shows her kindness and determination."
      },
      {
        marks: 5,
        q: "How does the story show that girls deserve equal opportunities?",
        a: "The River states that little girls can do as much as little boys, and Jahnavi proves it by taking the first step. The teacher visits her father to find a way for her to study, and her mother says girls should learn as much as they want, regretting that she herself was refused. Jahnavi then decides to bring all the village girls to school. Together these events show that education is a right of every child and that the support of family, teachers and society helps girls to realise their dreams."
      }
    ]
  }
];
'@

# ---- chapter-1-1/glossary.js
$files["chapter-1-1\glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };

export const terms = [
  { term: "splashed", meaning: "fell in drops, making a sound" },
  { term: "slithered", meaning: "moved by sliding from side to side" },
  { term: "murmuring", meaning: "speaking in a low voice" },
  { term: "startled", meaning: "surprised" },
  { term: "thicket", meaning: "a dense group of bushes and trees" },
  { term: "shrieked", meaning: "made a high-pitched sound" },
  { term: "rustle", meaning: "a light sound made by leaves rubbing against each other" },
  { term: "conspiratorially", meaning: "secretly" },
  { term: "clump", meaning: "a small group of trees growing together" },
  { term: "rattling", meaning: "making a noise by shaking" },
  { term: "catamaran", meaning: "a kind of boat", context: "from the Tamil kattu maram, 'tied wood'" },
  { term: "wailed", meaning: "(here) complained in a loud voice" }
];
'@

# ---- chapter-1-1/index.js
$files["chapter-1-1\index.js"] = @'
export const chapter = {
  title: "The Day the River Spoke",
  abs: 1,
  pos: 1,
  unit: "unit-1",
  author: "Kamala Nair",
  related: [
    { label: "Ch 1-2 · Try Again", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-2" },
    { label: "Ch 1-3 · Three Days to See", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-3" }
  ]
};
'@

# ---- chapter-1-1/let-us-discuss.js
$files["chapter-1-1\let-us-discuss.js"] = @'
export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Discuss these questions after reading Part I of the story.",
    items: [
      {
        n: 1, type: "long",
        question: "What was Jahnavi's dream? Was it important to her? Why?",
        answer: "Jahnavi's dream was to go to school, learn to read like Ettan and Meena, and find out the reasons behind the things she wonders about - why bamboo rustles, why the moon rises from behind the hills, why baby fish become frogs. It was extremely important to her: she cries when she is kept at home, she has been asking to go for years, and she pours out all her questions to the River."
      },
      {
        n: 2, type: "long",
        question: "Do you think the River can help her in fulfilling her dream? How?",
        answer: "Yes, the River can help - not by taking her to school, but by giving her courage and a plan. It listens to her patiently, reminds her that she is brave, tells her that little girls can do as much as little boys, and suggests that she slip into the school and listen. Its words, 'it's up to you', push Jahnavi to take the first step herself."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Complete the table with Jahnavi's questions in Column 1 and the River's answers in Column 2. Check your answers with the teacher.",
    items: [
      {
        n: 1, type: "table",
        question: "Fill in the missing cells of the table.",
        columns: ["Column 1 (Jahnavi)", "Column 2 (the River)"],
        rows: [
          ["...why the moon always comes from behind the hills...?", "______"],
          ["______", "... little girls can do as much as little boys."],
          ["______", "Big boats, so big that they can take hundreds of people, and they sail along the sea with lights that shine all night."],
          ["Will they come here?", "______"]
        ],
        answer: [
          ["...why the moon always comes from behind the hills...?", "It goes down towards the sea. It always takes the same way - over the mountains and down to the sea, like me!"],
          ["Can I do something? (to go to school)", "... little girls can do as much as little boys."],
          ["What are ships?", "Big boats, so big that they can take hundreds of people, and they sail along the sea with lights that shine all night."],
          ["Will they come here?", "I'm afraid not. Too large, you know."]
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-explore.js
$files["chapter-1-1\let-us-explore.js"] = @'
export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Discuss why rivers in India are considered to be sacred and most of them are referred to as female. Some rivers are referred to as male, for example, the Brahmaputra and the Sone.",
    items: [
      {
        n: 1, type: "activity",
        question: "Why are rivers in India considered sacred, and why are most of them referred to as female?",
        answer: [
          "*(Class discussion - key points.)*",
          "- **Sacred:** rivers give life. They supply water for drinking and farming, support towns and cities on their banks, and have carried trade and civilisation for thousands of years. People show their gratitude through prayers, festivals and rituals on the banks.",
          "- **Female:** like a mother, a river nourishes everyone who lives along it, so many rivers are addressed as mothers or goddesses (for example, Ganga, Yamuna, Godavari and Kaveri).",
          "- **Male:** a few rivers, such as the Brahmaputra (which means 'son of Brahma') and the Sone, are given male names in tradition and language."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Whole class activity.",
    items: [
      {
        n: 1, type: "activity",
        question: "India is a multilingual country, and many of us can speak two to three languages easily. Make a list of the languages that everyone in the class can speak and display it on a chart paper in the classroom.",
        answer: "*(Class project.)* Ask every student which languages they speak, write each language on a chart with the names of the students who speak it (for example Hindi, English, Urdu, Punjabi, Tamil, Bengali), and display the chart on the classroom wall."
      },
      {
        n: 2, type: "activity",
        question: "In which language do you enjoy reading and learning the most?",
        answer: "*(Personal answer - sample.)* I enjoy reading in Hindi the most because it is the language I speak at home, so stories feel close to me and I understand every shade of meaning."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Read the poster given below and answer the questions that follow. (Dignity means 'self-respect'.)",
    items: [
      {
        n: 1, type: "short",
        figure: { src: "images/poster.png", alt: "Poster: The Happiness of a Nation lies in the Dignity of its Daughters, showing smiling girls in a classroom" },
        question: "What are the things you can observe in the poster?",
        answer: "A group of smiling girls sitting together in a classroom, one of them writing in a notebook, and a bold slogan on a green panel with the words 'its Daughters' highlighted in yellow. The bright colours and cheerful faces give a feeling of joy."
      },
      {
        n: 2, type: "short",
        question: "Why do you think the girls look happy?",
        answer: "They are enjoying their right to study. They are learning together with friends, feel respected and valued, and are looking forward to a bright future."
      },
      {
        n: 3, type: "short",
        question: "Dignity means 'self-respect'. What is the relation between 'dignity' and 'happiness'?",
        answer: "When people are treated with respect and respect themselves, they feel confident, safe and valued - and that brings real happiness. Without dignity, even comfort or wealth cannot make a person truly happy."
      },
      {
        n: 4, type: "short",
        question: "How does a Nation prosper when its daughters are happy?",
        answer: "Happy, educated and respected daughters grow up to be confident citizens - teachers, doctors, scientists, leaders and skilled workers. When half of the population can contribute fully, families, communities and the whole country become stronger and more prosperous."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "The Government has launched many schemes for the education of the girl child. Some of them are 'Beti Bachao Beti Padhao', 'Balika Samridhi Yojana' and 'Samagra Shiksha Scheme - Kasturba Gandhi Balika Vidyalayas'.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/girls-walking.png", alt: "Schoolgirls and a boy walking to school together" },
        question: "Find out more such schemes from the internet or from your teacher and spread awareness in your neighbourhood.",
        answer: [
          "*(Research and awareness activity - starting points.)*",
          "- **Sukanya Samriddhi Yojana** - a savings scheme for the future education and marriage expenses of a girl child.",
          "- **CBSE Udaan** - free support for girls preparing for engineering and technical entrance exams.",
          "- **AICTE Pragati Scholarship** - financial help for girls studying in technical institutions.",
          "Check the official government websites for the latest details, and share what you learn with neighbours through a poster, a short talk or a street play."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-learn.js
$files["chapter-1-1\let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "You have learnt that naming words are called nouns and only proper nouns begin with a capital letter. (Clue: Has the River been given the qualities of a human being?)",
    items: [
      {
        n: 1, type: "long",
        question: "Why has the author used a capital letter for the 'River' even when it is a common noun?",
        answer: "The River is **personified** - it is given human qualities: it speaks, laughs, listens and gives advice. Because it behaves like a character with a personality of its own, the author treats it like a proper noun and writes it with a capital letter."
      }
    ]
  },
  {
    roman: "II",
    instruction: "There are a few words related to sound in the text. Pick the words from the text and write them next to the correct definition. Then fill in the blanks with suitable sound words from this exercise.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the sound word next to each definition.",
        columns: ["Definition", "Sound word"],
        rows: [
          ["1. made a high-pitched piercing sound", "______"],
          ["2. to cause liquid to strike or fall on something", "______"],
          ["3. a low continuous background noise", "______"],
          ["4. cry with loud uncontrollable gasps", "______"],
          ["5. to make a soft dry sound, like paper or leaves moving", "______"],
          ["6. took a short quick breath through the mouth due to surprise, pain or shock", "______"],
          ["7. shaking rapidly to make continuous short, sharp sounds", "______"],
          ["8. making a lot of noise", "______"],
          ["9. made a long, high cry, usually because of pain or sadness", "______"]
        ],
        answer: [
          ["1. made a high-pitched piercing sound", "shrieked"],
          ["2. to cause liquid to strike or fall on something", "splashed"],
          ["3. a low continuous background noise", "murmuring"],
          ["4. cry with loud uncontrollable gasps", "sob"],
          ["5. to make a soft dry sound, like paper or leaves moving", "rustle"],
          ["6. took a short quick breath through the mouth due to surprise, pain or shock", "gasped"],
          ["7. shaking rapidly to make continuous short, sharp sounds", "rattling"],
          ["8. making a lot of noise", "noisy"],
          ["9. made a long, high cry, usually because of pain or sadness", "wailed"]
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Fill in the blanks with suitable sound words from the exercise above.",
        wordBox: ["noisy", "splashed", "gasped", "shrieked", "murmuring", "sob", "rustle", "rattling", "wailed"],
        passage: "The classroom grew (i) ______ as the students noticed the teacher carrying the answer papers. As the teacher turned the pages with a (ii) ______, the children (iii) ______, wondering what comments awaited. Someone (iv) ______ in frustration, and the (v) ______ of the students steadily increased. Finally, when the teacher praised the students for their excellent performance, the students (vi) ______ with excitement.",
        answer: [
          "(i) **noisy**",
          "(ii) **rustle**",
          "(iii) **gasped**",
          "(iv) **sobbed** (also accepted: wailed)",
          "(v) **murmuring**",
          "(vi) **shrieked**"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The word 'catamaran' is used in the text. The word originates from the Tamil language 'kattu maram' meaning 'tied wood'. Find out the meanings of these words and the Indian language each was borrowed from. An example has been given.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "short", question: "karma (Sanskrit) - example given. What does it mean?", answer: "**Sanskrit** - action or deed; also the idea that our actions bring their results." },
          { label: "2", type: "short", question: "sahib", answer: "**Hindi-Urdu** (originally Arabic) - master or sir; a respectful way to address a man." },
          { label: "3", type: "short", question: "chutney", answer: "**Hindi** - a tasty relish made from fruit, vegetables or herbs with spices." },
          { label: "4", type: "short", question: "guru", answer: "**Sanskrit** - a teacher or guide; also an expert in a field." },
          { label: "5", type: "short", question: "verandah", answer: "**Hindi** - a roofed, open platform along the outside of a house." },
          { label: "6", type: "short", question: "jungle", answer: "**Hindi** (from Sanskrit) - a thick forest or wild land overgrown with plants." },
          { label: "7", type: "short", question: "areca", answer: "**Malayalam** - a palm tree whose nut (the areca or betel nut) is chewed with betel leaf." },
          { label: "8", type: "short", question: "palanquin", answer: "**Sanskrit** (through Pali and Hindi) - a covered seat for one person, carried on poles by bearers." }
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Chandu, the fisherman, has a catamaran that the River preferred to a ship. Given below are some boats that are used in different parts of our country.",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "i", type: "activity",
            question: "Which one would you like to travel in?",
            figure: { src: "images/boats.png", alt: "Four boats: 1 canoe, 2 catamaran, 3 coracle, 4 shikara" },
            answer: "*(Personal choice - sample.)* I would choose a **shikara**, because it has a roof and cushioned seats, and gliding slowly over a calm lake lets me enjoy the view."
          },
          {
            label: "ii", type: "activity",
            question: "Make a colourful drawing of a boat that you would like to travel in.",
            answer: "*(Drawing activity.)* Draw the hull, the deck, a sail or a canopy, and ripples on the water. Add the sun, a few birds and some trees on the bank, colour boldly, and label the parts of your boat."
          }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Solve the crossword puzzle based on words related to water transport.",
    items: [
      {
        n: 1, type: "activity",
        question: "Complete the crossword using the clues. Across: 1 a large vessel used for transporting goods or passengers by sea; 2 a small vessel for travelling on water, typically propelled by oars, sails or an engine; 3 a flat floating structure for travelling across water; 4 a boat or ship driven by steam. Down: 5 a small, light, narrow boat, pointed at both ends and moved using a paddle; 6 a boat with a powerful engine which pulls large ships into and out of port; 7 a boat with sails and sometimes an engine, used for racing or pleasure, rhymes with 'cot'.",
        answer: [
          "**Across:** 1. SHIP   2. BOAT   3. RAFT   4. STEAMER",
          "**Down:** 5. CANOE   6. TUGBOAT   7. YACHT"
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Read the highlighted words in these lines from the text: 'She goes down towards the sea ... over the mountains and down to the sea, like me!' The words towards, over and down are prepositions. Prepositions are words that indicate the relationship between nouns or pronouns and other elements in a sentence - direction, location, time or logical relationships between ideas. Fill in the blanks with the suitable prepositions given within the brackets.",
    items: [
      {
        n: 1, type: "blanks",
        question: "Fill in the blanks with suitable prepositions.",
        passage: "Jahnavi takes the River's advice and goes to school. On her first day 1. ______ (at/in/on) school, Jahnavi stood nervously 2. ______ (in/outside/above) the gate, clutching her bag close to her. The bell rang and she hurried 3. ______ (outside/through/inside) the bustling classroom. She found a seat 4. ______ (among/between/from) two friendly classmates. The teacher greeted them warmly and started the lesson 5. ______ (about/in/for) numbers. Jahnavi listened attentively, feeling excited 6. ______ (at/about/for) the new adventure ahead.",
        answer: [
          "1. **at**",
          "2. **outside**",
          "3. **inside**",
          "4. **between**",
          "5. **about**",
          "6. **about**"
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: "In 'A kingfisher swept down, its wings an arrow of blue in the sunlight', the word 'down' is an adverb. Words like on, off, up and down can function both as prepositions and as adverbs. For example: 'She ran up the stairs' (preposition) and 'She rang me up' (adverb). Remember: a preposition will always be followed by an object (noun), whereas an adverb will tell you more about the action (verb). Fill in the blanks with prepositions or adverbs as shown in the brackets.",
    items: [
      {
        n: 1,
        figure: { src: "images/kingfisher.png", alt: "A kingfisher diving into the water" },
        parts: [
          { label: "1", type: "short", question: "The cat jumped ______ the table. (preposition)", answer: "**on** (also: off, onto)" },
          { label: "2", type: "short", question: "The children played ______ until dark. (adverb)", answer: "**outside** (also: on)" },
          { label: "3", type: "short", question: "She quickly ran ______ the park. (preposition)", answer: "**through** (also: across, around, into)" },
          { label: "4", type: "short", question: "The helicopter was hovering ______ . (adverb)", answer: "**overhead** (also: above, around)" },
          { label: "5", type: "short", question: "We were just walking ______ , chatting. (adverb)", answer: "**along** (also: around, about)" },
          { label: "6", type: "short", question: "After thoroughly wiping his shoes, he stepped ______ . (adverb)", answer: "**inside** (also: in)" },
          { label: "7", type: "short", question: "She drove slowly ______ the sharp curve. (preposition)", answer: "**around** (also: through, along)" },
          { label: "8", type: "short", question: "He placed the keys ______ the mat before leaving. (preposition)", answer: "**under** (also: on)" }
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-listen.js
$files["chapter-1-1\let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 39-40).
// Part II: Speaker (ii) -> 5 is the loosest fit; no statement matches the grandmother exactly.

export const sections = [
  {
    roman: "I",
    instruction: "Read the words in the box. You will listen to five people speak about school life. As you listen, circle the words that are used by the speakers. There are two words you do not need. (Transcript for the teacher on page 39.)",
    items: [
      {
        n: 1, type: "short",
        wordBox: ["lawyer", "desks", "homemaker", "principal", "posters", "newspapers", "marriage", "advertisements", "careers", "books"],
        question: "Which of these words do the speakers use?",
        answer: [
          "**Words used:** **careers** and **homemaker** (Speaker i, the father) and **books** (Speaker iv, the student).",
          "**Not used:** lawyer, desks, posters, newspapers, marriage, advertisements.",
          "*'Principal' appears only as the label for Speaker (v); that speaker calls herself or himself the 'Head of an institution'. The transcript does not match the box exactly, so check with your teacher.*"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "You will once again listen to the five speakers. As you listen, match each statement 1-7 to each speaker (i)-(v). There are two statements that you do not need.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the statements to the speakers. Statements 2 and 6 are not needed - no speaker matches them.",
        left: [
          "Promotes active participation for all in school activities",
          "Comments on how school makes learning Mathematics joyful",
          "Believes in the power of education that leads to freedom of choice",
          "Shares that school also means companionship",
          "Understands that boys and girls have different abilities",
          "Persuades the parent to grant permission to attend school",
          "Believes that learning skills is not gender-based"
        ],
        right: [
          "Speaker (i) - Father",
          "Speaker (ii) - Grandmother",
          "Speaker (iii) - Teacher",
          "Speaker (iv) - Student",
          "Speaker (v) - Principal"
        ],
        answer: ["E", "", "A", "D", "B", "", "C"]
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-speak.js
$files["chapter-1-1\let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the sentence: 'Dear, dear! What's the matter? ... You shouldn't cry, you know. And you really shouldn't be scared, when you have been coming here to see me every day, well, almost every day.' The River spoke to Jahnavi in a 'sleepy' voice. Work in pairs and take turns to speak the same sentence in 'other' voices.",
    items: [
      {
        n: 1, type: "activity",
        wordBox: ["happy", "surprised", "angry", "scared", "sad", "worried"],
        question: "Speak the River's sentence in six different voices.",
        answer: [
          "*(Pair activity - delivery tips.)*",
          "- **Happy:** bright and bouncy, with a smile in the voice and a quick pace.",
          "- **Surprised:** a high, sudden jump in pitch on 'Dear, dear!', then slower, wide-eyed words.",
          "- **Angry:** loud, sharp and clipped, stressing words such as 'shouldn't'.",
          "- **Scared:** soft, shaky and fast, as if looking over your shoulder.",
          "- **Sad:** slow and low, letting the words drag at the end of each line.",
          "- **Worried:** hesitant, with rising tones and small pauses."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Jahnavi asks the River for advice and the River gives advice. Read the situations and work in pairs to ask for and give advice. Take turns to change your roles. Use the prompts: Asking for advice - '___ problem ___. What do you think I should do?', 'Do you think I should...?', 'What would you do in my position?', 'I'd appreciate your advice on this issue.'",
    items: [
      {
        n: 1, type: "activity",
        wordBox: ["I think you should...", "Why don't you...?", "The best thing to do is...", "If I were you, I would / wouldn't..."],
        figure: { src: "images/football-girl.png", alt: "A girl kicking a football" },
        question: "Situation (i): You wish to play football at school but it has an all-boys' team only.",
        answer: [
          "*(Sample role-play.)*",
          "**A:** I have a problem. I wish to play football at school, but the team is only for boys. What do you think I should do?",
          "**B:** I think you should talk to the sports teacher and ask if girls can try out. Why don't you also ask a few friends to join you and request a girls' team? If I were you, I would show my skills in practice - a good game can change minds."
        ]
      },
      {
        n: 2, type: "activity",
        question: "Situation (ii): You have been unable to score well in Mathematics due to nervousness during exams.",
        answer: [
          "*(Sample role-play.)*",
          "**A:** I have a problem with Mathematics exams. I get so nervous that I forget what I know. What would you do in my position?",
          "**B:** The best thing to do is practise with timed mock papers so the exam feels familiar. Why don't you take a few slow, deep breaths before you start? I think you should also begin with the questions you find easiest."
        ]
      },
      {
        n: 3, type: "activity",
        question: "Situation (iii): You really enjoy music classes but do not get enough time to practise for it.",
        answer: [
          "*(Sample role-play.)*",
          "**A:** I have a problem. I love music class, but I never find time to practise. Do you think I should give up something else?",
          "**B:** Why don't you make a small timetable and keep twenty minutes for music every day, right after school? If I were you, I would also ask the music teacher whether I could use the music room during the break."
        ]
      },
      {
        n: 4, type: "activity",
        question: "Situation (iv): You cannot see the blackboard clearly from the last bench.",
        answer: [
          "*(Sample role-play.)*",
          "**A:** I have a problem seeing the blackboard from the last bench. I'd appreciate your advice on this issue.",
          "**B:** I think you should tell your teacher and ask for a seat nearer the front. The best thing to do is also to get your eyes checked - you may need spectacles."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-think-and-reflect.js
$files["chapter-1-1\let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the extracts given below and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `"You shouldn't cry, you know," the voice went on. "And you really shouldn't be scared, when you have been coming here to see me every day, well, almost every day." She was puzzled. It was such a voice, like the river. It couldn't be the river! "Well, tell me all about it," said the River, for it was the River. "I've got to hurry to reach the sea, you know."`,
        parts: [
          {
            label: "i", type: "fill",
            question: "The tone of the River in the given extract is ______ . (assuring/sympathising)",
            answer: "**assuring** - the River comforts Jahnavi and tells her there is nothing to be afraid of."
          },
          {
            label: "ii", type: "short",
            question: "Select a phrase from the extract which shows that Jahnavi was a frequent visitor to the spot.",
            answer: `*"coming here to see me every day, well, almost every day"*`
          },
          {
            label: "iii", type: "mcq",
            question: "The use of an exclamation mark at the end of the line, 'It couldn't be the river!' expresses ______ .",
            options: ["A. excitement", "B. hesitation", "C. irritation", "D. disbelief"],
            answer: "**D. disbelief** - Jahnavi cannot believe that a river is speaking to her."
          },
          {
            label: "iv", type: "short",
            question: "Choose three qualities of the River highlighted in the extract from the words in the box: affectionate, forgiving, thoughtful, impatient, kind-hearted.",
            answer: "**affectionate, thoughtful, kind-hearted** - the River notices her tears, asks gently what is wrong and offers to listen even though it has to hurry to the sea."
          }
        ]
      },
      {
        n: 2,
        passage: `"Can I do something?" asked Jahnavi. "Well, it's up to you," said the River. "Seems to me little girls can do as much as little boys - they swim as fast as little boys. You just slip along one morning and sit there in the school and listen to what's going on, and maybe the teacher will let you stay." "I couldn't," gasped Jahnavi. "I couldn't! They'd scare me! They'd chase me out."`,
        parts: [
          {
            label: "i", type: "fill",
            question: "Complete the sentence with an appropriate reason. According to the River, there was no difference between girls and boys because ______ .",
            answer: "...little girls can do as much as little boys - for example, they **swim as fast as little boys**."
          },
          {
            label: "ii", type: "short",
            question: "Identify whether the following statement is true or false: The River encourages Jahnavi to have faith in herself and fulfil her desire to go to school.",
            answer: "**True.** The River tells her it is up to her and suggests a simple way to begin."
          },
          {
            label: "iii", type: "mcq",
            question: "When the River suggests that Jahnavi should 'slip along', it means that she should move ______ .",
            options: ["A. quickly", "B. casually", "C. quietly", "D. confidently"],
            answer: "**C. quietly** - she should go unnoticed, without drawing attention to herself."
          },
          {
            label: "iv", type: "short",
            question: "What does the repetition of the phrase 'I couldn't' tell us?",
            answer: "It shows how frightened and unsure Jahnavi is. She panics at the thought of being scared or chased out, and the repeated refusal shows her fear and her lack of confidence."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "long",
        question: "Why does the writer describe different aspects of nature in great detail at the beginning of the story? Why do you think the writer does this?",
        answer: "The writer begins with the kingfisher, the lizard, the bamboo thicket and the parrots to paint a vivid, peaceful picture of the riverbank. This detail does three things: it shows how closely Jahnavi lives with nature, it creates a calm mood in which a talking river feels natural, and it prepares us to see nature as alive and watchful, so the River's voice does not seem strange."
      },
      {
        n: 2, type: "long",
        question: "How did the River know so much about Jahnavi?",
        answer: "Jahnavi visited the riverbank almost every day. She came there to sit and think, and the River, which flows past that very spot, had watched her, heard her worries and noticed how bravely she behaved around lizards, snakes and trains."
      },
      {
        n: 3, type: "long",
        question: "Jahnavi says, \"And I'm so old now, they'll never let me go.\" What can you infer about Jahnavi and the school from this line?",
        answer: "We can infer that Jahnavi is nearly ten and believes she is already too old to start school, where the other beginners are younger. It also shows how long she has been told to wait, and how hopeless and discouraged she feels. She is convinced that the school has no place for her unless her family changes its mind."
      },
      {
        n: 4, type: "long",
        question: "Why did the River laugh when Jahnavi said she would be scared at school?",
        answer: "The River laughed because Jahnavi's fear of school seemed funny. She was not afraid of a green lizard, of the snake in the bamboo clump (which she did not even know about) or of loud trains rattling past the bridge, so a classroom could hardly be more frightening. The laugh was gentle - it was meant to cheer her up and make her see her own courage."
      },
      {
        n: 5, type: "long",
        question: "Why should Jahnavi follow the River's advice?",
        answer: "The River is wise, caring and has her interest at heart. It has travelled far and seen a lot, it knows how brave Jahnavi is, and its plan is simple and safe: go quietly, sit and listen. She has nothing to lose, and the advice teaches her an important lesson - if she wants something, she must take the first step herself."
      },
      {
        n: 6, type: "long",
        question: "How does the conversation between Jahnavi and the River make the story more appealing?",
        answer: "The conversation makes the story lively and magical. Through the River's replies we hear Jahnavi's wishes and fears in her own words, and the River's gentle humour and warmth make its advice easy to accept. The idea of a talking river keeps readers curious, and the message about education is delivered through friendship rather than preaching."
      },
      {
        n: 7, type: "long",
        question: "What is the main message that the writer intends to convey?",
        answer: "Education is every child's right, and girls are just as capable as boys. A dream also needs courage and self-belief: the first step, however frightening, must be taken by us ('it's up to you'), and kind support from family, teachers and even nature can help us along the way."
      }
    ]
  }
];
'@

# ---- chapter-1-1/let-us-write.js
$files["chapter-1-1\let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing"] };

export const sections = [
  {
    roman: "I",
    instruction: "Observing Nature. Over the next few days, pay attention to the colours, shapes, patterns and textures found in nature - plants, trees, flowers, birds and even the sky. Make detailed notes on textures, movements and how light plays with these elements, including the features that draw your attention most (the soft ripple of water, the flutter of a butterfly, the colour of a bird or flower). Then write a descriptive paragraph highlighting colours, shapes, textures and unique details. Give your paragraph a title.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/observing-nature.png", alt: "A meadow of colourful flowers with birds and trees" },
        wordBox: [
          "What do you observe? Every day, I see... / I find it very interesting that...",
          "How do you feel? Why? I like... because... / I feel... as...",
          "What is your message to everyone around you? I want to tell you that... / My advice to all is..."
        ],
        question: "Write a descriptive paragraph on what you have observed in nature. Give it a title.",
        answer: [
          "**A Morning by the Pond**",
          "",
          "Every day on my way to school, I see a small pond covered with round green leaves and a few pink lotus buds. I find it very interesting that the water is never still: tiny ripples spread outwards whenever a dragonfly touches the surface, and the morning sun turns each ripple into a thread of silver. A kingfisher sits on a bare branch, a flash of blue and orange, while the reeds sway softly in the breeze. The smooth, cool leaves and the rough, cracked bark of the old neem tree make a lovely contrast. I like this spot because it makes me feel calm and happy, as if the whole world is breathing slowly. I want to tell you that nature is full of small wonders - my advice to all is to pause for a minute each day and simply look around."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-1/summary.js
$files["chapter-1-1\summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };

export const summary = `"The Day the River Spoke" is an extract adapted from Kamala Nair's story about Jahnavi, a nearly ten-year-old girl who lives in a coastal village in India. While her brother Gopi (Ettan) and Meena go to school, Jahnavi stays at home to look after her younger brothers, because her mother has to work in the fields. Every time she asks to go, she is told "maybe later".

One day she sits by the river and cries. A sleepy, murmuring voice asks what is wrong - it is the River. Jahnavi pours out her wish to learn to read and to find out why spiders are yellow in yellow flowers, why bamboo rustles and where the moon goes. The River tells her that the moon travels over the mountains and down to the sea, just like the River itself. It then points out that Jahnavi is braver than she thinks: she is not afraid of lizards, of a snake in the bamboo or of noisy trains. Little girls can do as much as little boys, the River says, so she should slip into school, sit quietly and listen - "it's up to you".

The next day Jahnavi gathers her courage and, with little Appu asleep on her shoulder, creeps into the back row of the classroom. The teacher finds her, learns that she is Gopi's sister and promises to talk to her father. That evening he visits the house. Jahnavi's mother, who once wanted to study herself, is glad that he came, and her father agrees to let her go. Jahnavi announces that one day she will become a teacher and bring all the little girls of her village to school. The next morning she runs to tell the River, "I did it!", and the River promises to tell her about the ships that sail the sea.`;

export const moral = `Education is a right for every child, girls and boys alike. With courage and self-belief, and with the support of kind people, we can overcome fear and the barriers in our way and make our dreams come true.`;

export const quotes = [
  { text: "\"Remember - it's up to you!\"", by: "The River" },
  { text: "\"Little girls can do as much as little boys.\"", by: "The River" },
  { text: "\"I want to learn to read like Ettan and Meena.\"", by: "Jahnavi" },
  { text: "\"I was scared, but I did it!\"", by: "Jahnavi" }
];

export const mascot = { pose: "smiling" };

export const extras = {};
'@

# ---- chapter-1-1/textbook.js
$files["chapter-1-1\textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Kamala Nair";

export const cover = {
  image: "image.png",
  alt: "Jahnavi sitting alone by the river",
  caption: "Jahnavi by the river"
};

export const intro = `A guided reading of "The Day the River Spoke", an extract adapted from Kamala Nair's story. The story is explained part by part, with the difficult words from the margin listed under each part.`;

export const parts = [
  {
    heading: "A Voice by the River",
    image: "images/jahnavi-puzzled.png",
    imageAlt: "Jahnavi looking puzzled on the riverbank",
    explain: `Jahnavi sits alone on the riverbank, crying. A kingfisher dives past and a green lizard slides down to bask in the sun, but there is no one near her. Suddenly a sleepy, murmuring voice asks what is wrong and tells her that she should not cry or be afraid, because she has been visiting this spot almost every day. Jahnavi is startled and looks around - it cannot be the lizard, the kingfisher or the noisy parrots. To her surprise, the voice belongs to the River itself.`,
    glossary: [
      { word: "splashed", meaning: "fell in drops, making a sound" },
      { word: "slithered", meaning: "moved by sliding from side to side" },
      { word: "murmuring", meaning: "speaking in a low voice" },
      { word: "startled", meaning: "surprised" },
      { word: "thicket", meaning: "a dense group of bushes and trees" },
      { word: "shrieked", meaning: "made a high-pitched sound" }
    ]
  },
  {
    heading: "Jahnavi's Wish to Learn",
    image: "images/jahnavi-sobbing.png",
    imageAlt: "Jahnavi sobbing beside the river",
    explain: `The River is in a hurry to reach the sea, but it asks Jahnavi to tell it everything. She explains that she is not allowed to go to school like her brother Gopi (whom she calls Ettan) and Meena. Each time she asked, her mother said she was too small. When baby Ramu was born she had to mind the little ones while her mother worked in the fields. Now she is nearly ten and fears that she is too old - and too scared - to go. She longs to read and to find out why spiders look yellow on yellow flowers, why bamboo rustles, why the moon always rises from behind the hills and why baby fish turn into frogs. The River laughs at so many whys and tells her, as a secret, that the moon travels over the mountains and down towards the sea, just as the River does.`,
    glossary: [
      { word: "rustle", meaning: "light sound made by leaves rubbing against each other" },
      { word: "conspiratorially", meaning: "secretly" }
    ]
  },
  {
    heading: "The River's Advice",
    image: "images/river.png",
    imageAlt: "The river winding through green fields",
    explain: `Jahnavi points out that even little Ramu goes to school. The River wishes the school were by the sea so that it could carry her there, but it says there is one thing she can do. Little girls can do as much as little boys, so she should slip along one morning, sit quietly in the school and listen - perhaps the teacher will let her stay. Jahnavi is frightened and says she cannot. The River laughs: she is not afraid of the green lizard, the snake in the bamboo clump or the trains rattling past the bridge. It then describes ships - huge boats that carry hundreds of people and shine with lights all night - and says that Chandu, the fisherman, may take her to see one someday. When Jahnavi wails that no one will let her, the River replies that she must try going to school first, because "it's up to you."`,
    glossary: [
      { word: "clump", meaning: "a small group of trees growing together" },
      { word: "rattling", meaning: "noise made by shaking things" },
      { word: "catamaran", meaning: "a kind of boat" },
      { word: "wailed", meaning: "(here) complained in a loud voice" }
    ]
  },
  {
    heading: "Into the Classroom",
    image: "images/classroom.png",
    imageAlt: "Jahnavi at the classroom door with Appu on her shoulder",
    explain: `The next day Jahnavi gathers her courage and hurries to the school with little Appu on her shoulder. She stands at the door while the teacher reads a lesson about Ashoka, a prince who became a great king. Appu falls asleep, and Jahnavi creeps closer until she is sitting on the floor in the back row. The teacher notices the new face and asks her name. The boys explain that she is Gopi's sister. The teacher says that if she truly wants to come, they will talk to her father and find a way. The next evening the teacher visits. Her father scratches his cheek the way he does when he is worried, but her mother tells Jahnavi that girls should learn as much as they want. She herself once wished to study but was refused, and she is glad the teacher came.`,
    glossary: []
  },
  {
    heading: "I Did It!",
    image: "images/jahnavi-school.png",
    imageAlt: "Jahnavi walking happily to school",
    explain: `Jahnavi promises her mother that when she grows up she will become a teacher, go from house to house and invite all the little girls of the village to her school. The next morning she runs down the path between the fields to tell the River the good news: she was scared, but she did it, and she is going to school. She plans to learn to write her name, do sums and find out why the little fish in the rice fields turn into frogs. The River chuckles sleepily and invites her to come again, promising to tell her all about the ships that sail the sea.`,
    glossary: []
  }
];

export const characters = [
  { name: "Jahnavi", traits: ["curious", "brave", "responsible", "determined", "shy at first"] },
  { name: "The River", traits: ["wise", "affectionate", "humorous", "encouraging"] },
  { name: "Jahnavi's mother", traits: ["loving", "supportive", "once wished to study herself"] },
  { name: "Jahnavi's father", traits: ["worried at first", "agrees after the teacher's visit"] },
  { name: "The teacher", traits: ["kind", "understanding", "finds a way to bring Jahnavi into school"] }
];

export const themes = [
  "Education is every child's right, and girls are just as capable as boys.",
  "Courage and self-belief: the first step has to be taken by us - 'it's up to you'.",
  "Nature as a friend and guide: the River is personified and becomes a wise mentor.",
  "Supportive people (a teacher, a mother) can change a child's future.",
  "Curiosity - asking 'why' - is the beginning of learning."
];
'@

# ---- chapter-1-2/animations/story.js
$files["chapter-1-2\animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated retelling of King Bruce and the spider." };
'@

# ---- chapter-1-2/before-we-read.js
$files["chapter-1-2\before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Think and share with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Who inspires you to do your best?",
        answer: "*(Personal answer - sample.)* My elder sister inspires me. She never gives up on a problem, even when she gets it wrong several times, and she always says, 'One more try.' Watching her makes me want to do my best too."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Work in pairs, identify what you see in the pictures given below. What can we learn from them? Share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "table",
        figure: { src: "images/learning-pictures.png", alt: "Six pictures: 1 a beehive with bees, 2 a spider on its web, 3 geese flying together, 4 a bird at a hanging nest, 5 a line of ants, 6 an apple tree with fruit" },
        question: "Identify each picture and write one thing we can learn from it.",
        columns: ["Picture", "What we can learn"],
        rows: [
          ["1", "______"], ["2", "______"], ["3", "______"], ["4", "______"], ["5", "______"], ["6", "______"]
        ],
        answer: [
          ["1. A beehive with bees", "Teamwork and hard work - thousands of bees build the hive and gather honey together."],
          ["2. A spider on its web", "Patience and persistence - a spider mends and rebuilds its web again and again."],
          ["3. Geese flying together", "Cooperation and perseverance - they fly long distances in a group and take turns to lead."],
          ["4. A bird at a hanging nest", "Effort and planning - a nest is built twig by twig with great care."],
          ["5. A line of ants", "Discipline and teamwork - ants carry food together and never give up."],
          ["6. A fruit tree", "Patience - a tree grows slowly over years before it gives fruit."]
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/discover-to-interest.js
$files["chapter-1-2\discover-to-interest.js"] = @'
export const meta = { title: "Discover to Interest", order: 9, tags: ["Links", "Further reading"] };

export const sections = [
  {
    roman: "I",
    instruction: "Explore related topics after reading the chapter.",
    items: [
      {
        n: 1, type: "activity",
        question: "What can I look up after reading?",
        answer: [
          "- **Robert the Bruce** - the real King of Scots, and the legend of the spider.",
          "- **Eliza Cook** - the English poet who wrote 'Try Again' ('King Bruce and the Spider').",
          "- **Arachnids** - how spiders differ from insects.",
          "- **How spiders spin silk** - and why spider silk is so strong.",
          "- **Perseverance in real life** - stories of people who kept trying until they succeeded.",
          "- **Folk songs about nature** in your own language."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/exam-notes.js
$files["chapter-1-2\exam-notes.js"] = @'
export const meta = { title: "Exam Notes", status: "published", tags: ["Revision"] };

export const blocks = [
  {
    type: "keypoints",
    title: "Poem at a glance",
    items: [
      "Written by Eliza Cook; a narrative poem of fourteen stanzas in an ABAB rhyme scheme.",
      "King Bruce of Scotland is in despair because he has failed repeatedly to do a great deed for his people.",
      "A spider climbing a thread teaches him perseverance - it falls nine times but succeeds on the next climb.",
      "Inspired, King Bruce tries again and finally succeeds.",
      "Central idea: never give up; failure is a stepping stone to success."
    ]
  },
  {
    type: "keypoints",
    title: "Poetic devices",
    items: [
      "Narrative style - the poem tells a story with a beginning, middle and end.",
      "Metaphor - the spider's struggle stands for the King's struggle.",
      "Alliteration - cling and crawl; slippery sprawl; Bravo, bravo.",
      "Repetition - 'tried and tried', 'steadily, steadily', 'up, up' show effort and persistence.",
      "Interjection - 'Bravo!', 'Ah me!' show sudden feeling.",
      "'Twas and 'tis - short forms used to keep the rhythm."
    ]
  },
  {
    type: "grammar",
    title: "Simile and metaphor",
    rule: "A **simile** compares two unlike things using *like* or *as*. A **metaphor** says that one thing *is* another, without *like* or *as*.",
    examples: [
      "Simile: He ran as fast as a cheetah.",
      "Metaphor: The world is a stage.",
      "Simile to metaphor: Her thoughts were like butterflies. -> Her thoughts were butterflies."
    ]
  },
  {
    type: "vocab",
    items: [
      { word: "monarch", meaning: "a king or queen", use: "He was monarch and wore a crown." },
      { word: "despair", meaning: "loss of all hope", use: "The King lay in low despair." },
      { word: "pondered", meaning: "thought carefully", use: "He pondered what to do." },
      { word: "endeavour", meaning: "a serious effort", use: "Please make every endeavour to arrive on time." },
      { word: "toil", meaning: "work very hard", use: "Ants toil tirelessly." },
      { word: "strive", meaning: "try very hard to achieve something", use: "We strive to do our best." },
      { word: "braced", meaning: "prepared for something difficult", use: "The sailors braced themselves against the wind." }
    ]
  },
  {
    type: "likely",
    items: [
      { marks: 1, q: "How many attempts did the spider make before it finally succeeded?", a: "Nine brave attempts were counted before the final successful climb." },
      {
        marks: 2,
        q: "Why was King Bruce sad at the beginning of the poem?",
        a: "He had tried again and again to do a great deed to make his people glad, but could not succeed, so his heart was sinking and he thought of giving up."
      },
      {
        marks: 3,
        q: "How did the spider inspire King Bruce?",
        a: "The spider fell many times but never complained and kept climbing until it reached its web. The King realised that if a small spider could succeed through effort, he too could, and so he decided to try again."
      },
      {
        marks: 5,
        q: "Describe how King Bruce's attitude changes during the poem.",
        a: "At first the King is sad, discouraged and ready to give up. As he watches the spider, he first thinks it foolish, then becomes anxious and hopeful. When the spider succeeds he is inspired and cries 'Bravo!'. At the end he braces his mind and tries again, and this time he succeeds. The change shows the power of perseverance and of learning from small things."
      }
    ]
  }
];
'@

# ---- chapter-1-2/glossary.js
$files["chapter-1-2\glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };

export const terms = [
  { term: "monarch", meaning: "a king or queen" },
  { term: "despair", meaning: "a feeling of having lost all hope" },
  { term: "grieved", meaning: "deeply sad" },
  { term: "pondered", meaning: "thought about something carefully" },
  { term: "clue", meaning: "(old use) a thread" },
  { term: "divine", meaning: "(here) to guess or work out" },
  { term: "endeavour", meaning: "a serious effort; an attempt to do something new or difficult" },
  { term: "mounted", meaning: "climbed up" },
  { term: "strive", meaning: "to try very hard to achieve something" },
  { term: "toil", meaning: "to work very hard and/or for a long time" },
  { term: "braced", meaning: "prepared (himself) for something difficult" },
  { term: "cot", meaning: "(here) a small home" },
  { term: "narrative", meaning: "a story or an account of events" },
  { term: "metaphor", meaning: "a figure of speech that says one thing is another to show a likeness, without using 'like' or 'as'" },
  { term: "simile", meaning: "a figure of speech that compares two things using 'like' or 'as'" },
  { term: "alliteration", meaning: "repetition of the same consonant sound at the beginning of closely connected words" }
];
'@

# ---- chapter-1-2/index.js
$files["chapter-1-2\index.js"] = @'
export const chapter = {
  title: "Try Again",
  abs: 2,
  pos: 2,
  unit: "unit-1",
  author: "Eliza Cook",
  related: [
    { label: "Ch 1-1 · The Day the River Spoke", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-1" },
    { label: "Ch 1-3 · Three Days to See", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-3" }
  ]
};
'@

# ---- chapter-1-2/let-us-discuss.js
$files["chapter-1-2\let-us-discuss.js"] = @'
export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem", "Figures of speech"] };

export const sections = [
  {
    roman: "I",
    instruction: "Complete the summary of the poem by filling in the blanks with suitable words from the box. Share your answers with the teacher.",
    items: [
      {
        n: 1, type: "blanks",
        wordBox: ["tried", "mounted", "despair", "attempts", "great", "conquered", "low", "strive"],
        question: "Fill in the blanks of the summary.",
        passage: "The poem, written in a narrative style, tells the story of King Bruce of Scotland, who was feeling 1. ______ after failing multiple times to achieve something 2. ______ for his people. In a moment of 3. ______, he observed a spider trying to reach its web high above. The spider 4. ______ every time it fell after getting close to its goal. It made nine 5. ______ and finally succeeded. The king said that the spider had 6. ______ and so would he. Inspired by the spider's determination, King Bruce decided to 7. ______. When he 8. ______ this time, he ultimately succeeded.",
        answer: [
          "1. **low**",
          "2. **great**",
          "3. **despair**",
          "4. **mounted**",
          "5. **attempts**",
          "6. **conquered**",
          "7. **strive**",
          "8. **tried**"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Complete the following sentences suitably.",
    items: [
      {
        n: 1, type: "fill",
        question: "We can say that the poet uses the narrative style because ______ .",
        answer: "...the poem **tells a story** - it has a character (King Bruce), a problem (his repeated failure), a sequence of events (the spider's nine attempts) and an ending (the King tries again and succeeds)."
      },
      {
        n: 2, type: "fill",
        question: "The central idea of the poem is ______ .",
        answer: "...**perseverance**: we should never give up, because failure is a step towards success and repeated effort finally brings victory."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Pick three examples from the poem for each of the following.",
    items: [
      {
        n: 1, type: "short",
        question: "Lines that describe the spider's efforts",
        answer: [
          "- *'cling and crawl / Straight up with strong endeavour'* - it climbs with great effort.",
          "- *'Nine brave attempts were counted'* - it tries nine times.",
          "- *'Steadily, steadily, inch by inch'* - it climbs slowly and patiently.",
          "- *'a bold little run at the very last pinch'* - its final push gets it home."
        ]
      },
      {
        n: 2, type: "short",
        question: "Alliteration (the repetition of the same consonant sounds at the beginning of closely connected words)",
        answer: [
          "- **cling and crawl** (c)",
          "- **slippery sprawl** (s)",
          "- **Bravo, bravo** (b)",
          "- also: **tried and tried** (t), **Bruce ... braced** (b)"
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Why does the poet repeat the following words or phrases in the poem? tried and tried; steadily, steadily; up, up",
    items: [
      {
        n: 1, type: "long",
        question: "Why does the poet repeat 'tried and tried', 'steadily, steadily' and 'up, up'?",
        answer: [
          "- **tried and tried** - to stress how many times King Bruce had failed and kept trying; it shows his long struggle.",
          "- **steadily, steadily** - to show the spider's slow, patient and continuous climb, one small step at a time.",
          "- **up, up** - to show the spider's quick, determined upward movement; we can almost see it climbing.",
          "Repetition also adds rhythm and drives home the poem's message of perseverance."
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Fill in the blanks by choosing the correct answer from within the brackets.",
    items: [
      {
        n: 1,
        parts: [
          { label: "1", type: "fill", question: "The rhyme scheme of the poem is ______ . (AABB/ABBA/ABAB)", answer: "**ABAB** - in each stanza the first and third lines rhyme, and so do the second and fourth." },
          { label: "2", type: "fill", question: "'Bravo' is an example of ______ . (conjunction/interjection/adjective)", answer: "**interjection** - a word that shows sudden feeling." },
          { label: "3", type: "fill", question: "The poet uses 'twas and 'tis for the sake of ______ . (rhythm/rhyme/contraction)", answer: "**rhythm** - the short forms keep the beat of the lines even." }
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "The spider's climbing is compared to King Bruce's own struggles. This poetic device is called metaphor. A metaphor is a figure of speech that involves an implied comparison between two unlike things without using 'like', 'as' or 'as...as'. It suggests that one thing is another.",
    items: [
      {
        n: 1, type: "table",
        question: "Read the sentences and identify metaphors and similes. Write M for metaphor and S for simile.",
        columns: ["Sentence", "M or S"],
        rows: [
          ["(i) He ran as fast as a cheetah.", "______"],
          ["(ii) The world is a stage.", "______"],
          ["(iii) The night was as dark as coal.", "______"],
          ["(iv) He sang like an angel.", "______"],
          ["(v) Her voice was music to his ears.", "______"],
          ["(vi) The classroom was a zoo.", "______"],
          ["(vii) The baby slept like a log.", "______"],
          ["(viii) Her smile was as bright as the sun.", "______"],
          ["(ix) The lake was a mirror, reflecting the sky.", "______"]
        ],
        answer: [
          ["(i) He ran as fast as a cheetah.", "S"],
          ["(ii) The world is a stage.", "M"],
          ["(iii) The night was as dark as coal.", "S"],
          ["(iv) He sang like an angel.", "S"],
          ["(v) Her voice was music to his ears.", "M"],
          ["(vi) The classroom was a zoo.", "M"],
          ["(vii) The baby slept like a log.", "S"],
          ["(viii) Her smile was as bright as the sun.", "S"],
          ["(ix) The lake was a mirror, reflecting the sky.", "M"]
        ]
      },
      {
        n: 2, type: "activity",
        figure: { src: "images/singer-boy.png", alt: "A boy singing into a microphone" },
        question: "Transform the similes to metaphors and the metaphors to similes. Two examples have been given: (i) Knowledge spreads like the branches of a mighty tree -> Knowledge is a spreading branch of a mighty tree. (ii) His courage was a beacon, guiding us through the storm -> His courage was like a beacon guiding us through the storm.",
        answer: [
          "(iii) The book was a treasure chest, filled with endless adventures. -> **The book was like a treasure chest, filled with endless adventures.**",
          "(iv) Her laughter was a melody that brightened the darkest days. -> **Her laughter was like a melody that brightened the darkest days.**",
          "(v) The mountain stood as a guard, watching over the valley below. -> **The mountain was a guard, watching over the valley below.**",
          "(vi) The night was like a velvet cloak, wrapping the world in mystery. -> **The night was a velvet cloak, wrapping the world in mystery.**",
          "(vii) Her thoughts were like butterflies in a summer meadow. -> **Her thoughts were butterflies in a summer meadow.**"
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-explore.js
$files["chapter-1-2\let-us-explore.js"] = @'
export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Science"] };

export const sections = [
  {
    roman: "I",
    instruction: "Collect folk songs in your own language that connect us with nature and compile them as a class project.",
    items: [
      {
        n: 1, type: "activity",
        question: "Collect folk songs about nature in your language and compile them as a class project.",
        answer: "*(Class project - how to do it.)* Ask grandparents, neighbours and elders for songs about rain, rivers, harvest, birds and seasons. Write each song with its title and the name of the person who sang it, add a short meaning in simple English or Hindi, draw a small picture for each song, and bind the pages into a class booklet."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Did you know that spiders are not insects? They belong to a group called the arachnids. Observe a spider and an ant from a distance and note down the differences between them. Share your observations with your classmates.",
    items: [
      {
        n: 1, type: "activity",
        question: "Note down the differences between a spider and an ant.",
        answer: [
          "*(Observation activity - sample findings.)*",
          "| Feature | Spider | Ant |",
          "|---|---|---|",
          "| Group | Arachnid | Insect |",
          "| Legs | 8 | 6 |",
          "| Body parts | 2 (head and chest joined, and abdomen) | 3 (head, thorax, abdomen) |",
          "| Antennae | None | A pair |",
          "| Wings | None | Most worker ants have none; some ants have wings at times |",
          "| Home | Spins a web of silk (many kinds) | Lives in a colony in an anthill |"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Let us learn how to weave a spider web. 1. Take three sticks (each about eight inches long) and a roll of old wool. 2. Tie the sticks together in the centre with the wool (Fig. 1). 3. Start weaving the web by putting a loop around every stick (Figs. 2 and 3). 4. Complete the web and tie the thread in a knot on the stick where the web is complete (Fig. 4). Now, decorate it with words and phrases you learnt about the spider in the poem or anything else that you like.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/web-steps.png", alt: "Four figures showing how to tie three sticks and weave wool into a web" },
        question: "Weave a spider web using sticks and wool.",
        answer: "*(Craft activity.)* Follow the four figures: tie the sticks at the centre, loop the wool around each stick going round and round, and knot the end. Decorate the web with cut-out words from the poem such as 'cling', 'crawl', 'steadily', 'brave' and 'try again'."
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-learn.js
$files["chapter-1-2\let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Write the opposites of the following words taken from the poem.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the opposite of each word.",
        columns: ["Word", "Opposite"],
        rows: [["1. up", "______"], ["2. fast", "______"], ["3. glad", "______"], ["4. win", "______"], ["5. succeed", "______"]],
        answer: [["1. up", "down"], ["2. fast", "slow"], ["3. glad", "sad"], ["4. win", "lose"], ["5. succeed", "fail"]]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Choose the correct meaning of the underlined words in the following sentences from the box. Frame sentences of your own for these words.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["1. work very hard and/or for a long time", "2. prepared themselves for something difficult", "3. an attempt to do something new or difficult", "4. to try very hard to achieve something"],
        question: "Match the underlined word to its meaning, then write your own sentence.",
        columns: ["Sentence", "Meaning (1-4)"],
        rows: [
          ["(i) Please make every endeavour to arrive on time.", "______"],
          ["(ii) Ants toil tirelessly to save food for rainy season.", "______"],
          ["(iii) We encourage all students to strive to do their best.", "______"],
          ["(iv) The sailors braced themselves against the strong wind.", "______"]
        ],
        answer: [
          ["(i) Please make every endeavour to arrive on time.", "3 - an attempt to do something new or difficult"],
          ["(ii) Ants toil tirelessly to save food for rainy season.", "1 - work very hard and/or for a long time"],
          ["(iii) We encourage all students to strive to do their best.", "4 - to try very hard to achieve something"],
          ["(iv) The sailors braced themselves against the strong wind.", "2 - prepared themselves for something difficult"]
        ]
      },
      {
        n: 2, type: "activity",
        question: "Frame sentences of your own using endeavour, toil, strive and braced.",
        answer: [
          "*(Sample sentences.)*",
          "- Our team made a great **endeavour** to clean the park.",
          "- Farmers **toil** in the fields from dawn to dusk.",
          "- I will **strive** to improve my handwriting.",
          "- The players **braced** themselves for the big match."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The poem uses words that show distance. For example: a long way up, inch by inch, higher and higher, half-yard higher. Classify the words or phrases in the box based on the distance (far or near). You may take the help of a dictionary.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["proximity", "middle of nowhere", "vicinity", "adjacent", "remoteness", "yonder", "afar", "a stone's throw", "light year", "hairline", "farther"],
        question: "Write each word or phrase under Far or Near.",
        columns: ["Far", "Near"],
        rows: [["______", "______"]],
        answer: [[
          "remoteness, middle of nowhere, yonder, afar, light year, farther",
          "proximity, vicinity, adjacent, a stone's throw, hairline"
        ]]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the following line from the poem: 'Twas a delicate thread it had to tread. Now repeat the line five to six times. Are you able to say it clearly? Create more tongue twisters of your own.",
    items: [
      {
        n: 1, type: "activity",
        question: "Say the line five to six times and create tongue twisters of your own.",
        answer: [
          "*(Speaking activity - samples.)*",
          "- Silly spiders spin silken strings swiftly.",
          "- Brave Bruce bravely braced his brain for another brave try.",
          "- Tiny tigers tried to tie ten tight ties.",
          "Tip: start slowly, say each word clearly, and then speed up."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-listen.js
$files["chapter-1-2\let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook page 40).

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to a story about an ant. Read the questions given below and, before you listen, guess the answers to these questions. (Transcript for the teacher on page 40.) Then listen to the story once again and check whether your answers are correct.",
    items: [
      {
        n: 1, type: "mcq",
        question: "What was the ant known for?",
        options: ["(i) determination", "(ii) strength", "(iii) wisdom"],
        answer: "**(i) determination** - she was known for her determination and never-give-up attitude."
      },
      {
        n: 2, type: "mcq",
        question: "Why was the ant unable to take the roti home?",
        options: ["(i) It was stuck under a rock.", "(ii) It was too heavy to carry.", "(iii) It was pulled by other ants."],
        answer: "**(ii) It was too heavy to carry** - the crumb was too big for her to carry alone."
      },
      {
        n: 3, type: "mcq",
        question: "What was the bird doing?",
        options: ["(i) playing with the ant", "(ii) searching for food", "(iii) picking up leaves"],
        answer: "**(iii) picking up leaves** - the bird was trying to build a nest and kept picking up twigs and leaves."
      },
      {
        n: 4, type: "mcq",
        question: "How did the bird make the ant feel?",
        options: ["(i) proud", "(ii) inspired", "(iii) relaxed"],
        answer: "**(ii) inspired** - she thought, 'If that bird can keep trying and succeed, then I shouldn't give up either.'"
      },
      {
        n: 5, type: "mcq",
        question: "How did the fellow ants help?",
        options: ["(i) by advising the ant continuously", "(ii) by standing still near the ant", "(iii) by joining the ant in her efforts"],
        answer: "**(iii) by joining the ant in her efforts** - they formed a chain and lifted the crumb together."
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-speak.js
$files["chapter-1-2\let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Narrate a personal experience about a time when you were motivated by someone or something to carry on and never give up. Your perseverance helped you. Use the sentence prompts (introduction, the challenge, feeling disheartened, source of motivation, taking action, the result, reflection) as a guide.",
    items: [
      {
        n: 1, type: "activity",
        wordBox: [
          "I remember a time when I felt like giving up. It was when...",
          "The challenge I faced was...",
          "At first, I felt discouraged...",
          "But then, I saw/heard/read about...",
          "After feeling inspired, I decided to...",
          "In the end, I was able to...",
          "This experience taught me that..."
        ],
        question: "Narrate a personal experience about perseverance.",
        answer: [
          "*(Sample narration.)*",
          "I remember a time when I felt like giving up. It was when I was learning to ride a bicycle. The challenge I faced was keeping my balance, and I fell down five times in one afternoon. At first, I felt discouraged and thought I would never learn. But then I remembered the poem 'Try Again' and how the spider kept climbing after every fall. After feeling inspired, I decided to try once more, and my brother held the seat until I found my balance. In the end, I was able to ride all the way to the gate. I felt proud because I had not quit. This experience taught me that perseverance is the key to success."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-think-and-reflect.js
$files["chapter-1-2\let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the extracts and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `*Extract (stanza 3 and the first two lines of stanza 4):* King Bruce flings himself down in low despair, as grieved as a man could be. After a while he ponders and says he will give it all up. Just then a spider drops down on its silken, filmy thread.`,
        parts: [
          {
            label: "i", type: "short",
            question: "Select the phrase which shows the physical expression of the King's emotional state.",
            answer: "**'flung himself down'** - throwing himself down on the ground shows how heavy and hopeless he feels."
          },
          {
            label: "ii", type: "short",
            question: "Why does the poet use the word 'low' before despair?",
            answer: "'Low' suggests that the King's spirits have sunk to the bottom. It shows how deep his sadness and hopelessness are, and it matches his posture as he lies down."
          },
          {
            label: "iii", type: "mcq",
            question: "In the line, 'And after a while he pondered there', the word 'pondered' means ______ .",
            options: ["A. paused", "B. thought", "C. noticed", "D. rested"],
            answer: "**B. thought** - he thought deeply about what to do."
          },
          {
            label: "iv", type: "fill",
            question: "The phrase 'silken filmy clue' creates an image of something that is ______ . (long and light/very delicate and soft)",
            answer: "**very delicate and soft** - a fine silk thread like a thin film."
          }
        ]
      },
      {
        n: 2,
        passage: `*Extract (stanza 10 and 11):* The King says the foolish thing will surely stop climbing since it toils so hard and tumbles every time. But up the insect goes once more. It is an anxious minute - he is only a foot from his web, and the King wonders whether he will lose or win.`,
        parts: [
          {
            label: "i", type: "mcq",
            question: "Choose the correct option to complete the analogy. toil : hard :: ______ : ______",
            options: ["A. roll : tumble", "B. tumble : circle", "C. compress : roll", "D. jump : tumble"],
            answer: "**A. roll : tumble** - to toil is to work in a hard way; in the same way, tumbling is a rough, uncontrolled kind of rolling."
          },
          {
            label: "ii", type: "short",
            question: "List any two characteristics of the spider highlighted in the line, 'But up the insect went once more'.",
            answer: "**Persistence (determination)** and **courage** - it does not give up even after many falls."
          },
          {
            label: "iii", type: "mcq",
            question: "The expression 'Ah me!' in the extract indicates a sense of ______ .",
            options: ["A. happiness", "B. stress", "C. relief", "D. loneliness"],
            answer: "**B. stress** - the speaker (and the King) is anxious about whether the spider will make it."
          },
          {
            label: "iv", type: "fill",
            question: "Readers are able to relate to this extract because ______ .",
            answer: "...everyone has tried something difficult, failed several times and felt anxious about the result, so we share the suspense and hope of the spider."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "long",
        question: "How does the first stanza help in setting the mood of the poem?",
        answer: "The first stanza shows a lonely king who has a crown but a sinking heart. Words like 'flung himself down', 'lonely' and 'sink' set a gloomy, sad and hopeless mood. This low mood at the start makes the happy, hopeful ending more powerful."
      },
      {
        n: 2, type: "long",
        question: "Describe how King Bruce's attitude changes from the beginning towards the end of the poem.",
        answer: "At the beginning King Bruce is sad, discouraged and ready to give up. While watching the spider he first doubts it ('that foolish thing'), then becomes anxious and hopeful ('will he lose or win it?'). When the spider succeeds, he is inspired and cries 'Bravo!'. By the end he is determined, braces his mind and tries again - and succeeds."
      },
      {
        n: 3, type: "long",
        question: "The poet describes every action of the spider in great detail. What does this tell us about his attitude towards the spider?",
        answer: "It shows that the poet admires the spider and takes it seriously. He watches each climb, fall and rise with sympathy and respect, and calls its attempts 'brave'. To him the tiny spider is a hero and a teacher whose struggle deserves our attention."
      },
      {
        n: 4, type: "long",
        question: "How does the spider inspire us to overcome despair and not give up?",
        answer: "The spider falls nine times but never complains and never stops. It rests, steadies itself and climbs again until it reaches its web. Seeing this, the King feels ashamed of giving up. In the same way, the spider teaches us that despair is not the end - we should keep trying patiently and bravely."
      },
      {
        n: 5, type: "long",
        question: "The poem teaches us that failures are stepping stones to success. Explain.",
        answer: "Each time the spider fell, it gained experience and tried again with more care, and its ninth fall was followed by success. King Bruce's earlier failures also became the lessons that helped him succeed in the end. Failure shows us what does not work and builds our strength, so those who keep trying turn failures into steps towards success."
      },
      {
        n: 6, type: "long",
        question: "The spider's journey tells us that anyone can be a source of inspiration in our lives. Elaborate.",
        answer: "A tiny spider, not a wise teacher or a great person, inspired a king. This shows that lessons can come from anyone or anything - a small insect, a friend, a younger child, a neighbour or an ordinary worker. If we observe carefully and keep an open mind, we can learn courage, patience and hard work from the people and nature around us."
      }
    ]
  }
];
'@

# ---- chapter-1-2/let-us-write.js
$files["chapter-1-2\let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing", "Letter"] };

export const sections = [
  {
    roman: "I",
    instruction: "King Bruce was inspired by the spider that kept on trying till it was successful. Think about the steps you can take to overcome a difficult situation and write them down. Now write a letter to your cousin on how you plan to overcome any difficult situation. Also advise not to quit and persevere. Use transition words like 'To begin with...', 'Next...', 'After that...', 'Then...', 'Finally...' to share the steps of your plan.",
    items: [
      {
        n: 1, type: "activity",
        question: "Write an informal letter to your cousin on how you plan to overcome a difficult situation.",
        answer: [
          "*(Sample letter.)*",
          "20, Rajendra Nagar  ",
          "Jeevanpur  ",
          "23 August 20XX",
          "",
          "Dear Monika,",
          "",
          "Thank you for your letter asking me about how I deal with difficult situations. I am happy to share my plan with you.",
          "",
          "To begin with, I stay calm and write down exactly what the problem is. Next, I break it into small steps so that it does not look too big. After that, I ask a teacher or a family member for help wherever I am stuck. Then I practise a little every day instead of waiting for a perfect moment. Finally, I check what I have learnt from each mistake and try again.",
          "",
          "Please do not quit when things go wrong. Remember how the spider climbed again after nine falls - the tenth try brought it home. I am sure you will also succeed if you keep trying.",
          "",
          "Write to me soon and tell me how you are doing.",
          "",
          "Yours affectionately,  ",
          "Deepa"
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-2/summary.js
$files["chapter-1-2\summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };

export const summary = `"Try Again" by Eliza Cook is a narrative poem about King Bruce of Scotland. The King is sad and has lost hope because he has failed again and again to do a great deed for his people. As he lies in despair and thinks of giving up, he sees a spider climbing a thin silk thread towards its web on the ceiling.

The spider falls many times - nine in all - but each time it steadies itself and climbs again, without complaining. The King first thinks the spider is foolish, but then he waits anxiously to see if it will win. At last, with a bold little run, the spider reaches its home.

King Bruce cries "Bravo!", saying that honour belongs to those who try and that if the spider can conquer, so can he. He braces his mind, tries once more, and this time he does not fail.`;

export const moral = `Never give up. Failures are stepping stones to success, and a little patience and perseverance can turn defeat into victory - even a tiny spider can teach us this.`;

export const quotes = [
  { text: "\"All honour to those who try.\"", by: "King Bruce" },
  { text: "\"He conquered, and why shouldn't I?\"", by: "King Bruce" }
];

export const mascot = { pose: "smiling" };

export const extras = {
  "Figures of speech": [
    { label: "Metaphor:", text: "the spider's climb stands for King Bruce's own struggle." },
    { label: "Alliteration:", text: "cling and crawl; slippery sprawl; Bravo, bravo." },
    { label: "Repetition:", text: "tried and tried; steadily, steadily; up, up." },
    { label: "Interjection:", text: "Bravo, bravo!; Ah me!" }
  ]
};
'@

# ---- chapter-1-2/textbook.js
$files["chapter-1-2\textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Eliza Cook";

export const cover = {
  image: "image.png",
  alt: "King Bruce sitting on his throne, thinking, while a spider hangs from the ceiling",
  caption: "King Bruce and the spider"
};

export const intro = `A guided reading of the poem "Try Again" by Eliza Cook. The poem has fourteen stanzas and tells the old story of King Bruce of Scotland and a spider. It is explained here in the order of the stanzas, in simple words.`;

export const parts = [
  {
    heading: "A King in Despair (stanzas 1-3)",
    image: "images/king-bruce.png",
    imageAlt: "King Bruce resting his chin on his hand",
    explain: `King Bruce throws himself down alone to think. He is a monarch and wears a crown, but his heart is sinking. He has been trying to do a great deed to make his people glad, and however often he tries, he cannot succeed. He feels so low and so grieved that he finally says he will give it all up.`,
    glossary: [
      { word: "monarch", meaning: "a king or queen" },
      { word: "despair", meaning: "a feeling of having lost all hope" },
      { word: "grieved", meaning: "deeply sad" },
      { word: "pondered", meaning: "thought about something carefully" }
    ]
  },
  {
    heading: "The Spider Drops Down (stanzas 4-5)",
    image: "images/spider.png",
    imageAlt: "A spider hanging from a silk thread",
    explain: `At that very moment a spider drops down on a fine, silken thread. The King stops thinking and watches to see what the spider will do. The ceiling dome is a long way up, and the spider hangs by a very thin rope. King Bruce cannot guess how it will get back to its web.`,
    glossary: [
      { word: "clue", meaning: "(old use) a thread" },
      { word: "divine", meaning: "(here) to guess or work out" }
    ]
  },
  {
    heading: "Nine Brave Attempts (stanzas 6-10)",
    image: "images/spider-web.png",
    imageAlt: "A large spider web with a spider hanging below it",
    explain: `The spider begins to cling and crawl straight up with great effort, but it slips and falls back almost to the ground. It does not complain. It rests for a moment, feeling a little dizzy and faint, then steadies its head and climbs again - this time half a yard higher. The thread is delicate and its feet grow tired, but it keeps going. Up and down, now fast and now slow, it makes nine brave attempts. The King thinks the foolish creature will surely stop trying after so many falls.`,
    glossary: [
      { word: "endeavour", meaning: "a serious effort" },
      { word: "mounted", meaning: "climbed up" },
      { word: "strive", meaning: "to try very hard to achieve something" },
      { word: "toils", meaning: "works very hard" }
    ]
  },
  {
    heading: "The Last Climb (stanzas 11-12)",
    explain: `But the insect goes up once more. It is an anxious minute - the spider is only a foot from its web, and the King wonders whether it will lose or win. Steadily, steadily, inch by inch, it goes higher and higher. A bold little run at the very last moment takes it back to its home.`,
    glossary: [
      { word: "cot", meaning: "(here) a small home" }
    ]
  },
  {
    heading: "King Bruce Tries Again (stanzas 13-14)",
    image: "images/trophy-girl.png",
    imageAlt: "A girl holding up a trophy",
    explain: `The King cries out "Bravo!" He says that all honour belongs to those who try. The spider has defied despair and conquered - so why should he not do the same? King Bruce braces his mind and tries once more, as he had tried before. This time he does not fail.`,
    glossary: [
      { word: "defied", meaning: "refused to obey or accept" },
      { word: "braced", meaning: "prepared (himself) for something difficult" }
    ]
  }
];

export const characters = [
  { name: "King Bruce", traits: ["sad and discouraged at first", "observant", "learns from the spider", "determined at the end"] },
  { name: "The spider", traits: ["persistent", "brave", "patient", "never complains"] }
];

export const themes = [
  "Perseverance: if at first you don't succeed, try again.",
  "Failure is a stepping stone to success.",
  "Inspiration can come from the smallest creature.",
  "Never give in to despair."
];
'@

# ---- chapter-1-3/animations/story.js
$files["chapter-1-3\animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated retelling of Helen Keller's three days." };
'@

# ---- chapter-1-3/before-we-read.js
$files["chapter-1-3\before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Work in pairs. Recall a visit to a place that you liked. Discuss the details of that place and write about the following: the name of the place; the person(s) you went with; the things that you could see, listen, smell, taste, touch and feel.",
    items: [
      {
        n: 1, type: "table",
        question: "Write about a place you liked visiting.",
        columns: ["Detail", "My answer"],
        rows: [
          ["Name of the place", "______"],
          ["The person(s) I went with", "______"],
          ["What I could see", "______"],
          ["What I could listen to", "______"],
          ["What I could smell", "______"],
          ["What I could taste", "______"],
          ["What I could touch and feel", "______"]
        ],
        answer: [
          ["Name of the place", "A hill station (for example, Mussoorie)"],
          ["The person(s) I went with", "My parents and my younger brother"],
          ["What I could see", "Green mountains, mist, pine trees and colourful houses"],
          ["What I could listen to", "Birds chirping, a stream flowing and temple bells"],
          ["What I could smell", "Wet earth, pine and fresh rain"],
          ["What I could taste", "Hot tea, steaming momos and sweet corn"],
          ["What I could touch and feel", "Cool breeze on my face, rough tree bark and soft moss"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "How does this memory make you feel?",
    items: [
      {
        n: 1, type: "activity",
        question: "How does this memory make you feel?",
        answer: "*(Personal answer - sample.)* It makes me feel happy, calm and grateful. I smile whenever I remember the cool air and the time I spent with my family."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Do you think your visit/experience would be different if you could not see or hear? Share your answers with your classmates and the teacher. (Did you know that our five senses are essential for us to experience and make sense of the world around us?)",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/helen-keller.png", alt: "Helen Keller touching a rose" },
        question: "Would your visit have been different if you could not see or hear?",
        answer: [
          "*(Class discussion - sample answer.)*",
          "Yes, very different. I would have missed the green mountains, the mist and the colours, and I would not have heard the birds and the stream. I would have depended on touch, smell and taste - the cool breeze, the smell of pine and the taste of hot tea - and on my family to describe what I could not see. It shows how much we depend on our senses without noticing."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/discover-to-interest.js
$files["chapter-1-3\discover-to-interest.js"] = @'
export const meta = { title: "Discover to Interest", order: 9, tags: ["Links", "Further reading"] };

export const sections = [
  {
    roman: "I",
    instruction: "Explore related topics after reading the chapter.",
    items: [
      {
        n: 1, type: "activity",
        question: "What can I look up after reading?",
        answer: [
          "- **Helen Keller** - her life, her teacher Anne Sullivan and her books.",
          "- **Louis Braille** - how he created the Braille code.",
          "- **Screen readers and assistive technology** - how they help persons with visual impairment.",
          "- **Digital India** - how it aims to include everyone.",
          "- **Indian Sign Language** - learn some everyday signs.",
          "- **International Day of Persons with Disabilities** - 3 December.",
          "- **The full essay** - read *Three Days to See* if your library has it."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/exam-notes.js
$files["chapter-1-3\exam-notes.js"] = @'
export const meta = { title: "Exam Notes", status: "published", tags: ["Revision"] };

export const blocks = [
  {
    type: "keypoints",
    title: "Essay at a glance",
    items: [
      "Written by Helen Keller, who was blind and deaf; the text is an extract from her essay.",
      "She enjoys the world through touch: a leaf's symmetry, birch and pine bark, buds in spring, the quiver of a singing bird.",
      "She imagines three days of sight. Day 1: the people she loves. Day 2: dawn and the museums. Day 3: the busy city and its people.",
      "She admits that three days would not be enough to see everything.",
      "Her hint: use every sense as if you would lose it tomorrow.",
      "Message: appreciate our senses, observe carefully and be kind to those with disabilities."
    ]
  },
  {
    type: "keypoints",
    title: "Literary devices and expressions",
    items: [
      "'Window of the soul' - the eye; a metaphor.",
      "'Sleeping earth' - personification.",
      "Sensory imagery - smooth, rough, shaggy, quiver, perfume, relish.",
      "'Should' repeated - shows imagined wishes, not real events.",
      "Tone - admiring, hopeful and grateful."
    ]
  },
  {
    type: "grammar",
    title: "Modal verbs",
    rule: "**Modal verbs** are auxiliary verbs that express necessity, possibility, permission or ability. They come before the main verb: can, could, may, might, shall, should, will, would, must, ought to.",
    examples: [
      "You can learn a lot from this experience. (ability)",
      "They might arrive late due to traffic. (possibility)",
      "She must finish her homework before dinner. (necessity)",
      "They ought to apologise for their mistake. (moral obligation)",
      "He would like to have some lassi, please. (polite request)"
    ]
  },
  {
    type: "vocab",
    items: [
      { word: "symmetry", meaning: "evenness", use: "the delicate symmetry of a leaf" },
      { word: "behold", meaning: "see", use: "I should behold with awe the light of dawn." },
      { word: "panorama", meaning: "scene", use: "a magnificent panorama of light" },
      { word: "pageant", meaning: "display", use: "the pageant of man's progress" },
      { word: "haunts", meaning: "regular meeting places", use: "the haunts of men" },
      { word: "strains", meaning: "tunes", use: "the strains of an orchestra" },
      { word: "tactile sense", meaning: "sense of touch", use: "as if your tactile sense would fail" },
      { word: "morsel", meaning: "a small piece of food", use: "taste with relish each morsel" },
      { word: "facets", meaning: "aspects", use: "glory in all the facets of pleasure and beauty" }
    ]
  },
  {
    type: "likely",
    items: [
      { marks: 1, q: "What does the author call the eye?", a: "The 'window of the soul'." },
      {
        marks: 2,
        q: "How does the author 'see' her friends?",
        a: "She feels the outline of their faces with her fingertips. She can detect laughter, sorrow and other obvious emotions and knows her friends from the feel of their faces."
      },
      {
        marks: 3,
        q: "What would the author do on the second day?",
        a: "She would rise with the dawn and watch night change into day. She would then visit the museums to see the history of the earth, the animals and races of men, and the progress of mankind."
      },
      {
        marks: 5,
        q: "What hint does the author give to those who can see? Why?",
        a: "She advises them to use their eyes as if they would be blind tomorrow, and to use the other senses in the same way - hear the music of voices and birds, touch each object, smell flowers and taste each morsel as if they might lose these senses too. She says this because people take their senses for granted and fail to notice how much beauty they have around them. Using every sense fully makes life richer."
      },
      {
        marks: 5,
        q: "What do the author's choices for the three days tell us about her?",
        a: "They show that she values people first - kindness and companionship - then knowledge, since she wants to visit museums, and finally understanding of human life, since she wants to watch ordinary people in the city. She is grateful, curious and compassionate, and she cares more about love and learning than about luxury."
      }
    ]
  }
];
'@

# ---- chapter-1-3/glossary.js
$files["chapter-1-3\glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };

export const terms = [
  { term: "symmetry", meaning: "evenness" },
  { term: "birch", meaning: "a slender tree with thin peeling bark" },
  { term: "shaggy", meaning: "hairy" },
  { term: "quiver", meaning: "shiver" },
  { term: "behold", meaning: "see" },
  { term: "panorama", meaning: "scene" },
  { term: "glimpse", meaning: "brief look" },
  { term: "pageant", meaning: "display" },
  { term: "condensed", meaning: "brief" },
  { term: "carcasses", meaning: "remains" },
  { term: "mastodons", meaning: "a large animal similar to an elephant, but with fur" },
  { term: "stature", meaning: "physique, build" },
  { term: "haunts", meaning: "regular meeting places" },
  { term: "merely", meaning: "just" },
  { term: "strains", meaning: "tunes" },
  { term: "tactile sense", meaning: "sense of touch" },
  { term: "morsel", meaning: "a small piece of food" },
  { term: "facets", meaning: "aspects" },
  { term: "modal verb", meaning: "an auxiliary verb that expresses necessity, possibility, permission or ability, used before the main verb" }
];
'@

# ---- chapter-1-3/index.js
$files["chapter-1-3\index.js"] = @'
export const chapter = {
  title: "Three Days to See",
  abs: 3,
  pos: 3,
  unit: "unit-1",
  author: "Helen Keller",
  related: [
    { label: "Ch 1-1 · The Day the River Spoke", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-1" },
    { label: "Ch 1-2 · Try Again", href: "/ncert/class-7/subject:english/poorvi/unit-1/chapter-1-2" }
  ]
};
'@

# ---- chapter-1-3/let-us-discuss.js
$files["chapter-1-3\let-us-discuss.js"] = @'
export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Work in pairs. Identify the statements that are true from the ones given below. Share your answers with the teacher.",
    items: [
      {
        n: 1, type: "table",
        question: "Mark each statement True or False.",
        columns: ["Statement", "True or False?"],
        rows: [
          ["1. The author expresses a deep longing to experience the world through the sense of hearing.", "______"],
          ["2. The author would like exploring the city only to observe how people are suffering.", "______"],
          ["3. The author would spend the first day seeing the people whose kind-heartedness and friendship have enriched her life.", "______"],
          ["4. The author acknowledges that even in three days, she would not be able to see everything.", "______"],
          ["5. The author feels that everyone can find the greatest joy merely by the sense of touch.", "______"],
          ["6. The author advises those who can see to appreciate every moment as if they might lose their senses tomorrow.", "______"],
          ["7. On the third day, the author would like to observe people in their daily lives and understand their experiences.", "______"]
        ],
        answer: [
          ["1. The author expresses a deep longing to experience the world through the sense of hearing.", "False - her longing is to see."],
          ["2. The author would like exploring the city only to observe how people are suffering.", "False - she also looks forward to smiles and determination."],
          ["3. The author would spend the first day seeing the people whose kind-heartedness and friendship have enriched her life.", "True"],
          ["4. The author acknowledges that even in three days, she would not be able to see everything.", "True"],
          ["5. The author feels that everyone can find the greatest joy merely by the sense of touch.", "False - she says sight must be the most delightful."],
          ["6. The author advises those who can see to appreciate every moment as if they might lose their senses tomorrow.", "True"],
          ["7. On the third day, the author would like to observe people in their daily lives and understand their experiences.", "True"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Complete the table with what Helen Keller wanted to do on the three days if she had sight.",
    items: [
      {
        n: 1, type: "table",
        question: "Fill in the table.",
        columns: ["Day 1", "Day 2", "Day 3"],
        rows: [["see the people, know her friends from the feel of their faces, ...", "arise with the dawn, ...", "______"]],
        answer: [[
          "see the people whose kindness and companionship have made her life worth living; see into the heart of a friend through the eye; know friends not only from the feel of their faces",
          "arise with the dawn and watch night change into day; behold the light with which the sun awakens the earth; go to the museums to see the history of the earth and of man's progress",
          "spend the day in the busy city, among people going about the business of life; stand at a busy corner and watch them - smiles, determination and suffering"
        ]]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The author says that you need eyes to be able to 'see' the true self of a person. Therefore, she refers to the eye as the 'window of the soul'.",
    items: [
      {
        n: 1, type: "long",
        question: "How is the narrator able to understand the feelings of a person?",
        answer: "The narrator, who is blind, 'sees' through her fingertips. She feels the outline of a face and can detect laughter, sorrow and other obvious emotions. She knows her friends from the feel of their faces, but she admits that she cannot see into the heart of a friend through the eye, so she can understand only the more obvious feelings."
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-explore.js
$files["chapter-1-3\let-us-explore.js"] = @'
export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Inclusion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Do you know how persons with visual challenges are able to read and write? They read through touch with the help of Braille, a code of raised dots that represents the letters of the alphabet. This tactile code was developed over a period of nine years by Louis Braille, who became blind at a very young age due to an accident. Study the code given below and write your name using it. You may use bindis or grains of daal to make the dots that you can touch and feel.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/braille-code.png", alt: "The Braille alphabet and numerals shown as patterns of raised dots" },
        question: "Write your name in Braille.",
        answer: [
          "*(Activity - sample.)* Each Braille letter is a cell of up to six dots, arranged in two columns of three. Find each letter of your name in the chart and stick bindis or grains of daal in the same pattern on card paper.",
          "For example, the name **RIYA** is written as: ⠗ ⠊ ⠽ ⠁",
          "Letters: R = ⠗, I = ⠊, Y = ⠽, A = ⠁."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Have you heard about the International Day of Persons with Disabilities? Find out when and how it is observed in India. Write your findings on a sheet and put it up on the class board.",
    items: [
      {
        n: 1, type: "activity",
        question: "Find out when and how the International Day of Persons with Disabilities is observed in India.",
        answer: [
          "*(Research activity - starting points.)*",
          "- It is observed every year on **3 December**; it was started by the United Nations to promote the rights and well-being of persons with disabilities.",
          "- In India, schools, colleges and government and non-government organisations hold awareness programmes, rallies, talks, cultural events and competitions, and honour persons with disabilities for their achievements.",
          "Check the official websites for this year's theme and events before you write your sheet."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Do you want to know about sign language? Go to the link given below to learn about the Indian Sign Language: https://ncert.nic.in/pdf/accessibility/ISL_200word_v15.pdf",
    items: [
      {
        n: 1, type: "activity",
        question: "Learn some words of Indian Sign Language from the link.",
        answer: "*(Activity.)* Open the link, learn at least ten signs (for example greetings, family members, colours and numbers), practise them with a partner and try to hold a short conversation using only signs."
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-learn.js
$files["chapter-1-3\let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Sensory words are descriptive - they describe how we experience the world: how we see, hear, smell, taste or feel something. Complete the table with sensory words from the text in Column 2 for the five senses in Column 1. Add new words in Column 3.",
    items: [
      {
        n: 1, type: "table",
        question: "Complete the table of sensory words.",
        columns: ["Column 1", "Column 2 (from the text)", "Column 3 (new words)"],
        rows: [
          ["What you see", "panorama", "______"],
          ["What you hear", "music", "______"],
          ["What you smell", "perfume", "______"],
          ["What you taste", "relish", "______"],
          ["What you feel", "rough", "______"]
        ],
        answer: [
          ["What you see", "panorama (also: glimpse, outline, dawn)", "colourful, sparkling, glowing, dazzling"],
          ["What you hear", "music (also: song, strains)", "chirping, whisper, thunder, tinkling"],
          ["What you smell", "perfume (also: fragrance)", "aroma, fresh, musty, smoky"],
          ["What you taste", "relish (also: morsel)", "sweet, sour, spicy, bitter"],
          ["What you feel", "rough (also: smooth, shaggy, delicate)", "soft, cool, prickly, slippery"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Read the following sentences from the text and underline the verbs: 'I should divide the period into three parts.' 'On the first day, I should want to see...' 'The next day I should arise with the dawn...' 'I should behold with awe...' The words you have underlined are a combination of two verbs. In each of these sentences, 'should' is the modal verb (suggestion), and the second verb (divide, want, arise, behold) is the main verb.",
    items: [
      {
        n: 1, type: "table",
        question: "Write the modal verb and the main verb in each sentence.",
        columns: ["Sentence", "Modal verb", "Main verb"],
        rows: [
          ["I should divide the period into three parts.", "______", "______"],
          ["On the first day, I should want to see...", "______", "______"],
          ["The next day I should arise with the dawn...", "______", "______"],
          ["I should behold with awe...", "______", "______"]
        ],
        answer: [
          ["I should divide the period into three parts.", "should", "divide"],
          ["On the first day, I should want to see...", "should", "want (to see)"],
          ["The next day I should arise with the dawn...", "should", "arise"],
          ["I should behold with awe...", "should", "behold"]
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Modal verbs are auxiliary verbs that express necessity, possibility, permission or ability. They are used before the main verb. Common modal verbs include can, could, may, might, shall, should, will, would, must and ought to. Identify the modal verbs in the following sentences and choose the functions they express from the box.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["possibility", "necessity", "polite request", "ability", "moral obligation"],
        question: "Identify the modal verb and its function.",
        columns: ["Sentence", "Modal verb", "Function"],
        rows: [
          ["1. You can learn a lot from this experience.", "______", "______"],
          ["2. They might arrive late due to traffic.", "______", "______"],
          ["3. She must finish her homework before dinner.", "______", "______"],
          ["4. They ought to apologise for their mistake.", "______", "______"],
          ["5. He would like to have some lassi, please.", "______", "______"]
        ],
        answer: [
          ["1. You can learn a lot from this experience.", "can", "ability"],
          ["2. They might arrive late due to traffic.", "might", "possibility"],
          ["3. She must finish her homework before dinner.", "must", "necessity"],
          ["4. They ought to apologise for their mistake.", "ought to", "moral obligation"],
          ["5. He would like to have some lassi, please.", "would", "polite request"]
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the situations in Column 1 and functions in Column 2. Fill in the blanks in the sentences in Column 4 with appropriate modal verbs from Column 3. After filling in the blanks, explain the function of each modal verb you used to your classmates and the teacher.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["can", "could", "may", "might", "must", "ought to", "shall", "should", "will", "would"],
        question: "Fill in the blanks with suitable modal verbs.",
        columns: ["Situation", "Function", "Sentence"],
        rows: [
          ["1. You want to leave work early.", "permission", "(i) ______ I leave early today if I finish all my tasks?"],
          ["2. You have an important deadline tomorrow.", "obligation", "(ii) I ______ finish this report by tomorrow."],
          ["3. Your friend is thinking whether to join Art class.", "advice", "(iii) You ______ consider all the pros and cons before making a decision."],
          ["4. There are dark clouds in the sky.", "possibility", "(iv) It ______ rain later today."],
          ["5. Asking someone to pass the salt at the dinner table", "polite request", "(v) ______ you pass the salt, please?"],
          ["6. Advising someone to apologise for a mistake", "moral obligation", "(vi) You ______ apologise for the mistake you made."],
          ["7. Deciding where to go for picnic", "suggestion", "(vii) We ______ go to any park nearby for picnic."]
        ],
        answer: [
          ["1. You want to leave work early.", "permission", "(i) **May** (or Can/Could) I leave early today if I finish all my tasks?"],
          ["2. You have an important deadline tomorrow.", "obligation", "(ii) I **must** finish this report by tomorrow."],
          ["3. Your friend is thinking whether to join Art class.", "advice", "(iii) You **should** consider all the pros and cons before making a decision."],
          ["4. There are dark clouds in the sky.", "possibility", "(iv) It **might** (or may) rain later today."],
          ["5. Asking someone to pass the salt at the dinner table", "polite request", "(v) **Could** (or Would/Can) you pass the salt, please?"],
          ["6. Advising someone to apologise for a mistake", "moral obligation", "(vi) You **ought to** apologise for the mistake you made."],
          ["7. Deciding where to go for picnic", "suggestion", "(vii) We **could** (or can/shall) go to any park nearby for picnic."]
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-listen.js
$files["chapter-1-3\let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook pages 41-42).
// The textbook gives no answer key; 3, 4, 6 and 7 are the statements the transcript supports best.

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to a conversation between a mother and son. As you listen, select four true statements from 1-7 given below. (Transcript for the teacher on pages 41-42.)",
    items: [
      {
        n: 1, type: "table",
        question: "Mark each statement True or False (four are true).",
        columns: ["Statement", "True or False?"],
        rows: [
          ["1. Anuj finds the concept of Braille fascinating and wants to learn more about it.", "______"],
          ["2. Mother is unsure of the school's efforts to include students with visual impairment.", "______"],
          ["3. Anuj initially thinks that Digital India is only about learning how to use computers.", "______"],
          ["4. Mother believes that screen readers are very effective for persons who are visually impaired.", "______"],
          ["5. Anuj already knew that persons who are visually impaired can use computers and smartphones.", "______"],
          ["6. Anuj wants to know about the effectiveness of assistive technologies for persons who are visually impaired.", "______"],
          ["7. Mother believes a right mindset is the best support for persons who are visually impaired.", "______"]
        ],
        answer: [
          ["1. Anuj finds the concept of Braille fascinating and wants to learn more about it.", "False - he only mentions that Tara's books use Braille."],
          ["2. Mother is unsure of the school's efforts to include students with visual impairment.", "False - she says it is great that the school has such facilities."],
          ["3. Anuj initially thinks that Digital India is only about learning how to use computers.", "True - 'That's about being computer literate, isn't it?'"],
          ["4. Mother believes that screen readers are very effective for persons who are visually impaired.", "True - she says they help people use digital services independently."],
          ["5. Anuj already knew that persons who are visually impaired can use computers and smartphones.", "False - he is surprised to learn that Tara can use a computer."],
          ["6. Anuj wants to know about the effectiveness of assistive technologies for persons who are visually impaired.", "True - he asks what a screen reader is and whether it makes a big difference."],
          ["7. Mother believes a right mindset is the best support for persons who are visually impaired.", "True - she ends by saying that inclusion needs the right mindset, not just the right tools."]
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-speak.js
$files["chapter-1-3\let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "Work in pairs. Take turns to speak for a minute on any one of the senses you value the most. Use the given prompts to frame your response before you speak. Remember to speak clearly and confidently, glance at your notes rather than reading, make eye contact, use gestures if you wish, pronounce words clearly and speak at a steady, moderate pace.",
    items: [
      {
        n: 1, type: "activity",
        wordBox: [
          "I value my sense of sight/ sound/ touch/ smell/ taste the most because...",
          "One of my favourite experiences is...",
          "This is so because...",
          "I appreciate being able to see/ hear/ touch/ smell/ taste...",
          "God forbid, if I were to lose the sense of..., it would make me feel...",
          "I would not be able to...",
          "I thank God that I am able to..."
        ],
        question: "Speak for a minute on the sense you value the most.",
        answer: [
          "*(Sample talk.)*",
          "I value my sense of hearing the most because it connects me to the people and the world I love. One of my favourite experiences is listening to my grandmother's stories in the evening. This is so because her voice makes every story come alive. I appreciate being able to hear birds in the morning, rain on the window and music from my favourite songs. God forbid, if I were to lose my sense of hearing, it would make me feel very lonely. I would not be able to enjoy music or talk to my friends on the phone. I thank God that I am able to hear, and I will never take it for granted."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-think-and-reflect.js
$files["chapter-1-3\let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the extracts and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `*Extract (paraphrased from the first paragraph):* The writer feels the delicate evenness of a leaf, runs her hands over the smooth skin of a silver birch and the rough, shaggy bark of a pine, touches branches in spring hoping to find a bud - the first sign of nature waking from winter's sleep - and sometimes feels the happy quiver of a bird singing in a small tree.`,
        parts: [
          {
            label: "i", type: "short",
            question: "What does the 'delicate symmetry of a leaf' symbolise?",
            answer: "It symbolises the fine beauty, balance and order in nature. Even a small leaf holds beauty that she can feel by touch, and it shows how she finds joy in small things."
          },
          {
            label: "ii", type: "short",
            question: "List two phrases from the extract that describe the texture of objects in nature.",
            answer: "**'smooth skin of a silver birch'** and **'rough, shaggy bark of a pine'**."
          },
          {
            label: "iii", type: "fill",
            question: "The phrase 'awakening Nature after her winter's sleep' refers to ______ .",
            answer: "...**spring** - the season when buds appear and trees and plants come back to life after winter."
          },
          {
            label: "iv", type: "mcq",
            question: "What is the tone of the writer in this extract?",
            options: ["A. nostalgic", "B. proud", "C. admiring", "D. celebratory"],
            answer: "**C. admiring** - she lovingly appreciates the small beauties of nature."
          }
        ]
      },
      {
        n: 2,
        passage: `*Extract (paraphrased from the second paragraph):* The next day, the writer would rise with the dawn and watch with awe the thrilling miracle by which night turns into day, as the sun wakes the sleeping earth. She would spend this day taking a quick look at the world's past and present, and so she would go to the museums to see the pageant of man's progress.`,
        parts: [
          {
            label: "i", type: "mcq",
            question: "The word 'thrilling' has been used with 'miracle'. Which of the following words does not match with the word 'thrilling'?",
            options: ["A. experience", "B. tale", "C. knowledge", "D. adventure"],
            answer: "**C. knowledge** - we say a thrilling experience, tale or adventure, but not 'thrilling knowledge'."
          },
          {
            label: "ii", type: "short",
            question: "Why does the writer refer to the earth as 'sleeping earth'?",
            answer: "It is a personification. At night the earth is dark and quiet, as if asleep, and the rising sun 'awakens' it with its light."
          },
          {
            label: "iii", type: "fill",
            question: "The writer wishes to dedicate the day to a brief look at the present and past world because ______ .",
            answer: "...she has only three days, and she wants to see in a short time how the earth and human beings have developed - the history and progress of the world."
          },
          {
            label: "iv", type: "short",
            question: "Why does the writer use 'should' multiple times in the extract?",
            answer: "She is only imagining what she would do if she could see for three days. 'Should' expresses these wishes and plans, not real events, and it shows her longing and the careful way she has thought about each day."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      {
        n: 1, type: "long",
        question: "The sense of touch makes up for the loss of sight and hearing. Explain this statement with reference to the text.",
        answer: "The writer cannot see or hear, yet touch gives her hundreds of things to enjoy. She feels the symmetry of a leaf, the smooth silver birch, the rough bark of a pine and the quiver of a singing bird. She 'sees' the outline of a face through her fingertips, detects laughter and sorrow, and knows her friends from the feel of their faces. In this way touch helps her to know and enjoy the world, although it cannot fully replace sight."
      },
      {
        n: 2, type: "long",
        question: "Why does the author believe that the sense of sight is the most wonderful?",
        answer: "If touch alone gives her so much pleasure, she believes sight must reveal far more beauty - the dawn, the museums, the busy city, and above all the hearts of friends through the 'window of the soul', the eye. She says that, of all the senses, sight must be the most delightful."
      },
      {
        n: 3, type: "long",
        question: "How might the author's opinion on making the most of our senses guide us to be kinder towards people with special abilities?",
        answer: "When we realise how precious every sense is, we understand the daily difficulties of people who lack one of them and respect their courage and abilities. We then offer help, patience and inclusion instead of pity or impatience, and we stop taking our own senses for granted."
      },
      {
        n: 4, type: "long",
        question: "What is the significance of imagining the loss of a sense, according to the author?",
        answer: "Imagining that we might lose a sense tomorrow makes us use it with full attention today. We notice what we usually ignore - colours, sounds, smells and tastes - and we become grateful for what we have. It teaches us not to waste the gift of our senses."
      },
      {
        n: 5, type: "long",
        question: "How does the author encourage people to approach their everyday sensory experiences?",
        answer: "She asks people to use each sense as if they would lose it tomorrow: look at everything with attention, listen to the music of voices, birdsong and orchestras, touch each object carefully, smell the perfume of flowers and taste each morsel with relish. In this way we make the most of every sense and enjoy all the pleasures and beauty of the world."
      },
      {
        n: 6, type: "long",
        question: "What do the author's choices for the three days tell us about her values and priorities?",
        answer: "Her first priority is people - she would first see those whose kindness and companionship make her life worth living. Next she values knowledge and understanding, so she would visit museums to learn about the past of the earth and human progress. Finally she wants to understand human life by watching ordinary people at work, and she responds with happiness, pride and compassion. She values love, learning and empathy over luxury or entertainment."
      }
    ]
  }
];
'@

# ---- chapter-1-3/let-us-write.js
$files["chapter-1-3\let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing"] };

export const sections = [
  {
    roman: "I",
    instruction: "A descriptive paragraph describes a person, place, object or event to create a memorable experience for the reader. Write a descriptive paragraph describing a place that you visited recently. (1) In the opening line, begin with something interesting to capture the reader's attention and introduce the place. (2) In the supporting lines, describe the place using adjectives and specific details that appeal to your five senses - sight, sound, smell, taste and touch. You may include alliterations, similes and personifications. (3) In the concluding lines, summarise the description to give a final impression and mention the most important thing about the place that others should also experience.",
    items: [
      {
        n: 1, type: "activity",
        question: "Write a descriptive paragraph about a place you visited recently.",
        answer: [
          "**The Village Fair**",
          "",
          "Have you ever walked into a place where every corner seems to call you? That is how I felt when I entered the village fair last Sunday. Bright paper flags fluttered above the lanes like colourful butterflies, and the sweet smell of hot jalebis drifted from a stall near the gate. Drums beat in the distance, children laughed on the creaky wooden swing, and bangle-sellers jingled their wares like tiny bells. I tasted a crisp, golden samosa that was as hot as the afternoon sun and felt the rough, cool clay of a pot that a potter placed in my hands. Everywhere I looked, there were glowing faces and busy hands. The fair taught me that the simple joys of a village - music, food and togetherness - are worth experiencing at least once in a lifetime."
        ]
      }
    ]
  }
];
'@

# ---- chapter-1-3/summary.js
$files["chapter-1-3\summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };

export const summary = `"Three Days to See" is an extract from Helen Keller's essay. Helen Keller was blind and deaf, and she imagines what she would most like to see if she were given sight for only three days.

She begins by telling us how much she enjoys the world through touch - the evenness of a leaf, the smooth silver birch, the rough bark of a pine, the first buds of spring and the quiver of a singing bird. If touch gives so much pleasure, she thinks, sight must reveal even more beauty.

On the first day she would like to see the people whose kindness and friendship have made her life worth living. On the second day she would watch the dawn and then visit museums to see the history of the earth and the progress of mankind. On the third day she would go to the busy city to watch people going about their daily lives.

At midnight, she knows, darkness would return, and she would realise how much she had left unseen. She gives us a hint: use all your senses as if you would lose them tomorrow, and make the most of every one of them.`;

export const moral = `We should value and use all our senses fully, because we often take them for granted. Appreciating what we have makes us more grateful, attentive and kind towards people who live without one of these gifts.`;

export const quotes = [
  { text: "\"Use your eyes as if tomorrow you would be stricken blind.\"", by: "Helen Keller" },
  { text: "\"Make the most of every sense.\"", by: "Helen Keller" }
];

export const mascot = { pose: "smiling" };

export const extras = {
  "Modal verbs": [
    { label: "can / could:", text: "ability, permission, polite request." },
    { label: "may / might:", text: "possibility, permission." },
    { label: "must:", text: "necessity, strong obligation." },
    { label: "should / ought to:", text: "advice, moral obligation." },
    { label: "would:", text: "polite request, imagined situation." }
  ]
};
'@

# ---- chapter-1-3/textbook.js
$files["chapter-1-3\textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Essay"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Helen Keller";

export const cover = {
  image: "image.png",
  alt: "Children using their five senses in a school garden",
  caption: "Using our five senses"
};

export const intro = `A guided reading of an extract from "Three Days to See" by Helen Keller, who was blind and deaf. She imagines what she would most like to see if she were given sight for just three days. The essay is explained part by part, with the margin words listed under each part.`;

export const parts = [
  {
    heading: "Finding the World Through Touch",
    image: "images/helen-keller.png",
    imageAlt: "Helen Keller touching a rose",
    explain: `The writer cannot see, yet she finds hundreds of things to interest her through touch alone. She feels the delicate evenness of a leaf, the smooth skin of a silver birch and the rough bark of a pine. In spring she touches the branches in search of a bud, the first sign of nature waking from its winter sleep. Sometimes she is lucky enough to rest her hand on a small tree and feel a bird singing. Still, her heart longs to see: if touch gives so much pleasure, how much more beauty sight must reveal. She imagines what she would like to see if she had sight for only three days.`,
    glossary: [
      { word: "symmetry", meaning: "evenness" },
      { word: "birch", meaning: "a slender tree with thin peeling bark" },
      { word: "shaggy", meaning: "hairy" },
      { word: "quiver", meaning: "shiver" }
    ]
  },
  {
    heading: "Day One: The People She Loves",
    explain: `On the first day she would want to see the people whose kindness and companionship have made her life worth living. She has never seen into a friend's heart through the eye, which she calls the "window of the soul". She can only "see" the outline of a face with her fingertips. She can detect laughter, sorrow and other obvious emotions, and she knows her friends from the feel of their faces.`,
    glossary: []
  },
  {
    heading: "Day Two: Dawn and the Museums",
    image: "images/sunrise.png",
    imageAlt: "Sunrise over a river and green hills",
    explain: `The next day she would rise with the dawn to watch night change into day, and behold with awe the light with which the sun wakes the sleeping earth. She would spend the day taking a quick look at the world's past and present. She would go to the museums to see the progress of humankind, the history of the earth in brief, the animals and the races of men in their natural surroundings, and the huge remains of dinosaurs and mastodons that lived before man appeared - and how tiny man, with his powerful brain, came to conquer the animal kingdom.`,
    glossary: [
      { word: "behold", meaning: "see" },
      { word: "panorama", meaning: "scene" },
      { word: "glimpse", meaning: "brief look" },
      { word: "pageant", meaning: "display" },
      { word: "condensed", meaning: "brief" },
      { word: "carcasses", meaning: "remains" },
      { word: "mastodons", meaning: "a large animal similar to an elephant, but with fur" },
      { word: "stature", meaning: "physique, build" }
    ]
  },
  {
    heading: "Day Three: The Busy City",
    image: "images/city.png",
    imageAlt: "A busy city street with shops and people",
    explain: `On the third morning she would greet the dawn again, eager for new delights. This day she would spend in the everyday world, among the places where people go about the business of life - the city. She would stand at a busy corner, simply looking at people and trying to understand something of their daily lives. When she sees smiles she is happy; when she sees serious determination she is proud; when she sees suffering she is full of compassion.`,
    glossary: [
      { word: "haunts", meaning: "regular meeting places" },
      { word: "merely", meaning: "just" }
    ]
  },
  {
    heading: "Her Hint to Us",
    explain: `At midnight, permanent night would close in again, and only then would she realise how much she had left unseen. She gives one hint to those who can see: use your eyes as if you would be blind tomorrow. The same works for the other senses - hear the music of voices, birdsong and orchestras as if you would be deaf tomorrow; touch every object as if your sense of touch would fail; smell flowers and taste each bite as if you could never smell or taste again. Make the most of every sense. And yet, of all the senses, she is sure that sight must be the most delightful.`,
    glossary: [
      { word: "strains", meaning: "tunes" },
      { word: "tactile sense", meaning: "sense of touch" },
      { word: "morsel", meaning: "a small piece of food" },
      { word: "facets", meaning: "aspects" }
    ]
  }
];

export const characters = [
  { name: "Helen Keller (the narrator)", traits: ["blind and deaf", "imaginative", "grateful", "curious", "compassionate"] }
];

export const themes = [
  "Appreciate every sense we have - we often take them for granted.",
  "Observation: look, listen and feel attentively.",
  "People, knowledge and understanding matter more to the writer than entertainment.",
  "Inclusion and empathy for people with disabilities."
];
'@

# ---------------------------------------------------------------- write everything (UTF-8, no BOM)
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($key in $files.Keys) {
    $target = [System.IO.Path]::GetFullPath((Join-Path $root (Join-Path $base $key)))
    New-Item -ItemType Directory -Force -Path (Split-Path $target) | Out-Null
    [System.IO.File]::WriteAllText($target, $files[$key] + "`n", $utf8)
    Write-Host ("  wrote " + $target)
}
Write-Host ""
Write-Host "Success: Unit 1 (3 chapters) generated."
