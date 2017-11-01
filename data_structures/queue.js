import "linkedlist.js"
/* queue implementation using linked lists */
function Queue()
{
    this.front = null;
}

Queue.prototype.enqueue = function(node)
{
    if(!this.front)
    {
        this.front = node;
    }
    else
    {
        var current = this.front;
        while(current.next)
        {
            current = current.next;
        }
        current.next = node;
    }
    return this;
}

Queue.prototype.get_front = function()
{
    return this.front.val;
}

Queue.prototype.dequeue = function()
{
    var old_front = this.front;
    this.front = this.front.next;
    old_front.next = null;
    return old_front;
}

Queue.prototype.print = function()
{
    var current = this.front;
    while(current)
    {
        console.log(current.val);
        current = current.next;
    }
    return this;
}

/* testing Queue implementation */
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(10);
var node4 = new Node(25);

var queue = new Queue();
queue.enqueue(node1).enqueue(node2).enqueue(node3).enqueue(node4).print()
console.log(queue.dequeue(),"dequeue")
queue.print()