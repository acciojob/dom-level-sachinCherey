//your JS code here. If required.
let eleId="level";
function findlevel(eleId) {
	let ele=document.getElementById(eleId);
	let Dlevel=0;
	let Cnode=ele;
	while(Cnode.parentNode){
		Dlevel++;
		Cnode=Cnode.parentNode;
	}

	alert(`The level of the element is:${Dlevel}`);
}

findlevel(eleId);

