const imgs = document.querySelectorAll('.cont-slides img');
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const cercles = document.querySelectorAll('.cercle');
let index = 0;

suivant.addEventListener('click', slideSuivante);

function slideSuivante(){    
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
    }, 500);
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
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
    }, 500);
}

document.addEventListener('keydown', keyPressed)

function keyPressed(e){
    if(e.keyCode === 37){
        slidePrecedente();
    }
    else if(e.keyCode === 39){
        slideSuivante();
    }
}

// Boutons cercles

cercles.forEach(cercle => {
    cercle.addEventListener('click', function(){
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
            }, 500);
        }
    })
})
