// Binary Search Tree
// Add
// Find
// preOrder, inOrder, postOrder 

// Input type: JSON
// Example input:
// {"arr": [5, 5, 3, 3, 4, 4, 7, 7, 6, 6, 8, 8], "key": 4}

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(displayNode) {
    this.root = null;
    this.displayNode = displayNode.bind(this);
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

return execute = (string) => {
  const input = JSON.parse(string);

  const displayNode = (node) => {
    console.log(node.key, node.val);
    result += `key: ${node.key}, val: ${node.val} \n`;
  }
  let btree = new BTree(displayNode);

  const l = input.arr.length;
  for(let i=0; i<l; i+=2) {
    btree.add(input.arr[i], input.arr[i+1]);
  }

  let result = '';


  result += 'preOrder \n';
  btree.preOrder(btree.root, displayNode);
  
  result += 'inOrder \n';
  btree.inOrder(btree.root, displayNode);
  
  result += 'postOrder \n';
  btree.postOrder(btree.root, displayNode);

  result += `find node with key ${input.key} \n`;
  let node = btree.find(btree.root, input.key);

  if (node === null) {
    result += 'null';
  } else {
    displayNode(node);
  }

  return result;
}