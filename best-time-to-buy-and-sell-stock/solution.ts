const maxProfit = (prices: number[]): number => {
  let left = 0;
  let right = 1;
  let maxP = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      maxP = Math.max(maxP, profit);
    } else {
      left = right;
    }

    right += 1;
  }

  return maxP;
};

console.log(maxProfit([7, 1, 5, 6, 4]));
console.log(maxProfit([5, 3, 7, 8, 10, 14, 1, 6]));
