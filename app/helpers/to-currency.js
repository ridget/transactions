import Ember from "ember"

export default Ember.Handlebars.makeBoundHelper(function(number){
  var updatedAmount = (amount/100).toFixed(2);
  var currencyAmount = "$"+ updatedAmount + "";
  return currencyAmount;
});
