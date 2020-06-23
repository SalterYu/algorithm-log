// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
//
// 示例：
//
// 给定一个链表: 1->2->3->4->5, 和 n = 2.
//
// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：
//
// 给定的 n 保证是有效的。
//
// 进阶：
//
// 你能尝试使用一趟扫描实现吗？


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

const head1 = {
  val: 1,
  next: null
}


var removeNthFromEnd = function (head, n) {
  let visitor = {i: 0}
  let dummy = {val: 0, next: head}
  dfs(dummy, n, visitor)
  return dummy.next
};

var dfs = function (dummy, n, visitor) {
  if (!dummy.next) return
  let pre = dummy
  dummy = dummy.next
  dfs(dummy, n, visitor)
  visitor.i = visitor.i + 1
  if (visitor.i === n) {
    pre.next = dummy.next
  }
}

console.log(JSON.stringify(removeNthFromEnd(head, 2)))
