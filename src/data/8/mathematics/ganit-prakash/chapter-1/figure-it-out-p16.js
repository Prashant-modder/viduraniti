export const meta = { title: "Figure it Out · Page 16", order: 4, tags: ["Solutions", "Exercise"] };

// Answers follow the NCERT answer key and were re-checked by calculation.
// DRAFT: the reasoning text for Questions 3, 4 and 5 is written from the chapter; the key only gives the final answers.

export const sections = [
  {
    roman: "I",
    instruction: "Figure it Out",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "i",
            type: "short",
            question: "Find the cube root of 27000.",
            answer: "**30.** $27000 = 27 \\times 1000 = 3^3 \\times 10^3 = (3 \\times 10)^3 = 30^3$."
          },
          {
            label: "ii",
            type: "short",
            question: "Find the cube root of 10648.",
            answer: "**22.** $10648 = 2 \\times 2 \\times 2 \\times 11 \\times 11 \\times 11 = 2^3 \\times 11^3 = (2 \\times 11)^3 = 22^3$."
          }
        ]
      },
      {
        n: 2,
        type: "short",
        question: "What number will you multiply by 1323 to make it a cube number?",
        answer: "**7.** $1323 = 3 \\times 3 \\times 3 \\times 7 \\times 7 = 3^3 \\times 7^2$. The factor 7 appears twice, but a cube needs it three times. Multiplying by 7 gives $9261 = 3^3 \\times 7^3 = 21^3$."
      },
      {
        n: 3,
        parts: [
          {
            label: "i",
            type: "short",
            question: "State true or false. Explain your reasoning. The cube of any odd number is even.",
            answer: "**False.** An odd number multiplied by itself three times is odd. For example, $3^3 = 27$."
          },
          {
            label: "ii",
            type: "short",
            question: "State true or false. Explain your reasoning. There is no perfect cube that ends with 8.",
            answer: "**False.** $2^3 = 8$ and $12^3 = 1728$ both end with 8."
          },
          {
            label: "iii",
            type: "short",
            question: "State true or false. Explain your reasoning. The cube of a 2-digit number may be a 3-digit number.",
            answer: "**False.** The smallest 2-digit number is 10 and $10^3 = 1000$ has 4 digits. Every larger 2-digit number has a larger cube."
          },
          {
            label: "iv",
            type: "short",
            question: "State true or false. Explain your reasoning. The cube of a 2-digit number may have seven or more digits.",
            answer: "**False.** The largest 2-digit number is 99 and $99^3 = 970299$ has only 6 digits. So the cube of a 2-digit number has at most 6 digits."
          },
          {
            label: "v",
            type: "short",
            question: "State true or false. Explain your reasoning. Cube numbers have an odd number of factors.",
            answer: "**False.** $8 = 2^3$ has 4 factors (1, 2, 4, 8), which is even. Only square numbers are guaranteed to have an odd number of factors."
          }
        ]
      },
      {
        n: 4,
        type: "short",
        question: "You are told that 1331 is a perfect cube. Can you guess without factorisation what its cube root is? Similarly, guess the cube roots of 4913, 12167, and 32768.",
        answer: [
          "**Yes.** Use two clues: the last digit of the cube root (from the last digit of the cube) and the size of the number (between $10^3 = 1000$, $20^3 = 8000$, $30^3 = 27000$, $40^3 = 64000$, ...).",
          "Last digits: a cube ending in 1, 8, 7, 4, 5, 6, 3, 2, 9, 0 has a root ending in 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 respectively.",
          "- $\\sqrt[3]{1331} = $ **11**: between 1000 and 8000 (so 10 to 19) and ends in 1.\n- $\\sqrt[3]{4913} = $ **17**: between 1000 and 8000 and ends in 3, so the root ends in 7.\n- $\\sqrt[3]{12167} = $ **23**: between 8000 and 27000 (so 20 to 29) and ends in 7, so the root ends in 3.\n- $\\sqrt[3]{32768} = $ **32**: between 27000 and 64000 (so 30 to 39) and ends in 8, so the root ends in 2."
        ]
      },
      {
        n: 5,
        type: "mcq",
        question: "Which of the following is the greatest? Explain your reasoning.",
        options: ["(i) $67^3 - 66^3$", "(ii) $43^3 - 42^3$", "(iii) $67^2 - 66^2$", "(iv) $43^2 - 42^2$"],
        answer: [
          "**(i) $67^3 - 66^3$ is the greatest.**",
          "The differences of consecutive cubes are much larger than those of consecutive squares, and they grow as the numbers grow. Calculating: $67^3 - 66^3 = 13267$, $43^3 - 42^3 = 5419$, $67^2 - 66^2 = 133$ and $43^2 - 42^2 = 85$."
        ]
      }
    ]
  }
];