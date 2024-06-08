let buttons = document.querySelectorAll(".buttons .in");

let input = document.querySelector(".input-box");

for (let button of buttons){
    button.addEventListener("click", (e) => {
        button.style.backgroundColor = "rgb(228, 215, 215)";
        setTimeout(() => {
            button.style.backgroundColor = "rgb(129, 125, 125)";
        }, 50);
        input.value = input.value.concat(button.textContent);
        input.focus();
    });
}

let equals = document.querySelector(".buttons .equals");
let allclear = document.querySelector(".buttons .all-clear");
let clear = document.querySelector(".buttons .clear");

equals.addEventListener("click",(e) => {
    try{
        equals.style.backgroundColor = "rgb(228, 215, 215)";
        setTimeout(() => {
            equals.style.backgroundColor = "rgb(255, 123, 0)";
        }, 50);
        input.value = input.value.replaceAll("÷","/");
        input.value = input.value.replaceAll("×","*");
        input.value = eval(input.value);
    }
    catch(error){
        input.value = "" ;
    }
});

allclear.addEventListener("click",(e) => {
    allclear.style.backgroundColor = "rgb(228, 215, 215)";
        setTimeout(() => {
            allclear.style.backgroundColor = "rgb(129, 125, 125)";
        }, 50);
    input.value = "" ;
});

clear.addEventListener("click",(e) => {
    clear.style.backgroundColor = "rgb(228, 215, 215)";
        setTimeout(() => {
            clear.style.backgroundColor = "rgb(129, 125, 125)";
        }, 50);
    input.value = input.value.slice(0,input.value.length - 1);
});

// for mobile version

for (let button of buttons){
    button.addEventListener("touchstart", (e) => {
        e.stopPropagation();
        input.value = input.value.concat(button.textContent);
    });
}

equals.addEventListener("touchstart",(e) => {
    try{
        e.stopPropagation();
        input.value = input.value.replaceAll("÷","/");
        input.value = input.value.replaceAll("×","*");
        input.value = eval(input.value);
    }
    catch(error){
        input.value = "" ;
    }
});

allclear.addEventListener("touchstart",(e) => {
    e.stopPropagation();
    input.value = "" ;
});

clear.addEventListener("touchstart",(e) => {
    e.stopPropagation();
    input.value = input.value.slice(0,input.value.length - 1);
});