function login() {
    let nome = document.getElementById("nome").value;
    let passw = document.getElementById("passw").value;
    if(nome=="admin" && passw=="admin")
    {
        function logSubmit(event) {
            entrar.textContent = 'Login efetuado com sucesso!';
            event.preventDefault();
        }
        
        const login = document.getElementById('login');
        const entrar = document.getElementById('entrar');
        login.addEventListener('submit', logSubmit);
        document.getElementById("entrar").style.fontSize = "25px"; 
        document.getElementById("entrar").style.color = "black";
        document.getElementById("entrar").style.backgroundColor = "orange"; 
    }
    else
    {
        alert("O utilizador nao existe!")
    }
    return false
}


function logSubmit(event) {
    log.textContent = 'A sua subscrição foi feita com sucesso!';
    event.preventDefault();
}

const form = document.getElementById('subs');
const enviar = document.getElementById('log');
form.addEventListener('submit', logSubmit);
document.getElementById("log").style.fontSize = "25px"; 
document.getElementById("log").style.color = "black";
document.getElementById("log").style.backgroundColor = "orange";



