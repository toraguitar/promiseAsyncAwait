async function fetchHello () {
    const response = await fetch('hello.json');
    const data = await response.json(response);
    const element = document.getElementById('message');
    element.innerHTML = data.message;
};

fetchHello();