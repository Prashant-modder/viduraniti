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
