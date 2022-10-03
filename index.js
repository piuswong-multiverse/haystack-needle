const myIncludes = (haystack, needle) => {

    let found = false;
    let indexFoundInHaystack = null;

    // Go through each character in the needle, finding it in the haystack in order.
    // Avoid using premade JS search functions, to practice using loops.
    for(let i=0; i<needle.length; i++){
        for(let j=0; j<haystack.length; j++){

            // Stop early if searching for just one character
            if(needle.length===1){
                if(needle[0]===haystack[j]){
                    return true
                }
            } else if(needle.length>1){
                // console.log(i,j,needle[i],haystack[indexFoundInHaystack + i]) // debug

                // If searching for multiple characters, first find the starting index in the haystack where it's found.
                if(needle[i]===haystack[j]){
                    if(indexFoundInHaystack===null && i===0){
                        indexFoundInHaystack = j;
                        break;    
                        // Then check if each next character matches, stopping if at the end of the needle.
                    } else if(indexFoundInHaystack!==null && needle[i]===haystack[indexFoundInHaystack + i]){
                        if(i===(needle.length-1)){
                            return true;
                        }
                        break;
                    }
                }
            }

            
        }
    }

    // By default return that it's not found; only returns true if meeting conditions above.
    return found;
}

myIncludes("carwash", "wash");

module.exports = myIncludes;
