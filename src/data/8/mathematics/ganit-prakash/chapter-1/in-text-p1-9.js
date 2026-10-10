export const meta = { title: "In-text Questions · Pages 1–9", order: 1, tags: ["Solutions", "In-text"] };

// DRAFT markers: items marked "DRAFT" have no NCERT answer-key entry and were derived from the chapter text. Review before publishing.

const SQUARES_HEAD = ["$n$", "$n^2$", "$n$", "$n^2$", "$n$", "$n^2$"];

export const sections = [
  {
    roman: "I",
    instruction: "Page 1",
    items: [
      {
        n: 1,
        type: "short",
        question: "Before the process begins, Khoisnam realises that he already knows which lockers will be open at the end. How did he figure out the answer? (Hint: Find out how many times each locker is toggled.)",
        answer: "Each locker is toggled once for every factor of its number. For example, locker 6 is toggled by Persons 1, 2, 3 and 6. A locker ends up open only if it is toggled an **odd** number of times, so only the numbers with an odd number of factors stay open. These are the square numbers."
      }
    ]
  },
  {
    roman: "II",
    instruction: "Page 2",
    items: [
      {
        n: 1,
        type: "short",
        question: "Does every number have an even number of factors?",
        answer: "**No.** Factors usually come in partner pairs, which gives an even count. But when a factor pairs with itself, as in $2 \\times 2$, the count is odd. For example, 1 has one factor, 4 has three factors (1, 2, 4) and 9 has three factors (1, 3, 9)."
      },
      {
        n: 2,
        type: "short",
        question: "Can you use this insight to find more numbers with an odd number of factors?",
        answer: [
          "**Yes.** Every square number has an odd number of factors, because one of its factor pairs is the same number twice: $1 \\times 1$, $2 \\times 2$, $3 \\times 3$, $4 \\times 4$, ...",
          "Check with 36: the factor pairs are $1 \\times 36$, $2 \\times 18$, $3 \\times 12$, $4 \\times 9$ and $6 \\times 6$. Only 6 is paired with itself, so the factors are 1, 2, 3, 4, 6, 9, 12, 18, 36, which is 9 factors (odd)."
        ]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Page 3",
    items: [
      {
        n: 1,
        type: "short",
        question: "Write the locker numbers that remain open.",
        answer: "**1, 4, 9, 16, 25, 36, 49, 64, 81, 100.** These are the squares up to 100."
      },
      {
        n: 2,
        type: "short",
        question: "The passcode consists of the first five locker numbers that were touched exactly twice. Which are these five lockers?",
        answer: "**2, 3, 5, 7, 11.** A locker is touched exactly twice when its number has exactly two factors, 1 and itself. These are the prime numbers, so the code is 2-3-5-7-11."
      }
    ]
  },
  {
    roman: "IV",
    instruction: "Page 4",
    items: [
      // DRAFT: no key entry; values computed from the chapter's definition of a square.
      {
        n: 1,
        type: "table",
        question: "Find the squares of the first 30 natural numbers and fill in the table below.",
        columns: SQUARES_HEAD,
        rows: [
          ["1", "1", "11", "121", "21", "441"],
          ["2", "4", "12", "______", "22", "______"],
          ["3", "9", "13", "______", "23", "______"],
          ["4", "16", "14", "______", "24", "______"],
          ["5", "25", "15", "______", "25", "______"],
          ["6", "______", "16", "______", "26", "______"],
          ["7", "______", "17", "______", "27", "______"],
          ["8", "______", "18", "______", "28", "______"],
          ["9", "______", "19", "______", "29", "______"],
          ["10", "______", "20", "______", "30", "______"]
        ],
        answer: [
          ["1", "1", "11", "121", "21", "441"],
          ["2", "4", "12", "144", "22", "484"],
          ["3", "9", "13", "169", "23", "529"],
          ["4", "16", "14", "196", "24", "576"],
          ["5", "25", "15", "225", "25", "625"],
          ["6", "36", "16", "256", "26", "676"],
          ["7", "49", "17", "289", "27", "729"],
          ["8", "64", "18", "324", "28", "784"],
          ["9", "81", "19", "361", "29", "841"],
          ["10", "100", "20", "400", "30", "900"]
        ]
      },
      // DRAFT: open-ended observation (Math Talk).
      {
        n: 2,
        type: "activity",
        question: "What patterns do you notice? Share your observations and make conjectures.",
        answer: [
          "- The units digit of a square is always 0, 1, 4, 5, 6 or 9. It is never 2, 3, 7 or 8.",
          "- A number ending in 1 or 9 has a square ending in 1. A number ending in 4 or 6 has a square ending in 6. A number ending in 5 has a square ending in 25.",
          "- The squares of even numbers are even and the squares of odd numbers are odd.",
          "- The gaps between consecutive squares keep growing: 3, 5, 7, 9, ..."
        ]
      },
      {
        n: 3,
        type: "short",
        question: "If a number ends in 0, 1, 4, 5, 6 or 9, is it always a square?",
        answer: "**No.** 16 and 36 are squares ending in 6, but 26 also ends in 6 and is not a square. The units digit cannot prove that a number is a square. It can only prove that a number is **not** a square: if a number ends in 2, 3, 7 or 8, it is definitely not a square."
      },
      {
        n: 4,
        type: "activity",
        question: "Write 5 numbers such that you can determine by looking at their units digit that they are not squares.",
        answer: "Any numbers ending in 2, 3, 7 or 8 work, for example **12, 23, 37, 48 and 102**."
      },
      {
        n: 5,
        type: "short",
        question: "The squares $1^2$, $9^2$, $11^2$, $19^2$, $21^2$ and $29^2$ all have 1 in their units place. Write the next two squares.",
        answer: "The next two numbers in this pattern are 31 and 39, so the squares are **$31^2 = 961$** and **$39^2 = 1521$**. Notice that if a number has 1 or 9 in the units place, its square ends in 1."
      }
    ]
  },
  {
    roman: "V",
    instruction: "Page 5",
    items: [
      {
        n: 1,
        type: "mcq",
        question: "Which of the following numbers have the digit 6 in the units place?",
        options: ["(i) $38^2$", "(ii) $34^2$", "(iii) $46^2$", "(iv) $56^2$", "(v) $74^2$", "(vi) $82^2$"],
        answer: "**(ii), (iii), (iv) and (v).** A number ending in 4 or 6 has a square ending in 6 (since $4^2 = 16$ and $6^2 = 36$). The numbers 38 and 82 end in 8 and 2, so their squares end in 4."
      },
      // DRAFT: open-ended pattern hunt.
      {
        n: 2,
        type: "activity",
        question: "Find more such patterns by observing the numbers and their squares from the table you filled earlier.",
        answer: [
          "- Units digit of the number and of its square: 1 or 9 gives 1; 2 or 8 gives 4; 3 or 7 gives 9; 4 or 6 gives 6; 5 gives 5; 0 gives 0.",
          "- The square of a number ending in 5 always ends in 25: $15^2 = 225$, $25^2 = 625$.",
          "- Squares of numbers ending in zeros end in twice as many zeros: $20^2 = 400$, $200^2 = 40000$."
        ]
      },
      {
        n: 3,
        type: "short",
        question: "If a number contains 3 zeros at the end, how many zeros will its square have at the end?",
        answer: "**Six zeros.** For example, $1000^2 = 1000000$."
      },
      {
        n: 4,
        type: "short",
        question: "What do you notice about the number of zeros at the end of a number and the number of zeros at the end of its square? Will this always happen? Can we say that squares can only have an even number of zeros at the end?",
        answer: [
          "The number of zeros at the end of the square is **double** the number of zeros at the end of the number.",
          "**Yes**, this always happens. If a number has $k$ zeros at the end, its square has $2k$ zeros at the end. So **yes**, a square can only have an even number of zeros at the end."
        ]
      },
      {
        n: 5,
        type: "short",
        question: "What can you say about the parity of a number and its square?",
        answer: "The square of an even number is even, and the square of an odd number is odd. A number and its square always have the same parity."
      },
      {
        n: 6,
        type: "activity",
        question: "Let us explore the differences between consecutive squares. What do you notice? $4 - 1 = 3$, $9 - 4 = 5$, $16 - 9 = 7$, $25 - 16 = 9$. See if this pattern continues for the next few square numbers.",
        answer: [
          "The differences are the odd numbers 3, 5, 7, 9, in order. The pattern continues: $36 - 25 = 11$, $49 - 36 = 13$, $64 - 49 = 15$, $81 - 64 = 17$, $100 - 81 = 19$.",
          "So adding consecutive odd numbers starting from 1 gives consecutive square numbers: $1 + 3 + 5 = 9$, $1 + 3 + 5 + 7 = 16$, and so on."
        ]
      }
    ]
  },
  {
    roman: "VI",
    instruction: "Page 6",
    items: [
      {
        n: 1,
        type: "short",
        question: "Using the pattern above, find $36^2$, given that $35^2 = 1225$.",
        answer: "$1225$ is the sum of the first 35 odd numbers. To get $36^2$, add the 36th odd number, which is $2 \\times 36 - 1 = 71$. So $36^2 = 1225 + 71 = $ **1296**."
      },
      {
        n: 2,
        parts: [
          {
            label: "i",
            type: "short",
            question: "How do we find the 36th odd number?",
            answer: "The 1st odd number is 1, the 2nd is 3, the 3rd is 5, and so on. The $n$th odd number is $2n - 1$, so the 36th odd number is $2 \\times 36 - 1 = 71$."
          },
          {
            label: "ii",
            type: "short",
            question: "What is the $n$th odd number?",
            answer: "The $n$th odd number is **$2n - 1$**."
          }
        ]
      }
    ]
  },
  {
    roman: "VII",
    instruction: "Page 7",
    items: [
      {
        n: 1,
        type: "short",
        question: "Find how many numbers lie between two consecutive perfect squares. Do you notice a pattern?",
        answer: [
          "If $p$ and $q$ are successive perfect squares, there are **$q - p - 1$** numbers between them.",
          "**Yes**, there is a pattern. Between $n^2$ and $(n+1)^2$ there are $(n+1)^2 - n^2 - 1 = 2n$ numbers. For example, between 4 and 9 there are 4 numbers (5, 6, 7, 8), and $4 = 2 \\times 2$."
        ]
      },
      // DRAFT: no key entry; counts taken from the squares table (both ends of each block included).
      {
        n: 2,
        type: "table",
        question: "How many square numbers are there between 1 and 100? How many are between 101 and 200? Using the table of squares you filled earlier, enter the values below, tabulating the number of squares in each block of 100.",
        columns: ["Block", "Number of squares"],
        rows: [
          ["1 – 100", "______"],
          ["101 – 200", "______"],
          ["201 – 300", "______"],
          ["301 – 400", "______"],
          ["401 – 500", "______"],
          ["501 – 600", "______"],
          ["601 – 700", "______"],
          ["701 – 800", "______"],
          ["801 – 900", "______"],
          ["901 – 1000", "______"]
        ],
        answer: [
          ["1 – 100", "10"],
          ["101 – 200", "4"],
          ["201 – 300", "3"],
          ["301 – 400", "3"],
          ["401 – 500", "2"],
          ["501 – 600", "2"],
          ["601 – 700", "2"],
          ["701 – 800", "2"],
          ["801 – 900", "2"],
          ["901 – 1000", "1"]
        ]
      },
      {
        n: 3,
        type: "short",
        question: "What is the largest square less than 1000?",
        answer: "**$961 = 31^2$.** The next square, $32^2 = 1024$, is more than 1000."
      },
      // DRAFT: drawing answered with a figure.
      {
        n: 4,
        type: "activity",
        question: "Can you see any relation between triangular numbers and square numbers? Extend the pattern shown ($1 + 3 = 4 = 2^2$, $3 + 6 = 9 = 3^2$, $6 + 10 = 16 = 4^2$) and draw the next term.",
        answerFigure: {
          svg: "<svg viewBox=\"0 0 160 160\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"20\" cy=\"20\" r=\"9\" class=\"fg-accent\"/><circle cx=\"50\" cy=\"20\" r=\"9\" class=\"fg-accent\"/><circle cx=\"80\" cy=\"20\" r=\"9\" class=\"fg-accent\"/><circle cx=\"110\" cy=\"20\" r=\"9\" class=\"fg-accent\"/><circle cx=\"140\" cy=\"20\" r=\"9\" class=\"fg-ink\"/><circle cx=\"20\" cy=\"50\" r=\"9\" class=\"fg-accent\"/><circle cx=\"50\" cy=\"50\" r=\"9\" class=\"fg-accent\"/><circle cx=\"80\" cy=\"50\" r=\"9\" class=\"fg-accent\"/><circle cx=\"110\" cy=\"50\" r=\"9\" class=\"fg-ink\"/><circle cx=\"140\" cy=\"50\" r=\"9\" class=\"fg-ink\"/><circle cx=\"20\" cy=\"80\" r=\"9\" class=\"fg-accent\"/><circle cx=\"50\" cy=\"80\" r=\"9\" class=\"fg-accent\"/><circle cx=\"80\" cy=\"80\" r=\"9\" class=\"fg-ink\"/><circle cx=\"110\" cy=\"80\" r=\"9\" class=\"fg-ink\"/><circle cx=\"140\" cy=\"80\" r=\"9\" class=\"fg-ink\"/><circle cx=\"20\" cy=\"110\" r=\"9\" class=\"fg-accent\"/><circle cx=\"50\" cy=\"110\" r=\"9\" class=\"fg-ink\"/><circle cx=\"80\" cy=\"110\" r=\"9\" class=\"fg-ink\"/><circle cx=\"110\" cy=\"110\" r=\"9\" class=\"fg-ink\"/><circle cx=\"140\" cy=\"110\" r=\"9\" class=\"fg-ink\"/><circle cx=\"20\" cy=\"140\" r=\"9\" class=\"fg-ink\"/><circle cx=\"50\" cy=\"140\" r=\"9\" class=\"fg-ink\"/><circle cx=\"80\" cy=\"140\" r=\"9\" class=\"fg-ink\"/><circle cx=\"110\" cy=\"140\" r=\"9\" class=\"fg-ink\"/><circle cx=\"140\" cy=\"140\" r=\"9\" class=\"fg-ink\"/></svg>",
          alt: "A 5 by 5 square of dots. A staircase splits it into a triangle of 10 dots (orange) and a triangle of 15 dots (dark).",
          caption: "The orange triangle has 10 dots and the dark triangle has 15 dots: 10 + 15 = 25."
        },
        answer: [
          "The sum of two consecutive triangular numbers is a square number.",
          "The next term is $10 + 15 = 25 = 5^2$. The figure shows a square of dots with 5 rows and 5 columns, split by a staircase into a triangle of 10 dots and a triangle of 15 dots."
        ]
      },
      {
        n: 5,
        type: "short",
        question: "The area of a square is 49 sq. cm. What is the length of its side?",
        answer: "**7 cm**, because $7 \\times 7 = 7^2 = 49$."
      }
    ]
  },
  {
    roman: "VIII",
    instruction: "Page 8",
    items: [
      {
        n: 1,
        type: "short",
        question: "What is the square root of 64?",
        answer: "$8^2 = 64$ and $(-8)^2 = 64$, so the square roots of 64 are $+8$ and $-8$. The positive square root is **8**."
      },
      {
        n: 2,
        type: "activity",
        question: "Given a number, such as 576 or 327, how do we find out if it is a perfect square? If it is a perfect square, how can we find its square root?",
        answer: [
          "1. **Check the units digit.** 327 ends in 7, so it is not a perfect square. 576 ends in 6, so it might be.",
          "2. **List squares in order.** $20^2 = 400$, $21^2 = 441$, $22^2 = 484$, $23^2 = 529$, $24^2 = 576$. So $\\sqrt{576} = 24$. This becomes slow for large numbers.",
          "3. **Subtract odd numbers** 1, 3, 5, ... until you reach 0. The number of steps is the square root. This is also slow for large numbers.",
          "4. **Use prime factorisation.** $576 = 2^6 \\times 3^2 = (2^3 \\times 3)^2 = 24^2$, so $\\sqrt{576} = 24$."
        ]
      }
    ]
  },
  {
    roman: "IX",
    instruction: "Page 9",
    items: [
      {
        n: 1,
        type: "short",
        question: "Is 324 a perfect square?",
        answer: "**Yes.** $324 = 2 \\times 2 \\times 3 \\times 3 \\times 3 \\times 3 = (2 \\times 2) \\times (3 \\times 3) \\times (3 \\times 3) = (2 \\times 3 \\times 3)^2 = 18^2$, so $\\sqrt{324} = 18$."
      },
      {
        n: 2,
        type: "short",
        question: "Is 156 a perfect square?",
        answer: "**No.** $156 = 2 \\times 2 \\times 3 \\times 13$. The factors 3 and 13 cannot be paired up, so 156 is not a perfect square."
      },
      {
        n: 3,
        parts: [
          {
            label: "i",
            type: "short",
            question: "Is 1156 a perfect square? Use prime factorisation.",
            answer: "**Yes.** $1156 = 2 \\times 2 \\times 17 \\times 17 = (2 \\times 17)^2 = 34^2$."
          },
          {
            label: "ii",
            type: "short",
            question: "Is 2800 a perfect square? Use prime factorisation.",
            answer: "**No.** $2800 = 2 \\times 2 \\times 2 \\times 2 \\times 5 \\times 5 \\times 7$. The factor 7 appears only once and cannot be paired."
          }
        ]
      }
    ]
  }
];