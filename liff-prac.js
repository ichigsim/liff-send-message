window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        output = document.getElementById("output");
        textbox = document.getElementById("input");
        output.innerText = textbox.value;
        liff.sendMessages([{
            type: 'text',
            text: "taro " + output.textContent + " tanaka"
        }]).then(function () {
            liff.closeWindow()
        }).catch(function (error) {
            window.alert("エラーは次のようになります: " + error);
        });
    });

}