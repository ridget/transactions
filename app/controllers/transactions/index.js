import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  accountsAll: Ember.A(),
  accountsSorting: ['name'],
  accountsLookup: Ember.computed.sort('accountsAll', 'accountsSorting'),
  categoriesAll: Ember.A(),
  categoriesSorting: ['name'],
  categoriesLookup: Ember.computed.sort('categoriesAll', 'categoriesSorting')
});

export default TransactionsIndexController;
