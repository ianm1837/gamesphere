// if you want to add more than one helper, you can add them in this file
// but it would be best to make an index.js file in the helpers folder and import them all there
// and then export them

module.exports = {
  debug: function (optionalValue) {
    console.log('Current Context');
    console.log('====================');
    console.log(this);
    if (optionalValue) {
      console.log('Value');
      console.log('====================');
      console.log(optionalValue);
    }
  },
};
