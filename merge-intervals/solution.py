class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda i: i[0])
        result = [intervals[0]]

        for start, end in intervals[1:]:
            lastEnd = result[-1][1]

            if start <= lastEnd:
                result[-1][1] = max(lastEnd, end)
            else:
                result.append([start, end])

        return result


if __name__ == "__main__":
    print(Solution().merge([[1, 3], [8, 10], [15, 18], [2, 6]]))
