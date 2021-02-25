const colors = document.querySelectorAll('.color');
const phones = document.querySelectorAll('.phone');
const gradients = document.querySelectorAll('.gradient');
const phoneBg = document.querySelector('.phoneBackground');

let prevColor = "blue";
let animationEnd = true;

function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let phone = document.querySelector(`.phone[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    phones.forEach(s => s.classList.remove('show'));
    phone.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let phoneHeight = phone[0].offsetHeight;
        phoneBg.style.height = `${phoneHeight * 0.9}px`;
    }
    else{
        phoneBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);

const chooseInfo = document.getElementById('more-infos');
const choose = document.getElementsByClassName('choose');
const paragraph = document.getElementsByClassName('paragraph');


function styleItem (a,b,c) {
    a.style.cssText = 'color:red ; border-bottom: 2px solid black ; padding-bottom: 6px';
    b.style.cssText = 'color:pink ; border-bottom: none';
    c.style.cssText = 'color:pink ; border-bottom: none';
}

function displayPrph (e,f,g) {
        e.style.display = 'block';
        f.style.display = 'none';
        g.style.display = 'none';
}

chooseInfo.addEventListener('click', event => {
   
       if (event.target === choose[0]) {    
           
                 styleItem (choose[0],choose[1],choose[2])
                 displayPrph (paragraph[0],paragraph[2],paragraph[1])
        }  

       else if (event.target === choose[1]) {  

                 styleItem (choose[1],choose[0],choose[2])
                 displayPrph (paragraph[1],paragraph[0],paragraph[2])
        }  

       else   {
                  styleItem (choose[2],choose[0],choose[1])
                  displayPrph (paragraph[2],paragraph[0],paragraph[1])
        }     
});

const itemsAdded = document.getElementById('items-added');
const counter = document.getElementById('counter');

addToCart.addEventListener('click',ev => itemsAdded.textContent = (counter.value));