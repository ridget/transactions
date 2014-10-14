import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return this.store.createRecord("transaction", { amount: 0, name: 'New Transaction' });
    },

    actions: {
      createTransaction: function(){
        var self = this;
        var transaction = this.controller.get('model');
        // TODO: set date format the way you want it.
        transaction.set('occurredOn', new Date);
        transaction.save().then(function(){
          self.transitionTo('transactions.index');
        });
      }
    }

});
