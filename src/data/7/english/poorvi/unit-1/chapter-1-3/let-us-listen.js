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
