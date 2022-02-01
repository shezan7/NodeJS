let fs = require('fs')

fs.readFile('text2-.txt', 'utf8', function(err, data) {
    if(err) {
        console.log('got an error!')
    }
    else {
        console.log(data);
    }
})


//fs.readFile('text1.js') {
    // try {
    //     const data = fs.readFile('text1.js')
    //     console.log(data.toString())
    // } catch (error) {
    //     console.log('Got an error!')
    // }
//}