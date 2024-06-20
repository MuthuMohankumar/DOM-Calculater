const divrow = document.createElement('div');
divrow.classList.add("row","text-center" , "d-flex", "justify-content-center", "m-lg-5","m-2");

const divcol=document.createElement('div');

divcol.classList.add("col","col-lg-6");
const divrow1=document.createElement('div');

divrow1.classList.add("row","text-center");
const divrow2 = document.createElement('div');
divrow2.classList.add("row","text-center");

const title=document.createElement("h1")
title.id="title";
title.innerHTML="Calculator";

const description=document.createElement("p");

description.id="description";
description.innerHTML="DOM-Calculator";


divrow1.append(title);
divrow2.append(description);

const divrow3=document.createElement("div");
divrow3.classList.add("row","border","p-lg-3","p-sm-1","p-md-1", "bg-light");

const divrow4=document.createElement("div");

divrow4.classList.add("row");
const form = document.createElement("form");
form.classList.add("form-group")

const inputresult=document.createElement("input");
inputresult.setAttribute("placeholder","0")
inputresult.classList.add("form-control","p-4");
inputresult.id="result";

inputresult.classList.add("form-control","form-control-lg", "mb-2", "bg-secondary");

function create(tag, id, cl1, cl2, cl3, text, atr, atrv) {
    const element = document.createElement(tag);
    element.id = id;
    element.classList.add(cl1, cl2, cl3);
    element.innerHTML = text;
    element.setAttribute(atr, atrv);
    return element;

}

const divrow5= document.createElement("div");

divrow5.classList.add("row","mb-2");

const divr5col1= document.createElement("div");

divr5col1.classList.add("col-3");


const clear=create("button", "clear", "btn-border", "p-lg-4","p-3", "C", "type", "button");

divr5col1.append(clear);

const divr5col2= document.createElement("div");

divr5col2.classList.add("col-3");

const back=create("button", "back", "btn", "p-4", "border", "<-", "type", "button");

divr5col2.append(back);

const divr5col3= document.createElement("div");

divr5col3.classList.add("col-3");
const dot=create("button", "dot", "btn", "p-4","border",  ".", "type", "button");

divr5col3.append(dot);

const divr5col4= document.createElement("div");

divr5col4.classList.add("col-3");

const multiply=create("button", "multiply", "btn-border", "p-4","text-primary", "X", "type", "button");

divr5col4.append(multiply);

divrow5.append(divr5col1, divr5col2, divr5col3, divr5col4);

const divrow6= document.createElement("div");

divrow6.classList.add("row","mb-2");

const divr6col1= document.createElement("div");

divr6col1.classList.add("col-3");


const seven=create("button", "7", "btn", "p-4","border", "7", "type", "button");

divr6col1.append(seven);

const divr6col2= document.createElement("div");

divr6col2.classList.add("col-3");

const eight=create("button", "8", "btn", "p-4", "border", "8", "type", "button");

divr6col2.append(eight);

const divr6col3= document.createElement("div");

divr6col3.classList.add("col-3");
const nine=create("button", "9", "btn", "p-4","border",  "9", "type", "button");

divr6col3.append(nine);

const divr6col4= document.createElement("div");

divr6col4.classList.add("col-3");

const divide=create("button", "divide", "btn-border", "p-4","text-primary", "/", "type", "button");

divr6col4.append(divide);

divrow6.append(divr6col1, divr6col2, divr6col3, divr6col4);

const divrow7= document.createElement("div");

divrow7.classList.add("row","mb-2");

const divr7col1= document.createElement("div");

divr7col1.classList.add("col-3");


const four=create("button", "4", "btn", "p-4","border", "4", "type", "button");

divr7col1.append(four);

const divr7col2= document.createElement("div");

divr7col2.classList.add("col-3");

const five=create("button", "5", "btn", "p-4", "border", "5", "type", "button");

divr7col2.append(five);

const divr7col3= document.createElement("div");

divr7col3.classList.add("col-3");
const six=create("button", "6", "btn", "p-4","border",  "6", "type", "button");

divr7col3.append(six);

const divr7col4= document.createElement("div");

divr7col4.classList.add("col-3");

const subtract=create("button", "subtract", "btn-border", "p-4","text-primary", "-", "type", "button");

divr7col4.append(subtract);

divrow7.append(divr7col1, divr7col2, divr7col3, divr7col4);


const divrow8= document.createElement("div");

divrow8.classList.add("row","mb-2");

const divr8col1= document.createElement("div");

divr8col1.classList.add("col-3");


const one=create("button", "1", "btn", "p-4","border", "1", "type", "button");

divr8col1.append(one);

const divr8col2= document.createElement("div");

divr8col2.classList.add("col-3");

const two=create("button", "2", "btn", "p-4", "border", "2", "type", "button");

divr8col2.append(two);

const divr8col3= document.createElement("div");

divr8col3.classList.add("col-3");
const three=create("button", "3", "btn", "p-4","border",  "3", "type", "button");

divr8col3.append(three);

const divr8col4= document.createElement("div");

divr8col4.classList.add("col-3");

const add=create("button", "add", "btn-border", "p-4","text-primary", "+", "type", "button");

divr8col4.append(add);

divrow8.append(divr8col1, divr8col2, divr8col3, divr8col4);


const divrow9= document.createElement("div");

divrow9.classList.add("row","mb-2");

const divr9col3= document.createElement("div");

divr9col3.classList.add("col-3");
const zero=create("button", "0", "btn", "p-4","border",  "0", "type", "button");

divr9col3.append(zero);

const divr9col4= document.createElement("div");

divr9col4.classList.add("col-3");

const zero0=create("button", "zero0", "btn", "border","p-4", "00", "type", "button");

divr9col4.append(zero0);

const divr9col5 =document.createElement("div");



divr9col5.classList.add("col-6","bg-primary","p-2", "pb-2");
//const equal=create("button", "equal", "btn-border", "p-4","text-white", "=", "type", "button");


const equal=document.createElement("button");
equal.classList.add("btn","bg-primary","px-5","text-white", "py-lg-3");
equal.setAttribute("type", "button");
equal.id="equal";

equal.innerHTML="=";

divr9col5.append(equal);
divrow9.append(divr9col3, divr9col4, divr9col5);

form.append(inputresult);
form.append(divrow5);
form.append(divrow6);
form.append(divrow7);
form.append(divrow8);
form.append(divrow9);
divrow4.append(form);
divrow3.append(divrow4);



divcol.append(divrow1, divrow2,divrow3);

divrow.append(divcol);

document.body.append(divrow);


/// events

equal.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result=eval(result);
    document.getElementById("result").value=result;
});

clear.addEventListener("click", function(){
    document.getElementById("result").value="";
});

back.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result=result.slice(0, -1);
    document.getElementById("result").value=result;
});

dot.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+=".";
    document.getElementById("result").value=result;
}); //

multiply.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="*";
    document.getElementById("result").value=result;
}); //

divide.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="/";
    document.getElementById("result").value=result;
}); //

subtract.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="-";
    document.getElementById("result").value=result;
}); //

add.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="+";
    document.getElementById("result").value=result;
}); //

one.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="1";
    document.getElementById("result").value=result;
}); //

two.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="2";
    document.getElementById("result").value=result;
});

three.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="3";
    document.getElementById("result").value=result;
});

four.addEventListener("click", function(){

    let result=document.getElementById("result").value;
    result+="4";
    document.getElementById("result").value=result;
});

five.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="5";
    document.getElementById("result").value=result;
});

six.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="6";
    document.getElementById("result").value=result;
});

seven.addEventListener("click", function(){

    let result=document.getElementById("result").value;
    result+="7";
    document.getElementById("result").value=result;
});

eight.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="8";
    document.getElementById("result").value=result;
});

nine.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="9";
    document.getElementById("result").value=result;
});

zero.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="0";
    document.getElementById("result").value=result;
});

zero0.addEventListener("click", function(){
    let result=document.getElementById("result").value;
    result+="00";
    document.getElementById("result").value=result;
});




