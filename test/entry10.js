var assert  = require("assert");
var Entry10 = require("../lib/entry10.js");

describe('Entry Type 10', function() {
  var line  = '1036653204000179';
  var entry = new Entry10(line);
  describe('#type()', function() {
    it('Type must be equals 10', function() {
      assert.equal(10, entry.type());
    });
  });
  describe('#cgcmf()', function() {
    it('Type must be equals 36653204000179', function() {
      assert.equal('36653204000179', entry.cgcmf());
    });
  });
});
