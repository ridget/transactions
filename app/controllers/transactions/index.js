import Ember from "ember";

var TransactionsIndexController = Ember.ArrayController.extend({
  accountsAll: Ember.A(),
  accountsSorting: ['name'],
  accountsLookup: Ember.computed.sort('accountsAll', 'accountsSorting'),
  categoriesAll: Ember.A(),
  categoriesSorting: ['name'],
  categoriesLookup: Ember.computed.sort('categoriesAll', 'categoriesSorting'),
  expenditureTotal: function() {
    var array = this.filter(function(round){
      return round.get('amount') > 0;
    });
    return array.mapProperty('amount').reduce(
        function(previousValue, item, index, array){
          return previousValue + currentValue;
        }
    );
  }.property('@each'),
  expenditureTotalDollarAmount: function(){
    var amount = (this.get('expenditureTotal').toFixed(2))/100;
    return accounting.formatMoney(amount, "");
  }.property('expenditureTotal')
});

export default TransactionsIndexController;
