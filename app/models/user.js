import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  createdOn: DS.attr('date'),

  //Relationships
  createdAuctions: DS.hasMany('auction', { inverse: 'seller' }),
  wonAuctions: DS.hasMany('auction', { inverse: 'buyer' }),
  myBids: DS.hasMany('bid', { inverse: 'bidFrom' }),
});
