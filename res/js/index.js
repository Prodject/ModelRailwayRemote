
function home() {
    window.location.href="/";
    console.log("home");
}

function lights(pin,id) {
    let request = new XMLHttpRequest();
    request.open("GET", "../request?type=light&pin="+pin, true);
    request.send(null);
    console.log("light: "+ window.location.hostname +":"+window.location.port+"/request?type=light&pin="+pin);
refresh(pin,id)
}
function switches(pin,id) {
    let request = new XMLHttpRequest();
    request.open("GET", "../request?type=switch&pin="+pin, true);
    request.send(null);
    console.log("light: "+ window.location.hostname +":"+window.location.port+"/request?type=light&pin="+pin);
}
function crossway(pin,id) {
    let request = new XMLHttpRequest();
    request.open("GET", "../request?type=crossway&pin="+pin, true);
    request.send(null);
    console.log("light: "+ window.location.hostname +":"+window.location.port+"/request?type=light&pin="+pin);
}
function signals(pin,id) {
    let request = new XMLHttpRequest();
    request.open("GET", "../request?type=signal&pin="+pin, true);
    request.send(null);
    console.log("light: "+ window.location.hostname +":"+window.location.port+"/request?type=light&pin="+pin);
}
function refresh(pin,id) {
    let request = new XMLHttpRequest();
    request.open("GET", "../state?pin="+pin, true);
    request.send(null);
    console.log(window.location.hostname +":"+window.location.port+"/state?pin="+pin);
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log("request: " + request.responseText + "id: " + id)
            
           if (request.responseText == 1) {
            id.style.borderColor = "green";
           } else {
            id.style.borderColor = "red";
           }
           
        }
}
}