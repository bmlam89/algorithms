/*implementation for hashtable data structure*/

function Node(key,val){
    this.key = key;
    this.val = val;
    this.next = null;
}
function HashTable(){
    this.arrary = [23];
    this.numkeys = 0;
}

HashTable.prototype.hashcode = function(key){
    var h = 0; l = key.length; i = 0;
    if(l > 0){
        while(i < l){
            h = (h << 5) - h + key.charCodeAt(i++) | 0;
        }
    }
    return h;
}

HashTable.prototype.insert = function(key,val){
    var idx = this.hashcode(key) % this.arrary.length;
    /*if there isn't a node at the index of the array, just insert a new node at that index*/
    if(!this.array[idx]){
        this.array[idx] = new Node(key,val);
    }else{
        /*run through the linked list at that array*/
        var current = this.array[idx]
        while(current){
            /*if the key is already in the linked list, just update the value and break*/
            if(current.key == key){
                current.val = val;
                return this;
            }
            current = current.next;
        }
        current = new Node(val,key);
    }
    this.numkeys++;
    return this;
}


HashTable.prototype.remove = function(key){
    /*return null if numkeys == 0*/
    if(!this.numkeys){
        return null;
    }else{
        var idx = this.hashcode(key) % this.arrary.length;
        var current = this.arrary[idx];
        
        /*check if current isn't a node, return null*/
        if(!current){
            return null;
        }else{
            /*if key is first node in linked list, shift header to header.next*/
            if(current.key == key && current == this.array[idx]){
                var val = current.val;
                this.array[idx] = this.array[idx].next;
            }else{
                /*iterating through linked list*/
                while(current){
                    var prev = current;
                    current = current.next;

                    if(current.key == key){
                        var val = current.val;
                        prev.next = current.next;
                    }
                }
            }
        }
    }
    return val;
}


HashTable.prototype.is_empty = function(){
    if(!this.numkeys){
        return true;
    }else{
        return false;
    }
}