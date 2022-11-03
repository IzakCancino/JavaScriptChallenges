// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher. Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    return message
            .split("")
            .map(elmnt => {
                code = elmnt.charCodeAt()
                if (code >= 97 && code <= 122) {
                    code += 13;
                    if (code > 122) {
                        code -= 26;
                    }
                } else if (code >= 65 && code <= 90) {
                    code += 13;
                    if (code > 90) {
                        code -= 26;
                    }
                }
                return String.fromCharCode(code);
            })
            .join("");
}

// Tests
console.log(rot13("test"));     // Expected: "grfg"
console.log(rot13("Test"));     // Expected: "Grfg"