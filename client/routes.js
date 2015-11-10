// ***************************************************************
// ROUTES (modules)
// ***************************************************************

Router.map(function() {

  // MODULES INDEX
  // -------------------------------------------------------
  this.route('modulesIndex', {
    template: 'modulesIndex',
    path: '/modules',
    waitOn: function () {
      return Meteor.subscribe('modules');
    },
    data: {
      modules: function () {
        return Modules.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // MODULE NEW
  // -------------------------------------------------------
  this.route('moduleNew', {
    template: 'moduleNew',
    path: '/modules/new',
    waitOn: function () {
      return Meteor.subscribe('images');
    },
  });

  // MODULE SHOW
  // -------------------------------------------------------
  this.route('moduleShow', {
    template: 'moduleShow',
    path: '/modules/:_id',
    waitOn: function () {
      return Meteor.subscribe('module', this.params._id);
    },
    data: function () {
      return Modules.findOne(this.params._id);
    }
  });

  // MODULE EDIT
  // -------------------------------------------------------
  this.route('moduleEdit', {
    template: 'moduleEdit',
    path: '/modules/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('module', this.params._id);
    },
    data: function () {
      return Modules.findOne(this.params._id);
    }
  });

});
