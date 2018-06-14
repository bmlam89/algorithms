<!DOCTYPE html>
 <html>
    <head>

        <title>Hello World</title>

    </head>
    <body>
  
        <?php
            class Node{
                public $data;
                public $next;
                function __construct($data){
                    $this->data = $data;
                    $this->next = NULL;    
                }
            }
            class LinkedList{
                private $header;

                function __construct(){
                    $this->header = NULL;
                }

                function insert($data){
                    if($this->header == NULL){
                        $this->header = new Node($data);
                    }else{
                        $current = $this->header;
                        while($current->next != NULL){
                            $current = $current->next;
                        }
                        $current->next = new Node($data);
                    }
                    return $this;
                    
                }
                function insert2($data){
                    if($this->header == NULL){
                        $this->header = new Node($data);
                    }else{
                        $node = new Node($data);
                        $node->next = $this->header;
                        $this->header = $node;
                    }
                    return $this;
                }
                function output(){
                    $current = $this->header;
                    while($current){
                        echo $current->data." ";
                        $current = $current->next;
                    }
                }
            }
            $sll = new LinkedList;
            $sll->insert2(10);
            $sll->insert2("hello");
            $sll->insert2(11);

            $sll->output();
        ?>
    </body>
</html>