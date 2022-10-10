function LengthOfLastWord(s){
    let trimmed = s.trim();
    let newString = trimmed.split(' ')
    return newString[newString.length-1].length
}

console.log(LengthOfLastWord('Hello World'))
console.log(LengthOfLastWord("   fly me   to   the moon  "))
console.log(LengthOfLastWord("luffy is still joyboy"))