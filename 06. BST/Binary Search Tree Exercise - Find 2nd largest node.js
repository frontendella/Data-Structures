// Binary Search Tree Exercise - Find 2nd largest node


function findSecondLargestNode(root) {
    // If tree is empty or has only one node, there is no second largest node
    if (!root || (!root.left && !root.right)) {
      return null;
    }
  
    let curr = root;
    while (curr) {
      // If the largest node has a left child, then the second largest node
      // is the largest node in the left subtree
      if (curr.left && !curr.right) {
        return findLargestNode(curr.left);
      }
  
      // If the largest node doesn't have a right child, then the second
      // largest node is the parent of the largest node
      if (curr.right && !curr.right.left && !curr.right.right) {
        return curr;
      }
  
      curr = curr.right;
    }
  }
  
  function findLargestNode(root) {
    let curr = root;
    while (curr.right) {
      curr = curr.right;
    }
    return curr;
  }
  