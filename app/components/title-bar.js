import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'top-bar'],
  didInsertElement() {
    this.$().foundation();
  },
});
