// ***************************************************************
// ROUTES (modules)
// ***************************************************************
let modulesController = RouteController.extend({
  onBeforeAction: function () {
    if (!ReactionCore.hasPermission('admin', Meteor.user())) {
      this.render("layoutHeader", {
        to: "layoutHeader"
      });
      this.render("layoutFooter", {
        to: "layoutFooter"
      });
      this.render("unauthorized");
    } else {
      this.next();
    }
  },
  yieldTemplates: {
    layoutHeader: {
      to: "layoutHeader"
    },
    dashboard: {
      to: "dashboard"
    }
  }
});

this.modulesController = modulesController;

Router.map(function() {

  // MODULES INDEX
  // -------------------------------------------------------
  this.route('modulesIndex', {
    controller: 'modulesController',
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
    controller: 'modulesController',
    template: 'moduleNew',
    path: '/modules/new',
    waitOn: function () {
      return Meteor.subscribe('images');
    },
  });

  // MODULE SHOW
  // -------------------------------------------------------
  this.route('moduleShow', {
    controller: 'modulesController',
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
    controller: 'modulesController',
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
