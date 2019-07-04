<template lang="pug">
  zi-files(:files="files" @file-click="clickHandler")
</template>

<script>
export default {
  name: 'ex-files-basic',

  data: () => ({
    files: [{
      type: 'directory',
      name: 'bin',
      files: [{
        type: 'file',
        name: 'cs.js',
        size: 3860,
      }],
    }, {
      type: 'directory',
      name: 'docs',
      files: [{
        type: 'file',
        name: 'controllers.md',
        size: 2795,
      }, {
        type: 'file',
        name: 'es6.md',
        size: 4215,
      }, {
        type: 'file',
        name: 'production.md',
        size: 759,
      }, {
        type: 'file',
        name: 'views.md',
        size: 2900,
      }],
    }, {
      type: 'directory',
      name: 'internal',
      files: [{
        type: 'directory',
        name: 'modules',
        files: [{
          type: 'file',
          name: 'cache.js',
          size: 239,
        }, {
          type: 'file',
          name: 'session.js',
          size: 379,
        }],
      }, {
        type: 'directory',
        name: 'util',
        files: [{
          type: 'file',
          name: 'helpers.js',
          size: 3993,
        }, {
          type: 'file',
          name: 'document-main.vue.js',
          size: 843,
        }],
      }, {
        type: 'file',
        name: 'config.js',
        size: 1462,
      }, {
        type: 'file',
        name: 'router.js',
        size: 4083,
      }],
    }, {
      type: 'file',
      name: '.jshintrc',
      size: 20,
    }, {
      type: 'file',
      name: '.npmignore',
      size: 61,
    }, {
      type: 'file',
      name: 'README.md',
      size: 4393,
    }],
  }),

  methods: {
    clickHandler(e) {
      console.log(e)
    },
  },
}
</script>
