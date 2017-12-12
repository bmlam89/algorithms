/* method recursively implements the merge between 2 sorted linked lists */
function Node(val){
    this.val = val;
    this.next = null;
}

function merge(l1,l2){
    if(!l1) return l2; //if l1 is empty
    if(!l2) return l1; //if l2 is empty

    if(l1.val < l2.val){
        l1.next = merge(l1.next,l2);
        return l1;
    }else{
        l2.next = merge(l1,l2.next);
        return l2;
    }
}

var x = new Node(1);
x.next = new Node(2);
x.next.next = new Node(4);

var y = new Node(1);
y.next = new Node(3);
y.next.next = new Node(4);


test = merge(x,y)
while (test){
  console.log(test.val);
  test = test.next;
}