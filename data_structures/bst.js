function Node(val)
{
    this.val = val;
    this.count = 1;
    this.left = null;
    this.right = null;
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
        this.insert_node(node.left,val);
    }
    /* repeat same steps for right subtree */
    else if(val > node.val)
    {
        if(!node.right)
        {
            node.right = new Node(val);
        }
        this.insert_node(node.right,val);
    }
    /* case to handle duplicate values */
    else
    {
        node.count++;
    }


}

/* inorder traversal implementation to print values of BST */
BST.prototype.print = function()
{
  this.print_helper(this.root);
  return this;
}

BST.prototype.print_helper = function(node)
{
  if(node)
  {
    
    
    this.print_helper(node.left)
    console.log(node.val)
    this.print_helper(node.right)
  }
}

/* testing out BST implementation */
var bst = new BST()
bst.insert(20);
bst.insert(10);
bst.insert(30).insert(35).insert(3).insert(11).insert(1).insert(100).insert(22);
bst.print()