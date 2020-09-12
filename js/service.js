const { workerData, parentPort } = require('worker_threads')

// Fibonacci

const countdown = (number) => {
    return new Promise((resolve) => {
        while (number > 0) {
            number--;
        }
        return resolve(number);
    });
};

(async () => {
    const result = await countdown(workerData);
    parentPort.postMessage(result);
})();
