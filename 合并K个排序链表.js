/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 输入:
//   [
//     1->4->5,
//     1->3->4,
//     2->6
// ]
// 输出: 1->1->2->3->4->4->5->6

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const lists = [
  { val: 1, next: { val: 4, next: { val: 5, next: null } } },
  { val: 1, next: { val: 3, next: { val: 4, next: null } } },
  { val: 2, next: { val: 6, next: null } }
]

var mergeKLists = function (lists) {
  if(lists.length === 0) return null
  if (lists.length < 2) return lists[0]
  let mergedList = lists[0]
  let head = new ListNode(null)
  head.next = mergedList
  for (let i = 1; i < lists.length; i++) {
    mergedList = mergeList(mergedList, lists[i])
    head.next = mergedList
  }
  return head.next
};

var mergeList = function (listA, listB) {
  let dummyA = listA
  let dummyB = listB
  let head = new ListNode(null)
  let dummy = head
  while (dummyA && dummyB) {
    if (dummyA.val > dummyB.val) {
      head.next = new ListNode(dummyB.val)
      dummyB = dummyB.next
    } else if (dummyA.val < dummyB.val) {
      head.next = new ListNode(dummyA.val)
      dummyA = dummyA.next
    } else {
      head.next = new ListNode(dummyB.val)
      head = head.next
      head.next = new ListNode(dummyA.val)
      dummyA = dummyA.next
      dummyB = dummyB.next
    }
    head = head.next
  }
  if (dummyA) {
    head.next = dummyA
  }
  if (dummyB) {
    head.next = dummyB
  }
  return dummy.next
}
// console.log(JSON.stringify((mergeKLists(lists))))
console.log(mergeKLists([]))
