import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TransactionsENV.locationType
});

Router.map(function() {
  this.resource('transactions', { path: '/' }, function(){});
});

export default Router;
