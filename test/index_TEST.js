'use strict';

var expect = require('chai').expect;
var Actions = require('../index.js');

describe('dalek-internal-actions', function() {

  it('should exist', function() {
    var actions = new Actions();
    expect(actions).to.be.ok;
  });

});
