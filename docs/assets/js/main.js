

var config = {
  apiKey: "AIzaSyAAeuyg8vOKzrFOkS-oeNBTGvSTiWz-y2E",
  databaseURL: "https://univents-a5f76.firebaseio.com/"
};
firebase.initializeApp(config);
var database = firebase.database();

var emailList = database.ref().child('emails');

$("#submit-button").click(() => {
    let email = $("#text-input").val()
    let suffix = email.substr(email.length - 3)
    if(suffix.toUpperCase() == "EDU"){
       firebase.database().ref('/emails/').once('value').then(function(snapshot) {
        var currentDatabase = snapshot.val()
        currentDatabase.push(email);
        emailList.set(currentDatabase);
    })
    }
    $("#text-input").val("Thanks for subscribing!");
})
