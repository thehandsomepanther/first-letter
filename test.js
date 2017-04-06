'use strict'
var assert = require('assert')
var fl = require('./')

function check(str) {
	return fl(str)
}

assert.equal(fl("The First Letter of this String is 'F'"), "F")
assert.equal(fl("A Good Choice for the First Letter of This String is 'G'"), "G")
assert.equal(fl("An Okay Choice for the First Letter of This String is 'O'"), "O")
assert.equal(fl("!@#$%^&*() Non-Alphanumerics Get Ignored"), "N")
assert.equal(fl("           Whitespace Gets Ignored"), "W")
assert.equal(fl("'Quotes' Get Ignored"), "Q")
assert.equal(fl("\"Quotes\" Get Ignored"), "Q")
assert.equal(fl("2 Doesn't Get Ignored"), "2")
assert.equal(fl("The"), "T")

// "The" is no longer "useless" because when it gets trimmed it loses the whitespace at the end
assert.equal(fl("!!!The "), "T")
assert.equal(fl("!!!@"), "!")
assert.equal(fl("The "), "T")

console.log("All tests pass! 👍🏾")
