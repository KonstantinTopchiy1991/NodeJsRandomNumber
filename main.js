function REST(type) {
    let req = new XMLHttpRequest();

    let body = {
        a:'test',
        b:'test2'
    };

    req.open(type, 'http://localhost:8080/api', true);
    req.setRequestHeader("Content-type", "application/json");

    req.onreadystatechange = function (ev) {
        if (req.readyState == 4) {
           let result = ev.currentTarget.response;

            const textResult = document.getElementById('text');
            textResult.innerHTML = result ;
            textResult.style.border = '2px black';

        } else {
            console.log(req.readyState);
        }
    };

    req.send(JSON.stringify(body));
}

document.getElementById('getAll')
    .addEventListener('click', () => {
        REST('GET');
    });

document.getElementById('getLast')
    .addEventListener('click', () => {
        REST('POST');
    });