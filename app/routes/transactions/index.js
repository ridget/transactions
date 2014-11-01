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
      var transaction = this.controller.get('newTransaction');
      transaction.set('occurredOn', new Date());
      transaction.save().then(function(){
        //clear transaction out
      });
    }
  }

});
