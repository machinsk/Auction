import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdOn: DS.attr('date'),

  //Relationships
  buyer: DS.belongsTo('user'),
  seller: DS.belongsTo('user'),
});
