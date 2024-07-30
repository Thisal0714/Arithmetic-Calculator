function calculateValue(){

    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);
    var operation=document.getElementById("operand").value;
    var res=document.getElementById("result");
    var result;

    switch(operation){
        case "add":
            result=n1+n2;
            break;

        case "sub":
            result=n1-n2;
            break;

        case "mul":
            result=n1*n2;
            break;

        case "div":
            if(n2!==0){
            result=n1/n2;
            }else{
                result="Cannot divide by Zero."
            }
            break;

        default:
            result="Select an Operation";
            break;

    }
    res.value=result;
    
    /*if(document.getElementById("add")){
        res.value=parseInt(n1.value)+parseInt(n2.value);
    }
    if(documen.getElementById("sub")){
        res.value=parseInt(n1.value)-parseInt(n2.value);
    }
    if(document.getElementById("mul")){
        res.value=parseInt(n1.value)*parseInt(n2.value);
    }
    if(document.getElementById("div")){
        res.value=parseInt(n1.value)/parseInt(n2.value);
    }*/
}