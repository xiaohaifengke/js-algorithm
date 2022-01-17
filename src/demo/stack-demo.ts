import { Stack } from '@/stack/Stack'

const stackInstance = new Stack<number>()
console.log(stackInstance.isEmpty())
console.log(stackInstance.push(2))
console.log(stackInstance.peek())
console.log(stackInstance.isEmpty())
// console.log(stackInstance.push('a'))
