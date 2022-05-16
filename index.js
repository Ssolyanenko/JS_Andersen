class Node{
    constructor(data,prev) {
        this.data = data;
        this.prev = prev;
    }
}

class Stack  {
constructor() {
    this.last =null
}
push(data){
    this.last = new Node(data, this.last)
}
pop(){
    let result;
    if(this.last !== null){
        result = this.last.data
        this.last = this.last.prev
    }
    return result
}
}
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop()
stack.pop()
