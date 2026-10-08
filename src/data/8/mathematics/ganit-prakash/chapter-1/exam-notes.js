// src/data/8/mathematics/ganit-prakash/chapter-1/exam-notes.js
export const meta = { title: "Exam Notes", status: "draft", tags: ["Revision"] };

export const blocks = [
  {
    type: "keypoints",
    items: [
      "A perfect square is the square of a whole number, e.g. $49 = 7^2$.",
      "A perfect square ends only in $0, 1, 4, 5, 6$ or $9$.",
      "A perfect cube is the cube of a whole number, e.g. $64 = 4^3$.",
      "Use prime factorisation: group in pairs for squares, in triples for cubes."
    ]
  },
  {
    type: "formulas",
    items: [
      { name: "Square", tex: "$$n^2 = n \\times n$$" },
      { name: "Cube", tex: "$$n^3 = n \\times n \\times n$$" },
      { name: "Square root", tex: "$$\\sqrt{n^2} = n$$" },
      { name: "Cube root", tex: "$$\\sqrt[3]{n^3} = n$$" }
    ]
  },
  {
    type: "likely",
    items: [
      {
        marks: 2,
        q: "Is $196$ a perfect square? Give a reason.",
        a: "Yes. $196 = 14 \\times 14 = 14^2$."
      },
      {
        marks: 3,
        q: "Find the cube root of $216$ by prime factorisation.",
        a: "$216 = 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 3 = 2^3 \\times 3^3$.\n\nSo $\\sqrt[3]{216} = 2 \\times 3 = 6$."
      },
      {
        marks: 3,
        q: "Find the smallest number by which $72$ must be multiplied to get a perfect square.",
        a: "$72 = 2^3 \\times 3^2$. The factor $2$ is unpaired.\n\nMultiply by $2$: $72 \\times 2 = 144 = 12^2$."
      }
    ]
  }
];