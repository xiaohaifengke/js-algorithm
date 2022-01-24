import { LinkedList } from '@/linked-list/LinkedList'

const linkedList = new LinkedList<string>()
console.log(linkedList)

console.log(linkedList.toString()) //
linkedList.push('ab')
console.log(linkedList.toString()) // ab
linkedList.push('12')
console.log(linkedList.toString()) // ab,12
linkedList.push('d')
console.log(linkedList.toString()) // ab,12,d
linkedList.push('34')
console.log(linkedList.toString()) // ab,12,d,34
