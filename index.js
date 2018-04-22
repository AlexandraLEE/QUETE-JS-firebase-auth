 // Initialize Firebase
 var provider = new firebase.auth.GoogleAuthProvider();

 function signin() {
 firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 }
 var db = firebase.database();
 const ref = db.ref("zombies");


 ref.on("value", function (snapshot) {
    document.getElementById('list-zombies').innerHTML="";
    snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        console.log(childSnapshot.val());
        document.getElementById('list-zombies').innerHTML += '<li>' + childData.name + '</li>';
    });
});   

function writeUserData(Name) {
    db.ref('zombies/' + name).push({
      name: Name,
    });
  }

  function submitClick() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.alert("Beware! Zombie population increasing.");
    
}
