import "linkedlist.js"

/* linked list implementation for a stack */
function Stack()
{
    this.top = null;
}

Stack.prototype.push = function(node)
{
    if(!this.top)
    {
        this.top = node;
    }
    else
    {
        node.next = this.top;
        this.top = node;
    }
    return this;
}

Stack.prototype.pop = function()
{
    var old_top = this.top;
    this.top = this.top.next;
    old_top.next = null;
    return old_top;
}

Stack.prototype.get_top = function()
{
    return this.top.val;
}

Stack.prototype.print = function()
{
    var current = this.top;
    while(current)
    {
        console.log(current.val);
        current = current.next;
    }
    return this;
}



/* testing Stack data structure */
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(10);
var node4 = new Node(25);
var stack = new Stack()
stack.push(node1).push(node2).push(node3).push(node4).print() //outputs 25 10 2 1
console.log(stack.pop()) //outputs 25
stack.print() //outputs 10 2 1