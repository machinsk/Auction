import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function(){
    console.log(this.get('session'));
    console.log(this.get('session').get('user'));
    if(!this.get('session.isAuthenticated')){
      this.transitionTo('application');
    }
  },
  actions: {
    newAuction: function() {
      this.transitionTo('auctions.new');
    },
  },
  model: function() {
    return Ember.RSVP.hash({
      // Current Auctions
      auctions: this.store.query('auction', {
        orderBy: 'createdOn',
        limitToLast: 10
      }),
      // Auctions Won by User
      // auctionsWon: this.store.filter('auction', {
      //   orderBy: 'endDate',
      //   limitToLast: 10 }, function(auction) {
      //     var ref = new Firebase("https://auctionacro.firebaseio.com");
      //     var authData = ref.getAuth();
      //     var uid = authData.uid;
      //     return (auction.get('buyer') === uid);}),
    });
  },
});
