# Valid Anagram

- **Platform:** LeetCode
- **Difficulty:** Medium
- **Problem:** [Original Problem](https://leetcode.com/problems/group-anagrams/description/)

## Problem Summary

You receives a array of strings, where you need to group the anagrams into a sublist and return the list of sublists.

## Approach

1. define a HashMap `result` that will store a table of character count as key and value will a list of words
2. iterate list of strings
3. initialize an array `count` with 26 elements representing letters [a-z]
4. iterate each character of the strings
5. increment corresponding letter number in `count`
6. add to `result` the count array and append current string element
7. when all loops finalized return the hashMap values

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
