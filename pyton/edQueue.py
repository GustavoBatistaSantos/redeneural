class Node:
    def __init__(self, data):  # método construtor
        self.data = data
        self.next = None

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self._size = 0

    def push(self, elem):
        node = Node(elem)

        if self.last is None:
            # Se a fila estiver vazia, primeiro e último apontam para o novo nó
            self.first = node
            self.last = node
        else:
            # Liga o novo nó ao último nó e atualiza o ponteiro last
            self.last.next = node
            self.last = node

        self._size += 1

    def pop(self):
        if self.empty():
            return 'Fila vazia'
        
        elem = self.first.data
        self.first = self.first.next

        if self.first is None:
            self.last = None

        self._size -= 1
        return elem

    def peek(self):
        if self.empty():
            return 'Fila vazia'
        return self.first.data

    def __len__(self):  # retorna o tamanho
        return self._size

    def empty(self):
        return len(self) == 0

    def __repr__(self):
        if self.empty():
            return 'Fila vazia'

        s = ''
        p = self.first
        while p:
            s += str(p.data)
            p = p.next
            if p:
                s += '->'
        return s

