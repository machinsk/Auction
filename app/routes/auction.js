import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },

  model(params) {
    return Ember.RSVP.hash({
      auction: this.store.findRecord('auction', params.auction_id),
    });
  },
});
