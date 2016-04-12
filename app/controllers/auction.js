import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleBid() {
      this.toggleProperty('showBid');
    },

    bid: function(auction_id) {
      var ref = new Firebase("https://auctionacro.firebaseio.com");
      var authData = ref.getAuth();
      var date = new Date();
      var newBid = this.get('newBid');
      var uid = authData.uid;

      this.store.findRecord('auction', this.get('model.auction.id')).then((auction) => {
        console.log(newBid+" "+auction.get('currentBid'));
        if (newBid>auction.get('currentBid')){
          console.log("after");
          auction.set('noBid',false);
          auction.set('currentBid',newBid);
          if (newBid>=auction.get('reserve')) {
            auction.set('passedRev',true);
          }
          auction.save()
          this.store.findRecord('user', uid).then((user) => {
            console.log(user.get('username'));
            var bid = this.store.createRecord('bid', {
              amount: newBid,
              placedOn: date,
              isTop: true,

              bidOn: auction,
              bidFrom: user
            });
            bid.save();
          });
        }

      });


      // Return to Auctions
      this.transitionToRoute('auctions');
    },
  },
});
