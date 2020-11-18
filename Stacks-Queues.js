class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class Stack {
    constuctor(){
        this.top = null;
        this.botoom = null;
        this.length = 0;
    }

    push(value){
        //create a newNode
        const newNode = new Node(value);
        console.log(newNode);
        //Check if the stack has items
        if(this.top === 0){
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        } else {
            const holder = this.top;
            this.top = newNode;
            newNode.next = holder;
        }

        this.length++;
        return this;
    }

    pop(){
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        return this.top.value;
    }

    isEmpty(){
        if(!this.top){
            return null;
        }
    }
}

const starTrek = new Stack();

// starTrek.push('Kirk');
// console.log(starTrek);
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');
// console.log(starTrek);
// starTrek.pop();
// console.log(starTrek);
// starTrek.peek();

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            //set the last node to holder
            const holder = this.last;
            //set que last to the newNode
            this.last = newNode;
            //set the previous node.next to the new node
            holder.next = newNode;
        }
        return this;
    }

    dequeue(){
        //remove the first node
        const holder = this.first;
        this.first = this.first.next;
        if(holder === this.last){
            this.last = null;
        }
        return holder.value;
    }
}


//Check for palindromes using a stack
//write an algorithm that uses a stack to determine whether a given input is palindrome or not. 
//Well a stack is last in first out

function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    //created a new stack
    const newStack = new Stack();
    // need to loop through the string and add it to stack
    for(let i =0; i < s.length; i++){
        newStack.push(s[i]);
    }
    console.log(newStack);

    //need to return T /F 
    let newStr = "";
    while(newStack.top !== null){
        newStr += newStack.pop();
    }
    console.log(newStr)
}

is_palindrome("dad");