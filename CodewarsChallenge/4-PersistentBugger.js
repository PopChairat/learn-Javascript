/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):
39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

//test case
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
*/

function persistence(num) {
  console.log(`=== input: ${num} ===`);
  if (num && num.toString().length > 1) {
    let numStr = String(num);
    let times = 0;
    do {
      let numArr = numStr.split("");
      numStr = numArr
        .reduce((total, member) => {
          let result = total * member;
          console.log(`total ${total} * member ${member}`);
          return result;
        })
        .toString();
      console.log(`numStr: ${numStr}`);
      times += 1;
    } while (numStr.length > 1);
    return times;
  } else {
    return 0;
  }
}

let values = [39, 4, 25, 999];
values.forEach((e) => {
  console.log(`result: ${persistence(e)}`);
});

//The best solution
function persistenceBest(num) {
  let times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

values.forEach((e) => {
  console.log(`result: ${persistenceBest(e)}`);
});
