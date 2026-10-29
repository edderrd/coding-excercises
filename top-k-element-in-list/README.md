# Top K element in list

- **Platform:** LeetCode
- **Difficulty:** Medium
- **Problem:** [Original Problem](https://leetcode.com/problems/top-k-frequent-elements/description/)

## Problem Summary

You get as input an array `nums` of numbers and an integer `k`, you must return the top `k` most repeated elements found.

## Approach

Will be resolved using [bucket sort algorithm](https://www.geeksforgeeks.org/dsa/bucket-sort-2/).

1. define a hash `count`
2. initialize bucket array `repeated` from using `nums` length
3. initialize `result` array
4. populate the `count` hash with key as number and value as repeated count
5. iterate count to populate the `repeated` array, using repeated count as index and appending the key as value in the array.
6. iterate `court` in reverse order and get the elements in the array that matches `k` count, returning `result` when array have amount as `k`

## Solution

- [Python](./solution.py)
- [Typescript](./solution.ts)
