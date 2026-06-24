/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 * @param {ListNode | null} l1
 * @param {ListNode | null} l2
 * @return {ListNode | null}
 */
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    carry += (l1?.val ?? 0) + (l2?.val ?? 0);
    cur.next = new ListNode(carry % 10);
    cur = cur.next;
    carry = (carry / 10) | 0;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
}
