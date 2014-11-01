import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('transaction', 'Transaction Model', {
  needs: ['model:category'],
});

test('Transaction is a valid ember-data model', function(){
  var store = this.store();
  var transaction = this.subject({name: 'Burritos', amount: '1200'});
  ok(transaction);
  ok(transaction instanceof DS.Model);
});

test('category relationship', function(){
  var Transaction = this.store().modelFor('transaction');
  var relationship = Ember.get(Transaction, 'relationshipsByName').get('category');
  equal(relationship.key, 'category');
  equal(relationship.kind, 'belongsTo');
});

test('dollarValue', function () {
  var transaction = this.subject();
  Ember.run(function() {
    transaction.set('amount', '1200');
    equal(transaction.get('dollarValue'), "12.00");
  });
});