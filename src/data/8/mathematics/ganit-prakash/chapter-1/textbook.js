export const meta = { title: "Textbook", status: "draft", tags: ["Guided reading"] };

// TODO: replace with the exact NCERT page or PDF link for this chapter.
export const originalUrl = "https://ncert.nic.in/textbook.php";

export const intro = "This is a guided reading of the chapter, explained part by part in simple words. It starts with the story that opens the chapter. Read the original chapter first, then use these notes to check each idea.";

export const parts = [
  {
    heading: "The story: the will and the lockers",
    explain: "Queen Ratnamanjuri left a will that described her fortune of *ratnas* (precious stones) and also included a puzzle. She wanted her son Khoisnam to have everything, but she knew that if she simply gave it all to him, his 99 relatives would pester him forever. So she set a puzzle. If all 100 of them answered it at the same time, they would share the *ratnas* equally. But whoever solved it first would keep the entire inheritance.\n\nThe minister took Khoisnam and his 99 relatives to a secret room with **100 lockers**. Each person was given a number from 1 to 100. Person 1 opens every locker. Person 2 toggles every 2nd locker (closes it if it is open, opens it if it is closed). Person 3 toggles every 3rd locker, Person 4 every 4th locker, and so on until all 100 people have had their turn. The lockers that remain open at the end reveal the code to the fortune in the safe.",
  },
  {
    heading: "How Khoisnam solved it",
    explain: "Before the process even began, Khoisnam realised that he could work out the answer by thinking. A locker is toggled once for every person whose number is a **factor** of the locker number. Locker 6 is toggled by Persons 1, 2, 3 and 6, so it is opened, closed, opened and closed, and it ends **closed**.\n\nA locker stays open only if it is toggled an **odd** number of times. So the question becomes: which numbers have an odd number of factors?\n\nEvery factor has a *partner factor* so that the pair multiplies to the number. For 6, the pairs are $1 \\times 6$ and $2 \\times 3$. Pairs make the count even. The only exception is when a factor is paired with itself, as in $2 \\times 2 = 4$ or $6 \\times 6 = 36$. Such a number has an odd number of factors. These numbers are the **squares**, so the lockers that stay open are 1, 4, 9, 16, 25, 36, 49, 64, 81 and 100.\n\nKhoisnam then read the clue on the open lockers: the code is the first five lockers touched exactly **twice**. A locker touched twice has exactly two factors, 1 and itself, so these are the prime numbers. The code is **2-3-5-7-11**.",
    glossary: [
      { word: "factor", meaning: "a number that divides another number exactly, such as 2 and 3 for 6" },
      { word: "partner factor", meaning: "the other factor in a pair whose product is the number" },
      { word: "prime number", meaning: "a number with exactly two factors, 1 and itself" }
    ]
  },
  {
    heading: "Square numbers",
    explain: "The number of unit squares in a square, which is its area, is the product of its sides. A square of side 4 units has area $4 \\times 4 = 16$ square units. That is why 1, 4, 9, 16, ... are called **squares**. We write $n \\times n = n^2$, read as \"$n$ squared\".\n\nSquares also work for fractions and decimals. A square of side $\\frac{3}{5}$ has area $\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$, and a square of side 2.5 has area $(2.5)^2 = 6.25$. The squares of natural numbers are called **perfect squares**.",
    glossary: [
      { word: "square number", meaning: "a number that is a number multiplied by itself, $n \\times n = n^2$" },
      { word: "perfect square", meaning: "the square of a natural number, such as 1, 4, 9, 16, 25" }
    ]
  },
  {
    heading: "Patterns in perfect squares",
    explain: "**Units digit.** A perfect square ends in 0, 1, 4, 5, 6 or 9, never in 2, 3, 7 or 8. This only works one way. A number ending in 2, 3, 7 or 8 is definitely **not** a square, but a number ending in 6, like 26, may or may not be one (16 and 36 are, 26 is not).\n\n**Zeros.** If a number ends in $k$ zeros, its square ends in $2k$ zeros. So a square can only have an **even** number of zeros at the end.\n\n**Parity.** The square of an even number is even and the square of an odd number is odd.\n\n**Odd numbers.** The differences between consecutive squares are the odd numbers $3, 5, 7, 9, \\dots$. So the sum of the first $n$ odd numbers is $n^2$. The $n$th odd number is $2n - 1$. This gives a test: subtract $1, 3, 5, \\dots$ from a number one after another. If you reach exactly 0, it is a perfect square (25 gives 0 after 5 steps). If you jump past 0, it is not (38 does not).\n\n**Between squares.** There are $2n$ numbers between $n^2$ and $(n+1)^2$.\n\n**Triangular numbers.** The sum of two consecutive triangular numbers is a square: $1 + 3 = 4$, $3 + 6 = 9$, $6 + 10 = 16$.",
    glossary: [
      { word: "parity", meaning: "whether a number is even or odd" },
      { word: "triangular number", meaning: "a number of dots that can be arranged in a triangle: 1, 3, 6, 10, 15, ..." },
      { word: "conjecture", meaning: "a guess about a pattern that you then try to explain or test" }
    ]
  },
  {
    heading: "Square roots",
    explain: "If $y = x^2$, then $x$ is a **square root** of $y$. The area of a square is 49 sq. cm, so its side is 7 cm, and $\\sqrt{49} = 7$. Every perfect square has two integer square roots, one positive and one negative: the square roots of 64 are $+8$ and $-8$. In this chapter we use only the positive root.\n\nTo decide whether a number is a perfect square, and to find its root, there are several methods:\n\n1. **List squares** in order until you reach the number or pass it ($24^2 = 576$). This is slow for big numbers.\n2. **Subtract odd numbers** $1, 3, 5, \\dots$ until you reach 0. For 81 you reach 0 at the 9th step, so $\\sqrt{81} = 9$.\n3. **Prime factorisation.** If the prime factors split into two identical groups, the number is a perfect square. For $324 = (2 \\times 2) \\times (3 \\times 3) \\times (3 \\times 3)$, so $324 = 18^2$ and $\\sqrt{324} = 18$. But $156 = 2 \\times 2 \\times 3 \\times 13$ cannot be paired, so it is not a perfect square.\n4. **Estimate.** For $\\sqrt{1936}$: it lies between 40 and 50 (since $40^2 = 1600$ and $50^2 = 2500$). It ends in 6, so the root ends in 4 or 6. Since $45^2 = 2025 > 1936$, the root is below 45, so it is **44**.\n\nEstimation also helps with numbers that are not perfect squares. Since $15^2 = 225$ and $16^2 = 256$, $\\sqrt{250}$ is a little less than 16. And a cloth of area 125 cm² lies between $11^2 = 121$ and $12^2 = 144$, so the largest square handkerchief with a whole-number side that can be cut from it has side 11 cm.",
    glossary: [
      { word: "square root", meaning: "$\\sqrt{y}$ is the number whose square is $y$" },
      { word: "prime factorisation", meaning: "writing a number as a product of primes" },
      { word: "estimate", meaning: "to find an approximate value by comparing with numbers you know" }
    ]
  },
  {
    heading: "Cubes and perfect cubes",
    explain: "A **cube** is a solid with all sides equal and meeting at right angles. A cube of side 2 cm is made of 8 cubes of side 1 cm, and a cube of side 3 cm is made of 27. In general, $n \\times n \\times n = n^3$. The numbers 1, 8, 27, 64, 125, ... are called **perfect cubes**. For example, a cube with edge 4 has 4 layers of $4 \\times 4 = 16$ unit cubes, so $4^3 = 64$.\n\nWe can also cube fractions, decimals and negative numbers: $\\left(\\frac{4}{6}\\right)^3 = \\frac{64}{216}$ and $(-6)^3 = -216$.\n\n**Last digits.** Unlike squares, cubes can end in any digit from 0 to 9. A cube can never end in exactly two zeros: a number with $k$ zeros has a cube with $3k$ zeros.\n\n**Odd numbers and cubes.** Cubes are sums of consecutive odd numbers: $1 = 1^3$, $3 + 5 = 8 = 2^3$, $7 + 9 + 11 = 27 = 3^3$, and so on. The $n$th cube is the sum of $n$ consecutive odd numbers.\n\n**Taxicab numbers.** Once, G. H. Hardy visited the ill Srinivasa Ramanujan and said that his taxicab number 1729 was a rather dull number. Ramanujan replied that it is very interesting: it is the smallest number that is a sum of two cubes in two different ways, $1729 = 1^3 + 12^3 = 9^3 + 10^3$. Such numbers are called taxicab numbers, and 1729 is also called the Hardy–Ramanujan number. The next two are 4104 and 13832.",
    glossary: [
      { word: "cube", meaning: "$n^3 = n \\times n \\times n$; also a solid with equal sides at right angles" },
      { word: "perfect cube", meaning: "the cube of a whole number, such as 1, 8, 27, 64, 125" },
      { word: "taxicab number", meaning: "a number that is a sum of two cubes in two different ways" }
    ]
  },
  {
    heading: "Cube roots",
    explain: "If $y = x^3$, then $x$ is the **cube root** of $y$, written $x = \\sqrt[3]{y}$. So $\\sqrt[3]{8} = 2$ and $\\sqrt[3]{1000} = 10$. In general, $\\sqrt[3]{n^3} = n$.\n\nTo check whether a number is a perfect cube, use prime factorisation and try to split the factors into **three** identical groups (triplets). Each prime factor of a number appears three times in the prime factorisation of its cube. For $3375 = (3 \\times 3 \\times 3) \\times (5 \\times 5 \\times 5) = 3^3 \\times 5^3$, we get $\\sqrt[3]{3375} = 15$. But $500 = 2 \\times 2 \\times 5 \\times 5 \\times 5$ cannot be split into triplets, so 500 is not a perfect cube.\n\n**Successive differences.** Take the differences of consecutive perfect squares and then the differences of those. After two levels, they are all the same (2). For perfect cubes it takes three levels, and then all differences are 6.",
    glossary: [
      { word: "cube root", meaning: "$\\sqrt[3]{y}$ is the number whose cube is $y$" },
      { word: "triplet", meaning: "a group of three identical prime factors" }
    ]
  },
  {
    heading: "A pinch of history",
    explain: "The first known lists of perfect squares and perfect cubes were made by the Babylonians as far back as 1700 BCE, on clay tablets. They were used to find square roots and cube roots quickly in land measurement and architectural design.\n\nIn ancient Sanskrit works, *varga* meant the square figure or its area and also the square power, and *ghana* meant the solid cube and also the cube power. These terms were in use in India at least from the third century BCE. Aryabhata (499 CE) wrote that the square figure of four equal sides and the number representing its area are both called *varga*.\n\nThe word \"root\" comes from the Sanskrit *mula* (root of a plant, basis, origin). *Varga-mula* meant square root and *ghana-mula* meant cube root. Later, Arabic and Latin copied the idea with *jidhr* and *radix*, both meaning the root of a plant. Another term was *pada*. Brahmagupta (628 CE) explained that the *pada* of a *krti* (square) is that of which it is a square.",
    glossary: [
      { word: "varga", meaning: "a square figure, its area, or the square power" },
      { word: "ghana", meaning: "a solid cube, or the cube power" },
      { word: "mula", meaning: "root; used for taking square roots and cube roots" }
    ]
  }
];

export const characters = [
  { name: "Queen Ratnamanjuri", traits: ["a careful planner", "uses a puzzle instead of a plain gift", "trusts her son's puzzle-solving"] },
  { name: "Khoisnam", traits: ["sees the pattern before the process begins", "reasons from factors", "the queen's son"] },
  { name: "The minister", traits: ["leads the 100 people to the secret room", "explains the rules of the puzzle"] },
  { name: "Aribam and Bijou", traits: ["play a game of squares and square roots", "estimate when a number is not a perfect square"] },
  { name: "Srinivasa Ramanujan", traits: ["loved numbers", "saw deep patterns that others missed", "knew at once that 1729 is special"] },
  { name: "G. H. Hardy", traits: ["a mathematician at Cambridge", "called 1729 a rather dull number"] }
];

export const themes = [
  "A pattern in numbers can be explained by reasoning, not just noticed.",
  "Factors come in pairs, and a number that pairs with itself is a square.",
  "Prime factorisation is a tool for squares, cubes and their roots.",
  "Estimating is useful when a number is not a perfect square or cube.",
  "Mathematical words and ideas have a long history in India and around the world."
];