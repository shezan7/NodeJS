let fs = require('fs')

fs.appendFile('text2-3.txt', '\n I am the updated version', function(err) {
    
    if(err) {
        console.log('got an error!')
    }
    else {
         console.log('Update done');
    }
    //console.log('Update done');
})



// let fs = require('fs')

// fs.readFile('text2.js', 'utf8', function(err, data) {
//     console.log(data);
// })
// fs.writeFile('text2.js', 'Hey, I am newly created', function(err){
//     console.log('Task Done!!!')
// })