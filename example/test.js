
describe('math', function(){

  var assert = require('assert')
    , math = require('math');

  describe('add()', function(){
    it('should return null when arguments aren\'t numbers', function(){
      assert(null == math.add());
    })
  })

  describe('mul()', function(){
    it('should multiply', function(){
      assert(1 == math.mul(1, 1));
    })
  })

})
