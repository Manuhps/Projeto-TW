function login() {
    let nome = document.getElementById("nome").value;
    let passw = document.getElementById("passw").value;
    if(nome=="admin" && passw=="admin")
    {
        alert("Ola")
    }
    return false
}


function logSubmit(event) {
    log.textContent = 'A sua subscrição foi feita com sucesso!';
    event.preventDefault();
}

const form = document.getElementById('subs');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
document.getElementById("log").style.fontSize = "25px"; 
document.getElementById("log").style.color = "black";
document.getElementById("log").style.backgroundColor = "orange"; 
