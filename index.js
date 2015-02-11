"use strict";

var domready = require('domready');
var idCounter = 0;

module.exports = function(cb, options) {
    //options were provided as the first argument, no callback handler
    if (typeof cb === "object" && cb) {
        options = cb;
        cb = null;
    }
    //options were provided as the second argument
    options = options||{};
    var stopped = options.stopped||false
    var hasWidth = typeof options.width === 'number',
        hasHeight = typeof options.height === 'number',
        buttonId;

    if (typeof options.id === 'string')
        buttonId = options.id;
    else
        buttonId = 'toggleButton' + idCounter++;

    var buttonWidth = hasWidth ? options.width : window.innerWidth;
    var buttonHeight = hasHeight ? options.height : window.innerHeight;
    var startedCaption = options.startedCaption || 'Stop';
    var stoppedCaption = options.stoppedCaption ||'Start';

    var toTop = parseInt(options.toTop);
    var toRight = parseInt(options.toRight);
    var toBottom = parseInt(options.toBottom);
    var toLeft = parseInt(options.toLeft);

    domready(function() {
        var buttonbg, button;
        if (!options.button) {
            var css = document.createElement('style');
            css.type = 'text/css';
            css.innerHTML = '' +
                'div.btnbg {' +
                    'position: fixed;' +
                    'padding: 0;' +
                    'margin: 0;' +
                    'box-shadow: 0px 0px 15px #ccc;' +
                '}\n' +
                'div.btnbg:hover {' +
                    'box-shadow: 0px 0px 20px #ccc;' +
                '}\n' +
                'div.btnbg button {' +
                    'cursor: pointer;' +
                    'margin: 0;' +
                    'padding: 2px 6px 3px 6px;' +
                    'background-color: #fff;' +
                    'border: 1px #ccc solid;'
                '}\n'
                'div.btnbg:hover button {' +
                    'text-shadow: 0px 0px 3px #ccc;' +
                '}'
            document.head.appendChild(css);
            buttonbg = document.createElement('div');
            buttonbg.setAttribute('class', 'btnbg');

            document.body.appendChild(buttonbg);

            button = document.createElement('button');
            button.type = 'button';
            buttonbg.appendChild(button);

            button.setAttribute('id', buttonId);

            if (hasWidth) button.style.width = buttonWidth + 'px';
            if (hasHeight) button.style.height = buttonHeight + 'px';

            if (isNaN(toTop))
                if (isNaN(toBottom))
                    buttonbg.style.top = '0';
                else {
                    buttonbg.style.bottom = toBottom + 'px';
                }

            if (isNaN(toLeft))
                if (isNaN(toRight))
                    buttonbg.style.left = '0';
                else
                    buttonbg.style.right = toRight + 'px';
        }
        else
            button = options.button;

        var stateToCaption = function(curr) {
            button.innerHTML = curr ? stoppedCaption : startedCaption;
        };
        stateToCaption(stopped);

        button.addEventListener('click', function(){
            stopped = !stopped;
            stateToCaption(stopped);
            if (cb) cb(button, stopped);
        });
    });
};