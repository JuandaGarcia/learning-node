const util = require('util')

const helloPluto = util.deprecate(() => {
	console.log('Hello pluto')
}, 'Pluto es deprecate')

helloPluto()
