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



function registar() {
    let passw1 = document.getElementById("passw1").value;
    let confpass = document.getElementById("confpass").value;
    if(passw1==confpass)
    {
             
        function logSubmit(event) {
            registo.textContent = 'Registo efetuado com sucesso!';
            event.preventDefault();
        }
        const registar = document.getElementById('registar');
        const registo = document.getElementById('registo');
        registar.addEventListener('submit', logSubmit);
        document.getElementById("registo").style.fontSize = "25px"; 
        document.getElementById("registo").style.color = "black";
        document.getElementById("registo").style.backgroundColor = "orange"; 
    }
    else
    {
        alert("As suas passwords estao diferentes!")
    }
    return false

}