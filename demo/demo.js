"use strict";

var toggleButton = require('../index.js');

toggleButton(function(button, stopped) {
    console.log('stopped', stopped);
});