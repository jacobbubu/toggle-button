var domready = require('domready');
var toggleButton = require('../index.js');

domready(function() {
    var button = document.createElement('button');
    button.type = 'button';
    document.body.appendChild(button);

    toggleButton(function(button, stopped){
        console.log('stopped', stopped);
    }, {
        button: button
    });
});