
require.register('math/index.js', function(exports, require){
  exports.mul = require('./mul');
  exports.add = require('./add');
});

require.register('math/add.js', function(_, _, module){

  // add a, b
  module.exports = function(a, b){
    if ('number' == typeof a) {
      return a + b;
    }
  };

})

require.register('math/mul.js', function(_, _, module){

  // mul a, b
  module.exports = function(a, b){
    return a * b;
  };

});
