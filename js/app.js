const numbers = document.querySelectorAll('.numbers');
const submit = document.querySelector('#submit');
const card = document.querySelector('.card');
const thanks = document.querySelector('.thanks');
const choosen = document.querySelector('#choosen');

for (const number of numbers) {
    number.addEventListener('click', (e) => {
        let selected = e.target;
        selected.style = "background-color: hsl(217, 12%, 63%); color: #ffffff;"
        console.log(e.target.innerText);
        choosen.innerText = selected.innerText;
    })
}

// Event Listeners

submit.addEventListener('click', () => {
    card.style = "display: none";
    thanks.style = "display: flex";

    setTimeout(()=> {
        location.reload()
    },5000)    
    
})


