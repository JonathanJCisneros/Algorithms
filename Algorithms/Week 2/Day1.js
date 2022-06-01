// The Math Library

var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();
    
    // Lowest integer possible closest to value, so 1.8 returns 1, 1.2 returns 1
console.log(floor); 
    // Highest integer possible closest to vlaue, so PI(3.14) will return 4.
console.log(ceiling);
    // logs any number (decimals included) between 0 and 1(but not 1).
console.log(random);

// Answer: 1,4,.7635489293482

// Dice Roller

function d6() {
    var roll = Math.ceil(Math.random() * 6);
    if(roll === 0){
        return 1;
    }
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

// Answer: The player rolled: 4

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomanswer() {
var answer = Math.floor(Math.random() * lifesAnswers.length); 
return lifesAnswers[answer];
}

var random = randomanswer();

console.log(random);

// Answer: any statement from var lifesAnswers