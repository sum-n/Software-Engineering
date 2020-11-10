class Node: 
	def __init__(self, data): 
		self.data = data 
		self.left = None
		self.right = None

def lowest_common_ancestor(root, x, y): 
    if root is None: 
        return None
  
    if root.data == x or root.data == y: 
        return root  

    left_side = lowest_common_ancestor(root.left, x, y)  
    right_side = lowest_common_ancestor(root.right, x, y) 

    if left_side and right_side: 
        return root  
 
    return left_side if left_side is not None else right_side

root = Node(14)                 #            14
root.left = Node(9)             #           /  \
root.right = Node(12)           #          9   12
root.left.left = Node(6)        #         / \  / \
root.left.right = Node(8)       #        6  8 10 11 
root.left.right.left = Node(4)  #          / \ 
root.left.right.right = Node(1) #         4   1
root.right.left = Node(10)
root.right.right = Node(11)

print ("Lowest Common Aancestor of 4 and 1 is", lowest_common_ancestor(root, 4, 1).data)
print ("Lowest Common Aancestor of 10 and 11 is", lowest_common_ancestor(root, 10, 11).data)
print ("Lowest Common Aancestor of 6 and 8 is", lowest_common_ancestor(root, 6, 8).data)
print ("Lowest Common Aancestor of 9 and 12 is", lowest_common_ancestor(root, 9, 12).data)

class Node:
    def __init__(self, data):
        self.data = data
        self.predec = []
        self.succ = []

def DAGLowestCommonAncestor(root, n1, n2):
    if root is None:
        return None
    if root.data == n1.data or root.data == n2.data:
        return root.data
    if n1.data == n2.data:
        return n1.data
    lca = []

    for i in range(len(n1.predec)):
        for j in range(len(n2.predec)):
            if (n1.predec[i].data == n2.predec[j].data):
                lca.append(n1.predec[i].data)

    if (lca == []):
        if (n1.data > n2.data):
            lca.append(DAGLowestCommonAncestor(root, n1.predec[0], n2))
        else:
            lca.append(DAGLowestCommonAncestor(root, n1, n2.predec[0]))
    return max(lca)
