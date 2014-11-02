import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:transactions/index', 'Transaction Index Controller', {
  needs: ['model:category']
});

test('expenditureTotal returns grand total', function(){
  var ctrl = this.subject();
  ctrl.set('model', [Ember.Object.create({amount: 1200 }), Ember.Object.create({amount: 1150}), Ember.Object.create({amount: 500})]);
  var totalSum = ctrl.get('expenditureTotal');
  equal(ctrl.get('expenditureTotal'), totalSum);
});

test('categoriesLookup sorts by name', function(){
  var ctrl = this.subject();
  ctrl.set('categoriesAll', [Ember.Object.create({name: 'Zebra' }), Ember.Object.create({name: 'Alfred'}), Ember.Object.create({name: 'Tyson'})]);
  deepEqual(ctrl.get('categoriesLookup').map(function(item){ return item.name; }), ['Alfred','Tyson','Zebra']);
});

test('accountsLookup sorts by name', function(){
  var ctrl = this.subject();
  ctrl.set('accountsAll', [Ember.Object.create({name: 'Zebra' }), Ember.Object.create({name: 'Alfred'}), Ember.Object.create({name: 'Tyson'})]);
  deepEqual(ctrl.get('accountsLookup').map(function(item){ return item.name; }), ['Alfred','Tyson','Zebra']);
});