
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyABl4XoxmemEUEOylxPrSvbNGmByfwRJhw",
      authDomain: "game-412e2.firebaseapp.com",
      databaseURL: "https://project-prototype-7cf53-default-rtdb.firebaseio.com",
      projectId: "game-412e2",
      storageBucket: "game-412e2.appspot.com",
      messagingSenderId: "213792653737",
      appId: "1:213792653737:web:0d3996f0c0f3c6be67c4b8"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name")

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Start code


//     i dont know how to do this part can you help me?


    //End code
    });});}
    getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html"
}

function addRoom()
{
      add_Room = document.getElementById("room_name").value;

      firebase.database().ref("/").child(add_Room).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", add_Room);

      window.location = "kwitter_page.html";
}