import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');
  this.route('login');
  this.route('signup');
  this.route('private', { path: ':user_id' });
  this.route('auctions', function() {
    this.route('new');
  });
  this.route('auction', { path: '/auction/:auction_id' });
});

export default Router;
