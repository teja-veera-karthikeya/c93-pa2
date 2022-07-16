var firebaseConfig = {
      apiKey: "AIzaSyCQxOSwgXOEMNRY9Q1sRy0wt4Tw6VdrBl8",
      authDomain: "kwitter-8c3a8.firebaseapp.com",
      databaseURL: "https://kwitter-8c3a8-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c3a8",
      storageBucket: "kwitter-8c3a8.appspot.com",
      messagingSenderId: "781064214148",
      appId: "1:781064214148:web:e6819aa2bd1f3bdc3fd4d1"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
