console.log("AAHHH");
  
  //Setup the Firebase auth for use through out the project
var provider = new firebase.auth.GoogleAuthProvider();
  
  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

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

  // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        location.href = "/newsletter-success.html?" + authResult.user.uid + "," + authResult.user.email;

        return false;
    },
    uiShown: function() {
      // The widget is rendered.
      //Change the visuals to have the same font and change its size
      document.getElementsByClassName("firebaseui-idp-text")[0].innerText = "Subscribe to Newsletter"
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],

};

//magic that creates teh UI and all its handlers, handled by firebase
ui.start('#firebaseui-auth-container', uiConfig);