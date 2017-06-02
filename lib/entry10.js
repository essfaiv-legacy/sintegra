var Entry10 = require('./entry.js');

Entry10.prototype.cgcmf = function() {
  return this.pos(3, 16);
};

Entry10.prototype.ie = function() {
  return this.pos(17, 30).trim();
};

Entry10.prototype.name = function() {
  return this.pos(31, 65);
};

module.exports = Entry10;
