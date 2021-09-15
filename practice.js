
//ADD YOUR FIREBASE LINKS

const app = initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyAkJoatVCFmCdPhXpS5eUwiM2Ev3ZhR0G0",
  authDomain: "kwitter-b149a.firebaseapp.com",
  databaseURL: "https://kwitter-b149a-default-rtdb.firebaseio.com",
  projectId: "kwitter-b149a",
  storageBucket: "kwitter-b149a.appspot.com",
  messagingSenderId: "611980912134",
  appId: "1:611980912134:web:d446e6eca16142e107c587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }