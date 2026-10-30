export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

export const sections = [
  {
    roman: "I",
    instruction: "Match the phrasal verbs in Column 1 with their correct meaning in Column 2. Then fill in the blanks.",
    items: [
      {
        n: 1, type: "match", question: "Match the phrasal verbs.",
        left: ["1. take up", "2. take after", "3. take in", "4. take over", "5. take off"],
        right: ["(i) to understand or comprehend", "(ii) to assume control or responsibility", "(iii) to begin to study, practice", "(iv) to become successful quickly", "(v) to resemble or look similar to"],
        answer: [
          "1. take up - **(iii) to begin to study, practice, or do something**",
          "2. take after - **(v) to resemble or look similar to (family member)**",
          "3. take in - **(i) to understand or comprehend something**",
          "4. take over - **(ii) to assume control or responsibility for something**",
          "5. take off - **(iv) to become successful or popular quickly**"
        ]
      },
      {
        n: 2, type: "blanks", passage: "Fill in the blanks with suitable phrasal verbs.",
        answer: [
          "1. The new technology is set to **take over** traditional methods of communication.",
          "2. I tried hard to **take in** what the writer wanted to say but was unsuccessful.",
          "3. Arjun decided to **take up** painting as a hobby.",
          "4. The smartphone quickly **took off** the sales in the market. *(Or 'took over')*",
          "5. Sheela **takes after** her father; they have the same smile."
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "Match the verbs in Column 1 with suitable adverbs or prepositions in Column 2. Write their meanings.",
    items: [
      {
        n: 1, type: "activity", question: "Create phrasal verbs with look, run, put, break, call.",
        answer: [
          "1. **look after**: take care of",
          "2. **run into**: to meet someone unexpectedly by chance",
          "3. **put on**: to wear (clothing) / to gain (weight)",
          "4. **break down**: to stop working (for a machine) / to lose emotional control",
          "5. **call off**: to cancel an event or agreement"
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "The given words denote different ways of walking (walk, stagger, hop, run). Arrange sprint, trot, jog in increasing order of pace.",
    items: [
      {
        n: 1, type: "order", items: ["sprint", "trot", "jog"],
        answer: "**Increasing order of pace:**\n1. **trot** (a slow, steady, relaxed pace)\n2. **jog** (a steady running pace, faster than a trot)\n3. **sprint** (running at full speed over a short distance)"
      }
    ]
  }
];
