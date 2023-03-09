/**
 * jsonファイルからデータを取得し、画面に出力する関数
 * @returns {void}
 */
function displayMessage () {
    const response = fetch('hello.json');
    console.log(response);
};

displayMessage();