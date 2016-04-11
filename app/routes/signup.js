import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({
  actions: {
    signUp: function(){
      var controller = this.get('controller');
      var username = controller.get('username');
      var firstName = controller.get('firstName');
      var lastName = controller.get('lastName');
      var createdOn = Date();
      var email = controller.get('email');
      var password = controller.get('password');
      var passwordAgain = controller.get('passwordAgain');
      var ref = new Firebase("https://auctionacro.firebaseio.com");
      var _this = this;

      if(password === passwordAgain){
        ref.createUser({
          email    : email,
          password : password
        }, function(error, userData){
          if (error) {
            alert(error);
          } else {
            _this.get('session').open('firebase', {
              provider: 'password',
              'email': email,
              'password': password
            }).then(function(){
              console.log('user creation');
              var user = _this.store.createRecord('user', {
                id: userData.uid,
                username: username,
                firstName: firstName,
                lastName: lastName,
                createdOn: createdOn,
              });
              user.save()
              .then(function(){
                _this.transitionTo('auctions');
              });
            });
          }
        });
      } else {
        alert("Passwords do not match.");
      }
    }
  }
});
