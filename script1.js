let btn = document.querySelector("button");
let form = document.querySelector(".form");
let login = document.querySelector(".login");
let username = document.querySelector("#username");
let pass = document.querySelector("#password");
let usemsg = document.querySelector(".usermsg");
let passmsg = document.querySelector(".passmsg");


btn.addEventListener("click",function(){
    btn.style.opacity = 0;
    form.style.opacity = 1;

})

login.addEventListener("click",function(){
    if (username.value == ''){
        usemsg.innerHTML="User name is needed!!!";
    }
    else if (pass.value == ''){
        usemsg.innerHTML = '';
        passmsg.innerHTML = "Password needed!!!";
    }
    else{
        passmsg.innerHTML="";

    }
})