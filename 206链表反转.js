/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head
  let next = head.next
  let reversed = reverseList(next)
  head.next = null
  next.next = head
  return reversed
};

var reverseList = function(head) {
  let [pre, cur] = [null, head]
  while(cur) {
    let temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp
    // [cur.next, pre, cur] = [pre, cur, cur.next]
  }
  return pre
};
