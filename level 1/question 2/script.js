
fetch('https://jsonplaceholder.typicode.com/todos')
    .then(result => result.json())
  .then((res) => {
    myFunction(res);
  })
.catch(err => console.log(err))
 
function myFunction(result){
     
        var createLaunch = result;
        var div = document.getElementById('launch');
 
    for (var i=0; i < result.length; i++){
        var launches = document.createElement('p');
        var nme = document.createElement('h1');
        var id1 = document.createElement('p');
//		var trueFalse = document.createElement('p');
         
var myDiv = document.createElement('div');
myDiv.className = "launch-container";
 
var myDiv2 = document.createElement('div');
myDiv2.className = "col-sm-4";
 
        nme.textContent = result[i].title;
id1.textContent = result[i].completed;
	// trueFalse.textContent = result[i].id;
         
        launches.appendChild(nme);
        launches.appendChild(id1);
	//	launches.appendChild(trueFalse);
 
        div.appendChild(launches);
 
        myDiv.appendChild(nme);
        myDiv.appendChild(id1);
	//	myDiv.appendChild(trueFalse);
         
        myDiv.appendChild(id1);
 
        myDiv2.appendChild(myDiv);
 
        launches.appendChild(myDiv2);
         
 
 
    }   }
   