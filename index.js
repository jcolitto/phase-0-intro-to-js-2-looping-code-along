const messages = [];

function writeCards(names, event) {
    for(let i = 0; i < names.length; i++ ) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; 
        messages.push(message);       
    }

    return messages;
}

// console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown() {
let count = 10;
while (count > 0 - 1) {
    console.log(count--);
}
}
console.log(countDown(10));


