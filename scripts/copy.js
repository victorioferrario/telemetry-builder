const libName = 'telemetry-shell';
const {
    version,
    name
  } = require(`../dist/libs/${libName}/package.json`);
  const fs = require('fs');  
  const NPM_PACKAGE_NAME = name.replace('@rccl/', 'rccl-');
  const NotificationCenter = require('node-notifier/notifiers/notificationcenter');
  
  const path = require('path');
  const notifier = require('node-notifier');
    console.log(__dirname);
    //return;
  // copyFiles();
  function getRoot() {
    const dist = `telemetry-builder/dist/libs/${libName}/`;
    console.log(__dirname);
    return __dirname.substring(0, __dirname.lastIndexOf('telemetry-builder')) + dist;
  }  
  function getTarget() {
    return __dirname.substring(0, __dirname.lastIndexOf('telemetry-builder')) + 'packages/';
  }
  
  function getPackage() {
    const local = NPM_PACKAGE_NAME.replace(
      '@rccl' + '/',
      '@rccl-'
    );
    return `${local}-${version}.tgz`;
  }
  
  function getPayload() {
    const file = getPackage();
    return {
      root: getRoot() + file,
      target: getTarget() + file,
      package: getPackage()
    };
  }
  try {
    const payload = getPayload();
    fs.copyFileSync(payload.root, payload.target);
    const options = {
      title: 'Build Notification',
      message: `Your package: ${payload.package}, has been built and copied to ${payload.target}`,
      icon: path.join(__dirname, 'angular-icon.png'), // Absolute path (doesn't work on balloons)
      sound: true, // Only Notification Center or Windows Toasters
      wait: true // Wait with callback, until user action is taken against notification
    };
    notifier.notify(
      options,
      function (err, response) {
        // Response is response from notification
      }
    );
    notifier.on('click', function (notifierObject, options) {
      // Triggers if `wait: true` and user clicks notification
    });
  
    notifier.on('timeout', function (notifierObject, options) {
      // Triggers if `wait: true` and notification closes
    });
    process.exit();
  } catch (error) {
    throw error;
    process.exit();
  }