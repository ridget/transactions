import DS from 'ember-data';
var Transaction = DS.Model.extend({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  occurredOn: DS.attr('date')
});

Transaction.reopenClass({
  FIXTURES: [
  {
    id: 1,
      name: "GYG Burritos",
      amount: "1200",
      occurredOn: "12/04/2014" 
  }
]});

export default Transaction;
