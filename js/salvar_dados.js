function logSubmit(event) {
    log.textContent = 'Os seus dados foram salvos com sucesso!';
    event.preventDefault();
}

const form = document.getElementById('subs');
const enviar = document.getElementById('log');
form.addEventListener('submit', logSubmit);
document.getElementById("log").style.fontSize = "25px"; 
document.getElementById("log").style.color = "black";
document.getElementById("log").style.backgroundColor = "orange";