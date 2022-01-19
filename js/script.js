console.log('JS OK');

const description = {
    nome: 'Paolo',
    cognome: 'D Attanasio',
    eta: '20',    
}

console.log(description);
const student = document.getElementById('studentdesc');
const n = document.getElementById('names');
const ln = document.getElementById('lastnames');

for (let key in description){
    console.log(description[key]);
    student.innerHTML += description[key];
}

const studenti = [
{
    nome: 'Paolo',
    cognome: 'D Attanasio',
    eta: '20',
},
{
    nome: 'Federico',
    cognome: 'Arioli',
    eta: '21',
},
{
    nome: 'Nicola',
     cognome: 'Marini',
    eta: '21',
} 
]

for ( let i = 0; i < studenti.length; i++){
    const studente = studenti[i];
    console.log(studente.nome, studente.cognome);
    n.innerHTML += studente.nome;
    ln.innerHTML += studente.cognome;
}

const UserName = prompt('Inserisci il tuo nome');
const UserLastName = prompt('Inserisci il tuo cognome');
const UserAge = parseInt(prompt('Inserisci la tua età'));

console.log (UserName, UserLastName, UserAge);

const newstudent = {nome: UserName, cognome: UserLastName, eta: UserAge};

studenti.push(newstudent);

console.log(studenti);

