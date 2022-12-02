/*
You will be given a list of strings. 
You must sort it alphabetically 
(case-sensitive, and based on the ASCII values of the chars) 
and then return the first value.

The returned value must be a string, 
and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

function twoSort(s) {
  s.sort();
  const ss = s[0];
  let res = '';
  for (let i = 0; i < ss.length; i++) {
    res = res + ss[i] + "***";
 }
 return res.slice(0, -3);
};

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) //> 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])) //> 'a***r***e'