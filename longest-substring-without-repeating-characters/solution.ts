const lengthOfLongestSubstring = (s: string): number => {
  let count = 0;
  let l = 0;
  let chars = new Set<string>();

  for (let r = 0; r < s.length; r++) {
    while (chars.has(s[r])) {
      chars.delete(s[l]);
      l += 1;
    }
    chars.add(s[r]);
    count = Math.max(count, r - l + 1);
  }

  return count;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
