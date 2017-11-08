import Component from '@ember/component';

export default Component.extend({
  classNames: ['input-field'],
  type: 'text',
  _errorMessages: computed('errors.[]', function() {
    return (this.get('errors') || []).join(', ');
  })
});
