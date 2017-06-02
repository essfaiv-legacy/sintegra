var assert  = require("assert");
var Entry10 = require("../lib/entry10.js");

describe('Entry Type 10', function() {
  var line  = '1036653204000179130535990     Company Name With Length For Croppi';
  var entry = new Entry10(line);
  describe('#type()', function() {
    it('Type must be equals 10', function() {
      assert.equal(10, entry.type());
    });
  });
  describe('#cgcmf()', function() {
    it('CGC/MF must be equals 36653204000179', function() {
      assert.equal('36653204000179', entry.cgcmf());
    });
  });
  describe('#ie()', function() {
    it('IE must be equals 130535990', function() {
      assert.equal('130535990', entry.ie());
    });
  });
  describe('#name()', function() {
    it('Name must be equals Company Name With Length For Croppi', function() {
      assert.equal('Company Name With Length For Croppi', entry.name());
    });
  });
});
