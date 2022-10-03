const myIncludes = require('./index');


describe('Finds single characters in haystack', () => {

    test('Find letters in carwash', () => {
        let haystack = "carwash";
        let needle = "c";
        expect(myIncludes(haystack,needle)).toEqual(true);
        needle = "a";
        expect(myIncludes(haystack,needle)).toEqual(true);
    })

    

})