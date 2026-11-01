# ---------------------------------------------------------------------------
# Class 7 English (Poorvi) - Unit 1 - Chapter 1-1: The Day the River Spoke
#
# Run from the project root (the folder that contains "src"):
#   powershell -ExecutionPolicy Bypass -File .\create-chapter-1-1.ps1
#
# Re-running overwrites the generated .js files. image.png is never touched.
# ---------------------------------------------------------------------------

$root    = (Get-Location).Path
$dir     = "src\data\7\english\poorvi\unit-1\chapter-1-1"
$unitDir = "src\data\7\english\poorvi\unit-1"

New-Item -ItemType Directory -Force -Path $dir | Out-Null
New-Item -ItemType Directory -Force -Path "$dir\animations" | Out-Null
New-Item -ItemType Directory -Force -Path $unitDir | Out-Null

$files = [ordered]@{}

# ---------------------------------------------------------------- unit + chapter
$files["..\index.js"] = @'
export const unit = {
  label: "Unit 1: Learning Together",
  slug: "unit-1"
};
'@

$files["index.js"] = @'
export const chapter = {
  title: "The Day the River Spoke",
  abs: 1,
  pos: 1,
  unit: "unit-1",
  author: "Kamala Nair"
};
'@

# ---------------------------------------------------------------- before we read
$files["before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };

export const sections = [
  {
    roman: "I",
    instruction: "Close your eyes and quietly listen to the sounds around you for a minute. Then share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "Are the sounds around you trying to tell you something?",
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
    instruction: "Jahnavi is a bright young girl from a coastal village in India. She lives with her parents and three brothers, and her parents work on the farm. She has a dream. Share your answers with your classmates and the teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "What could Jahnavi's dream be?",
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

# ---------------------------------------------------------------- textbook (story, guided reading)
$files["textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const author = "Kamala Nair";

export const cover = {
  image: "image.png",
  alt: "Illustration for The Day the River Spoke",
  caption: "The Day the River Spoke"
};

export const intro = `A guided reading of "The Day the River Spoke", an extract adapted from Kamala Nair's story. The story is explained part by part, with the difficult words from the margin listed under each part.`;

export const parts = [
  {
    heading: "A Voice by the River",
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
    explain: `The River is in a hurry to reach the sea, but it asks Jahnavi to tell it everything. She explains that she is not allowed to go to school like her brother Gopi (whom she calls Ettan) and Meena. Each time she asked, her mother said she was too small. When baby Ramu was born she had to mind the little ones while her mother worked in the fields. Now she is nearly ten and fears that she is too old - and too scared - to go. She longs to read and to find out why spiders look yellow on yellow flowers, why bamboo rustles, why the moon always rises from behind the hills and why baby fish turn into frogs. The River laughs at so many whys and tells her, as a secret, that the moon travels over the mountains and down towards the sea, just as the River does.`,
    glossary: [
      { word: "rustle", meaning: "light sound made by leaves rubbing against each other" },
      { word: "conspiratorially", meaning: "secretly" }
    ]
  },
  {
    heading: "The River's Advice",
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
    explain: `The next day Jahnavi gathers her courage and hurries to the school with little Appu on her shoulder. She stands at the door while the teacher reads a lesson about Ashoka, a prince who became a great king. Appu falls asleep, and Jahnavi creeps closer until she is sitting on the floor in the back row. The teacher notices the new face and asks her name. The boys explain that she is Gopi's sister. The teacher says that if she truly wants to come, they will talk to her father and find a way. The next evening the teacher visits. Her father scratches his cheek the way he does when he is worried, but her mother tells Jahnavi that girls should learn as much as they want. She herself once wished to study but was refused, and she is glad the teacher came.`,
    glossary: []
  },
  {
    heading: "I Did It!",
    explain: `Jahnavi promises her mother that when she grows up she will become a teacher, go from house to house and invite all the little girls of the village to her school. The next morning she runs down the path between the fields to tell the River the good news: she was scared, but she did it, and she is going to school. She plans to learn to write her name, do sums and find out why the little fish in the rice fields turn into frogs. The River chuckles sleepily and invites her to come again, promising to tell her all about the ships that sail the sea.`,
    glossary: []
  }
];

export const themes = [
  "Education is every child's right, and girls are just as capable as boys.",
  "Courage and self-belief: the first step has to be taken by us - 'it's up to you'.",
  "Nature as a friend and guide: the River is personified and becomes a wise mentor.",
  "Supportive people (a teacher, a mother) can change a child's future.",
  "Curiosity - asking 'why' - is the beginning of learning."
];
'@

# ---------------------------------------------------------------- glossary (feeds the book glossary)
$files["glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };

export const terms = [
  { term: "splashed", pos: "verb", meaning: "fell in drops, making a sound" },
  { term: "slithered", pos: "verb", meaning: "moved by sliding from side to side" },
  { term: "murmuring", pos: "adjective", meaning: "speaking in a low voice" },
  { term: "startled", pos: "adjective", meaning: "surprised" },
  { term: "thicket", pos: "noun", meaning: "a dense group of bushes and trees" },
  { term: "shrieked", pos: "verb", meaning: "made a high-pitched sound" },
  { term: "rustle", pos: "noun / verb", meaning: "a light sound made by leaves rubbing against each other" },
  { term: "conspiratorially", pos: "adverb", meaning: "secretly" },
  { term: "clump", pos: "noun", meaning: "a small group of trees growing together" },
  { term: "rattling", pos: "adjective / verb", meaning: "making a noise by shaking" },
  { term: "catamaran", pos: "noun", meaning: "a kind of boat; from the Tamil kattu maram, 'tied wood'" },
  { term: "wailed", pos: "verb", meaning: "(here) complained in a loud voice" }
];
'@

# ---------------------------------------------------------------- let us discuss
$files["let-us-discuss.js"] = @'
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
    instruction: "Complete the table with Jahnavi's questions (Column 1) and the River's answers (Column 2). Check your answers with the teacher.",
    items: [
      {
        n: 1, type: "match",
        question: "Fill in the missing cells of the table.",
        left: [
          "1. ...why the moon always comes from behind the hills...?",
          "2. ______",
          "3. ______",
          "4. Will they come here?"
        ],
        right: [
          "(i) ______",
          "(ii) ...little girls can do as much as little boys.",
          "(iii) Big boats, so big that they can take hundreds of people...",
          "(iv) ______"
        ],
        answer: [
          "1. **Jahnavi:** ...why the moon always comes from behind the hills...? -> **River:** It goes down towards the sea; it always takes the same way, over the mountains and down to the sea.",
          "2. **Jahnavi:** Can I do something? -> **River:** ...little girls can do as much as little boys.",
          "3. **Jahnavi:** What are ships? -> **River:** Big boats, so big that they can take hundreds of people...",
          "4. **Jahnavi:** Will they come here? -> **River:** I'm afraid not. Too large, you know."
        ]
      }
    ]
  }
];
'@

# ---------------------------------------------------------------- let us think and reflect
$files["let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the extracts given below and answer the questions that follow.",
    items: [
      {
        n: 1,
        passage: `"You shouldn't cry, you know," the voice went on. "And you really shouldn't be scared, when you have been coming here to see me every day, well, almost every day." She was puzzled. It was such a voice, like the river. It couldn't be the river! "Well, tell me all about it," said the River... "I've got to hurry to reach the sea, you know."`,
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

# ---------------------------------------------------------------- let us learn
$files["let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "You have learnt that naming words are called nouns and only proper nouns begin with a capital letter. (Clue: has the River been given the qualities of a human being?)",
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
    instruction: "There are a few words related to sound in the text. Pick the words from the text and write them next to the correct definition. Then fill in the blanks with suitable sound words.",
    items: [
      {
        n: 1, type: "match",
        question: "Write the sound word next to each definition.",
        left: [
          "1. made a high-pitched piercing sound",
          "2. to cause liquid to strike or fall on something",
          "3. a low continuous background noise",
          "4. to cry with loud uncontrollable gasps",
          "5. to make a soft dry sound, like paper or leaves moving",
          "6. took a short quick breath through the mouth due to surprise, pain or shock",
          "7. shaking rapidly to make continuous short, sharp sounds",
          "8. making a lot of noise",
          "9. made a long, high cry, usually because of pain or sadness"
        ],
        right: ["noisy", "splashed", "gasped", "shrieked", "murmuring", "sob", "rustle", "rattling", "wailed"],
        answer: [
          "1. **shrieked**",
          "2. **splashed**",
          "3. **murmuring**",
          "4. **sob**",
          "5. **rustle**",
          "6. **gasped**",
          "7. **rattling**",
          "8. **noisy**",
          "9. **wailed**"
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Fill in the blanks with suitable sound words from the list above.",
        passage: "The classroom turned (i) ______ when the students saw the teacher carrying the answer papers. The teacher flipped the pages with a (ii) ______ while the children (iii) ______, wondering about their marks. One student (iv) ______ in frustration, and the (v) ______ in the room kept growing. At last the teacher praised everyone's performance, and the students (vi) ______ with excitement.",
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
    instruction: "The word 'catamaran' is used in the text. It comes from the Tamil kattu maram, meaning 'tied wood'. Find out the meanings of these words and the Indian language each was borrowed from. An example has been given.",
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
    instruction: "Chandu, the fisherman, has a catamaran that the River preferred to a ship. Some boats used in different parts of our country are: canoe, catamaran, coracle and shikara.",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "i", type: "activity",
            question: "Which one would you like to travel in?",
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
        n: 1, type: "crossword",
        question: "Complete the crossword using the clues.",
        grid: { rows: 8, cols: 11 },
        given: [[1,7],[1,11],[2,1],[2,11],[3,11],[4,2],[4,7],[4,9],[4,11],[5,1],[7,2],[7,11],[8,2],[8,8],[8,9],[8,10]],
        entries: [
          { n: 1, dir: "across", row: 2, col: 1, answer: "SHIP", clue: "a large vessel used for transporting goods or passengers by sea" },
          { n: 2, dir: "across", row: 4, col: 6, answer: "BOAT", clue: "a small vessel for travelling on water, moved by oars, sails or an engine" },
          { n: 3, dir: "across", row: 5, col: 1, answer: "RAFT", clue: "a flat floating structure for travelling across water" },
          { n: 4, dir: "across", row: 8, col: 4, answer: "STEAMER", clue: "a boat or ship driven by steam" },
          { n: 5, dir: "down", row: 1, col: 7, answer: "CANOE", clue: "a small, light, narrow boat, pointed at both ends and moved with a paddle" },
          { n: 6, dir: "down", row: 1, col: 11, answer: "TUGBOAT", clue: "a boat with a powerful engine that pulls large ships into and out of port" },
          { n: 7, dir: "down", row: 4, col: 2, answer: "YACHT", clue: "a boat with sails, sometimes an engine, used for racing or pleasure; rhymes with 'cot'" }
        ],
        answer: [
          "**Across:** 1. SHIP   2. BOAT   3. RAFT   4. STEAMER",
          "**Down:** 5. CANOE   6. TUGBOAT   7. YACHT"
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "'She goes down towards the sea ... over the mountains and down to the sea.' The words towards, over and down are prepositions. Prepositions are words that show the relationship between nouns or pronouns and other parts of a sentence - direction, location, time or logical links between ideas. Fill in the blanks with the suitable prepositions given in the brackets.",
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
    instruction: "In 'A kingfisher swept down', the word 'down' is an adverb. Words like on, off, up and down can be both prepositions and adverbs. Example: 'She ran up the stairs' (preposition) and 'She rang me up' (adverb). Fill in the blanks with prepositions or adverbs as shown in the brackets.",
    boxes: [
      {
        type: "box", kind: "remember",
        body: "A preposition is always followed by an object (a noun), whereas an adverb tells you more about the action (the verb)."
      }
    ],
    items: [
      {
        n: 1,
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

# ---------------------------------------------------------------- let us listen
$files["let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };

// Answers are based on the teacher's transcript (textbook pages 39-40).
// Part II: (ii) -> 5 is the loosest fit - none of the seven statements matches the grandmother exactly.

export const sections = [
  {
    roman: "I",
    instruction: "You will listen to five people speak about school life. As you listen, circle the words from the box that the speakers use. Two of the words are not needed. (The transcript for the teacher is on page 39.)",
    items: [
      {
        n: 1, type: "short",
        question: "Which of these words do the speakers use? lawyer, desks, homemaker, principal, posters, newspapers, marriage, advertisements, careers, books",
        answer: [
          "**Words used:** **careers** and **homemaker** (Speaker i, the father) and **books** (Speaker iv, the student).",
          "**Not used:** lawyer, desks, posters, newspapers, marriage, advertisements.",
          "*'Principal' is only the role of Speaker (v); the speaker calls herself or himself the 'Head of an institution'.*"
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Listen to the five speakers once again. As you listen, match each statement (1-7) to a speaker (i)-(v). Two statements are not needed.",
    items: [
      {
        n: 1, type: "match",
        question: "Match the statements to the speakers.",
        left: [
          "1. Promotes active participation for all in school activities",
          "2. Comments on how school makes learning Mathematics joyful",
          "3. Believes in the power of education that leads to freedom of choice",
          "4. Shares that school also means companionship",
          "5. Understands that boys and girls have different abilities",
          "6. Persuades the parent to grant permission to attend school",
          "7. Believes that learning skills is not gender-based"
        ],
        right: [
          "Speaker (i) - Father",
          "Speaker (ii) - Grandmother",
          "Speaker (iii) - Teacher",
          "Speaker (iv) - Student",
          "Speaker (v) - Principal"
        ],
        answer: [
          "**(i) Father -> 3.** He says education gives freedom to make choices in life, whether his daughter or his son wants a career or to be a homemaker.",
          "**(ii) Grandmother -> 5.** She recalls that elders once treated girls and boys differently and kept girls at home to help, and she is glad that this has changed.",
          "**(iii) Teacher -> 7.** She talks about learning hands-on skills and giving equal respect to all kinds of work.",
          "**(iv) Student -> 4.** School gives her friends with whom she can share her feelings.",
          "**(v) Principal -> 1.** Students should take part in every school activity without worrying whether it is for girls or boys.",
          "**Not needed:** statements **2** and **6**."
        ]
      }
    ]
  }
];
'@

# ---------------------------------------------------------------- let us speak
$files["let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking"] };

export const sections = [
  {
    roman: "I",
    instruction: "The River spoke to Jahnavi in a 'sleepy' voice: 'Dear, dear! What's the matter? ... You shouldn't cry, you know. And you really shouldn't be scared, when you have been coming here to see me every day, well, almost every day.' Work in pairs and take turns to speak the same sentence in 'other' voices: happy, surprised, angry, scared, sad, worried.",
    items: [
      {
        n: 1, type: "activity",
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
    instruction: "Jahnavi asks the River for advice and the River gives advice. Work in pairs to ask for and give advice in the situations below. Take turns to change roles and use the phrases in the boxes.",
    boxes: [
      {
        type: "box", kind: "advice", title: "Asking for advice",
        items: [
          "I have a problem with ... What do you think I should do?",
          "I have a problem with ... Do you think I should ...?",
          "I have a problem with ... What would you do in my position?",
          "I have a problem with ... I'd appreciate your advice on this issue."
        ]
      },
      {
        type: "box", kind: "advice", title: "Giving advice",
        items: [
          "I think you should ...",
          "Why don't you ...?",
          "The best thing to do is ...",
          "If I were you, I would / wouldn't ..."
        ]
      }
    ],
    items: [
      {
        n: 1, type: "activity",
        question: "Situation (i): You wish to play football at school, but it has an all-boys' team only.",
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

# ---------------------------------------------------------------- let us write
$files["let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing"] };

export const sections = [
  {
    roman: "I",
    instruction: "Observing Nature. Over the next few days, pay attention to the colours, shapes, patterns and textures in nature - plants, trees, flowers, birds and even the sky. Make detailed notes on textures, movements and how light plays with these things, including the features that draw your attention most (the ripple of water, the flutter of a butterfly, the colour of a bird). Then write a descriptive paragraph and give it a title.",
    boxes: [
      {
        type: "box", kind: "panel", title: "Ideas and prompts",
        columns: ["Ideas", "Prompts"],
        rows: [
          ["What do you observe?", "Every day, I see... / I find it very interesting that..."],
          ["How do you feel? Why?", "I like... because... / I feel... as..."],
          ["What is your message to everyone around you?", "I want to tell you that... / My advice to all is..."]
        ]
      }
    ],
    items: [
      {
        n: 1, type: "activity",
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

# ---------------------------------------------------------------- let us explore
$files["let-us-explore.js"] = @'
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
    instruction: "Read the poster 'The Happiness of a Nation lies in the Dignity of its Daughters' and answer the questions that follow. (Dignity means 'self-respect'.)",
    items: [
      {
        n: 1, type: "short",
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

# ---------------------------------------------------------------- summary (the story in brief)
$files["summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };

export const summary = `"The Day the River Spoke" is an extract adapted from Kamala Nair's story about Jahnavi, a nearly ten-year-old girl who lives in a coastal village in India. While her brother Gopi (Ettan) and Meena go to school, Jahnavi stays at home to look after her younger brothers, because her mother has to work in the fields. Every time she asks to go, she is told "maybe later".

One day she sits by the river and cries. A sleepy, murmuring voice asks what is wrong - it is the River. Jahnavi pours out her wish to learn to read and to find out why spiders are yellow in yellow flowers, why bamboo rustles and where the moon goes. The River tells her that the moon travels over the mountains and down to the sea, just like the River itself. It then points out that Jahnavi is braver than she thinks: she is not afraid of lizards, of a snake in the bamboo or of noisy trains. Little girls can do as much as little boys, the River says, so she should slip into school, sit quietly and listen - "it's up to you".

The next day Jahnavi gathers her courage and, with little Appu asleep on her shoulder, creeps into the back row of the classroom. The teacher finds her, learns that she is Gopi's sister and promises to talk to her father. That evening he visits the house. Jahnavi's mother, who once wanted to study herself, is glad that he came, and her father agrees to let her go. Jahnavi announces that one day she will become a teacher and bring all the little girls of her village to school. The next morning she runs to tell the River, "I did it!", and the River promises to tell her about the ships that sail the sea.`;

export const moral = `Education is a right for every child, girls and boys alike. With courage and self-belief, and with the support of kind people, we can overcome fear and the barriers in our way and make our dreams come true.`;

export const quotes = [
  { text: "\"Remember - it's up to you!\"", speaker: "The River" },
  { text: "\"Little girls can do as much as little boys.\"", speaker: "The River" },
  { text: "\"I want to learn to read like Ettan and Meena.\"", speaker: "Jahnavi" },
  { text: "\"I was scared, but I did it!\"", speaker: "Jahnavi" }
];

export const mascot = { pose: "smiling" };

export const extras = {};
'@

# ---------------------------------------------------------------- exam notes
$files["exam-notes.js"] = @'
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
    type: "keypoints",
    title: "Grammar revision",
    items: [
      "A common noun begins with a capital letter only when it is personified, as with the River.",
      "A preposition shows the relation between a noun/pronoun and the rest of the sentence (towards, over, down, at, inside, between, about) and is always followed by an object.",
      "Words like on, off, up and down can be prepositions (She ran up the stairs) or adverbs (She rang me up). An adverb tells more about the verb and has no object after it."
    ]
  },
  {
    type: "vocab",
    items: [
      { word: "splashed", meaning: "fell in drops, making a sound" },
      { word: "slithered", meaning: "moved by sliding from side to side" },
      { word: "murmuring", meaning: "speaking in a low voice" },
      { word: "startled", meaning: "surprised" },
      { word: "thicket", meaning: "a dense group of bushes and trees" },
      { word: "shrieked", meaning: "made a high-pitched sound" },
      { word: "rustle", meaning: "light sound made by leaves rubbing against each other" },
      { word: "conspiratorially", meaning: "secretly" },
      { word: "clump", meaning: "a small group of trees growing together" },
      { word: "rattling", meaning: "noise made by shaking things" },
      { word: "catamaran", meaning: "a kind of boat" },
      { word: "wailed", meaning: "(here) complained in a loud voice" }
    ]
  },
  {
    type: "likely",
    items: [
      {
        marks: 1,
        q: "Who owns the catamaran that the River likes?",
        a: "Chandu, the fisherman."
      },
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
      },
      {
        marks: 5,
        q: "What roles do the teacher and Jahnavi's mother play in making her dream come true?",
        a: "The teacher notices Jahnavi in class, welcomes her instead of chasing her out, and visits her father to find a way for her to study. Jahnavi's mother, who once wanted to go to school herself, supports her daughter and says she is glad that the teacher came. Their kindness and understanding turn Jahnavi's courage into real opportunity."
      }
    ]
  }
];
'@

# ---------------------------------------------------------------- discover to interest
$files["discover-to-interest.js"] = @'
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

# ---------------------------------------------------------------- animation (draft, dev only)
$files["animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated retelling of Jahnavi and the River." };
'@

# ---------------------------------------------------------------- write everything (UTF-8, no BOM)
$utf8 = New-Object System.Text.UTF8Encoding($false)
foreach ($key in $files.Keys) {
    $target = [System.IO.Path]::GetFullPath((Join-Path $root (Join-Path $dir $key)))
    [System.IO.File]::WriteAllText($target, $files[$key] + "`n", $utf8)
    Write-Host ("  wrote " + $target)
}
Write-Host ""
Write-Host "Success: Unit 1, Chapter 1-1 (The Day the River Spoke) generated."