import Component from '@ember/component';
import { email, password } from '../utils/user-validations';
import { buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.email': email,
  'model.password': password
});

export default Component.extend(Validations, {
});


