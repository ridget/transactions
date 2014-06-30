import Ember from 'ember';

var Router = Ember.Router.extend({
  location: TransactionsENV.locationType
});

Router.map(function() {
});

export default Router;
