var assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther/sumOfOther.js');
describe('Sum', () => {
    it('0', () => { 
      assert.deepEqual( sumOfOther([2, 3, 4, 1]),[8, 7, 6, 9]);
    });
});