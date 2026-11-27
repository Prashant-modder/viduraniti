# ---------------------------------------------------------------------------
# Class 8 English (Poorvi) - Unit 4: Environment (Part 2 Complete)
#   Unit Index
#   Chapter 11-2  Harvest Hymn (15 files)
#   Chapter 12-3  Waiting for the Rain (15 files)
#
# Run from the project root (the folder that contains "src"):
#   powershell -ExecutionPolicy Bypass -File .\create-unit-4-part2.ps1
# ---------------------------------------------------------------------------

$root = (Get-Location).Path
$base = "src\data\8\english\poorvi\unit-4"

$files = [ordered]@{}

# ---- index.js
$files["index.js"] = @'
export const unit = {
  label: "Unit 4: Environment",
  slug: "unit-4"
};
'@

# ===========================================================================
# CHAPTER 11-2: Harvest Hymn
# ===========================================================================

# ---- chapter-11-2/animations/story.js
$files["chapter-11-2\animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated musical celebration of Sarojini Naidu's Harvest Hymn across rural Indian fields." };
'@

# ---- chapter-11-2/before-we-read.js
$files["chapter-11-2\before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Vocabulary"] };

export const sections = [
  {
    roman: "I",
    instruction: "Work in pairs and share your responses with your classmates and teacher.",
    items: [
      {
        n: 1, type: "activity",
        question: "India celebrates many harvest festivals. When is the harvest festival celebrated in your region and how is it celebrated?",
        answer: "*(Personal answer - sample.)* In our region, Makar Sankranti / Pongal / Lohri is celebrated in mid-January (and Baisakhi / Bihu in April). Families clean and decorate their homes, cook sweet dishes from freshly harvested rice and jaggery, sing folk songs, fly kites or light bonfires, and express gratitude for a bountiful harvest."
      },
      {
        n: 2,
        question: "A hymn refers to a song of praise.",
        parts: [
          {
            label: "(i)", type: "activity",
            question: "To whom do we offer a hymn?",
            answer: "*(Class discussion - sample answer.)* We offer a hymn to God, divine forces, or sacred elements of nature such as the sun, rain, and Mother Earth."
          },
          {
            label: "(ii)", type: "activity",
            question: "When and where do we sing a hymn?",
            answer: "*(Class discussion - sample answer.)* We sing hymns during morning prayers, festivals, harvest celebrations, school assemblies, and visits to temples or places of worship."
          },
          {
            label: "(iii)", type: "activity",
            question: "Why do we offer it?",
            answer: "*(Class discussion - sample answer.)* We offer a hymn to express gratitude, reverence, joy, and devotion, and to pray for blessings, peace, and prosperity."
          }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Some poets and authors use words that are no longer a part of common usage. Such words are called archaic words. Work in pairs. Read the sentences given below. Match the underlined archaic words in Column 1 with their meanings in Column 2. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1, type: "match",
        passage: "'Thou art my friend, and I trust thee. Thy kindness is great, and everything that is mine is thine.'",
        question: "Match the underlined archaic words in Column 1 with their meanings in Column 2.",
        leftHead: "Column 1",
        rightHead: "Column 2",
        leftLabels: ["1.", "2.", "3.", "4.", "5."],
        rightLabels: ["(i)", "(ii)", "(iii)", "(iv)", "(v)"],
        left: ["thou", "art", "thee", "thy", "thine"],
        right: ["yours", "you (object)", "you (subject)", "are", "your"],
        answer: ["C", "D", "B", "E", "A"]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Work in pairs. Read the paragraph and select the correct meaning for each underlined word from the options given below. Share your answers with your classmates and teacher.",
    items: [
      {
        n: 1,
        passage: "Under the golden 1. **radiance** of the evening sun, the villagers gathered to pay 2. **tribute** to their 3. **cherished** elder, who had dedicated his life to their well-being. His wise 4. **counsel** had guided generations, steering them through challenges. Known for his 5. **munificent** spirit, he never hesitated to share his resources generously.",
        parts: [
          { label: "1", type: "mcq", question: "radiance :", options: ["(i) glow", "(ii) brilliance"], answer: "**(i) glow**" },
          { label: "2", type: "mcq", question: "tribute :", options: ["(i) respect", "(ii) gratitude"], answer: "**(i) respect**" },
          { label: "3", type: "mcq", question: "cherished :", options: ["(i) preserved", "(ii) loved"], answer: "**(ii) loved**" },
          { label: "4", type: "mcq", question: "counsel :", options: ["(i) advice", "(ii) decision"], answer: "**(i) advice**" },
          { label: "5", type: "mcq", question: "munificent :", options: ["(i) rich", "(ii) generous"], answer: "**(ii) generous**" }
        ]
      }
    ]
  }
];
'@

# ---- chapter-11-2/discover-to-interest.js
$files["chapter-11-2\discover-to-interest.js"] = @'
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
          "- **Sarojini Naidu** - known as the 'Nightingale of India'; read her other lyrical poems such as *Indian Weavers* and *Palanquin Bearers*.",
          "- **Harvest festivals of India** - compare Pongal, Makar Sankranti, Lohri, Bihu, Baisakhi, Onam, and Nuakhai.",
          "- **Indian millets (Shree Anna)** - explore Bajra, Jowar, Ragi, Foxtail, and Little Millet and their nutritional benefits.",
          "- **Traditional farming implements** - compare traditional hand tools (sickle, scythe, wooden plough) with modern agricultural machinery."
        ]
      }
    ]
  }
];
'@

# ---- chapter-11-2/exam-notes.js
$files["chapter-11-2\exam-notes.js"] = @'
export const meta = { title: "Exam Notes", status: "published", tags: ["Revision"] };

export const blocks = [
  {
    type: "keypoints",
    title: "Poem at a glance",
    items: [
      "Written by Sarojini Naidu, 'Harvest Hymn' is a celebratory choral poem of four eight-line stanzas honouring nature and the Supreme Creator during harvest.",
      "Stanza 1 (Men's Voices): Praises Surya (the Sun) for his generous light that ripens grain and fruit, offering songs, garlands, cymbal, and flute.",
      "Stanza 2 (Men's Voices): Praises Varuna (the God of Rain and Waters) for his merciful rain and dew that nourish furrows and crops, with cymbal and pipe.",
      "Stanza 3 (Women's Voices): Praises Prithvi (Mother Earth) as the nurturing queen whose fertile soil feeds all life, offering love, garlands, cymbal, and drum.",
      "Stanza 4 (All Voices): Unites everyone in praising Bramha (Lord of the Universe / ineffable Om) as both Seed and Scythe, offering their lives and labours for support, counsel, and care."
    ]
  },
  {
    type: "keypoints",
    title: "Poetic devices & symbolism",
    items: [
      "Symbolism - Surya = light, energy, prosperity; Varuna = mercy, rain, nourishment; Prithvi = motherhood, fertility, source of life; Seed & Scythe = beginning (creation) and end (harvest).",
      "Personification - Earth addressed as 'sweet and omnipotent mother'.",
      "Metaphor - 'Thou art the Seed and the Scythe of our harvests'.",
      "Imagery - 'The wealth of our valleys, new-garnered and ripe'; 'gold of our fields'.",
      "Alliteration - 'munificent lord of the morn', 'lives and our labours'.",
      "Archaic diction - thou, art, thee, thy, thine create a solemn, sacred hymn-like tone."
    ]
  },
  {
    type: "vocab",
    items: [
      { word: "munificent", meaning: "very generous", use: "Bright and munificent lord of the morn!" },
      { word: "beneficent", meaning: "kind and doing good", use: "Great and beneficent lord of the main!" },
      { word: "radiance", meaning: "warm glow or brightness", use: "O giver of mellowing radiance" },
      { word: "opulent", meaning: "rich and abundant", use: "With gifts of thy opulent giving we come" },
      { word: "succour", meaning: "help and support in difficulty", use: "Grant us thy succour, thy counsel, thy care." },
      { word: "ineffable", meaning: "indescribable; too great for words", use: "Father eternal, ineffable Om!" }
    ]
  },
  {
    type: "likely",
    items: [
      { marks: 1, q: "Which musical instruments accompany the praise of Prithvi in Stanza 3?", a: "Cymbal and drum." },
      {
        marks: 2,
        q: "Why does the poet divide the poem into Men's Voices, Women's Voices, and All Voices?",
        a: "It shows that harvesting and thanksgiving involve the entire village communityâ€”men, women, and everyone unitedâ€”creating the musical effect of a joyful rural chorus."
      },
      {
        marks: 3,
        q: "Explain the symbolism of 'the Seed and the Scythe' in the final stanza.",
        a: "The Seed represents creation and the beginning of the agricultural cycle, while the Scythe represents reaping and harvest. Calling God both Seed and Scythe symbolises that the divine sustains the entire cycle of life from start to finish."
      },
      {
        marks: 5,
        q: "How does Sarojini Naidu express gratitude towards nature and the divine in 'Harvest Hymn'?",
a: "Through rhythmic praise accompanied by garlands, songs, cymbals, flute, pipe, and drum, the villagers honour each force that makes a harvest possible: Surya for ripening sunlight, Varuna for life-giving rain and dew, Prithvi for fertile soil, and Bramha as the eternal source of existence. By offering both their produce and their lives and labours, the poem shows deep reverence, harmony with nature, and thankful celebration."
}
]
}
];
'@

# ---- chapter-11-2/glossary.js

$files["chapter-11-2\glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };
export const terms = [
{ term: "thou / thee", meaning: "archaic forms of 'you' (subject / object)" },
{ term: "art", meaning: "archaic form of 'are'" },
{ term: "thy / thine", meaning: "archaic forms of 'your' / 'yours'" },
{ term: "munificent", meaning: "generous; giving freely" },
{ term: "beneficent", meaning: "kind; doing good" },
{ term: "radiance", meaning: "warm glow or brightness" },
{ term: "tribute", meaning: "an offering of respect and gratitude" },
{ term: "cherished", meaning: "loved and cared for deeply" },
{ term: "counsel", meaning: "wise advice or guidance" },
{ term: "succour", meaning: "help and support" },
{ term: "opulent", meaning: "rich and plentiful" },
{ term: "manifold", meaning: "many and varied" },
{ term: "ineffable", meaning: "indescribable; beyond words" },
{ term: "garnered", meaning: "gathered and stored (of harvest)" }
];
'@

# ---- chapter-11-2/index.js

$files["chapter-11-2\index.js"] = @'
export const chapter = {
title: "Harvest Hymn",
abs: 11,
pos: 2,
unit: "unit-4",
author: "Sarojini Naidu",
related: [
{ label: "Ch 10-1 Â· The Cherry Tree", href: "/ncert/class-8/subject:english/poorvi/unit-4/chapter-10-1" },
{ label: "Ch 12-3 Â· Waiting for the Rain", href: "/ncert/class-8/subject:english/poorvi/unit-4/chapter-12-3" }
]
};
'@

# ---- chapter-11-2/let-us-discuss.js

$files["chapter-11-2\let-us-discuss.js"] = @'
export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Poem", "Poetic devices"] };
export const sections = [
{
roman: "I",
instruction: "Write the stanza number for the main idea of each stanza given below. Share your answers with your classmates and teacher.",
items: [
{
n: 1, type: "table",
question: "Write the stanza number (1-4) next to each main idea.",
columns: ["Main idea", "Stanza number"],
rows: [
["1. The speakers recognise the lord's kindness and praise him for nourishing the field.", ""],
["2. The speakers praise the generosity of the creator of the universe who ensures a rich harvest.", ""],
["3. The speakers devote their lives and work as a mark of respect to the lord and seek his support, wisdom, and care.", ""],
["4. The speakers pay homage to the Earth and appreciate her role in supporting life, by dedicating their harvest.", ""]
],
answer: [
["1. The speakers recognise the lord's kindness and praise him for nourishing the field.", "Stanza 2"],
["2. The speakers praise the generosity of the creator of the universe who ensures a rich harvest.", "Stanza 1"],
["3. The speakers devote their lives and work as a mark of respect to the lord and seek his support, wisdom, and care.", "Stanza 4"],
["4. The speakers pay homage to the Earth and appreciate her role in supporting life, by dedicating their harvest.", "Stanza 3"]
]
}
]
},
{
roman: "II",
instruction: "Fill in the blanks by choosing the appropriate words or phrases from within the brackets.",
items: [
{
n: 1,
figure: { src: "images/harvesting-crop.png", alt: "A village woman harvesting golden grain with a sickle in a field" },
parts: [
{
label: "1", type: "fill",
question: "The setting of the poem is a rural landscape, possibly during a ______ (harvest/religious) festival.",
answer: "harvest"
},
{
label: "2", type: "fill",
question: "The tone of the poem is respectful and celebratory because it praises ______ (the men and women/nature and the Lord) with deep respect and gratitude.",
answer: "nature and the Lord"
},
{
label: "3", type: "fill",
question: "In the line 'Thou art our Hands and our Heart and our Home', the letter 'h' is capitalised in 'Hands', 'Heart' and 'Home' because . (it represents the hard work of farmers/God resides in them)",
answer: "God resides in them"
}
]
}
]
},
{
roman: "III",
instruction: "Identify the poetic device used in the following lines from the poem.",
items: [
{
n: 1, type: "short",
question: "â€¢ Bright and munificent lord of the morn!\nâ€¢ We bring thee our lives and our labours for tribute",
answer: "Alliteration â€” repeated initial consonant sounds: /m/ in munificent ... morn and /l/ in lives ... labours."
}
]
},
{
roman: "IV",
instruction: "Match the lines from the poem in Column 1 with their expressions in Column 2. Choose the appropriate poetic device from the box given below and write in Column 3.",
items: [
{
n: 1, type: "table",
wordBox: ["imagery", "alliteration", "simile", "metaphor", "personification"],
question: "Match Column 1 with Column 2 and write the correct poetic device in Column 3.",
columns: ["Column 1", "Column 2", "Column 3"],
rows: [
["1. sweet and omnipotent mother", "(i) creates a clear description of the scene and appeals to the senses", ""],
["2. The wealth of our valleys, new-garnered and ripe", "(ii) implied comparison of growth and reaping with beginning and end of all life", ""],
["3. Thou art the Seed and the Scythe", "(iii) the earth is being given human-like qualities", ""]
],
answer: [
["1. sweet and omnipotent mother", "(iii) the earth is being given human-like qualities", "personification"],
["2. The wealth of our valleys, new-garnered and ripe", "(i) creates a clear description of the scene and appeals to the senses", "imagery"],
["3. Thou art the Seed and the Scythe", "(ii) implied comparison of growth and reaping with beginning and end of all life", "metaphor"]
]
}
]
},
{
roman: "V",
instruction: "Certain words or phrases are repeated in the same line of the poem. For example, The gold of our fields and the gold of our fruit;",
items: [
{
n: 1, type: "long",
question: "Find more such repetitions from the poem. What is the poet's purpose of using repetition in the poem?",
answer: [
"Examples of repetition within a line:",
"- Lord of the lotus, lord of the harvest,",
"- Lord of the rainbow, lord of the harvest,",
"- Queen of the gourd-flower, queen of the harvest,",
"- Lord of the Universe, Lord of our being,",
"- We bring thee our songs and our garlands for tribute, / our thanks and our garlands / our love and our garlands / our lives and our labours",
"- O Life of all life and all blessing, we hail thee,",
"",
"Purpose: Repetition gives the poem a musical, chant-like rhythm suitable for a communal hymn, emphasises the villagers' deep devotion and gratitude, and unites all four stanzas in a celebratory flow."
]
}
]
},
{
roman: "VI",
instruction: "The poem uses symbolism to convey deeper meanings. Match the symbols in Column 1 with the meanings they convey in Column 2.",
items: [
{
n: 1, type: "match",
question: "Match the symbols in Column 1 with the meanings they convey in Column 2.",
leftHead: "Column 1",
rightHead: "Column 2",
leftLabels: ["1.", "2.", "3."],
rightLabels: ["(i)", "(ii)", "(iii)"],
left: [
"Prithvi (the Earth)",
"Surya (the Sun)",
"Varuna (Rain)"
],
right: [
"light, energy, lifeâ€”representing the giver of warmth and prosperity",
"mercy and nourishmentâ€”crucial for agriculture and sustenance",
"fertile land, motherhood, nurturingâ€”the source of all life"
],
answer: ["C", "A", "B"]
}
]
}
];
'@

# ---- chapter-11-2/let-us-explore.js

$files["chapter-11-2\let-us-explore.js"] = @'
export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Nutrition"] };
export const sections = [
{
roman: "I",
instruction: "Millets are a varied group of small-seeded grasses. They have more fibre and minerals than other cereals. Millets have been a part of the Indian cuisine for years. They have been rediscovered worldwide as superfoods.",
items: [
{
n: 1, type: "activity",
reference: {
title: "Pearl Millet (Bajra) â€” Pennisetum glaucum (L.) R. Br.",
body: "Common name: Bajra (Bajree, Sajje, Kambu, Sajja). Major cultivation areas: Rajasthan, Maharashtra, Gujarat, Uttar Pradesh, Haryana. Per 100 g: Energy 347 Kcal, Protein 10.9 g, Fat 5.43 g, Carbohydrate 61.8 g, Ca 27.4 mg, Fe 6.4 mg, Folic Acid 36.1 ug. Health benefits: reduces cholesterol, promotes bone & heart health, helps treat stomach ulcers, aids weight loss. Uses: Khichdi, Roti, Upma, Idli, Khakhra, Parathas. More info: eatrightindia.gov.in"
},
question: "1. Read the information on Pearl Millet given below. Use the link given below to know more about other kinds of millets.",
answer: "(Information reading task.) Pearl millet (bajra) is rich in protein, iron, niacin, and dietary fibre, tolerates drought exceptionally well, and is India's most widely grown millet. Other nutritious Indian millets include jowar (sorghum), ragi (finger millet), kangni (foxtail millet), and kodo millet."
},
{
n: 2,
question: "Work in groups of four and do the following activities.",
parts: [
{
label: "(i)", type: "activity",
question: "Find out if millets are a part of your cuisine.",
answer: "(Personal answer - sample.) Yes! In winter my family eats bajra roti with jaggery and ghee, ragi dosa or ragi malt for breakfast, and jowar bhakri with vegetable curry."
},
{
label: "(ii)", type: "activity",
question: "Find recipes with millets and compile them into a booklet.",
answer: "(Group project.) Collect 4-5 traditional dishes (e.g. Bajra Khichdi, Ragi Idli, Jowar Upma, Foxtail Millet Pulao), list ingredients, steps, and nutritional benefits, add drawings, and bind them into a class recipe booklet."
},
{
label: "(iii)", type: "activity",
question: "Create a recipe of your choice.",
answer: "(Sample recipe â€” Vegetable Bajra Khichdi.) Soak 1 cup crushed bajra and 1/2 cup moong dal for 2 hours. Pressure-cook with chopped carrots, peas, turmeric, cumin, ginger, salt, and 4 cups water for 4 whistles. Serve hot with a spoon of ghee and curd."
}
]
}
]
},
{
roman: "II",
instruction: "Songs related to harvest season form a part of our culture and heritage. Talk to the elders in your house and learn a song sung on a harvest festival. Share it with your classmates and teacher. Then, compile all the songs to create a songbook with the help of teacher.",
items: [
{
n: 1, type: "activity",
question: "Collect a harvest festival song from elders and help compile a class songbook.",
answer: "(Class project.) Ask grandparents or elders for a folk song sung during Pongal, Bihu, Lohri, Baisakhi, or Makar Sankranti. Write down the original lyrics with a short English translation and the name of the region/festival, then compile everyone's pages into a class Harvest Songbook."
}
]
}
];
'@

# ---- chapter-11-2/let-us-learn.js

$files["chapter-11-2\let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary"] };
export const sections = [
{
roman: "I",
instruction: "Match the pictures of the farming implements given in Column 1 with their use given in Column 2. Then, fill in the blanks in Column 3 to complete the name of the implement.",
items: [
{
n: 1, type: "table",
figure: { src: "images/farming-implements.png", alt: "Six numbered illustrations of farming implements: 1 sickle, 2 scythe, 3 plough, 4 trowel, 5 rake, 6 spade" },
question: "Match each implement (1-6) with its use ((i)-(vi)) and complete its name.",
columns: ["Column 1", "Column 2", "Column 3"],
rows: [
["1. (Curved hand sickle)", "(i) A tool with a long handle with metal teeth for collecting hay or leaves.", "S __ C K L __"],
["2. (Long-handled scythe)", "(ii) A small hand tool used for digging and making shallow furrows.", "S C __ T H __"],
["3. (Wooden plough)", "(iii) A hand-held tool with a curved blade attached to a short handle. It is used for harvesting crops.", "P L __ __ G H"],
["4. (Small hand trowel)", "(iv) A tool pulled by oxen. It is used for turning over the soil in the field so that seeds can be sown or planted.", "T R __ W __ L"],
["5. (Toothed garden rake)", "(v) A farm tool having a flat rectangular blade attached to a long wooden handle used for digging the soil.", "R __ K __"],
["6. (Flat-blade spade)", "(vi) A hand-held tool with a long-curved blade attached to a long handle used for cutting tall grass.", "S P __ D __"]
],
answer: [
["1. (Curved hand sickle)", "(iii) A hand-held tool with a curved blade attached to a short handle. It is used for harvesting crops.", "SICKLE"],
["2. (Long-handled scythe)", "(vi) A hand-held tool with a long-curved blade attached to a long handle used for cutting tall grass.", "SCYTHE"],
["3. (Wooden plough)", "(iv) A tool pulled by oxen. It is used for turning over the soil in the field so that seeds can be sown or planted.", "PLOUGH"],
["4. (Small hand trowel)", "(ii) A small hand tool used for digging and making shallow furrows.", "TROWEL"],
["5. (Toothed garden rake)", "(i) A tool with a long handle with metal teeth for collecting hay or leaves.", "RAKE"],
["6. (Flat-blade spade)", "(v) A farm tool having a flat rectangular blade attached to a long wooden handle used for digging the soil.", "SPADE"]
]
}
]
},
{
roman: "II",
instruction: "Choose the correct synonyms for the underlined words in the given sentences from the box below. Circle the words or phrases in the sentences that helped you to infer the meanings. One example has been done for you.",
items: [
{
n: 1,
wordBox: ["generous", "help", "brightness", "indescribable", "kind"],
parts: [
{
label: "1", type: "short",
question: "The king was beneficent to the poor because he took good care of them. (example)",
answer: "synonym: kind | Context clue to circle: took good care"
},
{
label: "2", type: "short",
question: "He was munificent towards the needy and donated a lot for their health care.",
answer: "synonym: generous | Context clue to circle: donated a lot"
},
{
label: "3", type: "short",
question: "When he lost his job, all his friends gave him succour by supporting him with money.",
answer: "synonym: help | Context clue to circle: supporting him with money"
},
{
label: "4", type: "short",
question: "When the sun's rays came into the dark room, the whole room was full of radiance.",
answer: "synonym: brightness | Context clue to circle: sun's rays came into the dark room"
},
{
label: "5", type: "short",
question: "The little girl was speechless with ineffable joy when she got her birthday gift from her aunt.",
answer: "synonym: indescribable | Context clue to circle: speechless"
}
]
}
]
},
{
roman: "III",
instruction: "You have learnt about some archaic words. Some more archaic words are given below. Refer to a dictionary to find commonly used words which are similar in meaning.",
items: [
{
n: 1,
parts: [
{ label: "1", type: "short", question: "morrow", answer: "tomorrow (or the next day)" },
{ label: "2", type: "short", question: "hither", answer: "here (or to this place)" },
{ label: "3", type: "short", question: "quoth", answer: "said" },
{ label: "4", type: "short", question: "betwixt", answer: "between" },
{ label: "5", type: "short", question: "yonder", answer: "over there (at a distance)" }
]
}
]
}
];
'@

# ---- chapter-11-2/let-us-listen.js

$files["chapter-11-2\let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };
export const sections = [
{
roman: "I",
instruction: "Listen to the talk about paddy cultivation. As you listen, number the events in the correct order in which they happen. (Transcript for teacher on page 203)",
items: [
{
n: 1, type: "order",
figure: { src: "images/paddy-cultivation.png", alt: "Two farmers transplanting green rice seedlings in a flooded paddy field" },
question: "Number the seven stages of paddy cultivation in the correct order.",
items: [
"Transplanting of seedlings",
"Ploughing of soil",
"Threshing of grains",
"Puddling of land",
"Harvesting of paddy",
"Irrigating the field",
"Milling of rice"
],
answer: [2, 4, 6, 1, 5, 3, 7]
}
]
},
{
roman: "II",
instruction: "Now, listen to the talk again. As you listen, choose the correct option to answer the questions that follow.",
items: [
{
n: 1, type: "mcq",
question: "What is the main step in preparing the soil for cultivation of rice?",
options: ["(i) Ploughing the soil", "(ii) Clearing the soil", "(iii) Puddling the soil"],
answer: "(iii) Puddling the soil"
},
{
n: 2, type: "mcq",
question: "How long does it take for rice seeds to grow into seedlings before being transplanted?",
options: ["(i) 2-3 weeks", "(ii) 4-5 weeks", "(iii) 6-7 weeks"],
answer: "(ii) 4-5 weeks"
},
{
n: 3, type: "mcq",
question: "Why is drying rice grains important after threshing?",
options: [
"(i) To get rice seeds for plantation",
"(ii) To separate the rice grains easily",
"(iii) To store the rice grains for longer"
],
answer: "(iii) To store the rice grains for longer"
}
]
}
];
'@

# ---- chapter-11-2/let-us-speak.js

$files["chapter-11-2\let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking", "Pronunciation"] };
export const sections = [
{
roman: "I",
instruction: "In English, some letters are not pronounced in certain words. For example, in words like 'knife', 'knowledge', and 'know', the first letter 'k' is not pronounced. Let us look at a few more such examples.",
items: [
{
n: 1, type: "activity",
wordBox: ["hymn", "column", "autumn", "solemn", "womb", "tomb", "bomb", "climb", "comb"],
question: "â€¢ In the words given below the letter 'n' is silent when it appears with 'm' at the end of the word: hymn, column, autumn, solemn. Now, say these words aloud.\nâ€¢ In the words given below the letter 'b' is silent when it appears with 'm': womb, tomb, bomb, climb, comb. Now, say these words aloud.",
answer: [
"(Pronunciation practice.)",
"- Silent 'n' after 'm': hymn (/hÉªm/), column (/ËˆkÉ’l.É™m/), autumn (/ËˆÉ”Ë.tÉ™m/), solemn (/ËˆsÉ’l.É™m/).",
"- Silent 'b' after 'm': womb (/wuËm/), tomb (/tuËm/), bomb (/bÉ’m/), climb (/klaÉªm/), comb (/kÉ™ÊŠm/)."
]
}
]
},
{
roman: "II",
instruction: "In our country, harvest is celebrated with the preparation of delicious dishes. Work in groups and make a presentation on any popular dish made during the harvest festival in your region. Use the prompts given in the box to make your presentation. Make sure that all the members share their views.",
items: [
{
n: 1, type: "activity",
figure: { src: "images/harvest-dish.png", alt: "A decorated clay harvest pot overflowing with cooked rice beside festive fruits and sweets on a banana leaf" },
wordBox: [
"Greet the audience: Good morning to all of you gathered here...",
"Introduce group & topic: Today we, ___, ___ and ___ are here to tell you about...",
"Structure: We will start off with... / Following this... / Finally...",
"Describe details: Now I'll move on to... / Next... / Let me tell you about...",
"Conclude & thank: In conclusion, I'd like to say... / Thank you for listening."
],
question: "Prepare a group presentation on a regional harvest dish covering: name & other regional names, ingredients, preparation, serving, taste, special ritual, and a special memory.",
answer: [
"(Group presentation - sample on Sakkarai Pongal.)",
"Member 1: Good morning to all of you gathered here. Today we, Meera, Karthik, and Ananya, are here to tell you about Sakkarai Pongal, a traditional harvest dish of Tamil Nadu. We will start off with its name and ingredients, move on to how it is prepared and served, and finally share its ritual and our favourite memory.",
"Member 2: Let's begin by introducing the dish. Sakkarai Pongalâ€”similar to sweet khichdi or kheer in other parts of Indiaâ€”is made from freshly harvested raw rice, split moong dal, melted jaggery, milk, ghee, cardamom, cashews, and raisins. The rice and dal are cooked slowly in a decorated clay or brass pot until soft, then mixed with jaggery syrup and roasted dry fruits.",
"Member 3: Now I'll move on to its taste and ritual. Served warm on fresh green banana leaves, it tastes rich, sweet, and fragrant with cardamom and ghee. As the milk boils over the pot outdoors, everyone cheers 'Pongalo Pongal!' to welcome abundance. My favourite memory is waking up early with my grandparents to decorate the sugarcane stalks around the stove. In conclusion, harvest dishes remind us to thank farmers and nature. Thank you for listening!"
]
}
]
}
];
'@

# ---- chapter-11-2/let-us-think-and-reflect.js

$files["chapter-11-2\let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };
export const sections = [
{
roman: "I",
instruction: "Read the given extracts and answer the questions that follow.",
items: [
{
n: 1,
passage: We bring thee our songs and our garlands for tribute, The gold of our fields and the gold of our fruit; O giver of mellowing radiance, we hail thee, We praise thee, O Surya, with cymbal and flute.,
parts: [
{
label: "(i)", type: "mcq",
question: "What does the act of bringing songs and garlands as tribute suggest about the people's relationship with the divine?",
options: [
"A. They fear the gods and wish to calm them in any way possible.",
"B. They have a deep sense of reverence and gratitude towards the divine.",
"C. They are forced to perform rituals without understanding the divine.",
"D. They depend on the gods for their daily needs and activities."
],
answer: "B. They have a deep sense of reverence and gratitude towards the divine."
},
{
label: "(ii)", type: "fill",
question: "Complete the following sentence suitably.\n\nThe word 'gold' in the phrases 'the gold of our fields' and 'the gold of our fruit' symbolises ______.",
answer: "...the richness, abundance, and prosperity of the ripe harvest (golden grains and fruits)."
},
{
label: "(iii)", type: "short",
question: "How does the description 'O giver of mellowing radiance' help us understand Surya's role in the harvest?",
answer: "It shows that Surya's gentle, warm sunlight ripens and matures the grain and fruit, making the harvest sweet, golden, and ready to gather."
},
{
label: "(iv)", type: "fill",
question: "Fill in the blank by selecting the correct option from those given in the brackets.\n\nThe use of cymbal and flute signifies ______. (joy and celebration/meditation and worship)",
answer: "joy and celebration"
}
]
},
{
n: 2,
passage: All Voices: Lord of the Universe, Lord of our being, Father eternal, ineffable Om! Thou art the Seed and the Scythe of our harvests, Thou art our Hands and our Heart and our Home.,
parts: [
{
label: "(i)", type: "mcq",
question: "In the phrase 'Lord of our being,' what does the word 'being' most likely refer to?",
options: [
"A. Our physical body",
"B. Our entire existence",
"C. Our spiritual practices",
"D. Our earthly possessions"
],
answer: "B. Our entire existence"
},
{
label: "(ii)", type: "short",
question: "Identify whether the following statement is true or false.\n\nThe imagery of 'the Seed and the Scythe' symbolises the divine's role as both the beginning (creation) and the end (harvest) of the agricultural cycle.",
answer: "True."
},
{
label: "(iii)", type: "short",
question: "Identify the phrases from the extract that mean the following:\nA. The divine as a timeless, everlasting presence\nB. Beyond human comprehension or description",
answer: "- A. Father eternal\n- B. ineffable Om"
},
{
label: "(iv)", type: "short",
question: "How do we know that these lines from the extract are spoken as a chorus?",
answer: "The stanza begins with the heading 'All Voices:' and uses collective plural pronouns like 'our', showing that all the men and women sing these lines together in unison."
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
n: 1, type: "short",
question: "Why do the farmers hail the God of rain?",
answer: "The farmers hail Varuna, the God of rain, because his merciful rain and dewfall nourish the ploughed furrows and help the grain grow and ripen into a rich harvest."
},
{
n: 2, type: "short",
question: "What is being referred to as 'wealth of our valleys'? Why?",
answer: "The freshly harvested, ripe crops and grains grown in the valleys are referred to as the 'wealth of our valleys' because they sustain the villagers and bring prosperity."
},
{
n: 3, type: "short",
question: "State one reason why the women refer to the Earth as a 'source of manifold gladness'.",
answer: "Because Mother Earth (Prithvi) generously feeds everyone from her fertile soil and gives birth to abundant crops, flowers, and riches that fill human lives with joy."
},
{
n: 4, type: "short",
question: "Why does everyone in the poem offer their 'labours for tribute'?",
answer: "They offer their lives and hard work as tribute to show deep humility and gratitude, recognising that their strength, skill, and harvest are all blessings from the Supreme Creator."
},
{
n: 5, type: "long",
question: "Why has the poet presented the poem as voices of men, women, and all voices?",
answer: "Dividing the hymn into Men's Voices, Women's Voices, and All Voices reflects how the entire rural community participates together in farming and harvest thanksgiving. It creates a lively choral rhythm and ends in harmony as everyone joins in praising the Creator."
},
{
n: 6, type: "long",
question: "How does the poet create the joyous atmosphere of rural India at harvesting time?",
answer: "Sarojini Naidu uses rich sensory imagery of golden fields, ripe fruit, fragrant garlands, and gourd-flowers, paired with traditional Indian musicâ€”cymbals, flute, pipe, and drumâ€”and joyful collective chanting ('we hail thee', 'we praise thee') to evoke a festive rural celebration."
},
{
n: 7, type: "long",
question: "Why is the poem presented as a hymn?",
answer: "The poem is presented as a hymn because it is a sacred song of praise, gratitude, and devotion addressed directly to nature's elements (Surya, Varuna, Prithvi) and the Supreme Creator (Bramha), using reverent archaic language and musical refrain."
}
]
}
];
'@

# ---- chapter-11-2/let-us-write.js

$files["chapter-11-2\let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing", "Slogan"] };
export const sections = [
{
roman: "I",
instruction: "Creative slogans are used to spread a message to capture the reader's attention. Your school wishes to express gratitude to the farmers who play an important role in providing us the food on our plates. Draft a creative slogan to be put up on the school notice board. Remember to: focus on the main idea to be expressed; use simple language; be conciseâ€”express yourself in a few words. You may write the slogan on a chart paper and decorate it.",
items: [
{
n: 1, type: "activity",
question: "Draft a creative slogan expressing gratitude to farmers for the school notice board.",
answer: [
"(Creative writing - sample slogans; choose one and decorate it neatly on chart paper.)",
"- "Every Grain Tells a Farmer's Story â€” Thank a Farmer Today!"",
"- "From Plough to Plate, Farmers Make Our Nation Great!"",
"- "Respect the Hands That Feed the Land!"",
"- "No Farmers, No Food â€” Honour Their Hard Work with Gratitude!""
]
}
]
}
];
'@

# ---- chapter-11-2/summary.js

$files["chapter-11-2\summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };
export const summary = `"Harvest Hymn" by Sarojini Naidu is a joyous song of thanksgiving sung by Indian villagers during the harvest season. Structured as a community chorus of Men's Voices, Women's Voices, and All Voices, the hymn honours the forces of nature and the Supreme Creator that make every harvest possible.
First, the men praise Surya, the Sun God, whose generous, ripening radiance turns fields and fruits to gold, offering songs, garlands, cymbals, and flute. Next, they praise Varuna, the God of Rain and Waters, whose merciful rain and dew nourish the furrows and ripen the valley's grain, accompanied by cymbal and pipe. Then the women honour Prithvi, Mother Earth, as the all-powerful, nurturing queen whose abundant soil feeds everyone, offering love, garlands, cymbals, and drums. Finally, all voices unite to praise Bramha, the eternal Lord of the Universe, dedicating their lives and labours in gratitude and praying for support, wisdom, and care.`;
export const moral = We should honour nature's elementsâ€”sun, rain, and earthâ€”and celebrate the hard work of farmers with deep gratitude and reverence.;
export const quotes = [
{ text: `"O giver of mellowing radiance, we hail thee,"`, by: "Sarojini Naidu" },
{ text: `"Thou art the Seed and the Scythe of our harvests,"`, by: "Sarojini Naidu" }
];
export const mascot = { pose: "smiling" };
export const extras = {
"Four stanzas at a glance": [
{ label: "Stanza 1 (Men's Voices):", text: "Praises Surya (Sun) with cymbal and flute." },
{ label: "Stanza 2 (Men's Voices):", text: "Praises Varuna (Rain) with cymbal and pipe." },
{ label: "Stanza 3 (Women's Voices):", text: "Praises Prithvi (Earth) with cymbal and drum." },
{ label: "Stanza 4 (All Voices):", text: "Praises Bramha (Creator) with cymbal and prayer." }
]
};
'@

# ---- chapter-11-2/textbook.js

$files["chapter-11-2\textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Poem"] };
export const originalUrl = "ncert.nic.in";
export const author = "Sarojini Naidu";
export const cover = {
image: "image.png",
alt: "Indian villagers celebrating the harvest with garlands, flowers, cymbals, flute, horn, and drum",
caption: "A joyful rural harvest celebration"
};
export const intro = A guided reading of "Harvest Hymn" by Sarojini Naidu. The four choral stanzasâ€”sung by Men's Voices, Women's Voices, and All Voicesâ€”are explained stanza by stanza in simple words.;
export const parts = [
{
heading: "Stanza 1 (Men's Voices): Praise to Surya, the Sun",
image: "images/harvest-celebration-1.png",
imageAlt: "Village men and a boy celebrating with cymbals, flute, and horn beneath the bright sun",
explain: The village men open the harvest celebration by praising Surya, the bright and generous lord of the morning, the lotus, and the harvest. They thank him for the warmth and abundance that helped their seeds sprout and ripened their grain and fruit into golden plenty. Bringing songs and fresh garlands as a respectful offering, they hail the giver of gentle, ripening sunlight with cymbals and flute.,
glossary: [
{ word: "munificent", meaning: "generous; giving freely" },
{ word: "radiance", meaning: "warm glow or brightness" },
{ word: "tribute", meaning: "an offering of respect and gratitude" }
]
},
{
heading: "Stanza 2 (Men's Voices): Praise to Varuna, the God of Rain",
explain: Next, the men turn in gratitude to Varuna, the kind lord of the rainbow, ocean, and harvest. They acknowledge that his gentle mercy nourished their ploughed furrows and helped their crops grow full and ripe. Offering thanks, garlands, and the freshly gathered wealth of their valleys, they praise the sender of rain and morning dew with cymbals and pipe.,
glossary: [
{ word: "beneficent", meaning: "kind; doing good" },
{ word: "cherished", meaning: "loved and cared for deeply" },
{ word: "garnered", meaning: "gathered and stored" }
]
},
{
heading: "Stanza 3 (Women's Voices): Homage to Prithvi, Mother Earth",
image: "images/harvest-celebration-2.png",
imageAlt: "Village women dancing and praying beside a drummer and a villager carrying a basket of flowers and fruit",
explain: Now the village women raise their voices to honour Prithvi, Mother Earthâ€”the sweet, all-powerful queen of the gourd-flower and harvest. They celebrate her fertile soil that feeds every living creature and brings forth rich harvests. Bringing their love, garlands, and gifts born of her own generous bounty, they hail the source of endless joy with cymbals and drum.,
glossary: [
{ word: "opulent", meaning: "rich and plentiful" },
{ word: "manifold", meaning: "many and varied" }
]
},
{
heading: "Stanza 4 (All Voices): Devotion to Bramha, Lord of the Universe",
explain: In the closing chorus, all voices unite to praise Bramhaâ€”the eternal, indescribable Lord of the universe and of all existence. They recognise the divine as both the Seed that begins life and the Scythe that reaps the harvest, living within their working hands, loving hearts, and homes. Offering their very lives and labours as tribute, they pray for strength, wise guidance, and care, praising the source of all life with cymbals and prayer.,
glossary: [
{ word: "ineffable", meaning: "indescribable; beyond words" },
{ word: "succour", meaning: "help and support" },
{ word: "counsel", meaning: "wise advice or guidance" }
]
}
];
export const characters = [
{ name: "Village Men and Women (Chorus)", traits: ["hardworking", "grateful", "joyful", "deeply connected to nature"] }
];
export const themes = [
"Gratitude to nature's elementsâ€”sun, rain, and earthâ€”for sustaining life.",
"Harmony between human labour, community celebration, and the natural cycle.",
"Reverence and humility before the Supreme Creator."
];
'@

# ===========================================================================


# CHAPTER 12-3: Waiting for the Rain


# ===========================================================================


# ---- chapter-12-3/animations/story.js

$files["chapter-12-3\animations\story.js"] = @'
export const meta = { title: "Story", status: "draft", description: "A 2D animated retelling of farmer Velu's drought, his conversation with the wise old woman, and the arrival of rain." };
'@

# ---- chapter-12-3/before-we-read.js

$files["chapter-12-3\before-we-read.js"] = @'
export const meta = { title: "Before We Read", order: 1, tags: ["Warm-up", "Discussion"] };
export const sections = [
{
roman: "I",
instruction: "Think and share with your classmates and teacher.",
items: [
{
n: 1, type: "activity",
figure: { src: "images/rain-farmers.png", alt: "A joyful farmer and his wife welcoming rain pouring over their blooming fields" },
question: "Have you ever waited for the rains? Why?",
answer: "(Personal answer - sample.) Yes, during hot May and June afternoons when the heat becomes unbearable and plants droop, I eagerly wait for the monsoon rains to cool the earth and fill the air with fresh earthy fragrance."
}
]
},
{
roman: "II",
instruction: "Think and share.",
items: [
{
n: 1, type: "activity",
question: "How do you feel when it rains after a long time?",
answer: "(Personal answer - sample.) I feel relieved, refreshed, and joyfulâ€”hearing raindrops drum on the roof and watching trees turn bright green again lifts everyone's spirits."
}
]
},
{
roman: "III",
instruction: "Think and share.",
items: [
{
n: 1, type: "activity",
question: "Why do you think the farmers wait for the rains?",
answer: "(Class discussion - sample answer.) Farmers depend on rain to soften the dry soil for ploughing, water their crops, recharge wells and ponds, and ensure a healthy harvest to feed their families and the country."
}
]
},
{
roman: "IV",
instruction: "Discuss in groups what happens when you wait for something or someone for a long period of time. Share your answers with your classmates and teacher.",
items: [
{
n: 1,
parts: [
{
label: "1", type: "activity",
question: "How do you spend the waiting period?",
answer: "(Group discussion - sample answer.) I keep checking the clock or window, try distracting myself by reading or talking to family, and plan what I will do once the wait ends."
},
{
label: "2", type: "activity",
question: "What do you think about?",
answer: "(Group discussion - sample answer.) I wonder why it is taking so long, hope everything is alright, and imagine how happy I will feel when it finally happens."
},
{
label: "3", type: "activity",
question: "How do you feel?",
answer: "(Group discussion - sample answer.) At first I feel hopeful and excited, then restless or worried if the wait stretches on, and finally deeply relieved when it ends."
}
]
}
]
}
];
'@

# ---- chapter-12-3/discover-to-interest.js

$files["chapter-12-3\discover-to-interest.js"] = @'
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
"- Fallowing & crop rotation - learn how resting soil or alternating legumes with cereal crops naturally restores soil fertility.",
"- India Meteorological Department (IMD) - explore how agro-meteorological weather advisories help Indian farmers plan sowing and harvesting.",
"- Rainwater harvesting - look up simple rooftop rainwater harvesting designs used in Indian homes and schools.",
"- Ancient Indian weather lore - explore mentions of monsoon cycles in Parashara Samhita and Meghmala."
]
}
]
}
];
'@

# ---- chapter-12-3/exam-notes.js

$files["chapter-12-3\exam-notes.js"] = @'
export const meta = { title: "Exam Notes", status: "published", tags: ["Revision"] };
export const blocks = [
{
type: "keypoints",
title: "Story at a glance",
items: [
"Written by Kamakshi Balasubramanian, 'Waiting for the Rain' follows Velu, a dedicated farmer who has cultivated jowar and dhal continuously for six years without taking rest.",
"One year, the monsoon fails to arrive. Days, weeks, and months pass; fields harden, crust, and crack, leaving farmers dejected.",
"Practical by nature, Velu rejects consulting astrologers and visits the city weather office, where officials are equally puzzled despite favourable conditions.",
"Tired and dusty on his walk home, Velu rests beneath a large tree beside a smiling old woman and bitterly laments that he is being punished despite working honestly.",
"The wise old woman gently explains that Nature is a mother to humans, trees, water, and soil alikeâ€”just as people need rest, the ancient earth needs an occasional break from ceaseless cultivation.",
"Understanding her wisdom, Velu walks home peacefullyâ€”just as a cool breeze, gathering dark clouds, and the first drops of fragrant rain arrive."
]
},
{
type: "grammar",
title: "Homophones, collocations, present tenses, and determiners",
rule: "Homophones sound alike but differ in spelling/meaning (whether/weather, piece/peace, plain/plane, sell/cell, seem/seam, rain/reign). Present tenses: Simple Present (habits/facts), Present Progressive (is/are + verb-ing for ongoing actions), Present Perfect (has/have + past participle for actions linked to the present). Determiners (a, an, the, this, their, one, a few, each, neither) introduce or specify nouns.",
examples: [
"Ravi practises crop rotation. (Simple Present)",
"This year, he is growing legumes. (Present Progressive)",
"Over the years, Ravi has learnt to protect soil fertility. (Present Perfect)",
"With each jump, neither sibling minded getting wet. (Determiners)"
]
},
{
type: "vocab",
items: [
{ word: "crimson", meaning: "deep red colour", use: "The sun rose glowing crimson like fire." },
{ word: "crusted", meaning: "formed a hard outer layer", use: "The dry earth hardened and crusted." },
{ word: "forlorn", meaning: "sad and neglected", use: "The barren land looked forlorn." },
{ word: "consultations", meaning: "discussions", use: "Velu saw no use in consultations with astrologers." },
{ word: "dejected", meaning: "sad and disappointed", use: "Velu walked back tired and dejected." },
{ word: "bitterly", meaning: "hurtfully", use: "He asked bitterly how he would feed his family." },
{ word: "ceaseless", meaning: "continuous", use: "The land took a break from ceaseless cultivation." }
]
},
{
type: "likely",
items: [
{ marks: 1, q: "Which two crops did Velu harvest season after season?", a: "Jowar in one season and dhal in the next." },
{
marks: 2,
q: "Why did Velu refuse to consult astrologers and go to the weather office instead?",
a: "Velu was rational and practical; he knew rain had come for years without consulting astrologers, so he went to the city weather office seeking scientific information."
},
{
marks: 3,
q: "How did the old woman change Velu's outlook on the delayed rain?",
a: "She reminded him softly that the earth has worked for thousands of years and, like any living child of Mother Nature, needs occasional rest from ceaseless ploughing and sowing so it can recover and spring back fresh for future crops."
},
{
marks: 5,
q: "Explain how 'Waiting for the Rain' highlights sustainable farming and respect for nature.",
a: "Through Velu's frustration during a drought and the old woman's calm wisdom, the story shows that soil is not an endless machineâ€”continuous year-round cultivation exhausts it. Allowing land to rest (fallowing) lets soil regain moisture and nutrients naturally, teaching farmers and readers alike to work in harmony with nature's rhythms."
}
]
}
];
'@

# ---- chapter-12-3/glossary.js

$files["chapter-12-3\glossary.js"] = @'
export const meta = { title: "Glossary", status: "published", tags: ["Vocabulary"] };
export const terms = [
{ term: "crimson", meaning: "deep red colour" },
{ term: "crusted", meaning: "formed a hard outer layer" },
{ term: "forlorn", meaning: "sad and neglected" },
{ term: "consultations", meaning: "discussions" },
{ term: "dejected", meaning: "sad and disappointed" },
{ term: "bitterly", meaning: "hurtfully" },
{ term: "ceaseless", meaning: "continuous" },
{ term: "fallowing", meaning: "leaving agricultural land unplanted for one or more seasons so it can recover nutrients and moisture" },
{ term: "determiners", meaning: "words placed before nouns to specify or introduce them (articles, demonstratives, possessives, quantifiers, distributives)" }
];
'@

# ---- chapter-12-3/index.js

$files["chapter-12-3\index.js"] = @'
export const chapter = {
title: "Waiting for the Rain",
abs: 12,
pos: 3,
unit: "unit-4",
author: "Kamakshi Balasubramanian",
related: [
{ label: "Ch 10-1 Â· The Cherry Tree", href: "/ncert/class-8/subject:english/poorvi/unit-4/chapter-10-1" },
{ label: "Ch 11-2 Â· Harvest Hymn", href: "/ncert/class-8/subject:english/poorvi/unit-4/chapter-11-2" }
]
};
'@

# ---- chapter-12-3/let-us-discuss.js

$files["chapter-12-3\let-us-discuss.js"] = @'
export const meta = { title: "Let Us Discuss", order: 2, tags: ["Solutions", "Discussion"] };
export const sections = [
{
roman: "I",
instruction: "Complete the table given below. One example has been done for you. Share your answers with your classmates and teacher.",
items: [
{
n: 1, type: "table",
question: "Complete the table based on Part I of the story.",
columns: ["What was Said", "Who Said", "What was Said", "Who Said"],
rows: [
["1. It doesn't look encouraging.", "Velu", "to himself", "He looked up at the sky."],
["2. The rains came all these years without any such consultations...", "Velu", "", ""],
["3. So many favourable conditions but still no rain.", "", "", "______"]
],
answer: [
["1. It doesn't look encouraging.", "Velu", "to himself", "He looked up at the sky."],
["2. The rains came all these years without any such consultations...", "Velu", "to the villager(s) who suggested consulting astrologers", "When someone suggested talking to astrologers to please the heavens."],
["3. So many favourable conditions but still no rain.", "The people at the weather office", "to Velu", "When Velu went to the city weather office to ask when it would rain."]
]
}
]
},
{
roman: "II",
instruction: "Discuss after reading Part I.",
items: [
{
n: 1, type: "activity",
question: "Do you think the old woman would help Velu? If yes, why? If no, why not?",
answer: "(Prediction / class discussion - sample answer.) Yes, she can help Veluâ€”not by making it rain, but by comforting him with wisdom and helping him look at the dry spell with patience and understanding."
},
{
n: 2, type: "activity",
question: "Will Velu's wait continue or will it rain?",
answer: "(Prediction / class discussion - sample answer.) Since conditions are already favourable and Velu has waited for months, the clouds will likely gather soon and bring welcome rain."
}
]
},
{
roman: "III",
instruction: "Complete the following statements given below with suitable reasons. (After Part II)",
items: [
{
n: 1,
parts: [
{
label: "1", type: "fill",
question: "Velu asked the old woman to stop smiling because ______.",
answer: "...he felt there was nothing to smile about without the rains, as his fields lay dry and uncultivated."
},
{
label: "2", type: "fill",
question: "Velu said that it was hard not being able to work since ______.",
answer: "...he had worked continuously without a break for five or six years, and without rain he could neither plough nor sow his land."
},
{
label: "3", type: "fill",
question: "Velu was confused when the old lady said that the land needed rest because ______.",
answer: "...he had never thought of the earth as something old and tired that works hard and needs rest just like human beings."
},
{
label: "4", type: "fill",
question: "The old lady said that it was good for the land when it didn't rain as ______.",
answer: "...it allowed the land to lie undisturbed and rest from ceaseless year-round cultivation, so it could spring back fresh and ready when the rains returned."
},
{
label: "5", type: "fill",
question: "Velu ran home laughing and happy because ______.",
answer: "...he felt a cool breeze and a drop of rain on his shoulder, and saw dark rain clouds gathering in the sky."
}
]
}
]
}
];
'@

# ---- chapter-12-3/let-us-explore.js

$files["chapter-12-3\let-us-explore.js"] = @'
export const meta = { title: "Let Us Explore", order: 8, tags: ["Solutions", "Project", "Agriculture"] };
export const sections = [
{
roman: "I",
instruction: "Rest is very important for us to function in a proper manner. Even the Earth needs rest. This is known as fallowing. Read the facts given below related to fallowing.",
items: [
{
n: 1, type: "activity",
reference: {
title: "Facts on Fallowing",
body: "â€¢ A fallow year refers to leaving the land without sowing for one, or several vegetative cycles.\nâ€¢ This is done to allow the land to recover its nutrients and retain moisture. It also helps to avoid spreading of diseases and controlling pests.\nâ€¢ The sustainable land management method has been applied for centuries, wherein a field is divided into two halvesâ€”one is planted with crops while the other remains unplanted. Then, the process is reversed in the following year."
},
question: "Reflect on how fallowing connects to the old woman's advice in 'Waiting for the Rain'.",
answer: "(Reflection - sample.) Fallowing is the real-world farming science behind the old woman's gentle wisdom: giving soil periodic rest helps it rebuild natural nutrients, hold moisture, and break pest and disease cycles sustainably."
}
]
},
{
roman: "II",
instruction: "Find out from your Vocational Education teacher about Agriculture as a vocation and other related vocations, such as horticulture, etc.",
items: [
{
n: 1, type: "activity",
question: "Find out about Agriculture and related vocations.",
answer: [
"(Research activity - sample findings.)",
"- Agriculture: Growing staple food and cash crops (rice, wheat, pulses, millets).",
"- Horticulture: Cultivating fruits, vegetables, flowers (floriculture), and medicinal plants.",
"- Dairy & Animal Husbandry: Rearing cattle, poultry, and bees (apiculture).",
"- Agri-science & Organic Farming: Soil testing, drip irrigation design, seed research, and sustainable natural farming."
]
}
]
},
{
roman: "III",
instruction: "India's rich tradition of meteorological knowledge includes indigenous forecasting systems, grounded in ancient wisdom. References to rain and weather are found in numerous ancient texts, including the Rigveda, Shrimad Bhagavad, Parashara Samhita, Panini's Ashtadhyayi, and Meghmala.",
items: [
{
n: 1, type: "activity",
question: "Discuss India's traditional meteorological knowledge with your classmates.",
answer: "(Class discussion - sample.) Long before satellites, Indian scholars and farmers carefully tracked wind direction, cloud colour, bird and insect behaviour, and seasonal star patternsâ€”recording observations in texts such as Parashara Samhita and Meghmala to guide sowing and prepare for droughts or heavy rains."
}
]
},
{
roman: "IV",
instruction: "Meteorological Services for Agriculture in India: The primary objective of the Agricultural Meteorology Division, India Meteorological Department (IMD) is to minimise the impact of adverse weather on crops and to leverage crop-weather relationships to boost agricultural production. Visit: imd.gov.in",
items: [
{
n: 1, type: "activity",
question: "Explore how IMD's Agricultural Meteorology Division supports Indian farmers.",
answer: "(Research activity - sample.) IMD issues district-level Agromet Advisories twice a week, warning farmers about heavy rain, heatwaves, hailstorms, or dry spells so they can time irrigation, sowing, fertiliser application, and harvesting safely."
}
]
}
];
'@

# ---- chapter-12-3/let-us-learn.js

$files["chapter-12-3\let-us-learn.js"] = @'
export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };
export const sections = [
{
roman: "I",
instruction: "Solve a crossword using picture and word clues. All clues are related to the words from the text that are connected to weather or agriculture.",
items: [
{
n: 1, type: "crossword",
figure: { src: "images/weather-crossword.png", alt: "Crossword picture clues showing a rain cloud (6), lightning bolt (2), raindrops (7), and sun (8)" },
question: "Solve the weather and agriculture crossword.",
grid: { rows: 14, cols: 16 },
given: [],
entries: [
{ n: 1, dir: "down", row: 1, col: 14, answer: "BREEZE", clue: "gentle wind" },
{ n: 2, dir: "down", row: 2, col: 16, answer: "LIGHTNING", clue: "(picture clue: flash of lightning from cloud)" },
{ n: 3, dir: "down", row: 5, col: 10, answer: "THUNDER", clue: "rumbling sound with rain" },
{ n: 4, dir: "down", row: 5, col: 12, answer: "CROP", clue: "grains etc. grown in large quantity in fields" },
{ n: 5, dir: "across", row: 6, col: 10, answer: "HARVEST", clue: "collected crops" },
{ n: 6, dir: "down", row: 9, col: 4, answer: "CLOUDS", clue: "(picture clue: rain clouds)" },
{ n: 7, dir: "down", row: 9, col: 8, answer: "RAIN", clue: "(picture clue: falling raindrops)" },
{ n: 8, dir: "across", row: 9, col: 14, answer: "SUN", clue: "(picture clue: bright sun)" },
{ n: 9, dir: "across", row: 10, col: 2, answer: "CULTIVATE", clue: "prepare and use land for crops" },
{ n: 10, dir: "across", row: 12, col: 1, answer: "PLOUGH", clue: "turn up the field soil" },
{ n: 11, dir: "across", row: 14, col: 4, answer: "SOW", clue: "plant seed/s" }
]
}
]
},
{
roman: "II",
instruction: "The text uses words like 'piece,' 'weather,' 'son,' and 'rain'. These words are the same as other words that are spelt differentlyâ€”peace, whether, sun, and reign. Words that are pronounced the same as other words but differ in meaning or in spelling are called homophones. Now, complete the paragraph by filling in the correct option of homophones given in the brackets.",
items: [
{
n: 1, type: "blanks",
question: "Complete the paragraph by choosing the correct homophones.",
passage: "The farmer looked at the sky and wondered 1. ______ (weather/whether) the clouds would finally bring rain. He sat down on the ground, breaking a small 2. ______ (piece/peace) of roti for his meal. The 3. ______ (plain/plane) fields stretched endlessly before him, completely dry. He thought about how he could 4. ______ (sell/cell) his last sack of grain to buy some essentials for his family. Without the rains, it didn't 5. ______ (seam/seem) possible to grow another crop this season. Despite his worries, he smiled, knowing that every farmer hopes for the next 6. ______ (rain/reign) by nature to bring life back to the land.",
answer: [
"1. whether",
"2. piece",
"3. plain",
"4. sell",
"5. seem",
"6. rain"
]
}
]
},
{
roman: "III",
instruction: "Choose the correct meanings from the given options for the underlined words or phrases in the following sentences.",
items: [
{
n: 1, type: "mcq",
question: "Being annoyed, she muttered something which nobody heard.",
options: ["(i) spoke in a low voice", "(ii) spoke slowly", "(iii) spoke angrily"],
answer: "(i) spoke in a low voice"
},
{
n: 2, type: "mcq",
question: "At the new work place, Riya felt forlorn for a week.",
options: ["(i) upset and irritated", "(ii) angry and bitter", "(iii) sad and neglected"],
answer: "(iii) sad and neglected"
},
{
n: 3, type: "mcq",
question: "When all his friends had gone, he was at a loss because he did not know what to do.",
options: ["(i) confused", "(ii) shocked", "(iii) lonely"],
answer: "(i) confused"
},
{
n: 4, type: "mcq",
question: "When the little child saw her father, her eyes sparkled.",
options: ["(i) glowed dimly", "(ii) showed joy", "(iii) opened wide"],
answer: "(ii) showed joy"
}
]
},
{
roman: "IV",
instruction: "Match each word (adjective) in Column 1 with a word (noun) that collocates in Column 2. Write the adjective-noun collocation in Column 3. One example has been done for you.",
items: [
{
n: 1, type: "table",
question: "Match each adjective with its collocating noun and write the phrase in Column 3.",
columns: ["Column 1", "Column 2", "Column 3"],
rows: [
["1. favourable", "(i) country", "favourable weather"],
["2. wrinkled", "(ii) activity", ""],
["3. dejected", "(iii) weather", ""],
["4. fragrant", "(iv) skin", ""],
["5. ceaseless", "(v) garden", ""],
["6. beloved", "(vi) expression", ""]
],
answer: [
["1. favourable", "(iii) weather", "favourable weather"],
["2. wrinkled", "(iv) skin", "wrinkled skin"],
["3. dejected", "(vi) expression", "dejected expression"],
["4. fragrant", "(v) garden", "fragrant garden"],
["5. ceaseless", "(ii) activity", "ceaseless activity"],
["6. beloved", "(i) country", "beloved country"]
]
}
]
},
{
roman: "V",
instruction: "Underline the verbs and identify the forms of tenses for the following sentences from the text. (The forms of tenses in the given statements are Simple Present Tense (1 and 2), Present Progressive Tense (3 and 4) Present Perfect Tense (5 and 6).)",
items: [
{
n: 1, type: "table",
question: "Identify the underlined verbs and their tense forms in sentences 1-6.",
columns: ["Sentence", "Verb(s)", "Tense"],
rows: [
["1. Oh, it is hard not to be able to work...", "", ""],
["2. ...I am too old.", "", ""],
["3. What are you smiling at, Amma?", "", ""],
["4. But my son, that is what I am talking about.", "", ""],
["5. The earth has worked for years, centuries...", "", ""],
["6. I have worked hard and honestly.", "", "______"]
],
answer: [
["1. Oh, it is hard not to be able to work...", "is", "Simple Present Tense"],
["2. ...I am too old.", "am", "Simple Present Tense"],
["3. What are you smiling at, Amma?", "are smiling", "Present Progressive Tense"],
["4. But my son, that is what I am talking about.", "is; am talking", "Simple Present; Present Progressive Tense"],
["5. The earth has worked for years, centuries...", "has worked", "Present Perfect Tense"],
["6. I have worked hard and honestly.", "have worked", "Present Perfect Tense"]
]
},
{
n: 2, type: "blanks",
question: "Now, fill in the blanks with the correct form of Simple Present, Present Progressive or Present Perfect tenses of the verbs given in brackets.",
passage: "Ravi (i) ______ (be) a farmer who (ii) ______ (practise) crop rotation on his land. Each season, he (iii) ______ (plant) different crops to maintain the soil's health. This year, he (iv) ______ (grow) legumes, which help restore the nutrients in the soil. Over the years, Ravi (v) ______ (learn) that planting the same crop repeatedly (vi) ______ (deplete) the soil, making it less fertile. By rotating crops, he (vii) ______ (keep) the land productive and fertile. He (viii) ______ (see) a noticeable improvement in his yields since adopting this method. Now, Ravi (ix) ______ (share) his knowledge with other farmers, explaining how crop rotation (x) ______ (benefit) both the soil and their harvests.",
answer: [
"(i) is",
"(ii) practises",
"(iii) plants",
"(iv) is growing",
"(v) has learnt (or has learned)",
"(vi) depletes",
"(vii) keeps",
"(viii) has seen",
"(ix) is sharing",
"(x) benefits"
]
}
]
},
{
roman: "VI",
instruction: "Study the highlighted determiners in the sentences from the text (articles, demonstrative, possessive, definite/indefinite numeral, and distributive determiners). Now, fill in the blanks by choosing the correct determiner from those given in the brackets.",
items: [
{
n: 1, type: "blanks",
figure: { src: "images/mala-puddle.png", alt: "A cheerful girl jumping in a rainwater puddle on a rainy afternoon" },
question: "Fill in the blanks by choosing the correct determiner from those given in the brackets.",
passage: "It was 1. ______ (a/an) rainy afternoon, and 2. ______ (a/the) sky was thick with dark clouds. Mala noticed a large puddle quickly forming in front of 3. ______ (her/their) house. Excited, she called for her brother to join her, knowing that both of them always loved playing in 4. ______ (a/the) rain. While jumping from 5. ______ (some/one) puddle to another, Mala spotted 6. ______ (few/a few) snails slowly creeping along the wet sidewalk and pointed them out to her brother. With 7. ______ (each/every) jump, the sound of both 8. ______ (her/their) squeals and laughter was heard through the soft patter of raindrops. Though they were fully drenched 9. ______ (either/neither) siblings minded it. It had been a perfect rainy day.",
answer: [
"1. a",
"2. the",
"3. her (or their)",
"4. the",
"5. one",
"6. a few",
"7. each",
"8. their",
"9. neither"
]
}
]
}
];
'@

# ---- chapter-12-3/let-us-listen.js

$files["chapter-12-3\let-us-listen.js"] = @'
export const meta = { title: "Let Us Listen", order: 5, tags: ["Solutions", "Listening"] };
export const sections = [
{
roman: "I",
instruction: "Listen to the weather forecast. As you listen, fill in the blanks with the exact word you listen to. (Transcript for teacher on page 204)",
items: [
{
n: 1,
parts: [
{ label: "1", type: "fill", question: "Delhi will mostly have a ______ sky with light rain.", answer: "cloudy" },
{ label: "2", type: "fill", question: "Moderate rain is likely to happen in ______.", answer: "Mumbai" },
{ label: "3", type: "fill", question: "Kolkata is likely to have a maximum temperature of around ______ Â°C.", answer: "34" },
{ label: "4", type: "fill", question: "There is a chance of a ______ in Chennai.", answer: "thunderstorm" },
{ label: "5", type: "fill", question: "Bengaluru will have a ______ temperature of 29 Â°C.", answer: "maximum" },
{ label: "6", type: "fill", question: "Taking an ______ is advisable because of the weather conditions.", answer: "umbrella" }
]
}
]
}
];
'@

# ---- chapter-12-3/let-us-speak.js

$files["chapter-12-3\let-us-speak.js"] = @'
export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking", "Role-play"] };
export const sections = [
{
roman: "I",
instruction: "Here is a tongue twister about 'weather'. Practice saying it as fast as you can.",
items: [
{
n: 1, type: "activity",
question: "Whether the weather be fine, or whether the weather be not, whether the weather be cold, or whether the weather be hot, we'll weather the weather, whatever the weather, whether we like it or not.",
answer: "(Speaking practice.) Start slowly so the /w/ and /Ã°/ (th) sounds stay crisp, pay attention to the rhythm, and gradually speed up without blurring 'whether' and 'weather'."
}
]
},
{
roman: "II",
instruction: "Rain has arrived after a long dry spell on the Earth. Imagine the Rain and the Earth have a conversation. Work in pairs and present the role-play. You may use the hints in the table given below.",
items: [
{
n: 1, type: "activity",
wordBox: [
"Rain: Ask how Earth has been; speak about your journey from Earth to sky and back; ask how Earth uses rainwater; elaborate how much you enjoy being on Earth; thank Earth and promise to return on time.",
"Earth: Respond with relief; enquire why Rain took so long; express gratitude; speak about how important Rain is for agriculture, plants, and animals; enquire how Rain feels; invite Rain to join the celebration."
],
question: "Present a role-play conversation between Rain and Earth starting with: Rain: Greetings, Earth! It's been a while since we've met. How have you been? / Earth: Hello Rain! I am so glad to see you.",
answer: [
"(Pair role-play - sample.)",
"Rain: Greetings, Earth! It's been a while since we've met. How have you been?",
"Earth: Hello Rain! I am so glad to see you. What a relief to finally feel your cool dropsâ€”my fields were cracked and parched! Tell me, why did you take so long to arrive this year?",
"Rain: Oh, my journey from your oceans up into the sky as vapour, gathering into heavy clouds, and riding the monsoon winds back to you took longer than usualâ€”and perhaps Nature wanted your soil to catch its breath! Thank you for waiting so patiently.",
"Earth: Thank you for the priceless gift of water, dear Rain! You know how vital you are to meâ€”farmers need you to plough and sow their crops, and every tree, river, and animal depends on you to survive.",
"Rain: Tell me, how will you use the rainwater I have brought today?",
"Earth: My soil will drink it deeply to nourish seeds, my rivers and lakes will brim again, and people will collect it through rainwater harvesting. How does it feel to be back on Earth?",
"Rain: I love being here! Hearing children laugh, frogs sing, and leaves sparkle makes my long journey worthwhile.",
"Earth: Then please stay and join the joyful celebration of the rivers, forests, and people of Earth!",
"Rain: Thank you so much for the warm invitation, Earth. I promise to return right on time next year!"
]
}
]
}
];
'@

# ---- chapter-12-3/let-us-think-and-reflect.js

$files["chapter-12-3\let-us-think-and-reflect.js"] = @'
export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions", "Comprehension"] };
export const sections = [
{
roman: "I",
instruction: "Read the given extracts and answer the questions that follow.",
items: [
{
n: 1,
passage: "...I can't see how talking to astrologers will bring rain." He decided to go to the weather office in the city and talk to someone. But the people at the weather office said they couldn't really tell him when the sky would gather clouds and bring rain. "We are at a loss ourselves!" they exclaimed. "So many favourable conditions but still no rain. Very odd!",
parts: [
{
label: "(i)", type: "short",
question: "What does the first line of the extract tell us about Velu's beliefs?",
answer: "It shows that Velu is rational, practical, and scientific-mindedâ€”he does not believe in superstition or that consulting astrologers can control natural weather."
},
{
label: "(ii)", type: "fill",
question: "Complete the following sentence with a suitable reason.\n\nVelu is determined to seek information about the rain because . (he was at a loss of words/he wants to find a practical solution to the drought affecting his farm)",
answer: "he wants to find a practical solution to the drought affecting his farm"
},
{
label: "(iii)", type: "table",
question: "Complete the table with reference to Velu's weather office visit.",
columns: ["Expectation (What I think will happen)", "Outcome (What actually happened)"],
rows: [["", "______"]],
answer: [[
"Velu expected the weather officials to tell him when clouds would gather and bring rain.",
"The officials were puzzled themselves and could not tell him when it would rain despite favourable conditions."
]]
},
{
label: "(iv)", type: "mcq",
question: "Complete the following sentence with a suitable option.\n\nThe absence of rain despite favourable conditions, shows ______.",
options: [
"A. lack of astrological knowledge",
"B. ineffectiveness of farmers like Velu",
"C. delay in understanding the weather",
"D. unpredictability of nature"
],
answer: "D. unpredictability of nature"
}
]
},
{
n: 2,
passage: "The soil, the land, the earth... shouldn't someone let the land rest a bit?" the old woman said, softly, smiling. "Rest? Let the land rest? I don't understand," Velu looked at her, a little puzzled. "Yes, my son, that is the difficulty. You don't realise that the earth is old...",
parts: [
{
label: "(i)", type: "short",
question: "The old woman's advice was accompanied with a soft tone and a smile. What does that tell us about her?",
answer: "It tells us that she is calm, patient, compassionate, and deeply wiseâ€”she does not scold Velu, but guides him gently towards understanding."
},
{
label: "(ii)", type: "mcq",
question: "Fill in the blank with the correct option from those given below.\n\nThe old woman's advice ______ Velu, at that moment.",
options: ["A. failed to impress", "B. confused", "C. scared", "D. made sense to"],
answer: "B. confused"
},
{
label: "(iii)", type: "short",
question: "State one thing about the old woman when she referred to Velu as 'my son', while offering advice.",
answer: "It shows her motherly warmth, affection, and genuine care for Velu."
},
{
label: "(iv)", type: "fill",
question: "Complete the following sentence with a suitable explanation.\n\nThe 'difficulty' that the old woman mentions is due to the fact that ______.",
answer: "...people fail to realise that the earth is ancient and has been working continuously for thousands of years, so it too needs periodic rest to recover."
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
question: "How does the old woman convey Nature's wisdom to Velu?",
answer: "She speaks softly and affectionately, calling Nature a mother to humans, trees, water, and soil alike. By comparing the earth's tireless work over thousands of years to a farmer's own hard labour, she helps Velu see that a dry spell gives the land undisturbed rest so it can spring back fresh when the rains arrive."
},
{
n: 2, type: "short",
question: "The writer says, 'The fields lay untended...' Why couldn't the farmers tend to their fields in the absence of rain?",
answer: "Without rain, the soil became hardened, crusted, and cracked, making it impossible for farmers to plough, till, or sow seeds that could sprout and grow."
},
{
n: 3, type: "long",
question: "Support the old woman's perspective that the land needs rest just like people do.",
answer: "Continuous year-round cultivation drains soil of essential minerals, nutrients, and moisture. Just as human beings grow exhausted without rest, farmland needs periodic restâ€”known in agriculture as fallowingâ€”to rebuild nutrients, retain moisture, and break pest and disease cycles naturally."
},
{
n: 4, type: "long",
question: "What can be inferred about Velu's character based on his reaction to the drought?",
answer: "Velu is hardworking, honest, and deeply devoted to farmingâ€”he worked ceaselessly for six years without rest. He is rational (visiting the weather office rather than astrologers), feels deeply responsible for feeding his family, and is open-minded enough to reflect on the old woman's wisdom."
},
{
n: 5, type: "long",
question: "What does the story suggest about the life of farmers and their relationship with nature?",
answer: "The story shows that farmers lead lives of relentless hard work, patience, and hope, closely tied to seasonal rains and soil health. Their relationship with nature is one of deep dependence and respect: working in harmony with nature's rhythmsâ€”rather than forcing the land endlesslyâ€”sustains both soil and farmer."
},
{
n: 6, type: "long",
question: "How might the rest and care of land contribute to a balanced and sustainable ecosystem?",
answer: "Resting land through fallowing and caring for soil through crop rotation restore organic nutrients, prevent soil exhaustion and erosion, conserve moisture, reduce the need for chemical fertilisers, and support soil microbes, plants, and wildlifeâ€”keeping the ecosystem healthy for future generations."
}
]
}
];
'@

# ---- chapter-12-3/let-us-write.js

$files["chapter-12-3\let-us-write.js"] = @'
export const meta = { title: "Let Us Write", order: 7, tags: ["Solutions", "Writing", "Formal Letter"] };
export const sections = [
{
roman: "I",
instruction: "You have observed the difficulties faced by the people in your neighbourhood due to scarcity of water especially during the summer months. Write a letter to the Councillor of your Municipal ward, requesting her/him to set up a rain water harvesting unit. Provide suggestions to address the issue. Remember to: use formal language; keep sentences short and to the point; state the purpose clearly and concisely; give relevant details.",
items: [
{
n: 1, type: "activity",
question: "Write a formal letter to the Municipal Councillor of Ward No. 44 requesting a rainwater harvesting unit.",
answer: [
"(Sample formal letter.)",
"",
"42, Shanti Enclave  ",
"Ward No. 44, Sector 7  ",
"New Delhi - 110075  ",
"",
"18 May 20XX",
"",
"The Municipal Councillor  ",
"Ward No. 44, Municipal Corporation  ",
"New Delhi - 110075",
"",
"Subject: Request to Install a Rainwater Harvesting Unit in Ward No. 44",
"",
"Dear Madam,",
"",
"I am a resident of Shanti Enclave in Ward No. 44. I am writing to draw your kind attention to the severe water scarcity faced by residents in our neighbourhood, especially during the summer months.",
"",
"Over the past few years, rapidly declining groundwater levels and irregular pipeline supply have made daily life very difficult for families, senior citizens, and schoolchildren. Every monsoon, thousands of litres of clean rainwater simply flow away into street drains instead of recharging our underground water table.",
"",
"I kindly request you to approve and set up a community rainwater harvesting unit in our neighbourhood park and community hall. Additionally, rooftop rainwater collection pipes can be connected to recharge pits, and a short awareness drive can encourage households to fix leaking taps and reuse greywater for gardening.",
"",
"I hope you will consider this urgent request favourably and take swift action before the monsoon arrives. Thank you for your time and support.",
"",
"Yours sincerely,  ",
"Ananya Sharma  ",
"(Ananya Sharma)"
]
}
]
}
];
'@

# ---- chapter-12-3/summary.js

$files["chapter-12-3\summary.js"] = @'
export const meta = { title: "Summary", status: "published", tags: ["Summary"] };
export const summary = `"Waiting for the Rain" by Kamakshi Balasubramanian tells the story of Velu, a hardworking farmer who has cultivated jowar and dhal on his own land for six straight years without ever resting. One year, the monsoon fails to arrive. Months pass under a blazing sky while the fields harden, crust, and crack.
Practical and rational, Velu rejects the suggestion to consult astrologers and walks to the city weather office instead, only to find the officials equally puzzled because conditions seem favourable yet no rain falls. Exhausted and dejected on his walk back, he sits beneath a large tree beside a smiling old woman and bitterly laments that he is being punished despite working honestly.
The wise old woman gently explains that Nature is a mother to humans, trees, water, and soil alike. Just as people need rest, the ancient earth needs an occasional pause from ceaseless cultivation so it can recover and spring back fresh for future crops. As Velu walks home pondering her wisdom, a cool breeze blows, dark clouds gather, and the first fragrant raindrops fallâ€”sending him running home laughing with joy.`;
export const moral = Nature follows its own wise rhythm: just like human beings, the earth needs rest and care so that farming and life remain sustainable.;
export const quotes = [
{ text: `"Nature is a mother to all of us... She takes care to give her children the rest they need..."`, by: "The Old Woman" },
{ text: `"Go home, my son, Nature knows a thing or two..."`, by: "The Old Woman" }
];
export const mascot = { pose: "smiling" };
export const extras = {
"Key concepts": [
{ label: "Fallowing:", text: "Allowing farmland to rest unplanted so soil recovers nutrients and moisture." },
{ label: "Grammar:", text: "Homophones, adjective-noun collocations, present tenses (simple/progressive/perfect), and determiners." }
]
};
'@

# ---- chapter-12-3/textbook.js

$files["chapter-12-3\textbook.js"] = @'
export const meta = { title: "Textbook", status: "published", tags: ["Guided reading", "Story"] };
export const originalUrl = "ncert.nic.in";
export const author = "Kamakshi Balasubramanian";
export const cover = {
image: "image.png",
alt: "Farmer Velu stretching his arms joyfully as dark rain clouds gather overhead",
caption: "Velu welcomes the approaching rain"
};
export const intro = A guided reading of "Waiting for the Rain" by Kamakshi Balasubramanian. The story is explained part by part in our own words, with the printed margin glossary listed under each part.;
export const parts = [
{
heading: "Part I: A Cloudless Sky and Parched Fields",
image: "images/dry-cracked-land.png",
imageAlt: "Velu looking at the cloudless crimson sky above hardened, cracked farmland",
explain: At dawn, farmer Velu wakes up hoping for rain, only to see a fiery crimson sun in an empty, cloudless sky. For nearly six years since getting his own land, he has worked tirelessly without holidays, raising jowar in one season and dhal in the next. This year, however, summer ends without monsoon rains. Weeks and months drag by until the untouched fields harden, form a dry crust, and crack, leaving the barren land looking sad and neglected while farmers survive on hope alone.,
glossary: [
{ word: "crimson", meaning: "deep red colour" },
{ word: "crusted", meaning: "formed a hard outer layer" },
{ word: "forlorn", meaning: "sad and neglected" }
]
},
{
heading: "Part I: Visit to the Weather Office",
image: "images/velu-villagers-tree.png",
imageAlt: "Velu speaking with fellow villagers and later spotting an old woman resting under a large tree",
explain: When someone suggests consulting astrologers to please the heavens, practical Velu disagrees, pointing out that rains had come for years without such discussions. Instead, he travels to the city weather officeâ€”only to find the officials baffled as well, unable to predict rain despite favourable conditions. Disappointed, dusty, and thirsty on his walk back to the village, Velu stops to rest in the cool shade of a large tree, where an elderly woman is already sheltering from the sun.,
glossary: [
{ word: "consultations", meaning: "discussions" },
{ word: "dejected", meaning: "sad and disappointed" }
]
},
{
heading: "Part II: Velu's Frustration",
image: "images/velu-old-woman.png",
imageAlt: "Velu speaking with the smiling old woman beneath the shade of the tree",
explain: Seeing the old woman's sparkling eyes and wide smile, Velu asks what there could possibly be to smile about without rain. Her smile fades as he speaks out hurtfully, wondering why he is being punished despite working honestlyâ€”without rain he cannot till his land, grow crops, or feed his family. When she gently remarks that perhaps he has worked too hard, Velu answers with irritation that he has not missed a single season in five or six years and finds it painful to sit idle.,
glossary: [
{ word: "bitterly", meaning: "hurtfully" }
]
},
{
heading: "Part II: Nature's Wisdom and the First Drops",
image: "images/earth-resting.png",
imageAlt: "Velu reflecting on the resting earth as the old woman walks away",
explain: Smiling softly, the old woman asks whether he has thought about the earth itself, which has laboured for thousands of years as farmers plough, sow, and plantâ€”should not the land be allowed to rest too? At first puzzled, Velu slowly understands as she describes Nature as a caring mother to people, trees, water, and soil alike. During a dry spell, the undisturbed land breathes peacefully and recovers from continuous year-round cultivation so it can spring back fresh when rain arrives. After she leaves, Velu walks home thoughtfully. By evening, a cool breeze brushes his back, a tiny raindrop touches his shoulder, dark clouds gather with the promise of thunder and fragrant rain, and Velu runs home laughing with joy.,
glossary: [
{ word: "ceaseless", meaning: "continuous" }
]
}
];
export const characters = [
{ name: "Velu", traits: ["hardworking", "honest", "practical", "devoted to his land", "reflective"] },
{ name: "The Old Woman", traits: ["wise", "gentle", "warm", "deeply attuned to Nature"] }
];
export const themes = [
"Sustainable farming requires respecting soil health and allowing the land periodic rest (fallowing).",
"Scientific curiosity paired with traditional ecological wisdom helps us understand Nature.",
"Patience and harmony with Nature's cycles bring renewal and hope."
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
Write-Host "Success: Class 8 English (Poorvi) Unit 4 Part 2 (31 files) generated."