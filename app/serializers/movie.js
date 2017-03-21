import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  primaryKey: '_id',

  normalizeResponse(store, type, payload, id, requestType) {
    let newPayLoad = {'movies':payload};
    return this._super(store, type, newPayLoad, id, requestType);
  }
});
