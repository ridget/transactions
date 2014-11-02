import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  accountsAll: Ember.A(),
  accountsSorting: ['name'],
  accountsLookup: Ember.computed.sort('accountsAll', 'accountsSorting'),
  categoriesAll: Ember.A(),
  categoriesSorting: ['name'],
  categoriesLookup: Ember.computed.sort('categoriesAll', 'categoriesSorting'),
  transactionAmountsAll: function() {
    var array = this.filter(function(round){
      return round.get('amount') > 0;
    });
    console.log(array.mapProperty('amount'));
    return array.mapProperty('amount');
  }.property('@each'),
  expenditureTotal: Ember.computed.sum('transactionAmountsAll'),
  expenditureTotalDollarAmount: function(){
    var amount = (this.get('expenditureTotal').toFixed(2))/100;
    return accounting.formatMoney(amount, "");
  }.property('expenditureTotal')
});

export default TransactionsIndexController;
