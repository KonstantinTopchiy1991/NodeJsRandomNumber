let fs = require('fs');
let randonNumber = function () {
    let randomNumber = Math.floor(Math.random() * 1000);
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    return `Число ${randomNumber} время: ${hours}:${minute}:${second} #\n`;
};
function interval() {
    function record() {
        fs.appendFile('text.txt', randonNumber(), function(){
            console.log('Новое число!')
        });
    }
    setInterval(record, 1000);
}
interval();

