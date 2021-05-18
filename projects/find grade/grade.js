function grade(){
let maths=document.getElementById("maths").value;
let physics=document.getElementById("physics").value;
let chemistry=document.getElementById("chemistry").value;
let english=document.getElementById("english").value;
let ip=document.getElementById("ip").value;
let total=parseFloat(maths)+parseFloat(physics)+parseFloat(chemistry)+parseFloat(english)+parseFloat(ip);
alert("Total Marks Obtained = " + total);
let percentage=(total/400)*100;
alert(" Percent =  "+ percentage+"%");
if(percentage>=90){
    alert("Grade Obtained = A+ ")
}
else if(percentage>=80 && percentage>70){
    alert("Grade Obtained = A ")
}
else if(percentage>=70 && percentage>60){
    alert("Grade Obtained = B+ ")
}
else if(percentage>=60 && percentage>50){
    alert("Grade Obtained = B ")
}
else if(percentage>=50 && percentage>40){
    alert("Grade Obtained = C+ ")
}
else if(percentage>=40 && percentage>35){
    alert("Grade Obtained = C ")
}
else{
    alert("FAIL");
}

}