import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  createdOn: DS.attr('date'),

  //Relationships
  createdAuction: DS.hasMany('auction', { inverse: 'seller' }),
  wonAuction: DS.hasMany('auction', { inverse: 'buyer' }),
  myBid: DS.hasMany('bid'),
});
