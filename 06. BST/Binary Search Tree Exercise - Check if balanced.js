// Binary Search Tree Exercise - Check if balanced
// Write a function on the BinarySearchTree class

// isBalanced - returns true if the BST is balanced, otherwise returns false.

// A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.isBalanced(); // true
 
// var binarySearchTree2 = new BinarySearchTree();
// binarySearchTree2.insert(5);
// binarySearchTree2.isBalanced(); // true
// binarySearchTree2.insert(6);
// binarySearchTree2.isBalanced(); // true
// binarySearchTree2.insert(7);
// binarySearchTree2.isBalanced(); // false


class BinarySearchTree {
    // ...
    
    isBalanced() {
      // Base case: an empty tree is balanced
      if (!this.root) {
        return true;
      }
  
      // Check if the tree is balanced recursively
      return this.checkBalance(this.root) !== -1;
    }
  
    checkBalance(node) {
      // Base case: a null node has height 0 and is balanced
      if (!node) {
        return 0;
      }
  
      // Check the height and balance of the left and right subtrees recursively
      const leftHeight = this.checkBalance(node.left);
      if (leftHeight === -1) {
        return -1;
      }
      const rightHeight = this.checkBalance(node.right);
      if (rightHeight === -1) {
        return -1;
      }
  
      // If the heights of the left and right subtrees differ by more than 1,
      // the tree is not balanced
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }
  
      // The height of the current node is the maximum height of its children plus 1
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

//   By using a recursive approach to traverse the binary search tree, this solution has a time complexity of O(n) and a space complexity of O(h), where n is the number of nodes in the tree and h is the height of the tree. However, the worst-case time complexity for a balanced binary search tree is O(log n), since the height of a balanced binary search tree is logarithmic in the number of nodes.

// if you know that the tree is always balanced, you could further optimize the solution by removing the check for the height difference between the left and right subtrees. In this case, you could modify the checkBalance method to return the height of the tree if it is balanced, or -1 if it is not balanced:


class BinarySearchTree {
    // ...
    
    isBalanced() {
      // Base case: an empty tree is balanced
      if (!this.root) {
        return true;
      }
  
      // Check if the tree is balanced recursively
      return this.checkBalance(this.root) !== -1;
    }
  
    checkBalance(node) {
      // Base case: a null node has height 0 and is balanced
      if (!node) {
        return 0;
      }
  
      // Check the height and balance of the left and right subtrees recursively
      const leftHeight = this.checkBalance(node.left);
      const rightHeight = this.checkBalance(node.right);
  
      // If either subtree is not balanced, return -1
      if (leftHeight === -1 || rightHeight === -1) {
        return -1;
      }
  
      // If the heights of the left and right subtrees differ by more than 1,
      // the tree is not balanced, so return -1
      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }
  
      // The height of the current node is the maximum height of its children plus 1
      return Math.max(leftHeight, rightHeight) + 1;
    }
  }

//   This modified solution has the same worst-case time complexity of O(log n) and space complexity of O(h), but it is slightly faster since it avoids the check for the height difference between the left and right subtrees. However, it is important to note that this optimization assumes that the tree is always balanced, which may not be the case in practice.
  
  


