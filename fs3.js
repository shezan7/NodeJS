let fs = require('fs')

fs.appendFile('text2.js', 'I am the updated version', function(err) {
    console.log('Update done');
})



// let fs = require('fs')

// fs.readFile('text2.js', 'utf8', function(err, data) {
//     console.log(data);
// })
// fs.writeFile('text2.js', 'Hey, I am newly created', function(err){
//     console.log('Task Done!!!')
// })