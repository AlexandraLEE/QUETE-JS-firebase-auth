 // Initialize Firebase

 var db = firebase.database();
 const ref = db.ref("zombies");


 ref.on("value", function (snapshot) {
    document.getElementById('list-zombies').innerHTML="";
    snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        if(childData.uid == myId || !childData.uid)
        document.getElementById('list-zombies').innerHTML += '<li>' + childData.name + '</li>';
    });
});   

function writeUserData(Name) {
    db.ref('zombies/' + name).push({
      name: Name,
      uid: myId,
    });
  }

  function submitClick() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.alert("Beware! Zombie population increasing.");
    window.location.reload();
    
}
