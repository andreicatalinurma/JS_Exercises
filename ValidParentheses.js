/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
  */

const isValid = (s) => {
    const stack = []
    const parens = '() {} []'
    let i = 0

    while (i < s.lenght) {
        stack.push(s[i])
        i++

        let open = stack[stack.length-2]
        let closed = stack[stack.length-1]

        let potParenses = open + closed

        if(parens.includes(potParenses)){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));