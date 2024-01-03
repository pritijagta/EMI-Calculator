function Amount() {
    var amt=document.getElementById("Amount").value;
    document.getElementById("inputamt").value=amt;
    
}

function year()
{
    var year=document.getElementById("year").value;
    document.getElementById("inputyear").value=year;
}

function rate()
{
    var rate=document.getElementById("rate").value;
    document.getElementById("inputrate").value=rate;
}
function calculate()
{
    var p=document.getElementById("inputamt").value;
    var n=(document.getElementById("inputyear").value)*12;
    var r=(document.getElementById("inputrate").value)/1200;
    if(p<=0 || n<=0 || r<=0 )
    {
        document.getElementById("result").innerHTML= ` Invalid Data..Either Negative or Zero`;
        document.getElementById("result").style.color="red";
    }
   
   
    else 
    {
    var num=(p*r*Math.pow(1+r,n));
    var deno=(Math.pow(1+r,n))-1;
    var res = (num/deno).toFixed(2);
     document.getElementById("result").innerHTML=`Your Monthly EMI will be ${res} per month`;
     if (isNaN(res)) {
        document.getElementById("result").innerHTML = "Error calculating EMI. Please check your input values"
    } else {
        document.getElementById("result").innerHTML = "Your Monthly EMI will be $" + res + " per month";
        document.getElementById("result").style.color = "green";
    }
    }
   

}