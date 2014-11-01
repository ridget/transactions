import DS from 'ember-data';
var Category = DS.Model.extend({
  name: DS.attr('string'),
  transactions: DS.hasMany('category')
});

Category.reopenClass({
  FIXTURES: [
    {
      id: 1,
      name: "Party",
    },
    {
      id: 2,
      name: "Mexican"
    }
  ]
});

export default Category;