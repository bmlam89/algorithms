function Node(val)
{
    this.val = val;
    this.count = 1;
    this.left = null;
    this.right = null;
}

Node.prototype.increment = function()
{
  this.count++;
  return this;
}
function BST()
{
    this.root = null;
}

/* insert method is the helper function that calls insert_node 
which is the function that does the actual node insertion */
BST.prototype.insert = function(val)
{

    if(!this.root)
    {
        this.root = new Node(val);
        return this;
    }

    var current = this.root;
    this.insert_node(current,val);
    return this;
}

BST.prototype.insert_node = function(node,val)
{
    /* enter left subtree if val < node.val */
    if(val < node.val)
    {
        /* if node.left is null, we've found spot to insert */
        if(!node.left)
        {
            node.left = new Node(val);
        }
        /* else we traverse left subtree even further until we hit that correct spot */
        else
        {
            this.insert_node(node.left,val);
        }
    }
    /* repeat same steps for right subtree */
    else if(val > node.val)
    {
        if(!node.right)
        {
            node.right = new Node(val);
        }
        else
        {
            this.insert_node(node.right,val);
        }
    }
    /* case to handle duplicate values */
    else
    {
        node.increment();
    }
}

BST.prototype.print = function()
{
  this.print_helper(this.root);
  return this;
}

BST.prototype.print_helper = function(node)
{
  if(node)
  {
    
    console.log(node)
    this.print_helper(node.left)
    
    this.print_helper(node.right)
  }
}
var bst = new BST()


bst.insert(20).insert(10).insert(30).insert(35).insert(3).insert(11).insert(1).insert(100).insert(22).insert(3);
bst.print()