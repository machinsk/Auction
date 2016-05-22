import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.attr('string'),
  reserve: DS.attr('number'),
  currentBid: DS.attr('number', { defaultValue: 0 }),
  noBid: DS.attr('boolean', { defaultValue: true }),
  passedRev: DS.attr('boolean', { defaultValue: false }),
  createdOn: DS.attr('date'),
  endDate: DS.attr('date'),

  //Relationships
  buyer: DS.belongsTo('user'),
  seller: DS.belongsTo('user'),
  bids: DS.hasMany('bid', { inverse: 'bidOn' }),
});
