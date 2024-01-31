import fetch from 'node-fetch'



let counter = 0
async function makeRequest(url) {
    try {
        const start = Date.now();
        const res = await fetch(url);
        const end = Date.now()
        const duration = end - start
        console.log(`Response Time: ${counter} ${duration}ms`);
        counter++
        return duration;
    } catch (error) {
        console.error(`Error making request: ${error.message}`);
        return 0; // or handle the error as needed
    }
}

async function check(url, numberOfRequests,isAsync = true) {
    const times = []
    if (isAsync){
        const promises = [...new Array(numberOfRequests)].map(()=>makeRequest(url))
        const result = await Promise.all(promises);
        times.push(...result)
    }
    else {
        for (let i = 0; i < numberOfRequests; i++) {
            const res = await makeRequest(url)
            times.push(res)
        }
    }
    const totalResponseTime = times.reduce((previousValue, currentValue) => previousValue+currentValue,0)
    const averageResponseTime = totalResponseTime / numberOfRequests;
    console.log(`Average Response Time: ${averageResponseTime}ms`);
}

export default check