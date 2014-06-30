import Ember from "ember";
var TransactionsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('transaction');
  }
});

export default TransactionsRoute;
