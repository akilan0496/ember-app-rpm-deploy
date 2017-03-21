import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr('string'),
  title: DS.attr('string'),
  release: DS.attr('string'),
  director: DS.attr('string'),
  genre: DS.attr('string')
});
