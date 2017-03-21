import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('movie');
  },

  setupController(controller, model) {
    this.controller.set('movies', model);
  }

});
