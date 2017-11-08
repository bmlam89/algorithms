function Node(val,pri)
{
    this.val = val;
    this.pri = pri;
    this.next = null;
}
function priority_queue()
{
    this.header = null;
}

priority_queue.prototype.enqueue = function(val,pri)
{
    var node = new Node(val,pri)
    if(!this.header || this.header.pri < node.pri)
    {
        node.next = this.header;
        this.header = node;
    }
    else
    {
        var current = this.header;
        while(current.next && current.next.pri >= node.pri)
        {
            current = current.next;
        }
        node.next = current.next;
        current.next = node;
    }
}