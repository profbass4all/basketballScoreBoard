
//Parameters for the house function
let scoreH = document.getElementById('scoreH');
scoreH.textContent = 0;
let countH = 0;
//parameters for the guest function
let scoreG = document.getElementById('scoreG');
scoreG.textContent = 0;
let countG = 0;

let home = document.getElementById('home')
let guest = document.getElementById('guest')

function changeName(){

    if(countH > countG){
        home.textContent = `Home♔`
        guest.textContent = `Guest`
    }
    else if(countH == countG){
        home.textContent = `Home`
        guest.textContent = `Guest`
    }
    else {
        guest.textContent = `Guest♔`
        home.textContent = `Home`
    }
}

function add1(name){
    if(name == 'home'){
        countH += 1
        scoreH.textContent = countH;
        changeName();
    }else if(name == 'guest'){
        countG += 1
        scoreG.textContent = countG;
        changeName();
    }
}

function add2(name){
    if(name == 'home'){
        countH += 2
        scoreH.textContent = countH;
        changeName();
    }else if(name == 'guest'){
        countG += 2
        scoreG.textContent = countG;
        changeName();

    }
}
function add3(name){
    if(name == 'home'){
        countH += 3
        scoreH.textContent = countH;
        changeName();
    }else if(name == 'guest'){
        countG += 3
        scoreG.textContent = countG;
        changeName();
    }
    
}
