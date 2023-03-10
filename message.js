var socket;
		var username;
		var chatBox = document.getElementById("chat-box");
		var messageInput = document.getElementById("message");
		var sendButton = document.querySelector("button[onclick='sendMessage()']");
		
		function connect() {
			username = document.getElementById("username").value;
			if (!username) {
				alert("Please enter a username.");
				return;
			}
			
			socket = new WebSocket("ws://localhost:8080");
			
			socket.onopen = function(event) {
				socket.send(JSON.stringify({ type: "join", username: username }));
				messageInput.disabled = false;
				sendButton.disabled = false;
			}
			
			socket.onmessage = function(event) {
				var data = JSON.parse(event.data);
				if (data.type === "chat") {
					chatBox.innerHTML += "<p>" + data.username + ": " + data.message + "</p>";
				}
			}
		}
		
		function sendMessage() {
			var message = messageInput.value;
			if (message) {
				socket.send(JSON.stringify({ type: "chat", username: username, message: message }));
				messageInput.value = "";
			}
		}