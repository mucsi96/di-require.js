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

## Spec Runner Output ##

<ul class="suite" id="suite-suite1"><li class="suite-detail"><a href="?spec=DI%20require%20module">DI require module</a></li><ul class="suite" id="suite-suite2"><li class="suite-detail"><a href="?spec=DI%20require%20module%20GIVEN%20a%20simple%20test%20module">GIVEN a simple test module</a></li><ul class="suite" id="suite-suite3"><li class="suite-detail"><a href="?spec=DI%20require%20module%20GIVEN%20a%20simple%20test%20module%20WHEN%20%22required%22%20is%20called%20with%20existing%20module%20THEN">WHEN "required" is called with existing module THEN</a></li><ul class="specs"><li class="passed" id="spec-spec0"><a href="?spec=DI%20require%20module%20GIVEN%20a%20simple%20test%20module%20WHEN%20%22required%22%20is%20called%20with%20existing%20module%20THEN%20should%20return%20an%20instance%20of%20it">should return an instance of it</a></li></ul></ul></ul><ul class="suite" id="suite-suite4"><li class="suite-detail"><a href="?spec=DI%20require%20module%20GIVEN%20a%20module%20with%20a%20dependent%20module">GIVEN a module with a dependent module</a></li><ul class="suite" id="suite-suite5"><li class="suite-detail"><a href="?spec=DI%20require%20module%20GIVEN%20a%20module%20with%20a%20dependent%20module%20AND%20GIVEN%20a%20stub%20for%20the%20dependent%20module">AND GIVEN a stub for the dependent module</a></li><ul class="suite" id="suite-suite6"><li class="suite-detail"><a href="?spec=DI%20require%20module%20GIVEN%20a%20module%20with%20a%20dependent%20module%20AND%20GIVEN%20a%20stub%20for%20the%20dependent%20module%20WHEN%20%22test%22%20is%20called%20with%20the%20main%20module%20THEN">WHEN "test" is called with the main module THEN</a></li><ul class="specs"><li class="passed" id="spec-spec1"><a href="?spec=DI%20require%20module%20GIVEN%20a%20module%20with%20a%20dependent%20module%20AND%20GIVEN%20a%20stub%20for%20the%20dependent%20module%20WHEN%20%22test%22%20is%20called%20with%20the%20main%20module%20THEN%20should%20stub%20out%20the%20dependent%20module">should stub out the dependent module</a></li></ul></ul></ul></ul></ul>

