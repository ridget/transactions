import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('transaction');
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('categoriesAll', this.store.find('category'));
    controller.set('newTransaction', this.store.createRecord('transaction'));
  },
  actions: {
    createTransaction: function(){
      var self = this;
      var controller = this.controller;
      var transaction = controller.get('newTransaction');
      transaction.set('occurredOn', new Date());
      transaction.save().then(function(){
        controller.set('newTransaction', self.store.createRecord('transaction'));
      });
    }
  }

});
