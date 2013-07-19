'use strict';

describe('boardGeneratorSpec', function() {
    describe('generateSpec', function() {
        it('should return an array of 16 letters', function() {
            expect(new BoradGenerator().generate().length).toBe(12)
        })
    })
});
