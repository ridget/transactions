import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('transaction');
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('categoriesAll', this.store.find('category'));
    controller.set('newTransaction', this.store.find('category'));
  },
  actions: {
    createTransaction: function(){
      var unsavedTransaction = this.controller.get('model');
      var transaction = this.store.createRecord('transaction', {
        name: unsavedTransaction.get('name'),
        dollarValue: unsavedTransaction.get('dollarValue')
      });
      transaction.set('occurredOn', new Date());
      transaction.save();
    }
  }

});
