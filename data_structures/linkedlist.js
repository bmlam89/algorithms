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


/*summing two linked lists together*/
function ListNode(val){
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var r1 = l1; r2 = l2; carry = 0; sum = null
    /*base case if l1 exists but not l2*/
    if(r1 && !r2){
        return r1;
    }else if(!r1 && r2){ /*if l1 doesn't exist but l2 does*/
        return r2;
    }
    while(r1 && r2){
        if(r1.val+r2.val+carry >= 10){
            if(!sum){
                sum = new ListNode(r1.val+r2.val+carry-10);
            }else{
                var s_runner = sum;
                while(s_runner.next){
                    s_runner = s_runner.next;
                }
                s_runner.next = new ListNode(r1.val+r2.val+carry-10);
            }
            carry = 1;
        }else{
           if(!sum){
               sum = new ListNode(r1.val+r2.val+carry);
           }else{
               var s_runner = sum;
               while(s_runner.next){
                   s_runner = s_runner.next;
               }
               s_runner.next = new ListNode(r1.val+r2.val+carry);
           }
            carry = 0;
        }
        r1 = r1.next;
        r2 = r2.next;
    }
    while(r1){
        if(r1.val+carry >= 10){
            s_runner = sum;
            while(s_runner.next){
                s_runner = s_runner.next;
            }
            s_runner.next = new ListNode(r1.val+carry-10);
            carry = 1;
        }else{
            s_runner = sum;
            while(s_runner.next){
                s_runner = s_runner.next;
            }
            s_runner.next = new ListNode(r1.val+carry);
            carry = 0;
        }
        r1 = r1.next;
    }
    while(r2){
        if(r2.val+carry >= 10){
            s_runner = sum;
            while(s_runner.next){
                s_runner = s_runner.next;
            }
            s_runner.next = new ListNode(r2.val+carry-10);
            carry = 1;
        }else{
            s_runner = sum;
            while(s_runner.next){
                s_runner = s_runner.next;
            }
            s_runner.next = new ListNode(r2.val+carry);
            carry = 0;
        }
        r2 = r2.next;
    }
    if(carry){
        s_runner = sum;
        while(s_runner.next){
            s_runner = s_runner.next;
        }
        s_runner.next = new ListNode(carry);
    }
    return sum;
};

/* testing sum */
var l1 = new ListNode(5);
var l2 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(4);
l2.next = new ListNode(4);
l2.next.next = new ListNode(3);
var sum = addTwoNumbers(l1,l2);
while(sum){
  console.log(sum.val);
  sum = sum.next;
}