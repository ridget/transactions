import DS from 'ember-data';
var Category = DS.Model.extend({
  name: DS.attr('string'),
  transactions: DS.hasMany('category')
});

export default Category;
