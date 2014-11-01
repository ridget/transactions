import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  actions: {
    createTransaction: function(){
      var transaction = this.store.createRecord('transaction', {
        name: this.get('name'),
        dollarValue: this.get('dollarValue')
      });
      transaction.set('occurredOn', new Date());
      transaction.save();
    }
  }
});

export default TransactionsIndexController;
