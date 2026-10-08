// src/data/8/mathematics/ganit-prakash/chapter-1/textbook.js
export const meta = { title: "Textbook", status: "draft", tags: ["Guided reading"] };

// TODO: replace with the exact NCERT page or PDF link for this chapter.
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const intro = "This is a guided reading of the chapter, explained part by part. Read the original chapter first, then use these notes to check each idea.";

export const parts = [
  {
    heading: "Squares and perfect squares",
    explain: "The **square** of a number is the number multiplied by itself. For example, $7^2 = 7 \\times 7 = 49$.\n\nA number that is the square of a whole number is called a **perfect square**. So $1, 4, 9, 16, 25, \\dots$ are perfect squares, while $20$ is not.",
    glossary: [
      { word: "square", meaning: "$n^2 = n \\times n$" },
      { word: "perfect square", meaning: "a number that is the square of a whole number" }
    ]
  },
  {
    heading: "Square roots",
    explain: "Finding the **square root** undoes squaring. Since $12^2 = 144$, we write $\\sqrt{144} = 12$.\n\nA useful check: a perfect square can only end in $0, 1, 4, 5, 6$ or $9$.",
    glossary: [
      { word: "square root", meaning: "$\\sqrt{n}$ is the number whose square is $n$" }
    ]
  },
  {
    heading: "Cubes and perfect cubes",
    explain: "The **cube** of a number is the number multiplied by itself three times. For example, $4^3 = 4 \\times 4 \\times 4 = 64$.\n\nA number that is the cube of a whole number is a **perfect cube**. So $1, 8, 27, 64, 125, \\dots$ are perfect cubes.",
    glossary: [
      { word: "cube", meaning: "$n^3 = n \\times n \\times n$" },
      { word: "perfect cube", meaning: "a number that is the cube of a whole number" }
    ]
  },
  {
    heading: "Cube roots",
    explain: "Finding the **cube root** undoes cubing. Since $5^3 = 125$, we write $\\sqrt[3]{125} = 5$.\n\nTo find a cube root by prime factorisation, group the prime factors in triples. For $216 = 2^3 \\times 3^3$, the cube root is $2 \\times 3 = 6$.",
    glossary: [
      { word: "cube root", meaning: "$\\sqrt[3]{n}$ is the number whose cube is $n$" }
    ]
  }
];