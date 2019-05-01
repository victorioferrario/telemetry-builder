module.exports = {
  scripts: {
    bumplib: 'bump --patch --tag --all --grep libs/core/telemetry-shell/package.json',
    ng: 'ng',
    default: 'ng serve',
    build: 'ng build',
    test: 'ng test',
    lint: './node_modules/.bin/nx lint && ng lint',
    e2E: 'ng e2e',
    affected: {
      apps: './node_modules/.bin/nx affected:apps',
      libs: './node_modules/.bin/nx affected:libs',
      build: './node_modules/.bin/nx affected:build',
      e2E: './node_modules/.bin/nx affected:e2e',
      test: './node_modules/.bin/nx affected:test',
      lint: './node_modules/.bin/nx affected:lint',
      depGraph: './node_modules/.bin/nx affected:dep-graph'
    },
    format: {
      default: './node_modules/.bin/nx format:write',
      write: './node_modules/.bin/nx format:write',
      check: './node_modules/.bin/nx format:check'
    },
    update: {
      check: 'ng update'
    },
    workspaceSchematic: './node_modules/.bin/nx workspace-schematic',
    depGraph: './node_modules/.bin/nx dep-graph',
    help: './node_modules/.bin/nx help'
  }
};
