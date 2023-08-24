var number1="";
var number2="";
var equalSign=document.getElementById("equal");
isnumberready=false;

function formNumber(n){
    if(!isnumberready){
        number1+=n;
        document.getElementById("displayNum").textContent=number1;
    }
    else{
        number2+=n;
        document.getElementById("displayNum").textContent=number2;
    }
}
function sum(n1,n2){return n1+n2;}
function sub(n1,n2){return n1-n2;}
function mul(n1,n2){return n1*n2;}
function div(n1,n2){return n1/n2;}

function cal(p1,p2,operation){
    p2=Number(p2);
    result=operation(p1,p2);
    document.getElementById("displayNum").textContent=result;
}

function opsum(){
    number1=Number(number1);
    isnumberready=true;
    equalSign.setAttribute("onclick","cal(number1,number2,sum)");
}
function opsub(){
    number1=Number(number1);
    isnumberready=true;
    equalSign.setAttribute("onclick","cal(number1,number2,sub)");
}
function opmul(){
    number1=Number(number1);
    isnumberready=true;
    equalSign.setAttribute("onclick","cal(number1,number2,mul)");
}
function opdiv(){
    number1=Number(number1);
    isnumberready=true;
    equalSign.setAttribute("onclick","cal(number1,number2,div)");
}
function erase(){
    document.getElementById("displayNum").textContent=0;
    number1=0;
    number2=0;
    isnumberready=false;
}
