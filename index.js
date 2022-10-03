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
            }

            // // If 1st character of the needle is found, search for the rest
            // if(needle[0]===haystack[j]){
            //     indexFoundInHaystack = j;
            //     break 
            // } else {
            //     return false;
            // }
        }
        return found;
    }

}



module.exports = myIncludes;
