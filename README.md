# Nano dependency injection module with require syntax #
## Examples ##
Let's define a module

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
    
And one more module

    (function () {
    var betaModule = function () {
        var alphaModule = require('alphaModule');
        return {
            getName: function () {
                return alphaModule.getName() + 'Beta';
            }
        };
    };
    define('betaModule', betaModule);
    }());

And now we can easily test it!

    describe('betaModule', function () {  
        it('should be easily tested', function () {
            var alphaModuleStub = {
                getName: function () {
                    return 'stubAlpha';
                }
            };
    
            stub('alphaModule', alphaModuleStub);
            betaModule = test('betaModule');
            expect(betaModule.getName()).toEqual('stubAlphaBeta');
        });  
    });

