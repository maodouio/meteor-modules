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
  return Modules.find(id);
});

// IMAGE
// -------------------------------------------------------
Meteor.publish('images', function() {
  return Images.find();
});
