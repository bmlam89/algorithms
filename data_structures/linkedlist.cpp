#include <iostream>
#include <stdlib.h>

using namespace std;

class Node{
    public:
        int val;
        Node *next;    
        
        Node(int val){
            this->val = val;
            this->next = NULL;
        }
};

class SLL{
    private:
        Node *header;

    public:
        SLL(){
            header = NULL;
        }

        Node* insert_front(int val){
            if(!header){
                header = new Node(val);
            }else{
                Node *new_node = new Node(val);
                new_node->next = header;
                header = new_node;
            }
            return header;
        }

        Node* insert_back(int val){
            if(!header){
                header = new Node(val);
            }else{
                Node *current = header;
                while(current->next){
                    current = current->next;
                }
                current->next = new Node(val);
            }
            return header;
        }
        void print(){
            Node *current = header;
            while(current){
                printf("%d ",current->val);
                current = current->next;
            }
            printf("\n");
        }
};

int main(){
    SLL *list = new SLL;
    list->insert_front(1);
    list->insert_front(3);
    list->insert_back(7);
    list->print();

}