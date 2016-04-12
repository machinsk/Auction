
import Ember from 'ember';

export default Ember.Controller.extend({
  category: null,
  categories: Ember.String.w('Art Auto Bike Books Clothing Electronics Home Jewelry Sporting Tickets Tools Toys'),
  actions: {
    createAuction: function() {
      var ref = new Firebase("https://auctionacro.firebaseio.com");
      var authData = ref.getAuth();
      var date = new Date();
      var endDate = new Date(this.get('auctionEndDate'));
      var cat = this.get('category');
      console.log(cat);
      var uid = authData.uid;
      this.store.findRecord('user', uid).then((user) => {
        console.log(user.get('username'));
        var auction = this.store.createRecord('auction', {
          title: this.get('title'),
          description: this.get('description'),
          reserve: this.get('reserve'),
          category: this.get('category'),
          createdOn: date,
          currentBid: 0,
          noBid: true,
          endDate: endDate,
          seller: user
        });
        auction.save();
        });


      // Return to Auctions
      this.transitionToRoute('auctions');
    },

    selectCategory(category) {
      this.set('category', category);
    },
  }
});
