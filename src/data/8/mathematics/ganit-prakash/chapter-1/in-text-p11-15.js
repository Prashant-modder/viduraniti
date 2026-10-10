export const meta = { title: "In-text Questions · Pages 11–15", order: 3, tags: ["Solutions", "In-text"] };

// DRAFT markers: items marked "DRAFT" have no NCERT answer-key entry and were derived from the chapter text. Review before publishing.

export const sections = [
  {
    roman: "I",
    instruction: "Page 11",
    items: [
      {
        n: 1,
        type: "short",
        question: "How many cubes of side 1 cm will make a cube of side 3 cm?",
        answer: "**27.** Each layer has $3 \\times 3 = 9$ small cubes and there are 3 layers, so $3 \\times 3 \\times 3 = 27$."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Page 12",
    items: [
      {
        n: 1,
        type: "short",
        question: "Is 9 a cube?",
        answer: "**No.** $2 \\times 2 \\times 2 = 8$ and $3 \\times 3 \\times 3 = 27$, so 9 is not a perfect cube. Neither is any number from 10 to 26."
      },
      {
        n: 2,
        type: "short",
        question: "Can you estimate the number of unit cubes in a cube with an edge length of 4 units?",
        answer: "**64.** Each square layer has $4 \\times 4 = 16$ unit cubes and there are 4 such layers, so the total is $4 \\times 4 \\times 4 = 64$."
      },
      // DRAFT: no key entry; values computed from the definition of a cube.
      {
        n: 3,
        type: "table",
        question: "Complete the table below.",
        columns: ["$n$", "$n^3$", "$n$", "$n^3$"],
        rows: [
          ["1", "1", "11", "1331"],
          ["2", "8", "12", "______"],
          ["3", "27", "13", "2197"],
          ["4", "64", "14", "2744"],
          ["5", "125", "15", "______"],
          ["6", "______", "16", "______"],
          ["7", "______", "17", "4913"],
          ["8", "______", "18", "5832"],
          ["9", "______", "19", "6859"],
          ["10", "______", "20", "______"]
        ],
        answer: [
          ["1", "1", "11", "1331"],
          ["2", "8", "12", "1728"],
          ["3", "27", "13", "2197"],
          ["4", "64", "14", "2744"],
          ["5", "125", "15", "3375"],
          ["6", "216", "16", "4096"],
          ["7", "343", "17", "4913"],
          ["8", "512", "18", "5832"],
          ["9", "729", "19", "6859"],
          ["10", "1000", "20", "8000"]
        ]
      },
      // DRAFT: open-ended observation (Math Talk).
      {
        n: 4,
        type: "activity",
        question: "What patterns do you notice in the table above?",
        answer: [
          "- The cube of an even number is even and the cube of an odd number is odd.",
          "- Cubes grow much faster than squares: $10^3 = 1000$ but $20^3 = 8000$.",
          "- The units digit of $n^3$ depends only on the units digit of $n$: 1 gives 1, 2 gives 8, 3 gives 7, 4 gives 4, 5 gives 5, 6 gives 6, 7 gives 3, 8 gives 2, 9 gives 9 and 0 gives 0."
        ]
      },
      {
        n: 5,
        type: "short",
        question: "We know that 0, 1, 4, 5, 6, 9 are the only last digits possible for squares. What are the possible last digits of cubes?",
        answer: "**Any digit from 0 to 9.** Every digit appears as the last digit of some cube: $1^3 = 1$, $8^3 = 512$ (2), $7^3 = 343$ (3), $4^3 = 64$ (4), $5^3 = 125$ (5), $6^3 = 216$ (6), $3^3 = 27$ (7), $2^3 = 8$ (8), $9^3 = 729$ (9) and $10^3 = 1000$ (0)."
      }
    ]
  },
  {
    roman: "III",
    instruction: "Page 13",
    items: [
      // DRAFT: no key entry; counts taken from the cubes table.
      {
        n: 1,
        type: "short",
        question: "Similar to squares, can you find the number of cubes with 1 digit, 2 digits, and 3 digits? What do you observe?",
        answer: [
          "- **1-digit cubes:** 1 and 8, which is 2 cubes.",
          "- **2-digit cubes:** 27 and 64, which is 2 cubes.",
          "- **3-digit cubes:** 125, 216, 343, 512 and 729, which is 5 cubes.",
          "There are far fewer cubes than squares in each range (squares: 3, 6 and 22), because cubes grow much faster."
        ]
      },
      {
        n: 2,
        type: "short",
        question: "Can a cube end with exactly two zeroes (00)? Explain.",
        answer: "**No.** If a number ends in $k$ zeros, its cube ends in $3k$ zeros, for example $10^3 = 1000$. So the number of zeros at the end of a cube is always a multiple of 3. Two zeros is not a multiple of 3."
      },
      {
        n: 3,
        type: "short",
        question: "The next two taxicab numbers after 1729 are 4104 and 13832. Find the two ways in which each of these can be expressed as the sum of two positive cubes.",
        answer: [
          "- $4104 = 2^3 + 16^3 = 8 + 4096$ and $4104 = 9^3 + 15^3 = 729 + 3375$.",
          "- $13832 = 2^3 + 24^3 = 8 + 13824$ and $13832 = 18^3 + 20^3 = 5832 + 8000$."
        ]
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Page 14",
    items: [
      {
        n: 1,
        type: "short",
        question: "Can you tell what the sum $91 + 93 + 95 + 97 + 99 + 101 + 103 + 105 + 107 + 109$ is without doing the calculation?",
        answer: "**$10^3 = 1000$.** In the pattern, the cube $n^3$ is the sum of $n$ consecutive odd numbers. This sum has 10 consecutive odd numbers, so it is $10^3 = 1000$."
      },
      {
        n: 2,
        parts: [
          {
            label: "i",
            type: "short",
            question: "Is 3375 a perfect cube?",
            answer: "**Yes.** $3375 = 3 \\times 3 \\times 3 \\times 5 \\times 5 \\times 5 = (3 \\times 5)^3 = 15^3$, so $\\sqrt[3]{3375} = 15$."
          },
          {
            label: "ii",
            type: "short",
            question: "Is 500 a perfect cube?",
            answer: "**No.** $500 = 2 \\times 2 \\times 5 \\times 5 \\times 5$. The factors cannot be split into three identical groups, because the factor 2 appears only twice."
          }
        ]
      }
    ]
  },
  {
    roman: "V",
    instruction: "Page 15",
    items: [
      {
        n: 1,
        parts: [
          {
            label: "i",
            type: "short",
            question: "Find $\\sqrt[3]{64}$.",
            answer: "**4.** $64 = 2^6 = (2^2)^3 = 4^3$."
          },
          {
            label: "ii",
            type: "short",
            question: "Find $\\sqrt[3]{512}$.",
            answer: "**8.** $512 = 2^9 = (2^3)^3 = 8^3$."
          },
          {
            label: "iii",
            type: "short",
            question: "Find $\\sqrt[3]{729}$.",
            answer: "**9.** $729 = 3^6 = (3^2)^3 = 9^3$."
          }
        ]
      },
      // DRAFT: no key entry; differences computed from the cubes shown.
      {
        n: 2,
        type: "activity",
        question: "Compute successive differences over levels for perfect cubes until all the differences at a level are the same. What do you notice? (Cubes: 1, 8, 27, 64, 125, 216, ...)",
        answer: [
          "- **Level 1:** 7, 19, 37, 61, 91",
          "- **Level 2:** 12, 18, 24, 30",
          "- **Level 3:** 6, 6, 6",
          "All the differences become the same (6) at **level 3**. For squares this happened at level 2."
        ]
      }
    ]
  }
];