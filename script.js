const pdfshift = require('pdfshift')('f55ed75f3e16452c8ba19e11e2c5feae');
const fs = require('fs');

console.log('hello world');

pdfshift
    .convert('https://nuriamari.github.io/', {
        landscape: false,
        use_print: true,
        margin: {top: '35px', right: '5px', left: '5px', bottom: '5px'},
        sandbox: true,
    })
    .then(function(binary_file) {
        fs.writeFile('resume.pdf', binary_file, 'binary', function() {});
    })
    .catch(function({ message, code, response, errors = null }) {});
