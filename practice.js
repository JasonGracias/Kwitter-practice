var firebaseConfig = {
    apiKey: "AIzaSyDHNf1A1G1KGfjJw-HjqTrTmYyb2yPH9qc",
    authDomain: "kwitter-ebee6.firebaseapp.com",
    databaseURL: "https://kwitter-ebee6.firebaseio.com",
    projectId: "kwitter-ebee6",
    storageBucket: "kwitter-ebee6.appspot.com",
    messagingSenderId: "777543741685",
    appId: "1:777543741685:web:56ea8b1b51634721c595bc",
    measurementId: "G-6X2NPJVS68"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function send(){
getName=document.getElementById("username").value;
firebase.database().ref("/").child(getName).update({
purpose:"adding name"
});
  }