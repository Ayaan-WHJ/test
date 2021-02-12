var firebaseConfig = {
    apiKey: "AIzaSyA3p_u9RMnTWBCBmmKejQY3YwKFjmTUfGM",
    authDomain: "test-6f0ee.firebaseapp.com",
    databaseURL: "https://test-6f0ee-default-rtdb.firebaseio.com",
    projectId: "test-6f0ee",
    storageBucket: "test-6f0ee.appspot.com",
    messagingSenderId: "13158727802",
    appId: "1:13158727802:web:7859852434b88a5c37bbc3",
    measurementId: "G-0QEJ8F155Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}
