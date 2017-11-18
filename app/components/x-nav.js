import Component from '@ember/component';

export default Component.extend({
  classNames: ['navbar-fixed', 'x-nav'],

  _setupChildComponent(childComponent) {
    if (childComponent.classNames.indexOf('side-nav') >= 0) {
      this.set('_sideNavId', childComponent.elementId);
    }
  }
});
