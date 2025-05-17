# Collatz Hypothesis

[![Deploy on Vercel](https://vercel.com/button)](https://collatz-hypothesis.vercel.app/)  
[Deployed on Vercel]

The Collatz hypothesis (also known as the **3n + 1 problem** or the **Syracuse problem**) is a famous unsolved problem in mathematics, defined by a simple iterative process:

## Rules

1. Start with any positive integer *n*.
2. If *n* is even, divide it by 2:  
   *n* → *n* / 2
3. If *n* is odd, multiply it by 3 and add 1:  
   *n* → 3*n* + 1
4. Repeat the process with the resulting number.

## The Conjecture

> No matter which positive integer you start with, the sequence will eventually reach the number 1.

## Example

Start with n = 6:

- 6 → 3 (even: 6/2)
- 3 → 10 (odd: 3×3+1)
- 10 → 5 (even: 10/2)
- 5 → 16 (odd: 5×3+1)
- 16 → 8 (even: 16/2)
- 8 → 4 (even: 8/2)
- 4 → 2 (even: 4/2)
- 2 → 1 (even: 2/2)

After reaching 1, the sequence falls into the cycle: **4 → 2 → 1 → 4 → ...**

## Mathematical Status

- Proven for all tested numbers up to 2⁶⁰ (and higher), but no general proof or disproof exists.
- Remains one of the simplest unsolved problems in mathematics.

## Further Reading

- [Wikipedia: Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture)
- [r/collatz on Reddit](https://www.reddit.com/r/collatz/)

---

My project proposes a new perspective: interpreting Collatz and similar processes as closed systems governed by global balance, where every “+1” is balanced by a “–1” elsewhere.  
See `index.html` for my article and interactive demonstration.

---

## Special Gift

Enjoy a free, stylish Yin-Yang animation to use in any web, design, or educational project.  
Inspired by the universal idea of balance — just like in mathematics and Collatz!  
Add a touch of harmony and balance to your designs — no attribution required, but always appreciated!