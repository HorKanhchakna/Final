function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched! Student Name: Hor Kanhchakna');
        }, 1000);
    });
}

async function fetchAndProcessData() {
    try {
        console.log('Student Name: Hor Kanhchakna');
        console.log('Using async/await:');
        const data = await fetchData();
        console.log(data);
        const processed = "Processing data...";
        console.log(processed);
    } catch (err) {
        console.error('Error', err);
    }
}

fetchAndProcessData();
