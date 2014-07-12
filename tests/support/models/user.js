User = DS.Model.extend({
  name:     DS.attr('string'),
  company:  DS.belongsTo('company', {async: true, inverse: 'users'}),
  properties:  DS.hasMany('company', {async: true, inverse: 'owners'}),
  projects: DS.hasMany('project'),
  hats:     DS.hasMany('hat', {polymorphic: true})
});