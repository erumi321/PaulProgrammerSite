  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDZ-ZDUwAxvd2Hv4x3YCN4O7bGHykUFKmI",
    authDomain: "paulprogrammernewsletter.firebaseapp.com",
    projectId: "paulprogrammernewsletter",
    storageBucket: "paulprogrammernewsletter.appspot.com",
    messagingSenderId: "546822540387",
    appId: "1:546822540387:web:12bcfb7a5dcdec49f47c56"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function loadFirebase() {
    var url = document.URL;

    var uid = url.split("?")[1].split(",")[0];
    db.collection('subbedUsers').doc(uid).delete().then(() =>{
        alert("Success!");
        location.href = "https://erumi321.github.io/PaulProgrammerSite/"
        return false;
    }).catch((error) => {
        alert("Error: email 24edruminer this notice\n" + error);
        return false;
    })
}