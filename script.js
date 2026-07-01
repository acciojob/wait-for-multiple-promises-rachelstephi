const output = document.getElementById("output");
output.innerHTML = `
<tr id="loading">
    <td colspan="2">Loading...</td>
</tr>
`;
function createPromise(name) {
    const time = Math.random() * 2 + 1; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: name,
                time: time
            });
        }, time * 1000);
    });
}
const startTime = performance.now();

const promise1 = createPromise("Promise 1");
const promise2 = createPromise("Promise 2");
const promise3 = createPromise("Promise 3");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        const totalTime = (performance.now() - startTime) / 1000;

        output.innerHTML = "";

        results.forEach((result) => {
            output.innerHTML += `
                <tr>
                    <td>${result.name}</td>
                    <td>${result.time.toFixed(3)}</td>
                </tr>
            `;
        });

        output.innerHTML += `
            <tr>
                <td>Total</td>
                <td>${totalTime.toFixed(3)}</td>
            </tr>
        `;
    });