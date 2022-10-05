const analyzeSubmission = async (haystack, needle) => {
    try{
        console.log("Analyzing data:", haystack, "+", needle); // debug
        const response = await fetch('http://localhost:3000/api', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "haystack": haystack,
                "needle": needle
            })
        });
        const result = await response.json();
        console.log("Found?", result.message);
        document.getElementById("result").innerText = result.message;
    } catch (err) {
        console.log(err);
    }
}

const handleSubmit = () => {
    const haystack = document.getElementById("haystack").value;
    const needle = document.getElementById("needle").value;
    analyzeSubmission(haystack, needle);
}
