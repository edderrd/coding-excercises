const topKFrequent = (nums: number[], k: number): number[] => {
  const count: Record<number, number> = {};
  const result: number[] = [];
  const repeated: number[][] = Array.from(
    { length: nums.length + 1 },
    () => [],
  );

  for (let num of nums) {
    count[num] = 1 + (count[num] || 0);
  }

  for (const n in count) {
    repeated[count[n]].push(parseInt(n));
  }

  for (let i = repeated.length - 1; i >= 0; i--) {
    for (const n of repeated[i]) {
      result.push(n);
      if (result.length === k) return result;
    }
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
