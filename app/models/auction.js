import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  tag: DS.attr('string'),
  reserve: DS.attr('number'),
  minBid: DS.attr('number'),
  currentBid: DS.attr('number'),
  noBid: DS.attr('boolean', { defaultValue: false }),
  createdOn: DS.attr('date'),

  //Relationships
  buyer: DS.belongsTo('user'),
  seller: DS.belongsTo('user'),
});
