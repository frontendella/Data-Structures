// Implement the following on the SinglyLinkedList class

// rotate

// This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

// Time Complexity: O(N), where N is the length of the list.

// Space Complexity: O(1)

// Examples

// (Note: push is implemented to help you test your rotate function)

// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(3);
// singlyLinkedList.head.val; // 20
// singlyLinkedList.head.next.val; // 25
// singlyLinkedList.head.next.next.val; // 5
// singlyLinkedList.head.next.next.next.val; // 10
// singlyLinkedList.head.next.next.next.next.val; // 15
// singlyLinkedList.tail.val; // 15
// singlyLinkedList.tail.next; // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(-1);
// singlyLinkedList.head.val; // 25
// singlyLinkedList.head.next.val; // 5
// singlyLinkedList.head.next.next.val; // 10
// singlyLinkedList.head.next.next.next.val; // 15
// singlyLinkedList.head.next.next.next.next.val; // 20
// singlyLinkedList.tail.val; // 20
// singlyLinkedList.tail.next // null
// var singlyLinkedList = new SinglyLinkedList;
// singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.tail.val; // 25;
 
// singlyLinkedList.rotate(1000);
// singlyLinkedList.head.val; // 5
// singlyLinkedList.head.next.val; // 10
// singlyLinkedList.head.next.next.val; // 15
// singlyLinkedList.head.next.next.next.val; // 20
// singlyLinkedList.head.next.next.next.next.val; // 25
// singlyLinkedList.tail.val; // 25
// singlyLinkedList.tail.next // null


class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // ... other methods (push, pop, etc.) ...
  
    rotate(k) {
      if (this.length <= 1) {
        return this;
      }
  
      // Calculate the actual number of rotations needed
      k = k % this.length;
      if (k < 0) {
        k += this.length;
      }
  
      // Connect the tail to the head to make the linked list circular
      this.tail.next = this.head;
  
      // Find the new tail node
      let newTail = this.head;
      for (let i = 0; i < this.length - 1; i++) {
        newTail = newTail.next;
      }
  
      // Find the new head node
      let newHead = this.head;
      for (let i = 0; i < this.length - k - 1; i++) {
        newHead = newHead.next;
      }
  
      // Break the circular linked list and update the head and tail nodes
      this.head = newHead.next;
      newTail.next = null;
      this.tail = newTail;
  
      return this;
    }
  }
  

//   The time complexity of the rotate method I provided is already O(N), which is optimal for this problem since we need to traverse the linked list at least once to perform the rotation. However, there might be other optimizations that could be made depending on the specific requirements of your use case.