import Component from '@ember/component';
import { email, password, passwordConfirmation } from '../utils/user-validations';
import { buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  'model.email': email,
  'model.password': password,
  'model.passwordConfirmation': passwordConfirmation
});
export default Component.extend(Validations, {
});
