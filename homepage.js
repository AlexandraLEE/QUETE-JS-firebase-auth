 // Initialize Firebase

 var db = firebase.database();
 const ref = db.ref("zombies");
 

 
    ref.once("value", function (snapshot) {     
        snapshot.forEach(function (childSnapshot) {
            let childData = childSnapshot.val(); 
                   
        document.getElementById('list-zombies').innerHTML += '<li>' + childData.name + '</li>';          
        
    }); 
})
    
function writeUserData(Name) {
    db.ref('zombies/' + name).push({
      name: Name,
      
    });
  }

  function submitClick() {
    let name = document.getElementById("Name").value;
    writeUserData(name);
    window.alert("Beware! Zombie population increasing.");
    window.location.reload();
    
}
 

