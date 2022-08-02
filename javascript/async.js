function kuadratAsync(x) {
    setTimeout(() => x * x, 500)
}

function kuadratAsync1(x, callback) {
    setTimeout(() => callback(x * x), 1000)
}

console.log(kuadratAsync(2));
kuadratAsync1(2, console.log);


// Promise 
function isPasswordCorrect(password) {
    return new Promise((resolve, reject) => {
        console.log(password);
        if (password !== '123456') {
            reject('wrong password');
        } else resolve('password is correct');
    })
}

isPasswordCorrect('123456')
.then(resolve => console.log(resolve))
.catch(reject => console.error(reject))