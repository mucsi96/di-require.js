/*global window*/
(function (context) {
    var modules = {},
        testMode = false,
        stubs = {};

    function define(moduleName, constructor) {
        modules[moduleName] = {};
        modules[moduleName].constructor = constructor;
    }

    function require(moduleName) {
        /*if (!modules[moduleName]) {
         throw new Error('Module "' + moduleName + '" is not found!');
         }*/
        var result;
        if (!testMode) {
            if (!modules[moduleName].instance) {
                modules[moduleName].instance = modules[moduleName].constructor();
            }
            result = modules[moduleName].instance;
        } else {
            result = stubs[moduleName];
        }
        return result;
    }

    function test(moduleName) {
        testMode = true;
        return modules[moduleName].constructor();
    }

    function stub(moduleName, stubObj) {
        stubs[moduleName] = stubObj;
    }

    context.define = define;
    context.require = require;
    context.test = test;
    context.stub = stub;
}(window));