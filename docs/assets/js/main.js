var script = document.createElement('script');

script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);


var config = {
  apiKey: "AIzaSyAAeuyg8vOKzrFOkS-oeNBTGvSTiWz-y2E",
  databaseURL: "https://univents-a5f76.firebaseio.com/"
};
firebase.initializeApp(config);
var database = firebase.database();

var emails = database.ref().child('emails');
console.log(emails);




$("#submit-button").click(() => {
    let email = $("#text-input").val()
    let suffix = email.substr(email.length - 3)
    if(suffix.toUpperCase() == "EDU"){
       emails.set([email])
        console.log("Email sent to database");
    }
})
