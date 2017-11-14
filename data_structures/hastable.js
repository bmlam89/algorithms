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

HashTable.prototype.is_empty = function(){
    if(!this.numkeys){
        return true;
    }else{
        return false;
    }
}