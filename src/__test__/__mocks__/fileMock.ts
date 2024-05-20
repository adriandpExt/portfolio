module.exports = {
  process() {
    return "module.exports = {};";
  },
  getcachekey() {
    // the output is always the same.
    return "svgtransform";
  },
};
