import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'test-change-tests/tests/helpers/start-app';

module('Acceptance | thing', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /thing', function(assert) {
  visit('/');

  click('a');
  //assert.ok('true');
  andThen(function() {
    assert.equal(currentURL(), '/thing');
  });
});
