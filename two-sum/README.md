# Two Sum

**Platform:** LeetCode
**Difficulty:** Easy
**Problem:** [Original Problem](https://leetcode.com/problems/two-sum/description/)

## Problem Summary

As input you get an array of numbers and a target number, you need to return an array of two indices where the values sum is equal to target number.

## Approach

1. Iterate over array of numbers
2. Use current value and get the diff from target value
3. Use diff to find if exists in HashMap, if it does will return indexes of diff index and current value index
4. Create a HashMap where key is array number and value is the index
5. Not found will return nothing

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
