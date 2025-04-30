/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack = [this.root];
    let sum = 0;

    while (stack.length) {
      const current = stack.pop();
      if (current === null) return 0;
      sum += current.val;
      
      for (let child of current.children) {
        stack.push(child);
      }
    }
    
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let stack = [this.root];
    let count = 0;

    while (stack.length) {
      const current = stack.pop();
      if (current === null) return 0;
      count += (current.val % 2 === 0) ? 1 : 0;
      
      for (let child of current.children) {
        stack.push(child);
      }
    }
    
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let stack = [this.root];
    let count = 0;

    while (stack.length) {
      const current = stack.pop();
      if (current === null) return 0;
      count += (current.val > lowerBound) ? 1 : 0;
      
      for (let child of current.children) {
        stack.push(child);
      }
    }
    
    return count;
  }
}

module.exports = { Tree, TreeNode };
