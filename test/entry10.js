var assert  = require("assert");
var Entry10 = require("../lib/entry10.js");
var osLocale = require('os-locale');
var i18n = require('i18n');

i18n.configure({
  directory: __dirname + '/../locales'
});

var locale = osLocale.sync();
if (i18n.getLocales().indexOf(locale) >= 0) {
  i18n.setLocale(locale);
}

describe(i18n.__('Entry Type 10'), function() {
  var line  = '1036653204000179130535990     ';
  line += i18n.__('Company Name With Length For Cropping').substr(0, 35);
  var entry = new Entry10(line);
  describe('#type()', function() {
    it(i18n.__('%s must be equals %s', i18n.__('Type'), 10), function() {
      assert.equal(10, entry.type());
    });
  });
  describe('#cgcmf()', function() {
    it(i18n.__('%s must be equals %s', 'CGC/MF', '36653204000179'), function() {
      assert.equal('36653204000179', entry.cgcmf());
    });
  });
  describe('#ie()', function() {
    it(i18n.__('%s must be equals %s', 'IE', '130535990'), function() {
      assert.equal('130535990', entry.ie());
    });
  });
  describe('#name()', function() {
    it(i18n.__('%s must be equals %s', i18n.__('Company name'), i18n.__('Company Name With Length For Cropping').substr(0, 35)), function() {
      assert.equal(i18n.__('Company Name With Length For Cropping').substr(0, 35), entry.name());
    });
  });
});
