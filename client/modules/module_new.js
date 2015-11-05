Template.moduleNew.helpers({
});

AutoForm.hooks({
  'moduleForm': {
    before: {
      insert: function(doc) {
        console.log(doc);
        doc.createdAt = new Date();
        return doc;
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New module inserted successfully!');
      Router.go('modulesIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
