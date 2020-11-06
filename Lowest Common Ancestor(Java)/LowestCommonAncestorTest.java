import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class LowestCommonAncestorTest {
	LowestCommonAncestor tree = new LowestCommonAncestor();
	@Test
	void testFindLowestCommonAncestor() {
        tree.root = new Node(14);                   //               14           
        tree.root.left = new Node(9);               //              /  \              
        tree.root.right = new Node(12);             //             9    12               
        tree.root.left.left = new Node(6);          //            / \   / \               
        tree.root.left.right = new Node(8);         //           6   8 10  11                
        tree.root.right.left = new Node(10);        //              / \                
        tree.root.right.right = new Node(11);       //             4   1                
        tree.root.left.right.left = new Node(4);                    
        tree.root.left.right.right = new Node(1);  
	    
        assertEquals(8, tree.findLowestCommonAncestor(4,1));
        assertEquals(9, tree.findLowestCommonAncestor(8,6));
        assertEquals(14, tree.findLowestCommonAncestor(1,11));
        assertEquals(12, tree.findLowestCommonAncestor(10,11));
	}
}
