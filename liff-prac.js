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
        const json = JSON.stringify({
            type: 'text',
            text: "You've successfully sent a message! Hooray!" + output.textContent
        })
        liff.sendMessages([{
            type: 'text',
            text: "You've successfully sent a message! Hooray!"
        }]).then(function () {
            liff.closeWindow()
        }).catch(function (error) {
            window.alert("エラーは次のようになります: " + error);
        });
    });

}