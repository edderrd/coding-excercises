const merge = (intervals: number[][]): number[][] => {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (const [start, end] of intervals) {
    const lastEnd = result[result.length - 1][1];

    if (start <= lastEnd) {
      result[result.length - 1][1] = Math.max(lastEnd, end);
    } else {
      result.push([start, end]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [8, 10],
    [15, 18],
    [2, 6],
  ]),
);
