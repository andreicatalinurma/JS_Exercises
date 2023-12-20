/* 
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2]
Output: [1,2]

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

const deleteDuplicates = (head) => {
    let currentNode = head
    while(currentNode && currentNode.next) {
        if(currentNode.val === currentNode.next.val) {
            currentNode.next = currentNode.next.next
        } else {
            currentNode = currentNode.next
        }
    }
    return head
}


console.log(deleteDuplicates([1,1,2]));
console.log(deleteDuplicates([1,1,2,3,3]));

