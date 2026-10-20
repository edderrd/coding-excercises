# Best time to Buy and Sell Stock

**Platform:** LeetCode
**Difficulty:** Easy
**Problem:** [Original Problem](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

## Problem Summary

You're given a array of `prices` where index of the array corresponds to the day and value corresponds to stock price, you can only buy once and sell in the future once.

## Approach

1. Create two pointers, `left` and `right`, where `right` is ahead one element
2. iterate over `prices` array using `right` as index
3. validate if `left` pointer value is less than `right` pointer
4. calculate the `profit` by subtracting `right` pointer value to `left` pointer value
5. store `maxP` to max between exiting `maxP` and `profit`
6. if `left` pointer value is greater than `right` pointer value, move `left` pointer to `right` pointer
7. each iteration always increment `right` pointer
8. after iteration finished return `maxP`

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
