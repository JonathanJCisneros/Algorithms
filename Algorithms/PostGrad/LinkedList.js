class NewNode {
    constructor(data){
        this.value = data;
        this.next = null;
    }
}


class LinkedList {
    constructor(){
        this.head = null;
    }


    append(val){
        const newNode = new NewNode(val);
        if(this.isEmpty()){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
    }


    prepend(val){
        const newNode = new NewNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }


    find(val){
        if(this.isEmpty()){
            return false;
        }
        let current = this.head;
        while(current.next){
            if(current.value === val){
                return current;
            }
            current = current.next;
        }
        return false;
    }


    insertAfter(val, valBefore){
        if(this.isEmpty()){
            return `${valBefore} does not exist`;
        }
        const existingNode = this.find(valBefore);
        const newNode = new NewNode(val);
        if(existingNode){
            newNode.next = existingNode.next;
            existingNode.next = newNode;
            return `${val} added`;
        }
        return `${valBefore} does not exist`;
    }

    insertBefore(val, valAfter){
        if(this.isEmpty()){
            return `${valAfter} does not exist`;
        }
        const newNode = new NewNode(val);
        let previous = this.head;
        if(previous.value === valAfter){
            this.prepend(val);
            return `${val} added`
        }
        let current = this.head.next;
        while(current){
            if(current.value === valAfter){
                newNode.next = current;
                previous.next = newNode;
                return `${val} added`
            }
            previous = previous.next;
            current = current.next;
        }
        return `${valAfter} does not exist`;
    }

    size(){
        let length = 0;
        if(this.isEmpty()){
            return length;
        }
        let current = this.head;
        while(current){
            length++;
            current = current.next;
        }
        return length;
    }


    delete(val){
        if(this.isEmpty()){
            return `${val} doesn't exist`;
        }
        let previous = this.head;
        if(previous.value === val){
            this.head = previous.next;
            return `${val} removed`;
        }
        let current = this.head.next;
        while(current){
            if(current.value === val){
                previous.next = current.next;
                return `${val} removed`;
            }
            previous = previous.next;
            current = current.next;
        }
        return `${val} doesn't exist`
    }


    isEmpty(){
        if(this.head){
            return false;
        }
        else{
            return true;
        }
    }


    toArray(){
        let array = [];
        let runner = this.head;
        while(runner){
            array.push(runner.value);
            runner = runner.next;
        }
        return array;
    }
}

let linkedList1 = new LinkedList();
console.log(linkedList1.isEmpty());
linkedList1.append(3);
linkedList1.append(5);
linkedList1.append(7);
console.log(linkedList1.size());
console.log(linkedList1.isEmpty());
linkedList1.prepend(1);
linkedList1.prepend(2);
linkedList1.prepend(3);
console.log(linkedList1.size());
linkedList1.find(5);
linkedList1.find(22);
linkedList1.find(3);
linkedList1.insertAfter(12,3);
linkedList1.insertAfter(17,2);
console.log(linkedList1.size());
linkedList1.insertBefore(15,3);
linkedList1.insertBefore(15,12);
console.log(linkedList1.size());
console.log(linkedList1.delete(-5));
console.log(linkedList1.delete(12));
console.log(linkedList1.delete(15));
console.log(linkedList1.size());
console.log(linkedList1.toArray());