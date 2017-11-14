/* implementation of singly linked list and methods associated with it */


//Node object implementation
function Node(val)
{
    this.val = val;
    this.next = null;
}

//list data structure implementation
function SLL()
{
    this.header = null;
}
SLL.prototype.insert_at_front = function(node)
{
    if(!this.header)
    {
        this.header = node;
    }
    else
    {
        node.next = this.header;
        this.header = node;
    }
    return this
}
SLL.prototype.print = function()
{
    if(!this.header)
    {
        return
    }
    var current = this.header;
    while(current)
    {
        console.log(current.val);
        current = current.next
    }
    return this
}

SLL.prototype.insert_at_back = function(node)
{
    if(!this.header)
    {
        this.header = node;
    }
    else
    {
        var current = this.header;
        while(current.next)
        {
            current = current.next;
        }
        current.next = node;
    }
    return this;
}

SLL.prototype.insert = function(index,node)
{
    var pos = index
    if(!this.header && pos == 0)
    {
        this.header = node;
    }
    else if(this.header && pos == 0)
    {
        node.next = this.header
        this.header = node;
    }
    else
    {
        var current = this.header;
        while(pos > 0 || current)
        {
            var prev = current;
            current = current.next;
            pos--;
        }
        if(pos==0)
        {
            prev.next = node;
            node.next = current;
        }
        else
        {
            console.log("Index is out of range");
        }
    }
    return this;
};

SLL.prototype.contains = function(val)
{
    if(!this.header)
    {
        return false;
    }
    var current = this.header;
    while(current)
    {
        if(current.val == val)
        {
            return true;
        }
        current = current.next;
    }
    return false;
}

SLL.prototype.reverse = function()
{
    if(!this.header || !this.header.next)
    {
        return
    }
    var prev = this.header;
    var current = prev.next;
    var runner = current.next;
    while(runner)
    {
        current.next = prev;
        prev = current;
        current = runner;
        runner = runner.next;
    }
    this.header.next = null
    current.next = prev;
    this.header = current;
    return this;
}

SLL.prototype.remove_kth_from_end = function(k){
    var length = 0;
    var current = this.header;
    while(current){
        length++;
        current = current.next;
    }
    current = this.header;
    if(length-k==0){
        //remove header from SLL
        if(current.next){
            this.header = current.next;
        }else{
            this.header = null;
        }
    }else if(k==1){//remove last item in SLL
        for(var i = 0; i < length-1; i++){
            var prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }else{
        for(var i = 0; i < length-k; i++){
            var prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }
    return this;
}


//testing singly linked list class
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(10);
var node4 = new Node(25);
var sll = new SLL();
sll.insert_at_front(node1).insert_at_front(node2).insert_at_front(node3).insert_at_front(node4).print()
sll.insert_at_back(node1).insert_at_back(node2).insert_at_back(node3).insert_at_back(node4).print();
sll.reverse().print();
sll.remove_kth_from_end(2).print()