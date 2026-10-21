const groupAnagrams = (strs: string[]): string[][] => {
  const result = new Map<string, string[]>();

  for (let s of strs) {
    const count = new Array(26).fill(0);

    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }

    const key = count.join(",");
    if (!result.has(key)) result.set(key, []);
    result.get(key)!.push(s);
  }

  return [...result.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
