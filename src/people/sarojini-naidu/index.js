// src/people/sarojini-naidu/index.js
// EXAMPLE PERSON. Written in our own words as a first draft.
// Check every date and fact against a reliable source, then change status to "published".

export const meta = {
    title: "Sarojini Naidu",
    status: "draft",
    // The first category decides the sidebar group. All of them are used by the filter chips.
    categories: ["freedom-fighters", "women"],
    tags: ["Poet", "Freedom fighter", "Governor"],
    order: 1,
};

export const person = {
    name: "Sarojini Naidu",
    alsoKnownAs: "The Nightingale of India",
    years: "1879-1949",
    tagline: "Poet, freedom fighter and the first woman Governor of an Indian state.",

    // Put a portrait in this folder and uncomment. Use your own or a properly licensed image, with credit.
    // image: "portrait.jpg",
    // imageAlt: "Sarojini Naidu",
    // imageCredit: "Photo: name of the source, licence",

    facts: [
        { label: "Born", value: "13 February 1879, Hyderabad" },
        { label: "Died", value: "2 March 1949, Lucknow" },
        { label: "Known as", value: "The Nightingale of India (Bharat Kokila)" },
        { label: "Known for", value: "Poetry, the freedom struggle and women's rights" },
        { label: "Firsts", value: "First Indian woman President of the Indian National Congress (1925). First woman Governor of an Indian state (1947)." },
    ],

    overview: "Sarojini Naidu was a poet and a leader of India's freedom struggle. Her musical, colourful poems earned her the name *the Nightingale of India*. In 1925 she became the first Indian woman to lead the Indian National Congress, and after independence she became the first woman Governor of an Indian state.",

    // Shown as a small "Let's remember" box under the overview.
    remember: "Annie Besant was the first woman President of the Congress (1917). Sarojini Naidu was the first *Indian* woman to hold that post (1925).",

    early: [
        "Sarojini was born in Hyderabad in 1879. Her father, Aghorenath Chattopadhyay, was a scholar and educator, and her mother, Barada Sundari Devi, wrote poetry in Bengali. Sarojini was a bright student and passed the Madras University matriculation exam when she was about twelve.",
        "A scholarship from the Nizam of Hyderabad took her to England, where she studied at King's College, London, and then at Girton College, Cambridge. She came back to India in 1898 and married Dr Govindarajulu Naidu, a physician. Their marriage was unusual for that time because they belonged to different communities.",
    ],

    contribution: [
        "**As a poet.** She wrote in English. Her first collection, *The Golden Threshold*, came out in 1905, followed by *The Bird of Time* (1912) and *The Broken Wing* (1917). Her poems are full of Indian scenes, festivals and everyday life.",
        "**In the freedom struggle.** The Partition of Bengal in 1905 drew her towards public life, and leaders such as Gopal Krishna Gokhale inspired her. After meeting Mahatma Gandhi in 1914 she became one of his closest followers. In 1930, after Gandhi was arrested during the Salt Satyagraha, she was among the leaders of the protest at the Dharasana Salt Works and was arrested too. In 1942 she was jailed again during the Quit India Movement.",
        "**For women's rights.** In 1917 she took part in a delegation that asked the British government to give Indian women the right to vote. She spoke in many places in support of women's education and equal rights.",
        "**After independence.** In 1947 she became the Governor of the United Provinces (today's Uttar Pradesh) and held the post until her death.",
    ],

    timeline: [
        { date: "1879", title: "Born in Hyderabad" },
        { date: "c. 1891", title: "Tops the Madras University matriculation exam", text: "She was only about twelve years old." },
        { date: "1895", title: "Goes to England to study", text: "She studied at King's College, London, and then at Girton College, Cambridge, on a scholarship from the Nizam of Hyderabad." },
        { date: "1898", title: "Returns to India and marries Govindarajulu Naidu" },
        { date: "1905", title: "Publishes *The Golden Threshold*", text: "The Partition of Bengal in the same year pulls her towards public life." },
        { date: "1914", title: "Meets Mahatma Gandhi in London", text: "She soon becomes one of his followers." },
        { date: "1917", title: "Joins a delegation demanding votes for women" },
        { date: "1925", title: "Becomes President of the Indian National Congress", text: "She is the first Indian woman to hold the post." },
        { date: "1930", title: "Takes part in the Dharasana Salt Works protest", text: "She is arrested after Gandhi's arrest during the Salt Satyagraha." },
        { date: "1931", title: "Goes to London with Gandhi for the Second Round Table Conference" },
        { date: "1942", title: "Jailed during the Quit India Movement" },
        { date: "1947", title: "Becomes Governor of the United Provinces", text: "She is the first woman Governor of an Indian state." },
        { date: "1949", title: "Dies in Lucknow", text: "She died on 2 March 1949." },
    ],

    legacy: [
        "Sarojini Naidu is remembered for bringing art and action together: a poet who walked with the freedom movement and who spoke up for women at a time when few women held public office.",
        "Her birthday, 13 February, is observed as National Women's Day in India.",
    ],

    // Any extra section. It gets its own place in the sidebar and the page automatically.
    // extra: [
    //   { title: "Did you know?", body: "..." },
    // ],

    // Links to chapters where she appears. Fill in real chapter URLs.
    // related: [
    //   { label: "Ch 5 - Chapter title", href: "/ncert/class-8/..." },
    // ],
};