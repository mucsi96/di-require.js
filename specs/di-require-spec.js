/*global require, define, stub, test*/
describe('DI require module', function () {

    describe('GIVEN a simple test module', function () {
        beforeEach(function () {
            (function () {
                var fooModule = function () {
                    return {
                        foo: 'bar'
                    };
                };
                define('fooModule', fooModule);
            }());
        });
        describe('WHEN "required" is called with existing module THEN', function () {
            var result;

            beforeEach(function () {
                result = require('fooModule');
            });
            it('should return an instance of it', function () {
                expect(result.foo).toEqual('bar');
            });
        });
    });

    describe('GIVEN a module with a dependent module', function () {
        beforeEach(function () {
            (function () {
                var alphaModule = function () {
                    return {
                        getName: function () {
                            return 'alpha';
                        }
                    };
                };
                define('alphaModule', alphaModule);
            }());
            (function () {
                var bravoModule = function () {
                    var alphaModule = require('alphaModule');
                    return {
                        getName: function () {
                            return alphaModule.getName() + 'Bravo';
                        }
                    };
                };

                define('bravoModule', bravoModule);
            }());
        });

        describe('AND GIVEN a stub for the dependent module', function () {
            beforeEach(function () {
                var alphaModuleStub = {
                        getName: function () {
                            return 'stubAlpha';
                        }
                    };

                stub('alphaModule', alphaModuleStub);
            });
            describe('WHEN "test" is called with the main module THEN', function () {
                var bravoModule;
                beforeEach(function () {
                    bravoModule = test('bravoModule');
                });
                it('should stub out the dependent module', function () {
                    expect(bravoModule.getName()).toEqual('stubAlphaBravo');
                });
            });
        });
    });
});

