const nameInput = document.getElementById("myName");
const myMessage = document.getElementById("myMessage");
const sendButton = document.getElementById("sendButton");
const chatBox = document.getElementById("chat");

function updateMessages() {
    // Fetch Messages // Loop over the messages. Inside the loop we will // get each message // format it // add it to the chatbox
}

const serverURL = `https://it3049c-chat-application.herokuapp.com/messages`;

function fetchMessages() {
    return fetch(serverURL).then(response => response.json())
}

async function updateMessages() {
    // Fetch Messages const messages = await fetchMessages();
    // Loop over the messages. Inside the loop we will // get each message // format it // add it to the chatbox
}

{
    "id": 1, "text": "This is my message", "timestamp": 1537410673072
}

function formatMessage(message, myNameInput) {
    const time = new Date(message.timestamp);
    const formattedTime = `$

{
    time .getHours()
}

:$ {
    time .getMinutes()
}

`;

    if (myNameInput === message.sender) {
        return ` <div class="mine messages"> <div class="message"> $

{
    message .text
}

</div >
<div class="sender-info" >
$ {
    formattedTime
}

</div >
</div >
`
    }

    else {
        return ` <div class="yours messages"> <div class="message"> $

{
    message .text
}

</div >
<div class="sender-info" >
$ {
    message .sender
}

$ {
    formattedTime
}

</div >
</div >
`
    }
}

async function updateMessages() {
    // Fetch Messages const messages = await fetchMessages();
    // Loop over the messages. Inside the loop we will: // get each message // format it // add it to the chatbox let formattedMessages = "";
    messages.forEach(message => {
        formattedMessages += formatMessage(message, nameInput.value);
    });
    chatBox.innerHTML = formattedMessages;
}

updateMessages()

setInterval(updateMessages, 10000);

const MILLISECONDS_IN_TEN_SECONDS = 10000;
setInterval(updateMessages, MILLISECONDS_IN_TEN_SECONDS);

const serverURL = `https://it3049c-chat-application.herokuapp.com/messages`; // This has been declared before
...
function sendMessages(username, text) {
    const newMessage = {
        sender: username,
        text: text,
        timestamp: new Date()
    }

    fetch(serverURL, {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    });
}

sendButton.addEventListener("click", function (sendButtonClickEvent) {
    sendButtonClickEvent.preventDefault();
    const sender = nameInput.value;
    const message = myMessage.value;

    sendMessages(sender, message);
    myMessage.value = "";
});