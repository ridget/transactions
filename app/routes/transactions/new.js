import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
      createTransaction: function(){
        var self = this;
        var transaction = this.controller.get('model');
        transaction.set('occurredOn', new Date());
        transaction.save().then(function(){
          self.transitionTo('transactions.index');
        });
      }
    }

});
