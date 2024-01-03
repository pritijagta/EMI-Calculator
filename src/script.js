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
    if(p<=0 )
    {
        document.getElementById("result").innerHTML= `Amount is negative or zero..Enter valid Amount`.fontcolor("red").italics();
    }
    else if(n<=0)
    {
        document.getElementById("result").innerHTML=`Year is negative or zero..Enter valid Year`.fontcolor("red").italics();

    }
    else if(r<=0)
    {
        document.getElementById("result").innerHTML=`Rate is negative or zero..Enter valid rate`.fontcolor("red").italics();

    }

    
    else
    {
   
    var num=(p*r*Math.pow(1+r,n));
    var deno=(Math.pow(1+r,n))-1;
    var res = (num/deno).toFixed(2);
     document.getElementById("result").innerHTML=`Your Monthly EMI will be ${res} per month`.fontcolor("green");
    }
   

}