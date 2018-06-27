window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {

    function onButtonClick() {
        // output = document.getElementById("output");
        // textbox = document.getElementById("input");
        // output.innerText = textbox.value;
        liff.sendMessages({
            type: 'text',
            text: textbox
        }).then((result) => {
            window.alert("メッセージを送信しました！");
        }).catch((err) => {
            window.alert("エラーは次のようになります: " + err);
        });
    }


      document.getElementById('sendmessage').addEventListener('click', function () {
        liff.sendMessages({
            type: 'text',
            text:  "test"
        }).then(function () {
            window.alert("メッセージを送信しました！");
        }).catch(function (error) {
            window.alert("エラーは次のようになります: " + error);
        });
    });

    
    // sendMessages call
    document.getElementById('sendmessagebutton').addEventListener('click', function () {
        output = document.getElementById("output");
        textbox = document.getElementById("input");
        output.innerText = textbox.value;
        liff.sendMessages([{
            type: 'text',
            text: output.value
        }]).then(function () {
            liff.closeWindow()
        }).catch(function (error) {
            window.alert("Error: " + error);
        });
    });

}