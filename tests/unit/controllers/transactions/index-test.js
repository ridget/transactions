import DS from 'ember-data';
import Ember from 'ember';
import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:transactions/index', 'Transaction Index Controller', {
  needs: ['model:category']
});

test('categoriesLookup sorts by name', function(){
  var ctrl = this.subject();
  ctrl.set('categoriesAll', [Ember.Object.create({name: 'Zebra' }), Ember.Object.create({name: 'Alfred'}), Ember.Object.create({name: 'Tyson'})]);
  deepEqual(ctrl.get('categoriesLookup').map(function(item){ return item.name; }), ['Alfred','Tyson','Zebra']);
});