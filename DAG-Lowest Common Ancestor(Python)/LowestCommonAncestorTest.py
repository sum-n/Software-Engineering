import unittest
from DAG import Node,DAGLowestCommonAncestor

class DAGLowestCommonAncestorTest(unittest.TestCase):
    def testing_normal_graph(self):
        root, n1, n2, n3, n4, n5, n6 = Node(0), Node(1), Node(2), Node(3), Node(4), Node(5), Node(6)

        root.succ = [n1]
        n1.predec = [root]
        n1.succ = [n2, n3, n4, n5]
        n2.predec = [n1]
        n2.succ = [n4]
        n3.predec = [n1]
        n3.succ = [n4, n5]
        n4.predec = [n1, n2, n3]
        n4.succ = [n5]
        n5.predec = [n1, n3, n4]
        n5.succ = [n6]
        n6.predec = [n5]

        lca = DAGLowestCommonAncestor(root, n2, n3)
        self.assertEquals(lca,1)

    def testing_empty_graph(self):
        root = None
        
        lca = DAGLowestCommonAncestor(root, 1, 5)
        self.assertEquals(lca,None)

    def testing_root_of_graph(self):
        root, n1 = Node(0), Node(1)

        root.succ = [n1]

        lca = DAGLowestCommonAncestor(root, root, n1)
        self.assertEquals(lca, 0)

if __name__ == '__main__':
    unittest.main()
