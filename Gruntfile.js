/*
 Licensed to Cloudera, Inc. under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  Cloudera, Inc. licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

module.exports = function(grunt) {
  'use strict';

  var config = {};
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    config: config,
    less: {
      hue: {
        options: {
          paths: ['desktop/core/src/desktop/static/desktop/less'],
          compress: true,
          banner: '/*!\nLicensed to Cloudera, Inc. under one\nor more contributor license agreements.  See the NOTICE file\ndistributed with this work for additional information\nregarding copyright ownership.  Cloudera, Inc. licenses this file\nto you under the Apache License, Version 2.0 (the\n"License"); you may not use this file except in compliance\nwith the License.  You may obtain a copy of the License at\n\nhttp://www.apache.org/licenses/LICENSE-2.0\n\nUnless required by applicable law or agreed to in writing, software\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.\n */'
        },
        files: {
          'desktop/core/src/desktop/static/desktop/css/hue.css': 'desktop/core/src/desktop/static/desktop/less/hue.less',
          'desktop/core/src/desktop/static/desktop/css/hue3-extra.css': 'desktop/core/src/desktop/static/desktop/less/hue3-extra.less',
          'apps/metastore/src/metastore/static/metastore/css/metastore.css': 'apps/metastore/src/metastore/static/metastore/less/metastore.less',
          'desktop/libs/notebook/src/notebook/static/notebook/css/notebook.css': 'desktop/libs/notebook/src/notebook/static/notebook/less/notebook.less',
          'desktop/libs/notebook/src/notebook/static/notebook/css/notebook-layout.css': 'desktop/libs/notebook/src/notebook/static/notebook/less/notebook-layout.less',
          'apps/oozie/src/oozie/static/oozie/css/workflow-editor.css': 'apps/oozie/src/oozie/static/oozie/less/workflow-editor.less',
          'apps/filebrowser/src/filebrowser/static/filebrowser/css/display.css': 'apps/filebrowser/src/filebrowser/static/filebrowser/less/display.less',
          'apps/filebrowser/src/filebrowser/static/filebrowser/css/listdir_components.css': 'apps/filebrowser/src/filebrowser/static/filebrowser/less/listdir_components.less',
          'apps/jobbrowser/src/jobbrowser/static/jobbrowser/css/jobbrowser.css': 'apps/jobbrowser/src/jobbrowser/static/jobbrowser/less/jobbrowser.less',
          'apps/jobbrowser/src/jobbrowser/static/jobbrowser/css/jobbrowser-embeddable.css': 'apps/jobbrowser/src/jobbrowser/static/jobbrowser/less/jobbrowser-embeddable.less',
          'apps/useradmin/src/useradmin/static/useradmin/css/useradmin.css': 'apps/useradmin/src/useradmin/static/useradmin/less/useradmin.less',
        }
      }
    },
    watch: {
      less: {
        files: [
          'desktop/core/src/desktop/static/desktop/less/*.less',
          'desktop/core/src/desktop/static/desktop/less/**/*.less',
          'apps/metastore/src/metastore/static/metastore/less/*.less',
          'apps/metastore/src/metastore/static/metastore/less/**/*.less',
          'desktop/libs/notebook/src/notebook/static/notebook/less/*.less',
          'desktop/libs/notebook/src/notebook/static/notebook/less/**/*.less',
          'apps/oozie/src/oozie/static/oozie/less/*.less',
          'apps/oozie/src/oozie/static/oozie/less/**/*.less',
          'apps/filebrowser/src/filebrowser/static/filebrowser/less/*.less',
          'apps/filebrowser/src/filebrowser/static/filebrowser/less/**/*.less',
          'apps/jobbrowser/src/jobbrowser/static/jobbrowser/less/*.less',
          'apps/jobbrowser/src/jobbrowser/static/jobbrowser/less/**/*.less',
          'apps/useradmin/src/useradmin/static/useradmin/less/*.less',
          'apps/useradmin/src/useradmin/static/useradmin/less/**/*.less',
        ],
        tasks: ['less']
      }
    }
  });
};
