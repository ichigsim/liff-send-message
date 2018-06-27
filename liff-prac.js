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


      document.getElementById('sendmessagebutton').addEventListener('click', function () {
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }, {
            type: 'sticker',
            packageId: '2',
            stickerId: '144'
        }]).then(function () {
            window.alert("Message sent");
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
        });
    });
}