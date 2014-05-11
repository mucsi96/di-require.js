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

And now we can easily test it!

    describe('bravoModule', function () {
        it('should be easily tested', function () {
            var alphaModuleStub = {
                getName: function () {
                    return 'stubAlpha';
                }
            };
    
            stub('alphaModule', alphaModuleStub);
            bravoModule = test('bravoModule');
            expect(bravoModule.getName()).toEqual('stubAlphaBravo');
        });  
    });

