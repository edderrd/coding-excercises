const containsDuplicate = (nums: number[]): boolean => {
  const seen = new Set<number>();

  for (let n of nums) {
    if (seen.has(n)) return true;
    seen.add(n);
  }

  return false;
};

console.log(containsDuplicate([3, 2, 4, 2]));
console.log(containsDuplicate([2, 7, 11, 15]));
