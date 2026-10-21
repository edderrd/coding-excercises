# Longest Substring Without Repeating Characters

**Platform:** LeetCode
**Difficulty:** Medium
**Problem:** [Original Problem](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/)

## Problem Summary

You get a string `s` as input, find the longest substring without a character is repeated returning consecutive caracter count

## Approach

Use sliding window technique

1. Define `count` as `0`, left pointer `l` as `0` and `chars` set
2. iterate over the string with a right pointer `r`
3. look for existing characters in `chars` using pointer `r` in a loop
4. if character found remove it from the set using `l` pointer, increment `l` pointer by `1`
5. add to `chars` using `r` pointer
6. return the max of `count` by substracting `r` and `l`
7. return `count` after loop finishes

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
