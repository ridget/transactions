import DS from 'ember-data';
var Transaction = DS.Model.extend({
    name: DS.attr('string'),
    amount: DS.attr('number'),
    occurredOn: DS.attr('date'),
    dollarValue: function(key, value) {
        var currency, amount;
        if (value !== undefined) {  // set was called
            amount = Math.round(value * 100);
            currency = accounting.unformat(amount);
            this.set("amount", currency);
        } else {
          currency = this.get('amount');
        }

        // Get the value and return for either set or get.
        amount = (currency/100).toFixed(2);
        return accounting.formatMoney(amount, "");
    }.property('amount')
});

Transaction.reopenClass({
  FIXTURES: [
  {
    id: 1,
      name: "GYG Burritos",
      amount: "1200",
      occurredOn: "2014-11-01T11:59:03+10:00"
  }
]});

export default Transaction;
