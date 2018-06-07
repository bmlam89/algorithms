class Node(object):

    def __init__(self,value):
        self.next = None
        self.value = value

class LinkedList(object):
    def __init__(self):
        self.header = None

    def insertFront(self,value):
        if(not self.header):
            self.header = Node(value)
        else:
            node = Node(value)
            node.next = self.header
            self.header = node
        return self
    
    def insertBack(self,value):
        if(not self.header):
            self.header = Node(value)
        else:
            current = self.header
            while(current.next):
                current = current.next
            current.next = Node(value)
        return self
    
    def printlist(self):
        current = self.header
        while(current):
            print(current.value)
            current = current.next

x = LinkedList()
y = LinkedList()
x.insertBack(1).insertBack(2).insertBack(3).printlist()
y.insertFront(1).insertFront(2).insertFront(3).printlist()