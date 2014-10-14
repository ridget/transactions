import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  actions: {
    createTransaction: function(){
      console.log(this);
      return false;

    }
  }
});

export default TransactionsIndexController;
