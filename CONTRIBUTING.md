# Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

# Testing

Tests are run with [Protractor](http://angular.github.io/protractor/#/). After install it, you need execute `webdriver-manager start`, start a webserver (at port defined in `conf.js`) and run the command `protractor conf.js` to test.

Note: in `gulpfile.js` already exists a task to run a webserver in proper port, just run `gulp` to start it.