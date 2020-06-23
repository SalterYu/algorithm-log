var levelOrder = function (root) {
  return root.filter(item => item)
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}


var levelOrder = function (root) {
  if (root === null) return [];
  var list = [root];
  var result = [];
  while (list.length) {
    var item = list.shift();
    if (item !== null) {
      result.push(item.val);
      if (item.left !== null) list.push(item.left);
      if (item.right !== null) list.push(item.right);
    }
  }
  return result;
}

let obj = {
  "val": 0,
  "left": {
    "val": 2,
    "left": {
      "val": 1,
      "left": { "val": 5, "left": null, "right": null },
      "right": { "val": 1, "left": null, "right": null }
    },
    "right": null
  },
  "right": {
    "val": 4,
    "left": { "val": 3, "left": null, "right": { "val": 6, "left": null, "right": null } },
    "right": { "val": -1, "left": null, "right": { "val": 8, "left": null, "right": null } }
  }
}

console.log(levelOrder(obj))
