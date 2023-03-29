//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
touristSpots=touristSpots.sort();
var ul=document.getElementById("#band");
for(let i=0;i<touristSpots.length;i++){
	let li=document.createElement("li");
ul.appendChild(li);

}