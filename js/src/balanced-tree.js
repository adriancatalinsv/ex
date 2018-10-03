// Balanced tree
// Given a binary tree, find if it is height balanced or not.  
// A tree is height balanced if difference between heights of left and right subtrees is not more than one for all nodes of tree.

// Input samples:
// Balanced tree
/*
[{"key": 26}, 
 {"key": 10, "parentKey": 26, "position": "left"}, 
 {"key": 3, "parentKey": 26, "position": "right"}, 
 {"key": 4, "parentKey": 10, "position": "left"}, 
 {"key": 6, "parentKey": 10, "position": "right"}, 
 {"key": 1, "parentKey": 3, "position": "left"}, 
 {"key": 2, "parentKey": 3, "position": "right"}
]
*/
// Unbalanced tree
/*
[{"key": 26}, 
 {"key": 10, "parentKey": 26, "position": "left"}, 
 {"key": 3, "parentKey": 26, "position": "right"}, 
 {"key": 4, "parentKey": 10, "position": "left"}, 
 {"key": 6, "parentKey": 4, "position": "left"}, 
 {"key": 1, "parentKey": 4, "position": "left"}
 ]
*/

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BTree {
  constructor(displayNode) {
    this.root = null;
    this.displayNode = displayNode.bind(this);
  }
  
  addElement(root, parentKey, position, newNode) {
    if(root !== null) {
      if(root.key === parentKey) {
        root[position] = newNode;
        return;
      }
    
      this.addElement(root.left, parentKey, position, newNode);
      this.addElement(root.right, parentKey, position, newNode);
    }
  }
  
  add(key, parentKey, position) {
    const newNode = new Node(key);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.addElement(this.root, parentKey, position, newNode);
    }
  }
  
  isBalancedTree(root) {
      if (root === null) {
        return {
          height: 0,
          isBalancedTree: true
        };
      }
      if (root.left === null && root.right === null) {
        return {
          height: 1,
          isBalancedTree: true
        };
      }
        
      const left = this.isBalancedTree(root.left);
      const right = this.isBalancedTree(root.right);
      
      this.displayNode(root, left, right);
      
      const diff = Math.abs(left.height - right.height);
    
      return {
        height: 1 + Math.max(left.height, right.height),
        isBalancedTree: diff === 0 || diff === 1
      };
  }
  
}

return execute = (string) => {
  const input = JSON.parse(string);
  let result = '';
  const displayNode = (node, left, right) => {
    console.log(node.key, left.height, right.height);
    result += `key: ${node.key}, leftHeight: ${left.height}, rightHeight: ${right.height} \n`;
  }
    
  let btree = new BTree(displayNode);

  const l = input.length;
  for(let i=0; i<l; i++) {
    btree.add(input[i].key, input[i].parentKey, input[i].position);
  }
   
  const res = btree.isBalancedTree(btree.root);
  console.log(res.isBalancedTree);

  result += `\n is BalancedTree: ${res.isBalancedTree} \n`;

  console.log(result);
  return result;
}
