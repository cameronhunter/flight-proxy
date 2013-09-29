'use strict';

describeComponent('lib/proxy', function () {

  var sourceEvent = 'source';
  var targetEvent = 'target';
  var data = {'foo': 123};

  beforeEach(function () {
    setupComponent({
      source: sourceEvent,
      target: targetEvent
    });
  });

  it('should proxy event data from source to target', function () {
    var eventSpy = spyOnEvent(this.component.$node, targetEvent);

    this.component.trigger(sourceEvent, data);

    expect(eventSpy).toHaveBeenTriggeredOn(this.component.$node);
    expect(eventSpy.mostRecentCall.data).toEqual(data);
  });

  it('should not proxy other events', function() {
    var eventSpy = spyOnEvent(this.component.$node, targetEvent);

    this.component.trigger('other-event');

    expect(eventSpy).not.toHaveBeenTriggered();
  });

});
