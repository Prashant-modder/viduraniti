export const meta = { title: "Figure it Out · Page 10", order: 2, tags: ["Solutions", "Exercise"] };

// Answers follow the NCERT answer key and were re-checked by calculation.
// DRAFT: Question 9 depends on a picture. The figure below is a redrawn copy (9 x 9 tiles, each tile 5 x 5 tiny squares) and the count was made from the book page. Check it against the printed picture.

export const sections = [
  {
    roman: "I",
    instruction: "Figure it Out",
    items: [
      {
        n: 1,
        type: "mcq",
        question: "Which of the following numbers are not perfect squares?",
        options: ["(i) 2032", "(ii) 2048", "(iii) 1027", "(iv) 1089"],
        answer: "**(i), (ii) and (iii).** $45^2 = 2025$ and $46^2 = 2116$, so 2032 and 2048 lie between two consecutive squares. 1027 ends in 7, so it cannot be a square. And $1089 = 33^2$ is a perfect square."
      },
      {
        n: 2,
        type: "short",
        question: "Which one among $64^2$, $108^2$, $292^2$, $36^2$ has last digit 4?",
        answer: "**$108^2$ and $292^2$.** The last digit of the square depends only on the last digit of the number. $8^2 = 64$ and $2^2 = 4$ both give 4, while $64^2$ and $36^2$ end in $4^2 = 16$ and $6^2 = 36$, so they end in 6."
      },
      {
        n: 3,
        type: "mcq",
        question: "Given $125^2 = 15625$, what is the value of $126^2$?",
        options: ["(i) $15625 + 126$", "(ii) $15625 + 26^2$", "(iii) $15625 + 253$", "(iv) $15625 + 251$", "(v) $15625 + 51^2$"],
        answer: "**(iv).** $126^2 - 125^2 = 125 + 126 = 251$, because the difference between consecutive squares is the sum of the two numbers. So $126^2 = 15625 + 251 = 15876$."
      },
      {
        n: 4,
        type: "short",
        question: "Find the length of the side of a square whose area is $441 \\text{ m}^2$.",
        answer: "**21 m.** $441 = 3 \\times 3 \\times 7 \\times 7 = (3 \\times 7)^2 = 21^2$, so the side is $\\sqrt{441} = 21$ m."
      },
      {
        n: 5,
        type: "short",
        question: "Find the smallest square number that is divisible by each of the following numbers: 4, 9, and 10.",
        answer: "**900.** The smallest number divisible by 4, 9 and 10 is their LCM, $180 = 2^2 \\times 3^2 \\times 5$. The factor 5 is unpaired, so multiply by 5: $180 \\times 5 = 900 = 30^2$."
      },
      {
        n: 6,
        type: "short",
        question: "Find the smallest number by which 9408 must be multiplied so that the product is a perfect square. Find the square root of the product.",
        answer: "$9408 = 2^6 \\times 3 \\times 7^2$. The factor 3 is unpaired, so multiply by **3**. The product is $28224 = (2^3 \\times 3 \\times 7)^2 = 168^2$, so its square root is **168**."
      },
      {
        n: 7,
        parts: [
          {
            label: "i",
            type: "short",
            question: "How many numbers lie between the squares of 16 and 17?",
            answer: "**32.** Between $n^2$ and $(n+1)^2$ there are $2n$ numbers. Here $n = 16$, so there are $2 \\times 16 = 32$ numbers (between $256$ and $289$)."
          },
          {
            label: "ii",
            type: "short",
            question: "How many numbers lie between the squares of 99 and 100?",
            answer: "**198.** Here $n = 99$, so there are $2 \\times 99 = 198$ numbers (between $9801$ and $10000$)."
          }
        ]
      },
      {
        n: 8,
        passage: "$1^2 + 2^2 + 2^2 = 3^2$\n\n$2^2 + 3^2 + 6^2 = 7^2$\n\n$3^2 + 4^2 + 12^2 = 13^2$",
        parts: [
          {
            label: "i",
            type: "fill",
            question: "In the pattern above, fill in the missing number: $4^2 + 5^2 + 20^2 = (\\;?\\;)^2$",
            answer: "**21.** In each line the three numbers are $a$, $a + 1$ and $a(a+1)$, and the result is $a(a+1) + 1$. For $a = 4$: $4 \\times 5 = 20$ and $20 + 1 = 21$. Check: $16 + 25 + 400 = 441 = 21^2$."
          },
          {
            label: "ii",
            type: "fill",
            question: "Fill in the missing numbers: $9^2 + 10^2 + (\\;?\\;)^2 = (\\;?\\;)^2$",
            answer: "**90 and 91.** For $a = 9$: $9 \\times 10 = 90$ and $90 + 1 = 91$. Check: $81 + 100 + 8100 = 8281 = 91^2$."
          }
        ]
      },
      {
        n: 9,
        type: "short",
        question: "How many tiny squares are there in the following picture? Write the prime factorisation of the number of tiny squares.",
        figure: {
          svg: "<svg viewBox=\"0 0 450 450\" xmlns=\"http://www.w3.org/2000/svg\"><defs><g id=\"fg-sq\" class=\"fg-white\"><rect x=\"1\" y=\"1\" width=\"8\" height=\"8\"/><rect x=\"11\" y=\"1\" width=\"8\" height=\"8\"/><rect x=\"21\" y=\"1\" width=\"8\" height=\"8\"/><rect x=\"31\" y=\"1\" width=\"8\" height=\"8\"/><rect x=\"41\" y=\"1\" width=\"8\" height=\"8\"/><rect x=\"1\" y=\"11\" width=\"8\" height=\"8\"/><rect x=\"11\" y=\"11\" width=\"8\" height=\"8\"/><rect x=\"21\" y=\"11\" width=\"8\" height=\"8\"/><rect x=\"31\" y=\"11\" width=\"8\" height=\"8\"/><rect x=\"41\" y=\"11\" width=\"8\" height=\"8\"/><rect x=\"1\" y=\"21\" width=\"8\" height=\"8\"/><rect x=\"11\" y=\"21\" width=\"8\" height=\"8\"/><rect x=\"21\" y=\"21\" width=\"8\" height=\"8\"/><rect x=\"31\" y=\"21\" width=\"8\" height=\"8\"/><rect x=\"41\" y=\"21\" width=\"8\" height=\"8\"/><rect x=\"1\" y=\"31\" width=\"8\" height=\"8\"/><rect x=\"11\" y=\"31\" width=\"8\" height=\"8\"/><rect x=\"21\" y=\"31\" width=\"8\" height=\"8\"/><rect x=\"31\" y=\"31\" width=\"8\" height=\"8\"/><rect x=\"41\" y=\"31\" width=\"8\" height=\"8\"/><rect x=\"1\" y=\"41\" width=\"8\" height=\"8\"/><rect x=\"11\" y=\"41\" width=\"8\" height=\"8\"/><rect x=\"21\" y=\"41\" width=\"8\" height=\"8\"/><rect x=\"31\" y=\"41\" width=\"8\" height=\"8\"/><rect x=\"41\" y=\"41\" width=\"8\" height=\"8\"/></g><g id=\"fg-dia\" class=\"fg-white\" transform=\"translate(25 25) rotate(45) translate(-16.70 -16.70)\"><rect x=\"0.0\" y=\"0.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"7.0\" y=\"0.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"14.0\" y=\"0.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"21.0\" y=\"0.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"28.0\" y=\"0.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"0.0\" y=\"7.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"7.0\" y=\"7.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"14.0\" y=\"7.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"21.0\" y=\"7.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"28.0\" y=\"7.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"0.0\" y=\"14.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"7.0\" y=\"14.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"14.0\" y=\"14.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"21.0\" y=\"14.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"28.0\" y=\"14.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"0.0\" y=\"21.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"7.0\" y=\"21.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"14.0\" y=\"21.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"21.0\" y=\"21.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"28.0\" y=\"21.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"0.0\" y=\"28.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"7.0\" y=\"28.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"14.0\" y=\"28.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"21.0\" y=\"28.0\" width=\"5.4\" height=\"5.4\"/><rect x=\"28.0\" y=\"28.0\" width=\"5.4\" height=\"5.4\"/></g></defs><rect width=\"450\" height=\"450\" class=\"fg-green\"/><use href=\"#fg-dia\" x=\"0\" y=\"0\"/><use href=\"#fg-sq\" x=\"50\" y=\"0\"/><use href=\"#fg-dia\" x=\"100\" y=\"0\"/><use href=\"#fg-sq\" x=\"150\" y=\"0\"/><use href=\"#fg-dia\" x=\"200\" y=\"0\"/><use href=\"#fg-sq\" x=\"250\" y=\"0\"/><use href=\"#fg-dia\" x=\"300\" y=\"0\"/><use href=\"#fg-sq\" x=\"350\" y=\"0\"/><use href=\"#fg-dia\" x=\"400\" y=\"0\"/><use href=\"#fg-sq\" x=\"0\" y=\"50\"/><use href=\"#fg-dia\" x=\"50\" y=\"50\"/><use href=\"#fg-sq\" x=\"100\" y=\"50\"/><use href=\"#fg-dia\" x=\"150\" y=\"50\"/><use href=\"#fg-sq\" x=\"200\" y=\"50\"/><use href=\"#fg-dia\" x=\"250\" y=\"50\"/><use href=\"#fg-sq\" x=\"300\" y=\"50\"/><use href=\"#fg-dia\" x=\"350\" y=\"50\"/><use href=\"#fg-sq\" x=\"400\" y=\"50\"/><use href=\"#fg-dia\" x=\"0\" y=\"100\"/><use href=\"#fg-sq\" x=\"50\" y=\"100\"/><use href=\"#fg-dia\" x=\"100\" y=\"100\"/><use href=\"#fg-sq\" x=\"150\" y=\"100\"/><use href=\"#fg-dia\" x=\"200\" y=\"100\"/><use href=\"#fg-sq\" x=\"250\" y=\"100\"/><use href=\"#fg-dia\" x=\"300\" y=\"100\"/><use href=\"#fg-sq\" x=\"350\" y=\"100\"/><use href=\"#fg-dia\" x=\"400\" y=\"100\"/><use href=\"#fg-sq\" x=\"0\" y=\"150\"/><use href=\"#fg-dia\" x=\"50\" y=\"150\"/><use href=\"#fg-sq\" x=\"100\" y=\"150\"/><use href=\"#fg-dia\" x=\"150\" y=\"150\"/><use href=\"#fg-sq\" x=\"200\" y=\"150\"/><use href=\"#fg-dia\" x=\"250\" y=\"150\"/><use href=\"#fg-sq\" x=\"300\" y=\"150\"/><use href=\"#fg-dia\" x=\"350\" y=\"150\"/><use href=\"#fg-sq\" x=\"400\" y=\"150\"/><use href=\"#fg-dia\" x=\"0\" y=\"200\"/><use href=\"#fg-sq\" x=\"50\" y=\"200\"/><use href=\"#fg-dia\" x=\"100\" y=\"200\"/><use href=\"#fg-sq\" x=\"150\" y=\"200\"/><use href=\"#fg-dia\" x=\"200\" y=\"200\"/><use href=\"#fg-sq\" x=\"250\" y=\"200\"/><use href=\"#fg-dia\" x=\"300\" y=\"200\"/><use href=\"#fg-sq\" x=\"350\" y=\"200\"/><use href=\"#fg-dia\" x=\"400\" y=\"200\"/><use href=\"#fg-sq\" x=\"0\" y=\"250\"/><use href=\"#fg-dia\" x=\"50\" y=\"250\"/><use href=\"#fg-sq\" x=\"100\" y=\"250\"/><use href=\"#fg-dia\" x=\"150\" y=\"250\"/><use href=\"#fg-sq\" x=\"200\" y=\"250\"/><use href=\"#fg-dia\" x=\"250\" y=\"250\"/><use href=\"#fg-sq\" x=\"300\" y=\"250\"/><use href=\"#fg-dia\" x=\"350\" y=\"250\"/><use href=\"#fg-sq\" x=\"400\" y=\"250\"/><use href=\"#fg-dia\" x=\"0\" y=\"300\"/><use href=\"#fg-sq\" x=\"50\" y=\"300\"/><use href=\"#fg-dia\" x=\"100\" y=\"300\"/><use href=\"#fg-sq\" x=\"150\" y=\"300\"/><use href=\"#fg-dia\" x=\"200\" y=\"300\"/><use href=\"#fg-sq\" x=\"250\" y=\"300\"/><use href=\"#fg-dia\" x=\"300\" y=\"300\"/><use href=\"#fg-sq\" x=\"350\" y=\"300\"/><use href=\"#fg-dia\" x=\"400\" y=\"300\"/><use href=\"#fg-sq\" x=\"0\" y=\"350\"/><use href=\"#fg-dia\" x=\"50\" y=\"350\"/><use href=\"#fg-sq\" x=\"100\" y=\"350\"/><use href=\"#fg-dia\" x=\"150\" y=\"350\"/><use href=\"#fg-sq\" x=\"200\" y=\"350\"/><use href=\"#fg-dia\" x=\"250\" y=\"350\"/><use href=\"#fg-sq\" x=\"300\" y=\"350\"/><use href=\"#fg-dia\" x=\"350\" y=\"350\"/><use href=\"#fg-sq\" x=\"400\" y=\"350\"/><use href=\"#fg-dia\" x=\"0\" y=\"400\"/><use href=\"#fg-sq\" x=\"50\" y=\"400\"/><use href=\"#fg-dia\" x=\"100\" y=\"400\"/><use href=\"#fg-sq\" x=\"150\" y=\"400\"/><use href=\"#fg-dia\" x=\"200\" y=\"400\"/><use href=\"#fg-sq\" x=\"250\" y=\"400\"/><use href=\"#fg-dia\" x=\"300\" y=\"400\"/><use href=\"#fg-sq\" x=\"350\" y=\"400\"/><use href=\"#fg-dia\" x=\"400\" y=\"400\"/></svg>",
          alt: "A 9 by 9 pattern of tiles. Square tiles and diamond tiles alternate, and every tile is a 5 by 5 grid of tiny squares.",
          caption: "Redrawn from the textbook (page 11)."
        },
        answer: [
          "**2025 tiny squares.** The picture is a $9 \\times 9$ pattern, so it has $9 \\times 9 = 81$ tiles. Every tile, whether a square or a diamond, is a $5 \\times 5$ grid of tiny squares, which is $25$ tiny squares. So the total is $81 \\times 25 = 2025$.",
          "**Prime factorisation:** $2025 = 3 \\times 3 \\times 3 \\times 3 \\times 5 \\times 5 = 3^4 \\times 5^2$. Every prime appears an even number of times, so 2025 is a perfect square: $2025 = (3^2 \\times 5)^2 = 45^2$."
        ]
      }
    ]
  }
];