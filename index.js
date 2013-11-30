
/**
 * Export `map`
 */

module.exports = map;

/**
 * Map coverage data from `cov`.
 *
 * @param {Instrument} cov
 * @return {Object}
 * @api public
 */

function map(cov){
  var mods = cov.modules;
  var keys = Object.keys(mods);
  var ret = {};

  // stats
  ret.sloc = 0;
  ret.hits = 0;
  ret.misses = 0;

  // mods
  ret.mods = keys.map(function(key){
    var mod = mods[key];

    // stats
    mod.hits = Object.keys(mod.covered).length;
    mod.misses = Object.keys(mod.uncovered).length;
    mod.sloc = mod.hits + mod.misses;
    mod.percent = mod.hits / mod.sloc * 100 | 0;

    // add
    ret.hits += mod.hits;
    ret.misses += mod.misses;
    ret.sloc += mod.sloc;

    // all done
    return mod;
  });

  // percent
  ret.percent = ret.hits / ret.sloc * 100 | 0;

  // all done
  return ret;
}
