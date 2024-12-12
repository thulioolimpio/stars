let bg = document.querySelectorAll('.bg')
let titulo = document.querySelector('#container h1')

/* Funções para o scroll fazer o background parallax e para fazer as divs aparecerem quando chegar perto*/
window.addEventListener("scroll",()=>{

    let top = this.scrollY;


    bg.forEach((ltbg, valor)=>{

        if(valor != 0 && valor != 8){
            ltbg.style.transform = `translateY(${(top*valor/2)}px)`;
        }else if(valor == 0){
            ltbg.style.transform = `translateY(${(top/3)}px)`;
        }
        
    })
 titulo.style.transform = `translateY(${(top*4/2)}px)`;
 
 let momento = document.querySelectorAll(".ft")
    
    momento.forEach(tab =>{
    if(tab.offsetTop - top < 550){
        tab.classList.add('active');
        tab.style.transform = `translate(0,0)`
    }else{
        tab.classList.remove('active');
         tab.style.transform = `translate(-100%,0)`
        
    }
})

})

/* Cria as estrelas em lugares aleatorios*/
 window.onload = function stars(){

    let todes = document.querySelector(".ft.ft1")


        for(let i = 0; i < 1000; i++){
            let star = document.createElement("div")
            star.className = "star";
            star.style.width = ".3px"
            star.style.height = ".3px"
        
            star.style.top = Math.random() * 100 + "%";
            star.style.left = Math.random() * 100 + "%";

            todes.appendChild(star)
     
            
            
            
         }
    
    
 }

/*função para fazer aparecer o navegation*/


let pai = document.getElementById("container")
let seta = document.querySelectorAll("#aba i")

    seta.forEach((item) =>{

        item.onclick = function(){

            pai.classList.toggle("mudança")
        }
    })





