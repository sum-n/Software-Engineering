
class Node { 
    int data; 
    Node left; 
    Node right; 
   
    Node(int item) { 
        data = item; 
        left = right = null; 
    } 
} 
 
class LowestCommonAncestor { 
    Node root; 
    public static void main(String args[]) {                  
        LowestCommonAncestor tree = new LowestCommonAncestor();     
        int X, Y;                                                   
        tree.root = new Node(14);                   //               14           
        tree.root.left = new Node(9);               //              /  \              
        tree.root.right = new Node(12);             //             9    12               
        tree.root.left.left = new Node(6);          //            / \   / \               
        tree.root.left.right = new Node(8);         //           6   8 10  11                
        tree.root.right.left = new Node(10);        //              / \                
        tree.root.right.right = new Node(11);       //             4   1                
        tree.root.left.right.left = new Node(4);                    
        tree.root.left.right.right = new Node(1);                   

        X = 4; 
        Y = 1; 
        Node node = tree.lowestCommonAncestor(tree.root, X, Y); 
        System.out.println("Lowest Common Ancestor of " + X + " and " + Y + " is " + node.data + "."); 

        X = 10; 
        Y = 11;
        node = tree.lowestCommonAncestor(tree.root, X, Y); 
        System.out.println("Lowest Common Ancestor of " + X + " and " + Y + " is " + node.data + "."); 

        X = 6; 
        Y = 8; 
        node = tree.lowestCommonAncestor(tree.root, X, Y); 
        System.out.println("Lowest Common Ancestor of " + X + " and " + Y + " is " + node.data + "."); 

        X = 6; 
        Y = 12; 
        node = tree.lowestCommonAncestor(tree.root, X, Y); 
        System.out.println("Lowest Common Ancestor of " + X + " and " + Y + " is " + node.data + "."); 
    } 

    Node lowestCommonAncestor(Node node, int X, int Y) { 
        if (node == null) {
            return null; 
        }
  
        if (node.data == X || node.data == Y) {
            return node; 
        }

        Node leftLCA = lowestCommonAncestor(node.left, X, Y); 
        Node rightLCA = lowestCommonAncestor(node.right, X, Y); 
  
        if (leftLCA != null && rightLCA != null) {
            return node;
        } 

        if (leftLCA != null) {
            return leftLCA;
        }
        else return rightLCA;
    } 
} 