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
