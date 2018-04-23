 // Initialize Firebase
/*jshint esversion: 6 */
 var db = firebase.database();
 const ref = db.ref("zombies");


 ref.once("value", function (snapshot) {
     let user = firebase.auth().currentUser;
     snapshot.forEach(function (childSnapshot) {
         let childData = childSnapshot.val();

         if (!childData.creator || childData.creator == user.uid) {
             document.getElementById('list-zombies').innerHTML += '<li>' + childData.name + '</li>';
         }
     });
 });

 function writeUserData(Name) {
     var user = firebase.auth().currentUser;

     db.ref('zombies/' + name).push({
         name: Name,
         creator: user.uid

     });
 }

 function submitClick() {
     let name = document.getElementById("Name").value;
     writeUserData(name);
     window.alert("Beware! Zombie population increasing.");
     window.location.reload();

 }