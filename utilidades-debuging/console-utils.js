console.log('Un %s y un %s', 'perrito', 'gatito')

console.info('Hello world')
console.warn('Hello world')

console.assert(42 == '42')
console.assert(42 === '42')

console.trace('Hello')

const util = require('util')
const debuglog = util.debuglog('foo')

debuglog('hello from foo')
