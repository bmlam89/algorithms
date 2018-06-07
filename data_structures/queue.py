class Node(object):
    def __init__(self,value):
        self.next = None
        self.value = value

class Queue(object):
    def __init__(self):
        self.front = None

    def push(self,value):
        if(not self.front):
            self.front = Node(value)
        else:
            current = self.front
            while(current.next):
                current = current.next
            current.next = Node(value)
        return self
    def pop(self):
        front = self.front
        self.front = self.front.next
        return front.value

x = Queue()
x.push(1).push(2).push(3)
print(x.pop())
print(x.pop())
print(x.pop())
