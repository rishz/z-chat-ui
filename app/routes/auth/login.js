import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      const user = this.get('currentModel');
      this.get('session')
        .authenticate(
          'authenticator:zchat', user.email, user.password
        );
    }
  },
  model(){
    return {
      email: '',
      password: ''
    };
  }
});
