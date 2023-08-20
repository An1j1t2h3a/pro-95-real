var firebaseConfig = {
    apiKey: "AIzaSyAt7wO6qzhwTbzicMe1tXfXsvNDMxLZWpc",
    authDomain: "kwitter-c6279.firebaseapp.com",
    databaseURL: "https://kwitter-c6279-default-rtdb.firebaseio.com",
    projectId: "kwitter-c6279",
    storageBucket: "kwitter-c6279.appspot.com",
    messagingSenderId: "122499284027",
    appId: "1:122499284027:web:7ca24ebe345d81d057b01e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML="Welcome "+user_name;
  
  function addRoom(){
  
    room_name=document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
    });
  
    localStorage.setItem("room_name",room_name);
  
    window.location="kwitter_page.html";
  }