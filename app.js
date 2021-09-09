const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;
let clic = false;


const tousLesBoutons = document.querySelectorAll('.right, .left, .cercle');
console.log(tousLesBoutons);
tousLesBoutons.forEach(btn => {
    btn.addEventListener('click', () => {
        if(clic){
            tousLesBoutons[0].removeEventListener('click', slidePrecedente);
            tousLesBoutons[1].removeEventListener('click', slideSuivante);
            for(let i = 2; i < tousLesBoutons.length; i++){
                tousLesBoutons[i].removeEventListener('click', testCercle);
            }
            btn.removeEventListener('click', testCercle);
        } else{
            tousLesBoutons[0].addEventListener('click', slidePrecedente);
            tousLesBoutons[1].addEventListener('click', slideSuivante);
            for(let i = 2; i < tousLesBoutons.length; i++){
                tousLesBoutons[i].addEventListener('click', testCercle);
            }
        }
    })
})
    
suivant.addEventListener('click', slideSuivante);
    
function slideSuivante(){ 
    clic = true;
    if(index < 2){
        imgs[index].style.transform = "translateX(300px)";
        imgs[index].classList.remove('active');
        index++;
        setTimeout(() => {
            imgs[index].classList.add('active');   
        }, 5);
    } else if(index === 2){
        imgs[index].style.transform = "translateX(300px)";
        imgs[index].classList.remove('active');
        index=0;
        setTimeout(() => {
            imgs[index].classList.add('active');
        }, 5);
    }

    for (let i = 0; i < cercles.length; i++) {
        if(cercles[i].dataset.clic - 1 === index){
            cercles[i].classList.add('active-cercle')
        } else{
            cercles[i].classList.remove('active-cercle')
        }
    }

    setTimeout(() => {
        imgs.forEach(img => {
            if(!img.classList.contains('active')){
               img.style.transform = "translateX(0px)";
            }
        }) 
        clic = false;
    }, 500);
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
    clic = true;
    if(index > 0){
        imgs[index].style.transform = "translateX(-300px)";
        imgs[index].classList.remove('active');
        index--;
        setTimeout(() => {
            imgs[index].classList.add('active');   
        }, 5);
    } else if(index === 0){
        imgs[index].style.transform = "translateX(-300px)";
        imgs[index].classList.remove('active');
        index=2;
        setTimeout(() => {
            imgs[index].classList.add('active');
        }, 5);
    }

    for (let i = 0; i < cercles.length; i++) {
        if(cercles[i].dataset.clic - 1 === index){
            cercles[i].classList.add('active-cercle')
        } else{
            cercles[i].classList.remove('active-cercle')
        }
    }

    setTimeout(() => {
        imgs.forEach(img => {
            if(!img.classList.contains('active')){
               img.style.transform = "translateX(0px)";
            }
        }) 
        clic = false;
    }, 500);
}

// document.addEventListener('keydown', keyPressed)

// function keyPressed(e){
//     if(e.keyCode === 37){
//         slidePrecedente();
//     }
//     else if(e.keyCode === 39){
//         slideSuivante();
//     }
// }

// Boutons cercles

cercles.forEach(cercle => {
    cercle.addEventListener('click', testCercle)
})


function testCercle(){
    clic = true;
    for(i = 0; i < cercles.length; i++){
        cercles[i].classList.remove('active-cercle');
    }
    this.classList.add('active-cercle');
    if(this.dataset.clic < (index + 1)){
        imgs[index].style.transform = "translateX(-300px)";
        imgs[index].classList.remove('active');
        index = this.dataset.clic - 1;
        setTimeout(() => {
            imgs[index].classList.add('active');   
        }, 5);
        setTimeout(() => {
            imgs.forEach(img => {
                if(!img.classList.contains('active')){
                    img.style.transform = "translateX(0px)";
                }
            }) 
            clic = false;
        }, 500);
    } else if(this.dataset.clic > (index + 1)){
        imgs[index].style.transform = "translateX(300px)";
        imgs[index].classList.remove('active');
        index = this.dataset.clic - 1;
        setTimeout(() => {
            imgs[index].classList.add('active');   
        }, 5);
        setTimeout(() => {
            imgs.forEach(img => {
                if(!img.classList.contains('active')){
                    img.style.transform = "translateX(0px)";
                }
            })
            clic = false;
        }, 500);
    } else{
        clic = false;
    }
}