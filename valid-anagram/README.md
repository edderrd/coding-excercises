# Valid Anagram

**Platform:** LeetCode
**Difficulty:** Easy
**Problem:** [Original Problem](https://leetcode.com/problems/valid-anagram/description/)

## Problem Summary

Validate if two strings are anagrams each other by returning a boolean.

## Approach

1. Compare string `s` and string `t` if have same length if not, will return false
2. create a hash of each character on each string, by counting how many occurrences
3. compare each hash count if it does will return true

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
