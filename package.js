Package.describe({
  name: 'maodouio:modules',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'maodouio modules package',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/maodouio/meteor-modules.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  // api.versionsFrom('1.2.1');
  // package
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);
  api.use('mpowaga:autoform-summernote@0.4.2', ['client']);
  api.use('cfs:standard-packages@0.5.9', ["server", "client"]);
  api.use('cfs:gridfs@0.0.33', ["server", "client"]);
  api.use('cfs:filesystem@0.1.2', ["server", "client"]);
  api.use('maodouio:autoform-file@1.0.5', ["server", "client"]);

  // mongo and template
  // https://zh.discovermeteor.com/chapters/creating-a-meteor-package/
  api.use(['minimongo@1.0.10', 'mongo-livedata@1.0.9', 'templating@1.1.4'], 'client');

  // file
  // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
  api.addFiles('client/routes.js', 'client');
  api.addFiles("client/modules/module_edit.html", "client");
  api.addFiles("client/modules/module_edit.js", "client");
  api.addFiles("client/modules/module_new.html", "client");
  api.addFiles("client/modules/module_new.js", "client");
  api.addFiles("client/modules/module_show.html", "client");
  api.addFiles("client/modules/module_show.js", "client");
  api.addFiles("client/modules/modules_index.html", "client");
  api.addFiles("client/modules/modules_index.js", "client");

  api.addFiles("lib/collections.js");

  api.addFiles("server/fixtures.js", "server");
  api.addFiles("server/permissions.js", "server");
  api.addFiles("server/publications.js", "server");

  api.export('Modules');
  // api.export('Images');
});
