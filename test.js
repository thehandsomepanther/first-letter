'use strict';
var assert = require('assert')
var fl = require('./')

function check(str) {
	return fl(str)
}

assert.equal(fl("The First Letter of this String is 'F'"), "F");
assert.equal(fl("A Good Choice for the First Letter of This String is 'G'"), "G");
assert.equal(fl("An Okay Choice for the First Letter of This String is 'O'"), "O");
assert.equal(fl("!@#$%^&*() Non-Alphanumerics Get Ignored"), "N");
assert.equal(fl("           Whitespace Gets Ignored"), "W");
assert.equal(fl("'Quotes' Get Ignored"), "Q");
assert.equal(fl("\"Quotes\" Get Ignored"), "Q");
assert.equal(fl("2 Doesn't Get Ignored"), "2");

console.log("All tests pass! 👍🏾");
