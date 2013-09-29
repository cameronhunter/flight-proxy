define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(proxy);

  function proxy() {
    this.defaultAttrs({
      source: '',
      target: ''
    });

    this.proxy = function(_, data) {
      this.trigger(this.attr.target, data);
    };

    this.after('initialize', function() {
      this.on(this.attr.source, this.proxy);
    });
  }

});
