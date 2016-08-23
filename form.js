function myfunction(){
	
	var jobname=document.getElementById("jobname").value;
	//var standardprogram=document.getElementById("standardprogram").value;
	//var program=document.getElementById("program").value;
	var mapper=document.getElementById("mapper").value;
	var reducer=document.getElementById("reducer").value;
	var storagename=document.getElementById("storagename").value;
	var inlocation=document.getElementById("inlocation").value;
	var outlocation=document.getElementById("outlocation").value;
		
	var platform=document.getElementsByName("platform");
	var no_instances=document.getElementById("no_instances").value;
	var typeofinstance=document.getElementsByName("typeofinstance");
	if (jobname == "" | mapper == "" | reducer == "" | storagename == "" | inlocation == "" | outlocation == "" |  platform == "" | no_instances == "" | typeofinstance == ""  ) {
		alert("*all fields are mandatory *");	
	}
	else{
		document.getElementById("myform").action = "http://192.168.122.1/cgi-bin/program3.cgi";
		document.getElementById("myform").submit();// Form submission
	}

}


function resetform()
	{
	document.getElementById("myform").reset();
	
	}
