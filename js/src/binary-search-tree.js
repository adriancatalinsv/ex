// Add
// Find
// preOrder, inOrder, postOrder 

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(key, val) {
    this.root = null;
  }
  
  addElement(root, newNode) {
    
    if(newNode.key < root.key) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.addElement(root.left, newNode);
      }
    } else if(newNode.key === root.key) {
      root.value = newNode.value;
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.addElement(root.right, newNode);
      }
    }
  }
  
  add(key, val) {
    const newNode = new Node(key, val);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.addElement(this.root, newNode);
    }
  }
  
  displayNode(node) {
    console.log(node.key, node.val);
  }
  
  preOrder(root) {
    if(root !== null) {
      this.displayNode(root);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  
  inOrder(root) {
    if(root !== null) {
      this.inOrder(root.left);
      this.displayNode(root);
      this.inOrder(root.right);
    }
  }
  
  postOrder(root) {
    if(root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      this.displayNode(root);
    }
  }
  
  find(node, key) {
    if (node == null) {
      return null;
    } else if (key < node.key) {
      return this.find(node.left, key);
    } else if (key > node.key) {
      return this.find(node.right, key);
    } else {
      return node;
    }
  }
}


let btree = new BTree();

btree.add(5, 5);
btree.add(3, 3);
btree.add(4, 4);
btree.add(7, 7);
btree.add(6, 6);
btree.add(8, 8);

console.log(btree.root);

btree.preOrder(btree.root);
console.log('');
btree.inOrder(btree.root);
console.log('');
btree.postOrder(btree.root);

console.log('');
console.log(btree.find(btree.root, 4));
console.log(btree.find(btree.root, 3));
console.log(btree.find(btree.root, 7));
console.log(btree.find(btree.root, 10));