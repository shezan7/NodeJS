let fs = require('fs')

fs.readFile('text1.js', 'utf8', function(err, data) {
    console.log(data);
})

//fs.readFile('text1.js') {
    // try {
    //     const data = fs.readFile('text1.js')
    //     console.log(data.toString())
    // } catch (error) {
    //     console.log('Got an error!')
    // }
//}