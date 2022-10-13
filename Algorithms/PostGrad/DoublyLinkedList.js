class NewNode {
    constructor(data){
        this.prev = null;
        this.value = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
    }

    
    append(val){
        let newNode = new NewNode(val);
        if(this.isEmpty()){
            this.head = newNode;
        }
        else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        return this;
    }


    prepend(val){
        let newNode = new NewNode(val);
        if(this.isEmpty()){
            this.head = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return this;
    }


    delete(val){
        if(this.isEmpty()){
            return `${val} doesn't exist`;
        }
        let previous = this.head;
        let current = this.head.next;
        while(current){
            if(current.value === val){
                previous.next = current.next;
                current.next.prev = previous;
                return this;
            }
            previous = previous.next;
            current = current.next;
        }
        return `${val} doesn't exist`;
    }


    insertAfter(val, valBefore){
        if(this.isEmpty()){
            return `${valBefore} doesn't exist`;
        }
        const newNode = new NewNode(val);
        let current = this.head;
        while(current){
            if(current.value === valBefore){
                newNode.prev = current;
                newNode.next = current.next;
                current.next = newNode;
                return this;
            }
            current = current.next;
        }
        return `${valBefore} doesn't exist`;
    }


    insertBefore(val, valAfter){
        if(this.isEmpty()){
            return `${valAfter} doesn't exist`;
        }
        const newNode = new NewNode(val);
        let current = this.head.next;
        while(current){
            if(current.value === valAfter){
                newNode.next = current;
                newNode.prev = current.prev;
                current.prev = newNode;
                return this;
            }
            current = current.next;
        }
        return `${valAfter} doesn't exist`;
    }


    find(val){
        if(this.isEmpty()){
            return `${val} doesn't exist`;
        }
        let runner = this.head;
        while(runner){
            if(runner.value === val){
                return runner;
            }
            runner = runner.next
        }
        return `${val} doesn't exist`;
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
            runner = runner.next
        }
        return array;
    }
}

const DoublyLinkedList1 = new DoublyLinkedList();
DoublyLinkedList1.append(1);
DoublyLinkedList1.append(2);
DoublyLinkedList1.append(3);
DoublyLinkedList1.prepend(4);
DoublyLinkedList1.prepend(7);
DoublyLinkedList1.prepend(12);
DoublyLinkedList1.insertAfter(3, 12);
DoublyLinkedList1.insertAfter(6, 7);
DoublyLinkedList1.insertBefore(5, 6);
console.log(DoublyLinkedList1.toArray());