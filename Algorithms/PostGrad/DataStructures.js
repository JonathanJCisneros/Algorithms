// Arrays - ordered list of data, duplicates allowed

let array = [1,2,3,5,2,7];

const names = ['Max', 'Manu', 'Julie'];
console.log(names[1]);
console.log(names.length);

for(const n of names){
    console.log(n);
}

names.push('Julie')
console.log(names.length);

for(const n of names){
    console.log(n);
}

const findName = names.findIndex(n => n === 'Julie');

console.log(findName)

names.splice(2, 1);
console.log(names);



// Objects - key-value pairs, unordered data

let object = {
    name : 'Max',
    age : 31
};

const person = {
    firstName : 'Max',
    age : 31,
    hobbies : [
        'Sports',
        'Cooking'
    ],
    greet(){
        console.log(`Hi my name is ${this.firstName}`)
    }
}

person.lastName = 'Schwarz';
console.log(person.lastName)

console.log(person.firstName);
console.log(person.age);
console.log(person.hobbies);

for(const p of person.hobbies){
    console.log(p)
}

console.log(person.greet())



// Maps - key-value pairs, iterable data

let map = new Map();
    map.set('a', 'b');

const resultData = new Map();
    resultData.set('average', 1.53)
    resultData.set('lastResult', null)

const country = {
    name : 'Germany',
    population : 82
}

    resultData.set(country, 0.89)

for(const r of resultData){
    console.log(r)
}

console.log(resultData.get('average'));


// Sets - unordered list of data, no duplicates allowed

let set = new Set();

const ids = new Set();
    ids.add('abc');
    ids.add(1);
    ids.add('bb2');
    ids.add(1);

console.log(ids);
for(const i of ids){
    console.log(i);
}

console.log(ids.has('abc'));

ids.delete('bb2');

console.log(ids);


// Linked List - custom datascruture that holds data and reference to next data in list

class newNode {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // First element of list
    }


    append(val){
        const newVal = new newNode(val)
        if(this.isEmpty()){
            this.head = newVal;
        }
        else{
            let runner = this.head;
            while(runner.next){
                runner = runner.next
            }
            runner.next = newVal;
        }
        return this;
    }

    prepend(val){
        const newVal = new newNode(val)
        newVal.next = this.head;
        this.head = newVal;
    }

    delete(val){
        if(this.isEmpty()){
            return null;
        }
        let current = this.head;
        if(current.value === val){
            this.head = current.next;
        }
        while(current.next){
            if(current.next.value === val){
                current.next = current.next.next;
            }
            else{
                current = current.next;
            }
        }
    }

    find(val){
        if(this.isEmpty()){
            return false;
        }
        let current = this.head;
        while(current){
            if(current.value === val){
                return current;
            }
            current = current.next;
        }
        return false;
    }

    insertAfter(val, afterVal){
        if(this.isEmpty()){
            return null;
        }
        const existingNode = this.find(afterVal)
        if(existingNode){
            const newVal = new newNode(val);
            newVal.next = existingNode.next;
            existingNode.next = newVal; 
        }
    }

    isEmpty(){
        if(this.head === null){
            return true;
        }
        else{
            return false;
        }
    }

    toArray(){
        const elements = [];
        let currentNode = this.head;
        while(currentNode){
            elements.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return elements;
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('Hello There');
linkedList1.append('Max');
linkedList1.append(true);
linkedList1.append(18.51);
linkedList1.prepend(12)

console.log(linkedList1.toArray())


const linkedList2 = new LinkedList();
linkedList2.append(3)
linkedList2.append(5)
linkedList2.append(6)
linkedList2.append(9)
linkedList2.append(15)
console.log(linkedList2.isEmpty())
console.log(linkedList2.toArray())

const linkedList3 = new LinkedList();
linkedList3.append(3)
linkedList3.append(5)
linkedList3.append(6)
linkedList3.delete(5)
linkedList3.insertAfter(5, 3)
console.log(linkedList3.find(3))
console.log(linkedList3.find(5))

console.log(linkedList3.toArray())