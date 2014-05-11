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