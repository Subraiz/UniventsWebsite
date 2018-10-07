var script = document.createElement('script');
 
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);



$("#submit-button").click(() => {
    let email = $("#text-input").val()
    let suffix = email.substr(email.length - 3)
    if(suffix.toUpperCase() == "EDU"){
        console.log(email)
    }
    
})