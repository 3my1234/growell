const logs = document.getElementById("login-cards")
const btn = document.getElementById("login-link")

btn.addEventListener("click", ()=>{
    event.preventDefault();
    logs.style.display="flex";

})