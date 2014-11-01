import DS from 'ember-data';

var Account = DS.Model.extend({
  name: DS.attr('string'),
  transactions: DS.hasMany('transaction'),
});

Account.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Spendings",
    },
    {
      id: 2,
      name: "Savings"
    }
  ]
});

export default Account;