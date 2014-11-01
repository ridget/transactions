import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  categoriesAll: Ember.A(),
  categoriesSorting: ['name'],
  categoriesLookup: Ember.computed.sort('categoriesAll', 'categoriesSorting'),

});

export default TransactionsIndexController;
