export const meta = { title: "Let Us Think and Reflect", order: 3, tags: ["Solutions"] };

export const sections = [
  {
    roman: "I",
    instruction: "Read the given extracts and answer the questions that follow.",
    items: [
      {
        n: 1, passage: `Sven was one of our best construction men, and excelled at the tricky and specialised work of collecting assorted girders as they floated around in free fall...`,
        parts: [
          { label: "i", type: "mcq", question: "What can be inferred about Sven's abilities from his job description?", options: ["A. He is good at following instructions...", "B. He possesses a strong understanding of working in space.", "C. He struggles with the complexities...", "D. He prefers working on simpler tasks..."], answer: "**B. He possesses a strong understanding of working in space.**" },
          { label: "ii", type: "short", question: "How can we conclude that Sven was working in zero gravity?", answer: "Because the extract mentions girders that 'floated around in free fall', and it says his team could step back to admire their work 'without being abruptly parted from it by gravity'." },
          { label: "iii", type: "mcq", question: "Select the option that is correct for both Assertion (A) and Reason (R).", options: ["A. Both (A) and (R) are true, and (R) is the correct explanation of (A).", "B. Both (A) and (R) are true, but (R) is not..."], answer: "**A. Both (A) and (R) are true, and (R) is the correct explanation of (A).**" },
          { label: "iv", type: "short", question: "Replace the underlined word with a word similar in meaning from the extract: During the festival, people wore colourful 'outfits'...", answer: "**garbs**" }
        ]
      },
      {
        n: 2, passage: `"Jim!" There's something wrong with the air! That's why Claribel's passed out. I've just remembered that miners used to carry canaries down to warn them of gas."\n"Nonsense!" said Jim. "The alarms would have gone off..."`,
        parts: [
          { label: "i", type: "fill", question: "The narrator references canaries and miners in order to ______ (highlight the historical use of canaries as warning systems/explain the reason that caused Claribel to faint suddenly).", answer: "**explain the reason that caused Claribel to faint suddenly**" },
          { label: "ii", type: "fill", question: "Jim initially dismisses the warning about the air because...", answer: "...he was overconfident in the station's expensive, duplicate electronic alarm circuits, believing they would have warned them of any oxygen failure." },
          { label: "iii", type: "mcq", question: "What does the phrase 'shook Jim' mean in the context?", options: ["A. physically pushed...", "B. startled by unexpected information", "C. cold and needed to warm up", "D. trying to shake off sleepiness"], answer: "**B. startled by unexpected information** (when his assistant told him the second alarm wasn't connected)." },
          { label: "iv", type: "short", question: "What does the crew's action of passing the oxygen bottle around 'like a pipe of peace' suggest about their response to the situation?", answer: "It suggests that they were all suffering from oxygen deprivation (causing headaches and sluggishness) and were calmly sharing the life-saving oxygen while waiting for Jim to fix the issue." }
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Answer the following questions.",
    items: [
      { n: 1, type: "long", question: "What was the purpose of the alarm? What had caused its failure?", answer: "The alarm was designed to warn the crew if the oxygen levels dropped or if toxic gases built up. It failed because a rare eclipse by Earth's shadow froze part of the air purifier, and the primary alarm failed while the backup alarm had not been connected yet." },
      { n: 2, type: "long", question: "How does the crew's reaction to Claribel change over the course of the story?", answer: "Initially, she is a hidden secret. When discovered, she quickly becomes a beloved general pet that everyone tries to hide from VIPs. By the end, they revere her as a hero who saved all their lives." },
      { n: 3, type: "long", question: "What does the last part of the story tell us about the significance of unusual ways of problem solving?", answer: "It shows that highly advanced, half-a-million-dollar electronic systems can fail, and sometimes simple, old-fashioned, biological solutions (like a canary) are the most reliable fail-safes." },
      { n: 4, type: "long", question: "Justify the appropriateness of the title of the story.", answer: "The title 'Feathered Friend' is deeply appropriate because Claribel is not only a literal pet bird covered in feathers, but she also acts as a true friend by sacrificing her well-being to warn and save her human companions." },
      { n: 5, type: "long", question: "'Without Claribel, we should soon have been slightly dead.' What does this line suggest about uncertainty of life in space?", answer: "It uses dark humor to highlight how fragile and perilous life in space is. A minor mechanical failure or frozen part can silently and quickly lead to the death of the entire crew." },
      { n: 6, type: "long", question: "Explain how has the writer presented science fiction with a touch of humour.", answer: "The writer contrasts advanced space travel with absurd, funny situations—like a tiny yellow bird doing backflips in zero gravity, hiding bird chirps from VIPs by blaming it on ventilation shafts, and stating they would be 'slightly dead'." },
      { n: 7, type: "long", question: "How would Sven reflect on his experience of almost losing Claribel and for saving the lives of the entire crew?", answer: "Sven would likely feel immense relief and profound gratitude towards Claribel. He would feel justified in his decision to smuggle her aboard, realizing that his small act of rebellion ultimately saved the entire space station." }
    ]
  }
];
