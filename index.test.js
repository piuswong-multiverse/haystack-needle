const myIncludes = require('./index');


describe('how well it finds single characters in haystack', () => {

    it('finds single letters in "carwash"', () => {
        let haystack = "carwash";
        let needle = "c";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "a";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "b";
        expect(myIncludes(haystack,needle)).toEqual(false);
    })

    it('finds characters in a random sentence', () => {
        let haystack = "Mrs. Smith's daily goal was to improve on yesterday.";
        let needle = "M";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "m";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = ".";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "y";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "q";
        expect(myIncludes(haystack,needle)).toEqual(false);
        needle = ":";
        expect(myIncludes(haystack,needle)).toEqual(false);
    })

})