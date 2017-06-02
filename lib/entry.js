// Constructor
function Entry(line) {
  // always initialize all instance properties
  this.line = line;
}

Entry.prototype.pos = function(head, tail) {
  return this.line.substring(head - 1, tail);
};

// class methods
Entry.prototype.type = function() {
  return parseInt(this.pos(1, 2));
};

// export the class
module.exports = Entry;
