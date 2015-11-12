// ***************************************************************
// PUBLICATIONS (For Modules collection)
// ***************************************************************

// MODULES INDEX
// -------------------------------------------------------
Meteor.publish('modules', function() {
  return Modules.find();
});

// MODULE SHOW
// -------------------------------------------------------
Meteor.publish('module', function(id) {
  check(id, Match.OneOf(String, null));
  return Modules.find(id);
});
