var url = document.URL;

var uid = url.split("?")[1].split(",")[0];
var email = url.split("?")[1].split(",")[1];

db.collection('subbedUsers').doc(uid).set({
    email: email
}).then(() =>{
    alert("Success!");
    location.href = "/index.html"
    return false;
}).catch((error) => {
    alert("Error: email 24edruminer this notice\n" + error);
    return false;
})