import unittest
import LowestCommonAncestor

class TestLowestCommonAncestor(unittest.TestCase):
    #Testing for a node 4 and 1
    def testing_4_and_1(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 4, 1).data, 8)
        
    #Testing for a node 10 and 11
    def testing_10_and_11(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 10, 11).data, 12)
        
    #Testing for a node 6 and 8
    def testing_6_and_8(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 6, 8).data, 9)
        
    #Testing for a node 9 and 12
    def testing_9_and_12(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 9, 12).data, 14)
        
    #Testing for node 1 and 11
    def testing_1_and_11(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 1, 11).data, 14)
    
    #Testing for nodes that are not in the range of the tree
    def testing_out_of_range(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 15, 19), None)
        
    #Testing for a same node
    def testing_same_numbers(self):
        self.assertEqual(LowestCommonAncestor.lowest_common_ancestor(LowestCommonAncestor.root, 10, 10).data, 10)

if __name__ == '__main__':
    unittest.main()