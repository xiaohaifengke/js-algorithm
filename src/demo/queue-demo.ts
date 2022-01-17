import { Queue } from '@/queue/Queue'
const queueDemo = new Queue()

console.log(queueDemo.isEmpty())
queueDemo.enqueue('a', 'b', 'c')
console.log(queueDemo.isEmpty())
console.log(queueDemo.toString())

console.log(queueDemo.size())
