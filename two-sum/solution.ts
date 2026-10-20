const twoSum = (nums: number[], target: number): number[] => {
  const prevNumber = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (prevNumber.has(diff)) {
      return [prevNumber.get(diff) || 0, i];
    }
    prevNumber.set(nums[i], i);
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 4, 8, 10, 14, 1, 5], 9));
console.log(twoSum([3, 5, 7], 3));
