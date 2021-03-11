module.exports = function check(str, bracketsConfig) {
  const open = [], close = [], arr = [];
  for (let entry of bracketsConfig) {
    open.push(entry[0]);
    close.push(entry[1]);
  }

  for (let ch of str) {
    if (arr.length > 0 && close.indexOf(ch) === open.indexOf(arr[arr.length - 1])) {
        arr.pop(); 
    } else if (open.includes(ch)) {
        arr.push(ch);
    } else {
      return false;
    }
  }
 
 return arr.length === 0;
}
