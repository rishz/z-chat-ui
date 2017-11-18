import Component from '@ember/component';

export default Component.extend({
  classNames: ['navbar-fixed', 'x-nav'],

  disInsertElement(){
    this._super(...arguments);

    // Add the ID of our side-nav UL as the data-activates
    //  property of the collapse button
    this.$('a.button-collapse')
      .attr('data-activates', this.get('_sideNavId'));

    // Initialize the sideNav
    this.$(".button-collapse").sideNav({
      closeOnClick: true
    });

    this.$(".dropdown-button").dropdown();
  },

  _setupChildComponent(childComponent) {
    if (childComponent.classNames.indexOf('side-nav') >= 0) {
      this.set('_sideNavId', childComponent.elementId);
    }
  }
});
