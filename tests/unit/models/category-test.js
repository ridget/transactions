import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleForModel } from 'ember-qunit';

moduleForModel('category', 'Category Model', {
  needs: ['model:transaction'],
});

test('Category is a valid ember-data model', function(){
  var store = this.store();
  var transaction = this.subject({name: 'Dining Out'});
  ok(transaction);
  ok(transaction instanceof DS.Model);
});

test('transaction relationship', function(){
  var Category = this.store().modelFor('category');
  var relationship = Ember.get(Category, 'relationshipsByName').get('transactions');
  equal(relationship.key, 'transactions');
  equal(relationship.kind, 'hasMany');
});
