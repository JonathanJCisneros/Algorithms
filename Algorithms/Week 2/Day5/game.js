var theDojo = [
    [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
    [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
    [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
    [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
    [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
    [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
    [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
    [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
    [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
    [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];
var dojoDiv = document.querySelector("#the-dojo");

function addNinja() {
    for (i = 0; i < 10; i++) {
        var n = Math.floor(Math.random() * 10);
        var m = Math.floor(Math.random() * 10);
        if (theDojo[n][m] != 10) {
            theDojo[n][m] = 10;
        } else {
            i--;
        }
    }
}

// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for (var i = 0; i < theDojo.length; i++) {
        for (var j = 0; j < theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    addNinja();
    return result;
}

function restart() {
    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
}

// TODO - Make this function tell us how many ninjas are hiding 
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.

function howMany(i, j, element) {
    console.log({ i, j });
    let sum = 0;
    if (theDojo[i][j] == 10) {
        element.innerText = 10;
        element.style.color = "red";
        element.style.animation = "shake 1.0s"
        setTimeout(restart, 1000);
    } else {
        if (i === 0) {
            for (k = i; k <= i + 1; k++) {
                if (j === 0) {
                    for (l = j; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else if (j === theDojo[k].length - 1) {
                    for (l = j - 1; l <= j; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else {
                    for (l = j - 1; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                }
            }
        } else if (i === theDojo.length - 1) {
            for (k = i - 1; k <= i; k++) {
                if (j === 0) {
                    for (l = j; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else if (j === theDojo[k].length - 1) {
                    for (l = j - 1; l <= j; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else {
                    for (l = j - 1; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                }
            }
        } else {
            for (k = i - 1; k <= i + 1; k++) {
                if (j === 0) {
                    for (l = j; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else if (j === theDojo[k].length - 1) {
                    for (l = j - 1; l <= j; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                } else {
                    for (l = j - 1; l <= j + 1; l++) {
                        if (theDojo[k][l] === 10) {
                            sum += 1;
                        }
                    }
                }
            }
        }
        element.innerText = sum;
    }
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game 
//    dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;



// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);