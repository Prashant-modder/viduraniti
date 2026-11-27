export const meta = { title: "Let Us Learn", order: 4, tags: ["Solutions", "Vocabulary", "Grammar"] };

// Note on Crossword 8 Across: The answer is ASLEEP (6 letters, matching item 2 below),
// though the textbook grid on page 47 accidentally prints 5 cells (A _ E _ P).

export const sections = [
  {
    roman: "I",
    instruction: "Complete the vocabulary and grammar exercises below.",
    items: [
      {
        n: 1, type: "activity",
        figure: { src: "images/crossword-opposites.png", alt: "Crossword puzzle titled We are opposites! with Across clues 3, 7, 8, 9, 10 and Down clues 1, 2, 4, 5, 6" },
        question: "Gajaraj was sad without a friend and when he met Buntee, he was filled with joy. 'Sad' and 'filled with joy' are opposites. Opposites can also be formed by adding some letters before a word. For example, un- unhappy, in- incorrect, dis- disconnect, mis- misuse. Now, take help from the words given as hints and fill up their opposites in the puzzle. (Note: All the words are from the story you have just read.)\n\nAcross: 3. unkind; 7. yelped; 8. awake; 9. relieved; 10. missing.\nDown: 1. started; 2. appeared; 4. sad; 5. untouched; 6. hate.",
        answer: [
          "**Across:**",
          "- 3. **KIND** (opposite of unkind)",
          "- 7. **LAUGHED** (opposite of yelped)",
          "- 8. **ASLEEP** (opposite of awake; *note: the printed grid accidentally draws 5 boxes `A _ E _ P` for this 6-letter word*)",
          "- 9. **WORRIED** (opposite of relieved)",
          "- 10. **FOUND** (opposite of missing)",
          "",
          "**Down:**",
          "- 1. **FINISHED** (opposite of started)",
          "- 2. **DISAPPEARED** (opposite of appeared)",
          "- 4. **DELIGHTED** (opposite of sad)",
          "- 5. **TOUCHED** (opposite of untouched)",
          "- 6. **LOVE** (opposite of hate)"
        ]
      },
      {
        n: 2, type: "blanks",
        question: "Now, complete the paragraph with some of the words you have used in the puzzle.",
        passage: "My pencil was ______. I was very ______ as it was a gift from my friend. I woke up my elder brother who was ______ on the bed. I told him that my pencil seemed to have ______. He ______ and told me to look under my pillow. I was ______ when I ______ the pencil there.",
        answer: [
          "1. **missing**",
          "2. **worried** *(or **sad**)*",
          "3. **asleep**",
          "4. **disappeared**",
          "5. **laughed**",
          "6. **relieved** *(or **delighted**)*",
          "7. **found**"
        ]
      },
      {
        n: 3,
        parts: [
          {
            label: "(a)", type: "table",
            wordBox: [
              "was looking", "was missing", "was munching", "told", "had tied",
              "looked", "hated", "went", "asked", "joined",
              "gave", "had followed", "had remained", "felt", "arrived",
              "had ordered", "noticed", "served", "touched", "threw"
            ],
            question: "The words that tell us about an action are called verbs. In the story, the author tells us what happened before. To do that, the past form of the action word (verb) is used. Let us learn about the three forms of past tense. Given below are some verbs from the story. Put the verbs in their correct column in the table given above.",
            columns: ["Simple Past Tense", "Past Progressive Tense", "Past Perfect Tense"],
            rows: [
              ["______", "______", "______"]
            ],
            answer: [[
              "told, looked, hated, went, asked, joined, gave, felt, arrived, noticed, served, touched, threw",
              "was looking, was missing, was munching",
              "had tied, had followed, had remained, had ordered"
            ]]
          },
          {
            label: "(b)", type: "blanks",
            question: "Select the correct form of the verb to complete the passage. Check your answers with the teacher.",
            passage: "The farmer came back and ______ (noticed/was noticing/had noticed) that Buntee was sad. He ______ (tied/ was tying/had tied) Buntee with a rope the day before. He ______ (asked/was asking/ had asked) Buntee why he was sad. The farmer ______ (felt/was feeling/had felt) that Buntee ______ (missed/was missing/had missed) Gajaraj and set him free.",
            answer: [
              "1. **noticed**",
              "2. **had tied**",
              "3. **asked**",
              "4. **felt**",
              "5. **was missing**"
            ]
          }
        ]
      },
      {
        n: 4, type: "activity",
        question: "'...neither the farmer nor the mahout noticed that the two friends were in tears.' The words 'neither', 'nor' are used to state that the farmer and the mahout did not notice the same thing. 'Neither, nor' connect two negative choices. For example: Neither Rohit nor I want to play football. When you need to choose between two things that you want, you may use 'either, or'. For example: Rohit wants to play either cricket or kho-kho. It means Rohit wants to play cricket or Rohit wants to play kho-kho. Discuss the given sentences with your teacher to practise.\n• Neither Shikha nor Anuj likes to tell stories.\n• Either Bhavesh or Abha made this painting.",
        answer: [
          "*(Grammar discussion - meaning of the two sentences.)*",
          "- **Neither Shikha nor Anuj likes to tell stories.** -> Means that Shikha does not like to tell stories, and Anuj does not like to tell stories either.",
          "- **Either Bhavesh or Abha made this painting.** -> Means that one of the two—Bhavesh or Abha—made this painting."
        ]
      }
    ]
  }
];
