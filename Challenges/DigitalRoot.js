// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples:
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 


function digitalRoot(n) {
    if (n <= 9) return n;
    let x = n
        .toString()
        .split("")
        .reduce((a, b) => Number.parseInt(a) + Number.parseInt(b));
    return x > 9 ? digitalRoot(x) : x;
}

// Solution searched in internet:
// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }
// More info: https://www.codewars.com/kata/reviews/541c8b5e7e4b4c61e2000149/groups/541df7aa259d9c7b80000a88

// Tests                                                      Expected:
console.log(digitalRoot(0), digitalRoot(0) === 0);               // 0
console.log(digitalRoot(16), digitalRoot(16) === 7);             // 7
console.log(digitalRoot(942), digitalRoot(942) === 6);           // 6
console.log(digitalRoot(132189), digitalRoot(132189) === 6);     // 6
console.log(digitalRoot(493193), digitalRoot(493193) === 2);     // 2