// This function avoids using premade JS search functions (e.g. slice(), includes(), indexOf()...), 
// to practice using loops and exercising more challenging algorithmic thinking.

const myIncludes = (haystack, needle) => {
    
    let found;
    let indexFoundInHaystack = null;
    let indexStartSearchHaystack = 0;
    let loopCount = 0;

    // Filter out weird cases
    if(typeof haystack !== "string" || typeof needle !== "string"){
        return 'Haystack and needle inputs must be strings (e.g. myIncludes("haystack","hay") ).'
    }
    if(needle.length > haystack.length){
        found = false;
    } 

    // Keep searching the haystack if no definite decision has been made.
    while(found===undefined){

        // Go through each character in the needle, finding it in the haystack in order.
        loopNeedle:
        for(let i=0; i<needle.length; i++){

            loopHaystack:
            // Start searching the haystack at the index of interest only
            for(let j=indexStartSearchHaystack; j<haystack.length; j++){

                // Stop early if searching for just one character
                if(needle.length===1){
                    if(needle[0]===haystack[j]){
                        found = true;
                        return true
                    }
                } else if(needle.length>1){

                    // console.log("loopCount", loopCount, "indexFoundInHaystack:",indexFoundInHaystack,"indexStartSearchHaystack:", indexStartSearchHaystack, "needle:",i,`"${needle[i]}"`,"haystack:",j,`"${haystack[indexFoundInHaystack + i]}"`) // debug

                    // If searching for multiple characters, first find the starting index in the haystack where it's found.
                    if(indexFoundInHaystack===null){
                        if(i===0 && needle[i]===haystack[j]){
                            indexFoundInHaystack = j;
                            break loopHaystack; // Check the next character in needle.
                        }
                    } else {
                        // If previous chars found, then check if each next character matches, stopping if at the end of the needle.
                        if(needle[i]===haystack[indexFoundInHaystack + i]){
                            if(i===(needle.length-1)){
                                found = true;
                                return true;
                            }
                            break loopHaystack; // Check the next character in needle.                  
                        } else {
                            // If you're at the end of the needle and haystack and it's not a match...
                            if( (i===needle.length-1) ){
                                found = false;
                                return false;
                            } else {
                                // If one of the next characters doesn't match, start over; look again starting from the same index
                                indexStartSearchHaystack = indexFoundInHaystack + i;
                                indexFoundInHaystack = null;
                                break loopNeedle; // Look for the start of the needle again at the new index.
                            }
                        }
                    }
                }

                // Return false if completely running through needle and haystack without finding the complete needle.
                if(i===needle.length-1 && j===haystack.length-1){
                    found = false;
                }

            }

        }

        // Return false if outer loop is running impossibly long. (additional checks)
        if(indexStartSearchHaystack>=haystack.length || loopCount>haystack.length*needle.length){
            found = false; 
        }

        loopCount++;
    }

    // By default return that it's not found; only returns true if meeting conditions above.
    return found;
}

// console.log(myIncludes("car wash", "cartttt")); // debug
// console.log(myIncludes("Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small, unregarded yellow sun.", "sun.")); // debug
// console.log(myIncludes("car wash", 34)); // debug

module.exports = myIncludes;
