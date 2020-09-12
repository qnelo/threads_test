const { Worker } = require('worker_threads')

function runService(workerData) {
    return new Promise((resolve) => {
        const worker = new Worker('./js/service.js', { workerData });
        worker.on('message', resolve);
    })
}


const countdown = (number) => {
    return new Promise((resolve) => {
        while (number > 0) {
            number--;
        }
        return resolve(number);
    });
};

const test = async (count, processNumber, workerThreads) => {

    const start = new Date();
    let processArray = [];

    for (let index = 0; index < processNumber; index++) {
        processArray[index] = workerThreads ? runService(count) : countdown(count);
    }
    await Promise.all(processArray);

    const mode = workerThreads ? "worker  " : "promises";
    console.log(`count:${count} - number of ${mode}:${processNumber} - time:${(new Date() - start) / 1000}`);
};

(async () => {
    const count = 500000000;
    const maxProcess = 8;

    for (let index = 1; index <= maxProcess; index++) {
        await test(count, index, true);
        await test(count, index, false);
    }
})();
