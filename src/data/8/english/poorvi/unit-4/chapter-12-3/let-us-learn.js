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
instruction: "The text uses words like 'piece,' 'weather,' 'son,' and 'rain'. These words are the same as other words that are spelt differentlyÃ¢â‚¬â€peace, whether, sun, and reign. Words that are pronounced the same as other words but differ in meaning or in spelling are called homophones. Now, complete the paragraph by filling in the correct option of homophones given in the brackets.",
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
