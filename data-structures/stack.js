/**
 * @author Rashik Ansar
 *
 * Implemtaion of Stack data structure
 * Stack follows LIFO (Last In First Out) priniciple
 * For Insertion and Deletion its complexity is O(1)
 * For Accessing and Searching its complexity is O(n)
 */

class Stack {
  /**
   * initialize stack instances with null
   */
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /**
   * Adding data to Top of the stack
   * @param {*} data
   * @returns {Stack}
   */
  push(data) {
    let newNode = new Node(data);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
    return this;
  }

  /**
   * Removing data frpm Top of the stack
   * @returns {Node.data} The data that is removing from the stack
   */
  pop() {
    if (!this.first) {
      throw Error('UNDERFLOW :::: Stack is empty, there is nothing to remove');
    }
    let current = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = current.next;
    this.size--;
    return current.data;
  }

  /**
   * @returns {Node.data} Top most element of the stack
   */
  peek() {
    if (!this.first) {
      throw Error('Stack is empty');
    }
    return this.first.data;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
