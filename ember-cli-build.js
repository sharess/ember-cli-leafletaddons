'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/leaflet_fullscreen/Leaflet.fullscreen.js');
  app.import('vendor/leaflet_fullscreen/Leaflet.fullscreen.css');
  app.import('vendor/leaflet_fullscreen/Control.FullScreen.js');
  app.import('vendor/leaflet_fullscreen/Control.FullScreen.css');
  app.import('vendor/leaflet_search/leaflet-search.js');
  app.import('vendor/leaflet_search/leaflet-seach.css');

  return app.toTree();
};
