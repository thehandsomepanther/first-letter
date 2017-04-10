# first-letter

Returns the first useful letter of the string. Ignores "A", "An", "The", and non-alphanumeric characters (including whitespace). Returns the first character of the original string if it is unable to find a useful letter.

## install
```
npm install --save first-letter
```

## examples
```
let fl = require('first-letter')
fl("The First Letter of this String is 'F'") // => "F"
fl("A Good Choice for the First Letter of This String is 'G'") // => "G"
fl("An Okay Choice for the First Letter of This String is 'O'") // => "O"
fl("!@#$%^&*() Non-Alphanumerics Get Ignored") // => "N"
fl("           Whitespace Gets Ignored") // => "W"
fl("'Quotes' Get Ignored") // => "Q"
fl("\"Quotes\" Get Ignored") // => "Q"
fl("2 Doesn't Get Ignored") // => "2"
fl("The") // => "T"
```
