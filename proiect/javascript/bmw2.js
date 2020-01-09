//am o lista si folosesc push pop concat
var list = [];
document.getElementById("demo").innerHTML = list;

var total=[];
function myFunction() {
  var inp = document.getElementById('inputtext');
  list.push(inp.value);
  inp.value="";
}

function myFunction2() {
  var inp2 = document.getElementById('inputtext2');
  list.push(inp2.value);
  inp2.value="";
}

function myFunction3() {
  var inp3 = document.getElementById('inputtext3');
  total=list.concat(inp3.value);
  inp3.value="";
}

function displayRecord() {
    document.getElementById("demo").innerHTML = total;
	while(total.length > 0) {
    total.pop();
		}
		
	while(list.length > 0) {
    list.pop();
		}
}



//incarc apiul
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo2").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhttp.send();
}




//afisez ora
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo2").innerHTML = d.toLocaleTimeString();
}





//incarc video
var c = document.getElementById ("myVideo");
// Create an element <video>
var v = document.createElement ("video");
// Set the attributes of the video
v.src = "video.mp4";
v.controls = true;
// Add the video to <div>
c.appendChild (v);




//incarc audio
function myFunctionAudio() {
  var x = document.createElement("AUDIO");

  if (x.canPlayType("audio/mpeg")) {
    x.setAttribute("src","exhaust.mp3");
  } else {
    x.setAttribute("src","exhaust.ogg");
  }

  x.setAttribute("controls", "controls");
  document.body.appendChild(x);
}


//apelez math.random pentru a genera un nr 
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}



//creare.stergere element din input

function create(){

var createstuff = document.createElement("INPUT");
document.getElementById("cbc1").appendChild(createstuff);

}

function destroy(){

var olddata=document.getElementById("cbc1").lastChild;
document.getElementById("cbc1").removeChild(olddata);

}