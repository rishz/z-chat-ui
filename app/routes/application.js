import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  flashMessages: inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
      // Generate a message
      this.get('flashMessages').success('Logged out');
    }
  }
});
