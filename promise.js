function fetchHelloPromise () {
    const promise = fetch('hello.json');

    const fulfilled = (data) => {
        console.log(data);
    };

    const rejected = (err) => {
        console.log('通信に失敗しました');
    }
    return promise.then(fulfilled, rejected);
};

fetchHelloPromise();


