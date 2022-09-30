const myIncludes = require('./index');

describe('Finds single characters in haystack', () => {

    test('Find letters in carwash', () => {
        let needle = "c";
        let haystack = "carwash";
        expect(myIncludes(haystack,needle)).toEqual(true);
    })

    

})