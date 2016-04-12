
import Ember from 'ember';

export default Ember.Controller.extend({
  category: null,
  categories: Ember.String.w('All Art Auto Bike Books Clothing Electronics Home Jewelry Sporting Tickets Tools Toys'),
  actions: {
    selectCategory(category) {
      this.set('category', category);
      this.store.query('auction', { filter: { category: category } }).then((auctions) => {
        this.set('auctions', auctions);
    });
    },
  }
});
