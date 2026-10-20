# Coding Exercises

A collection of coding exercises, each organized in its own folder. The goal is to practice problem solving and language fundamentals by working through small, self-contained challenges in Python and/or TypeScript.

## Repository Structure

```text
coding-excercises/
├── README.md                  # This file
└── <exercise-folder>/
    ├── README.md              # Exercise description, requirements, and examples
    ├── solution.py            # Solution in Python (optional)
    └── solution.ts            # Solution in TypeScript (optional)
```

Every exercise lives in a dedicated top-level folder that contains:

- **`README.md`** (required) — a description of the exercise, including the problem statement, input/output format, constraints, examples, and (where applicable) edge cases to consider.
- **Python files** (`*.py`) — a Python implementation of the exercise, if available.
- **TypeScript files** (`*.ts`) — a TypeScript implementation of the exercise, if available.

Not every exercise needs to exist in both languages; a folder may contain only Python, only TypeScript, or both.

## How to Use This Repository

1. Pick an exercise folder.
2. Read its `README.md` to understand the problem.
3. Try solving it yourself in your preferred language.
4. Compare with the provided `solution.py` / `solution.ts` (if present).

## Running the Solutions

### Python

Make sure you have Python 3.10+ installed, then run:

```bash
python <exercise-folder>/solution.py
```

### TypeScript

Make sure you have Node.js (18+) and TypeScript installed, then run:

```bash
npx tsx <exercise-folder>/solution.ts
```

Alternatively, compile and run with `tsc`:

```bash
tsc <exercise-folder>/solution.ts --outDir dist
node dist/solution.js
```

# Algorithm & Data Structure Practice

Solutions and notes for algorithm and data-structure problems from
platforms such as LeetCode.

All solutions and explanations in this repository are my own work.

Problem statements are summarized rather than reproduced. Original
problems are linked to their respective platforms.

This repository is for educational and interview-preparation purposes.
