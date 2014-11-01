import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('account', 'Account', {
  // Specify the other units that are required for this test.
  needs: ['model:transaction', 'model:category']
});

test('Account is a valid ember-data model', function(){
  var store = this.store();
  var account = this.subject({name: 'Spendings'});
  ok(account);
  ok(account instanceof DS.Model);
});

test('transaction relationship', function(){
  var Account = this.store().modelFor('account');
  var relationship = Ember.get(Account, 'relationshipsByName').get('transactions');
  equal(relationship.key, 'transactions');
  equal(relationship.kind, 'hasMany');
});
