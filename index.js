
	let count=0;
	let count_El= document.getElementById('count-el');
	let save_El=document.getElementById('save-el');

function increment(){

	count +=1
	count_El.textContent=count;
}

function save(){

	let count_Str= count +   " - "; 
	save_El.textContent +=count_Str;
	count=0;
	count_El.textContent=count; 
}


