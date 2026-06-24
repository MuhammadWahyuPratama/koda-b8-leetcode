/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let twin = s.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = twin.length - 1;

  while (left < right) {
    if (twin[left] !== twin[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(""));
