// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    let nextVal = undefined;
    let state = false;
    let cnt = 0;
    let arr = text
                .toUpperCase()
                .split("")
                .sort((a, b) => a > b ? 1 : -1);
                
    for (let i=0; i<arr.length; i++) {
        nextVal = arr[i+1];
        if (nextVal == arr[i] && state == false) {
            cnt++;
            state = true;
        } 

        if (nextVal != arr[i]) {
            state = false;
        }
    }

    // Solution searched in internet
    // return (text
    //     .toLowerCase()
    //     .split('')
    //     .sort()
    //     .join('')
    //     .match(/([^])\1+/g) || []
    // ).length;
    // More info: https://www.codewars.com/kata/reviews/54c69b063962fac66a0001ab/groups/54d51a973a742a4115000240
}

// Test:
console.log(duplicateCount("Indivisibility"), duplicateCount("Indivisibility") === 1);