//Control Range
function appearrange(){
		var x;
	x=document.getElementById("formControlRange");
	  document.getElementById("valoare").innerHTML = "Range:" + x.value;
}

//checkbox
function checkbox(){
	var x,y;
	x=document.getElementById("trimite");
	bifat=document.getElementById("exampleCheck1");
	bifat2=document.getElementById("exampleCheck2");
	m=document.getElementById("masculin");
	f=document.getElementById("feminin");
	
	//aici verific daca este femeie sau barbat
	if(bifat.checked == true)
	{
		bifat.style.display = "block";
		m.style.display = "block";
		bifat2.style.display = "none";
		f.style.display = "none";
	}
	else  
		if(bifat2.checked == true)
		{bifat2.style.display = "block";
		 f.style.display = "block";
		bifat.style.display = "none";
		m.style.display = "none";
		}
	

}


//aici setez marimea scrisului din formular sau culoarea paginii
  
  function size(){
	  
	  document.getElementById("myP").style.fontSize = "xx-large";
	  document.getElementById("myP").style.height = "1550px";
  }
  
 function size_small(){
	  
	  document.getElementById("myP").style.fontSize = "small";
	  document.getElementById("myP").style.height = "1050px";
  }
  
function color(){
	  
	  document.getElementById("pagina").style.backgroundColor = "red";
	  
  }
  
  
  
  
  
  	function verEmailAb()  //Testez  Emailul
	{
		var prob = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/; 
		var iem = document.getElementsByClassName ("InputEmail")[0].value;
		var ok = prob.test (iem);
		return ok;
	}
		
	function verNumeAb()   //Testez  Numele
	{ 
		var prob = /^([a-zA-Z]{3,})$/; 
		var inum = document.getElementsByClassName ("InputNume")[0].value;
		var ok = prob.test (inum);
		return ok;
	}
  
  
  
  
  	function loadDoc() 
	{
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			 var inf = JSON.parse (this.responseText);  //extrag obiectele 
			 var ok = 1;
			 for (i = 0 ; i < inf.length ; i++)  
			 {
				 if ( inf[i].email == document.getElementById ("InputEmail").value ) //mail-ul din API e la fel cu mail-ul din input
				 {
				  ok = 0;
				 }	 
			 }
		
			if ( ok == 1 && verEmailAb() != false && verNumeAb() != false ) 
			{                                                               
				 setTimeout ( function() { Swal.fire ( {                    // actiune reusita
						                    icon: 'success',
						                    title: 'Abonat cu succes!' } ) } , 500 ); 
			}
			else
			{
				 setTimeout ( function() { Swal.fire ( {
						                    icon: 'error',                  // eroare
						                    title: 'Datele sunt incorecte!' } ) } , 500 ); 
				   
			
			if ( verEmailAb() == false )                                    //sterg input
			{
				document.getElementsByClassName ("InputEmail")[0].value = "";
			}	
			if ( verNumeAb() == false )                                     //sterg input
			{
				document.getElementsByClassName ("InputNume")[0].value = "";
			}
			}			
				 
		}};
	  xhttp.open("GET","https://jsonplaceholder.typicode.com/users" , true);
	  xhttp.send();
	}
  
  
  
 //verificarea in timp real pentru parola
  
var code = document.getElementById("password");

var strengthbar = document.getElementById("meter");
var display = document.getElementsByClassName("textbox")[0];

code.addEventListener("keyup", function() {
  checkpassword(code.value);
});


function checkpassword(password) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
    strength += 1;
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
    strength += 1;

  }

  if (password.length < 6) {
    display.innerHTML = "minimum number of characters is 6";
  }

  if (password.length > 12) {
    display.innerHTML = "maximum number of characters is 12";
  }

  switch (strength) {
    case 0:
      strengthbar.value = 0;
      break;

    case 1:
      strengthbar.value = 25;
      break;

    case 2:
      strengthbar.value = 50;
      break;

    case 3:
      strengthbar.value = 75;
      break;

    case 4:
      strengthbar.value = 100;
      break;
  }
}
  
  
  
  
 //afiseaza/ascunde harta
 function ghost(){
	var y=document.getElementById("harta");
	if (y.style.display === "none"){
	y.style.display = "block";
	} else {
		y.style.display ="none";
	}
} 
  
 //f asculta la tasta
 function myFunctionF(event) {
  var x = event.which || event.keyCode;
  if (x == 70) {
	  window.open("https://www.facebook.com/AutomobileBavariaGroup/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
  }
}


document.getElementById("bmw").addEventListener("click", function(event){
  event.preventDefault()
});






var i=0;
function backgrd(){
	
var doc=document.getElementById("pagina");
var color=["black","blue", "brown", "green"];
doc.style.backgroundColor = color[i];
 i = (i + 1) % color.length;
 }
pornire=setInterval(backgrd, 100);

function stop(){
	clearInterval(pornire);
}

function repornire(){
pornire=setInterval(backgrd, 100);

}



