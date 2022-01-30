let fs = require('fs')

fs.unlink('text2-2.js', function(err) {
    console.log('Deleted!');
})