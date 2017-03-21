import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: 'http://ec2-54-169-83-28.ap-southeast-1.compute.amazonaws.com:8000'
});
