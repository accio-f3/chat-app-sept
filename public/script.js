let username = "";
const btn = document.getElementById("join-chat");
const usernameInput = document.getElementById("username-input");
const usernameForm = document.querySelector(".form-username");
const chatroomContainer = document.querySelector('.chatroom-container');

btn.addEventListener("click", (event) => {
  event.preventDefault();
  username = usernameInput.value;
  //   this will make sure username is not empty
  if (username) {
    usernameForm.style.display = "none";
    chatroomContainer.style.display = "block";
  }
});
