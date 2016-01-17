function ipToString(address)
{
  return [
    (address >> 24) & 0xFF,
    (address >> 16) & 0xFF,
    (address >>  8) & 0xFF,
     address        & 0xFF
  ].join('.');
}

module.exports = ipToString;

if(process.mainModule === module) {
  var assert = require('assert');
  assert.equal('127.0.0.1',ipToString(0x7f000001));
  assert.equal('255.255.255.255',ipToString(0xffffffff));
}