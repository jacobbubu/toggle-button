# toggle-button

This module provides a very simple toggled button for your demos and prototypes up and running.Ideal for use with Beefy.

# api

```js
toggleButton([onClick], [options])
```

`[onClick]` receives 2 parameters:

1. button: a DOM element for the toggled button.
2. stopped: current status, `true` or `false`.

Example:
```js
var toggleButton = require('toggle-button');

toggleButton(function(button, stopped) {
    console.log('stopped', stopped);
});
```

with options:
```js
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
```

and you can inject your own buttom element:

```js
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
```

# testing with beefy

First install beefy:

```npm i beefy -g```

Then run the demo:

```beefy demo/demo.js --live```

And open up `localhost:9966` in your browser.