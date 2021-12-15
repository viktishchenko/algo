/* 
Вставка/удаление - O(logn)
Поиск - O(logn)
- добавление узла
- обход в глубину (Depth First Search)
    - preOrder
       1.Node (callback)
       2.Left
       3.Right
    - inOrder
       1.Left
       2.Node (callback)
       3.Right
    - postOrder
       1.Left
       2.Right
       3.Node (callback)
- обход в ширину (Breadth First Search)

*/

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;

    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }

    /*     if (!this.root) {
      this.root = new TreeNode(value);
    } else {
      let node = this.root;
      let newNode = new TreeNode(value);
      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break;
          }
          node = node.right;
        } else {
          if (!node.left) {
            break;
          }
          node = node.left;
        }
      }
      if (value > node.value) {
        node.right = newNode;
      } else {
        node.left = newNode;
      }
    } */
  }

  // preOrder(node, callback) {
  //   if (!node) {
  //     return;
  //   }

  //   if (callback) {
  //     callback(node);
  //   }

  //   this.preOrder(node.left, callback);
  //   this.preOrder(node.right, callback);
  // }
  // inOrder(node, callback) {
  //   if (!node) {
  //     return;
  //   }

  //   this.inOrder(node.left, callback);

  //   if (callback) {
  //     callback(node);
  //   }

  //   this.inOrder(node.right, callback);
  // }
  // postOrder(node, callback) {
  //   if (!node) {
  //     return;
  //   }

  //   this.postOrder(node.left, callback);
  //   this.postOrder(node.right, callback);

  //   if (callback) {
  //     callback(node);
  //   }
  // }

  // traverseDFS(callback, method) {
  //   if (method === "preOrder") {
  //     return this.preOrder(this.root, callback);
  //   }
  //   if (method === "inOrder") {
  //     return this.inOrder(this.root, callback);
  //   }
  //   if (method === "postOrder") {
  //     return this.postOrder(this.root, callback);
  //   }
  // }

  /*   traverseBFS(callback) {
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      callback(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  } */

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree();
tree.add(8);
tree.add(7);
tree.add(9);
tree.add(5);
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(2);
tree.add(11);
tree.print();

/* tree.traverseBFS((node) => {
  console.log(node.value);
}); */
// BFS :>> 8 7 9 5 10 2 6 20 11

/*     BST
        8
      7   9
    5       10
  2   6        20
            11
*/

console.log("tree :>> ", tree);
/* tree.traverseDFS((node) => {
  console.log(node.value);
}, "preOrder"); // DFS preOrder :>> 8 7 5 2 6 9 10 20 11 */
/* tree.traverseDFS((node) => {
  console.log(node.value);
}, "inOrder"); // DFS inOrder :>> 2 5 6 7 8 9 10 11 20 */
/* tree.traverseDFS((node) => {
  console.log(node.value);
}, "postOrder"); // DFS postOrder :>> 2, 6, 5, 7, 11, 20, 10, 9, 8; */

/* 
tree :>>  BinaryTree {
  root: TreeNode {
    value: 8,
    left: TreeNode { value: 7, left: [TreeNode], right: null }, 
    right: TreeNode { value: 9, left: null, right: [TreeNode] } 
  }
}
*/
