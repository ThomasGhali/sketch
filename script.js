const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('style','height:6.25vh; width:6.25vh;');
    newDiv.classList.add('ants');
    newDiv.dataset.opacity= 0;
    container.appendChild(newDiv);
}

// function getRandomRGB() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// event.target.style.backgroundColor = getRandomRGB();

container.addEventListener('mouseenter', (event)=>{
    if(event.target !== container && event.target.matches('div')){
        let opacityIncrease = +event.target.dataset.opacity;
        if (opacityIncrease<1) {
            opacityIncrease += 0.1;
            event.target.style.backgroundColor=`rgb(0,0,0, ${opacityIncrease})`;
            event.target.dataset.opacity = opacityIncrease;
          }  
    };

}, true);

const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    const squareNumber = prompt('Enter a new square number to put inside the sketch sides.(not more than 100 squares)',24);

    if (squareNumber <= 100 && squareNumber > 0) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for (let i = 0; i < squareNumber*squareNumber; i++) {
            const containerLength = (100/squareNumber);
            const newDiv = document.createElement('div');
            newDiv.dataset.opacity= 0;
            newDiv.setAttribute('style',`height:${containerLength}vh; width:${containerLength}vh;`);
            container.appendChild(newDiv);
        }
    
    } else {
        alert('this number is larger than 100, it should be less than 100');       
    }   
});