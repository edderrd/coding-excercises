# Merge Intervals

**Platform:** LeetCode
**Difficulty:** Medium
**Problem:** [Original Problem](https://leetcode.com/problems/merge-intervals/description/)

## Problem Summary

As input you get an array of intervals `intervals = [start i, end i]`, merge all overlapping intervals and return non-overlapping intervals covering intervals combined.

## Approach

1. sort `intervals` by end pair
2. initialize `result` with first element in `intervals`
3. iterate `intervals` getting the pairs `start`, `end`
4. extract `lastEnd` end pair from last element of `result`
5. validate if `start` is less or equal than `lastEnd`
6. if `true` populate last `result` end element with the max between `lastEnd` and `end`
7. if `false` populate `result` with current pair `start`, `end`
8. after iteration return `result`

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
