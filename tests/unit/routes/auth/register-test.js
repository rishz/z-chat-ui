import { moduleFor, test } from 'ember-qunit';

moduleFor('route:auth/register', 'Unit | Route | auth/register', {
  // Specify the other units that are required for this test.
  needs:['service:flashMessages']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
