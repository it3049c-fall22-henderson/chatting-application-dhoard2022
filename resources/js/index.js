const nameInput = document.getElementById("my-name-input");
const myMessage = document.getElementById("my-message");
const sendButton = document.getElementById("send-button");
const chatBox = document.getElementById("chat");
const serverURL = `https://it3049c-chat-application.herokuapp.com/messages`;

function updateMessages() {
  //Fetch
  //Loop over messages. Inside the loop we will
    //get each message
    //format it 
    //add it to chatbox
}
 function fetchMessages() {
  return fetch(serverURL)
  .then( response => response.json())
 }

 async function updateMessages() {
  const messages = await fetchMessages();

  //Loop over messages. inside get each messages
    //get each messages
    //format it
    //add it to the chatbox

    let formattedMessages = "";
    messages.forEach(message => {
      formattedMessages += formatMessage(message, nameInput.value);
    });
    chatBox.innerHTML = formattedMessages;
 }

 function formatMessage(message, myNameInput) {
  const time = new Date(message.timestamp);
  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;

  if (myNameInput === message.sender) {
      return `
      <div class="mine messages">
          <div class="message">
              ${message.text}
          </div>
          <div class="sender-info">
              ${formattedTime}
          </div>
      </div>
      `
  } else {
      return `
          <div class="yours messages">
              <div class="message">
                  ${message.text}
              </div>
              <div class="sender-info">
                  ${message.sender} ${formattedTime}
              </div>
          </div>
      `
  }

}