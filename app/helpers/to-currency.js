import Ember from "ember";

// works
//var toCurrency = function(amount) {
//  var updatedAmount = (amount/100).toFixed(2);
 // var currencyAmount = "$"+ updatedAmount + "";
  //return currencyAmount;
//};
//export default Ember.Handlebars.makeBoundHelper(toCurrency);
//

export default Ember.Handlebars.registerBoundHelper('to-currency', function(amount) {
  var updatedAmount = (amount/100).toFixed(2);
  var currencyAmount = "$"+ updatedAmount + "";
  return currencyAmount;
});
