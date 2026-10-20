class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False

        hashS, hashT = {}, {}

        for i in range(len(s)):
            hashS[s[i]] = 1 + hashS.get(s[i], 0)
            hashT[t[i]] = 1 + hashT.get(t[i], 0)

        for c in hashS:
            if hashS[c] != hashT.get(c, 0):
                return False
        return True


if __name__ == "__main__":
    print(Solution().isAnagram("racecar", "carrace"))
    print(Solution().isAnagram("rat", "car"))
