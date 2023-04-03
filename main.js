let age=prompt("Enter the Age");
let sex=prompt("Enter the Sex");

if(sex==="Female")
{
	console.log("Work in urban area");
}
else if(sex==="Male")
{
	if(age>=20&&age<40)
	{
		console.log("Work in any area");
	}
	else if(age>=40&&age<=60)
	{
		console.log("Work in urban area");
	}
	
}
else{
	console.log("Error");
}