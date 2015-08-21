# Test-change-tests

Currently seeing a problem with running tests for Ember Observer, running on Ember 2.0, Ember Data 2.0 and ember-cli 1.13.8. This repo is a recreation of this bug.

Successfully seen with:

- Ember 1.13.7
- No ember-data
- ember-cli 1.13.8


- Ember 1.13.7
- No ember-data
- ember-cli master

-- Current setup in this app --

- Ember 2.0.0
- ember-data 2.0.0
- ember-cli 1.13.8

on: 

- 2013 MacBook Pro
- watchman
- node 0.12.7
- mac osx 10.10.4


- 2012 MacBook Air
- NodeWatcher
- node 0.12.0
- mac osx 10.10.3

To see, run tests in a browser either through `http://localhost:4200/tests` or through `ember test -s`, see the tests pass, then change the `thing-test` acceptance test file in any way (I've been toggling commenting `assert.ok(true)` or changing a test title). Tests fail with:

```
Uncaught TypeError: Cannot read property 'default' of undefined

at require (http://localhost:7357/assets/test-loader.js:29:16)
    	at loadModules (http://localhost:7357/assets/test-loader.js:21:25)
    	at load (http://localhost:7357/assets/test-loader.js:40:35)
    	at http://localhost:7357/assets/test-support.js:6647:20: Can't find variable: visit

    ✘ afterEach failed on visiting /thing: undefined is not an object (evaluating 'target[method]')
```
