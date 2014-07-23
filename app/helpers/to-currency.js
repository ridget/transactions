import Ember from "ember"

export default Ember.Handlebars.makeBoundHelper(function(number){
  var amount = (number / 100).toFixed(2);
  return accounting.formatMoney(amount);
});
