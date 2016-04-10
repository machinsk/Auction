import DS from 'ember-data';

export default DS.Model.extend({
  price: DS.attr('number'),
  placedOn: DS.attr('date'),
  isTop: DS.attr('boolean'),

  //Relationships
  bidOn: DS.belongsTo('auction'),
  bidFrom: DS.belongsTo('user'),
});
