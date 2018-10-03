// SumTree
// 
// A SumTree is a Binary Tree where value of every node x is equal to sum of nodes present 
// in its left subtree and right subtree of x. 
// An empty tree is SumTree and sum of an empty tree can be considered as 0. 
// A leaf node is also considered as SumTree.

/* Sample input (Array)
[{"key": 26}, 
 {"key": 10, "parentKey": 26, "position": "left"}, 
 {"key": 3, "parentKey": 26, "position": "right"}, 
 {"key": 4, "parentKey": 10, "position": "left"}, 
 {"key": 6, "parentKey": 10, "position": "right"}, 
 {"key": 1, "parentKey": 3, "position": "left"}, 
 {"key": 2, "parentKey": 3, "position": "right"}
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
  
  isSumTree(root) {
      if (root.left === null && root.right === null) {
        return {
          sum: root.key,
          isSumTree: true
        };
      }
        
      const left = this.isSumTree(root.left);
      const right = this.isSumTree(root.right);
      
      this.displayNode(root, left, right);
      
      return {
        sum: root.key + left.sum + right.sum,
        isSumTree: root.key === left.sum + right.sum
      };
  }
  
}

return execute = (arr) => {
  const input = JSON.parse(arr);
  let result = '';
  const displayNode = (node, left, right) => {
    console.log(node.key, left.sum, right.sum);
    result += `key: ${node.key}, leftSum: ${left.sum}, rightSum: ${right.sum} \n`;
  }
    
  let btree = new BTree(displayNode);

  const l = input.length;
  for(let i=0; i<l; i++) {
    btree.add(input[i].key, input[i].parentKey, input[i].position);
  }
   
  const res = btree.isSumTree(btree.root);
  console.log(res.isSumTree);

  result += `\n is SumTree: ${res.isSumTree} \n`;

  return result;
}