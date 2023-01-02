
// select the display
let display = document.querySelector(".display");

// select the slider
let slider = document.querySelector(".slider1");
const reset = document.querySelector(".slider2");

 //select the list of display counter
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

let counter = 0;
let firstCount= 0;
let secondCount= 0;
let thirdCount= 0;


slider.addEventListener('change', (e) =>{
	e.target.value=0

	counter +=1;
	
	if (counter <=33){		
		display.innerText = counter;
		first.innerText =counter;
	}	

	if(counter <10){
		display.innerText =`0${counter}`;
		first.innerText = `0${counter}`;
	}

	if ( counter >33 && counter<= 66){
		secondCount++	
		display.innerText = counter;	
		second.innerText = secondCount;
	}
	if(secondCount <10){		
		second.innerText = `0${secondCount}`;
	}

	if (counter>66 && counter <=99){	
		thirdCount++	
		display.innerText = counter;
		third.innerText = thirdCount;
	}

	
	if(thirdCount <10){
		
		third.innerText = `0${thirdCount}`;
	}

});



reset.addEventListener('change', (e) =>{
	e.target.value=0
	counter= 0;
	display.innerText ="00";
	first.innerText ="00";
	second.innerText ="00";
	third.innerText ="00";
});

	