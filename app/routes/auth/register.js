import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  session: inject.service(),
  actions: {
    doRegister() {
      this.get('currentModel').save()
        .then(() => {
          this.transitionTo('auth.login');
        });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
