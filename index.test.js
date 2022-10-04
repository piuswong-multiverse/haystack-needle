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

    it('finds characters in a sentence', () => {
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

describe('how well it finds multiple characters in haystack', () => {

    it('finds small strings in "carwash"', () => {
        let haystack = "carwash";
        let needle = "car";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "wash";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "ar";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "cat";
        expect(myIncludes(haystack,needle)).toEqual(false);
        needle = "dog";
        expect(myIncludes(haystack,needle)).toEqual(false);
    })

    it('finds small strings in "what a lovely day"', () => {
        expect(myIncludes('what a lovely day','love')).toEqual(true);
        expect(myIncludes('what a lovely day','al')).toEqual(false);
    })

    it('finds characters in a sentence', () => {
        let haystack = "Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small, unregarded yellow sun.";
        let needle = "Fa";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "Ma";
        expect(myIncludes(haystack,needle)).toEqual(false);
        needle = "the";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "sun.";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "small, unregarded";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "eastern";
        expect(myIncludes(haystack,needle)).toEqual(false);
        needle = "what?";
        expect(myIncludes(haystack,needle)).toEqual(false);
    })

})

describe('how well it handles unexpected or weird cases',() => {

    it('properly deals with unusual sizes of the needle or haystack', () => {
        expect(myIncludes("small haystack", "really really much longer needle")).toEqual(false);
        expect(myIncludes("same string", "same string")).toEqual(true);
        expect(myIncludes("","needle")).toEqual(false);
        expect(myIncludes("haystack","")).toEqual(false);
        expect(myIncludes("","")).toEqual(false);
        expect(myIncludes("s", "s")).toEqual(true);
    })

    it('restricts non-string inputs and sends an error message', () => {
        expect(typeof myIncludes(234,4)).toBe("string");
        expect(typeof myIncludes("asdf",1)).toBe("string");
        expect(typeof myIncludes(234,"n")).toBe("string");
        expect(typeof myIncludes([2,3],["n"])).toBe("string");
        expect(typeof myIncludes({"free": "2"},{"n":"j"})).toBe("string");
    })
    
})