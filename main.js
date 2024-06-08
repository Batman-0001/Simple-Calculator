let buttons = document.querySelectorAll(".buttons .in");

let input = document.querySelector(".input-box");

for (let button of buttons){
    button.addEventListener("click", (e) => {
        
        
            input.value = input.value.concat(button.textContent);
        
        
        
    });
}

let equals = document.querySelector(".buttons .equals");
let allclear = document.querySelector(".buttons .all-clear");
let clear = document.querySelector(".buttons .clear");

equals.addEventListener("click",(e) => {
    try{
        input.value.replaceAll("÷","/");
        input.value.replaceAll("×","*");
        input.value = eval(input.value);
    }
    catch(error){
        input.value = "" ;
    }
});

allclear.addEventListener("click",(e) => {
    input.value = "" ;
});

clear.addEventListener("click",(e) => {
    input.value = input.value.slice(0,input.value.length - 1);
});