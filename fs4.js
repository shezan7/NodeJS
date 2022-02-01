let fs = require('fs')

fs.unlink('text2-4.txt', function(err) {
    if(err) {
        console.log('got an error')
    }
    else {
        console.log('Deleted')
    }
    //console.log('Deleted!');
})