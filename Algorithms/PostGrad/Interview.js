// Length of the Last Word

function LengthOfLastWord(s){
    let trimmed = s.trim();
    let newString = trimmed.split(' ')
    return newString[newString.length-1].length
}

console.log(LengthOfLastWord('Hello World'))
console.log(LengthOfLastWord("   fly me   to   the moon  "))
console.log(LengthOfLastWord("luffy is still joyboy"))



// Reverse String

function ReverseString(s){
    let newString = "";
    for(let i = s.length-1; i >= 0; i--){
        newString += s[i];
    }
    return newString;
}

console.log(ReverseString("dlrow olleh"))