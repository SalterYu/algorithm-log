function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


var mergeTwoLists = function(l1, l2) {
  let result = new ListNode()
  const dummy = result

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      result.next = l2
      l2 = l2.next
    } else {
      result.next = l1
      l1 = l1.next
    }
    result = result.next
  }
  if (l1 === null) result.next = l2
  if (l2 === null) result.next = l1
  return dummy.next

};
