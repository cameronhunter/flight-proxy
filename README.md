# flight-proxy [![Build Status](https://secure.travis-ci.org/<username>/flight-proxy.png)](http://travis-ci.org/<username>/flight-proxy)

A [Flight](https://github.com/flightjs/flight) component for triggering a target event when a source event occurs. Event data is also proxied from source to target.

## Installation

```bash
bower install --save flight-proxy
```

## Example

```javascript
define(['flight-proxy'], function(EventProxy) {

  var sourceEvent = 'source-event-name';
  var targetEvent = 'target-event-name';
  var data = {"foo": 123};

  EventProxy.attachTo(document, {
    source: sourceEvent,
    target: targetEvent
  });

  // Listen for proxied event
  $(document).on(targetEvent, function(e, proxiedData) {
    console.log(e, proxiedData);
  });

  // Manually trigger a source event
  $(document).trigger(sourceEvent, data);
});
```

## Development

Development of this component requires [Bower](http://bower.io), and preferably
[Karma](http://karma-runner.github.io) to be globally installed:

```bash
npm install -g bower karma
```

Then install the Node.js and client-side dependencies by running the following
commands in the repo's root directory.

```bash
npm install
bower install
```

To continuously run the tests in Chrome and Firefox during development, just run:

```bash
karma start
```

## Contributing to this project

Anyone and everyone is welcome to contribute. Please take a moment to
review the [guidelines for contributing](CONTRIBUTING.md).

* [Bug reports](CONTRIBUTING.md#bugs)
* [Feature requests](CONTRIBUTING.md#features)
* [Pull requests](CONTRIBUTING.md#pull-requests)
