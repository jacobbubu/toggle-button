"use strict";

var toggleButton = require('../index.js');

toggleButton(function(button, stopped){
    console.log('stopped', stopped);
}, {
    toBottom: 10,
    toRight: 10,
    width: 100,
    height: 100,
    startedCaption: 'Running Now',
    stoppedCaption: 'Waiting Now'
});