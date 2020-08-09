const fs = require('fs')

fs.copyFile('naranja.txt', 'limon.txt', (err) => {
	if (err) {
		console.log(err)
	}
	console.log('El archivo naranja fue copiado')
})
