export const meta = { title: "Let Us Think and Reflect", order: 2, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Complete the summary with an exact word from the poem.",
    items: [
      {
        n: 1, type: "fill", question: "The poem is a tribute to the soldiers of the 1. ____ who defend the 2. ____ of their country.",
        answer: "1. **land**\n2. **borders**"
      },
      {
        n: 2, type: "fill", question: "The soldiers remain vigilant and dedicated, whether it's windy, snowy, or 3. ____ hot.",
        answer: "3. **scorching**"
      },
      {
        n: 3, type: "fill", question: "They walk on 4. ____ stretches of land like the yogis.",
        answer: "4. **lonely**"
      },
      {
        n: 4, type: "fill", question: "Their duty takes them to different terrains, including mountains, valleys, 5. ____, and marshes.",
        answer: "5. **deserts**"
      },
      {
        n: 5, type: "fill", question: "The poet acknowledges that they have given a major part of their 6. ____ to protect the nation.",
        answer: "6. **youth**"
      },
      {
        n: 6, type: "fill", question: "The poet says the wind chimes show their respect to the soldiers' 7. ____.",
        answer: "7. **feet** (or feat, but poem uses 'feet')"
      }
    ]
  },
  {
    roman: "II",
    instruction: "Select the correct option for the following questions.",
    items: [
      {
        n: 1, type: "mcq", question: "The theme of the poem is:",
        options: ["(i) patriotism and sacrifice", "(ii) heroism and awareness", "(iii) nature and hardship", "(iv) seasons and terrains"],
        answer: "**(i) patriotism and sacrifice**"
      },
      {
        n: 2, type: "mcq", question: "The tone of the poem is:",
        options: ["A. Only (v)", "B. (i) and (iii)", "C. (ii), (iii) and (v)", "D. (i), (iii), (iv) and (v)"],
        answer: "**D. (i), (iii), (iv) and (v)** [admiring, respectful, grateful, prayerful]"
      }
    ]
  },
  {
    roman: "III",
    instruction: "Complete the following sentences by explaining why the poet has used the following poetic devices.",
    items: [
      {
        n: 1, type: "short", question: "Imagery because...",
        answer: "because it creates vivid mental pictures of the harsh terrains and extreme weather conditions the soldiers face, such as 'scorching sun's sweltering rays'."
      },
      {
        n: 2, type: "short", question: "Simile because the soldiers are likened to...",
        answer: "**yogis**. Just as yogis endure severe physical conditions and live a life of discipline and detachment, the soldiers tirelessly guard the lonely expanses of the nation."
      },
      {
        n: 3, type: "short", question: "Metaphor because the poet uses wind chimes...",
        answer: "to represent nature's tribute to the soldiers. It suggests that the entire land is grateful for their protection and the wind blowing through the chimes salutes their bravery."
      },
      {
        n: 4, type: "short", question: "Repetition of the words 'you' and 'we' because...",
        answer: "it highlights the stark contrast between the peaceful, sleeping citizens ('we') and the awake, vigilant soldiers ('you') who protect them."
      },
      {
        n: 5, type: "short", question: "Alliteration such as 'season or snowy' and 'deserts or guarding' to create...",
        answer: "a rhythmic flow and musical quality in the poem, emphasizing the continuity of the soldiers' duties in all conditions."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Read the extract and answer the questions.",
    items: [
      {
        n: 1, passage: `Oh! Defenders of borders\nYou are great sons of my land\nWhen we are all asleep\nYou still hold on to your deed`,
        parts: [
          { label: "i", type: "short", question: "Identify a set of opposite words from the extract.", answer: "**asleep** and **awake**" },
          { label: "ii", type: "short", question: "The phrase 'still hold on to your deed' refers to the soldier's attitude of...", answer: "dedication, commitment, and unwavering vigilance." },
          { label: "iii", type: "mcq", question: "True or False: The soldiers walk across the deserted stretches of land.", options: ["True", "False"], answer: "**True**" },
          { label: "iv", type: "short", question: "Give evidence from the extract to show that soldiers face harsh weather conditions.", answer: "The lines 'Windy season or snowy days / Or scorching sun's sweltering rays' show they face extreme weather." },
          { label: "v", type: "mcq", question: "Which quality of the soldiers is highlighted in this extract?", options: ["(i) modesty", "(ii) optimism", "(iii) simplicity", "(iv) dedication"], answer: "**(iv) dedication**" }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Answer the following questions.",
    items: [
      { n: 1, type: "long", question: "Who is the speaker of this poem? How can you say so?", answer: "The speaker is a patriotic citizen (the poet Dr. A.P.J. Abdul Kalam). We can say so because the speaker speaks from the perspective of a protected civilian ('When we are all asleep') expressing deep gratitude for the soldiers." },
      { n: 2, type: "long", question: "How is the theme of the poem conveyed through imagery? Support your answer with examples from the poem.", answer: "The theme of sacrifice and patriotism is conveyed through vivid imagery of tough terrains: 'lonely expanses', 'climbing the heights', 'striding the valleys', 'defending the deserts', and 'guarding the marshes'. This shows the unimaginable physical hardships soldiers endure to protect us." },
      { n: 3, type: "long", question: "How does the poet highlight the commitment of the soldiers?", answer: "The poet highlights their commitment by stating that while the whole nation sleeps at night, the soldiers remain awake ('You still hold on to your deed'). They endure extreme weather without complaining and walk like yogis." },
      { n: 4, type: "long", question: "What is the significance of the line 'Prime of your youth given to the nation!!' with reference to sacrifice and service?", answer: "This line means that soldiers dedicate the best, most energetic, and physically strongest years of their lives to serving the country, often missing out on family life and personal comforts." },
      { n: 5, type: "long", question: "The poem ends with a prayer for the soldiers' well-being and blessings. Why is it important for each one of us to pray for the wellbeing of soldiers?", answer: "It is important because our peace, freedom, and safety are entirely dependent on their vigilance. They risk their lives so we can live comfortably. Praying for them is a small way of expressing our gratitude and wishing for their safe return to their families." }
    ]
  }
];
