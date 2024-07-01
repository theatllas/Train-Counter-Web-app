let count = 0;

let elementID = document.getElementById('count-el')
let saveID = document.getElementById('save-el')



console.log(saveID)

function increment() {
    count++;
    elementID.textContent = count;
}

function save() {
    let countString = count + " - ";
    saveID.textContent += countString;
    elementID.textContent = 0;
    count = 0;
}