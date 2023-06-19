let connectionStatus = document.getElementById("connectionStatus");
let response = document.getElementById("response");
let message = document.getElementById("message");
connectionStatus.innerHTML = "Disconnected";
let websocket = null;

document.getElementById("connectBtn").addEventListener("click", function() {
   // User clicked Connect button
   websocket = new WebSocket("wss://echo.websocket.events/");

   // Connect the websocket to wss://echo.websocket.events/ and 
   // create open, close, and message event callbacks
   websocket.onopen = function() { 
      connectionStatus.innerHTML = "Connected"; 
   }; 

   websocket.onclose = function() { 
      connectionStatus.innerHTML = "Disconnected"; 
   }; 

   websocket.onmessage = function(e) { 
      response.innerHTML = e.data; 
   }; 
   
   websocket.onerror = function(e) { 
      alert("Error!");
      console.log(e); 
   };
});

document.getElementById("disconnectBtn").addEventListener("click", function() {
   // User clicked Disconnect button
   websocket.close();
});

document.getElementById("sendBtn").addEventListener("click", function() {
   // User clicks Send button
   console.log("Send: " + message.value); 

   // Make sure valid connection exists before sending a message
   if (websocket === null || websocket.readyState !== WebSocket.OPEN) {
      alert("Connect before you send.");
   }
   else {
      websocket.send(message.value);
   }
});

