const isAnagram = (s: string, t: string): boolean => {
  if (s.length != t.length) return false;

  const hashS = new Map<string, number>();
  const hashT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    hashS.set(s[i], 1 + (hashS.get(s[i]) ?? 0));
    hashT.set(t[i], 1 + (hashT.get(t[i]) ?? 0));
  }

  for (const k of hashS.keys()) {
    if (hashS.get(k) != hashT.get(k)) return false;
  }

  return true;
};

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("rat", "car"));
