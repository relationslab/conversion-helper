module.exports = (grunt) ->
  grunt.initConfig

    watch:
      files: ['*.ts']
      tasks: ['shell:ts']

    tsconfig:
      main: {}

    shell:
      ts:
        command: 'tsc -p ./'

  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-tsconfig-update'

  grunt.registerTask 'default', ['shell:ts']
  grunt.registerTask 'watch', ['watch']
