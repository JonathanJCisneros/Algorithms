// Bubble Sort

function bubbleSort(a){
    let l = a.length;
    for(let i = 0; i < l - 1; i++){
        for(let j = 0; j < l - i - 1; j++){
            if(a[j] > a[j + 1]){
                [a[j], a[j + 1]] = [a[j + 1], a[j]]
            }
        }
    }
    return a;
}
console.log(bubbleSort([3,2,1]))
console.log(bubbleSort([3,2,1,0,-1,-7]))
