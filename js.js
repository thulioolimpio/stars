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


    let planeta = document.querySelectorAll(".planetas")

    planeta.forEach((item)=>{

        if(item.offsetTop - top < 550){

            item.classList.add('achou')
            
        }else{
            item.classList.remove('achou')
        }
    })

  
})

})

/* Cria as estrelas em lugares aleatorios*/
 window.onload = function stars(){

    let todes = document.querySelectorAll(".estrelinha")

        todes.forEach((item)=>{
            for(let i = 0; i < 500; i++){
                let star = document.createElement("div")
                star.className = "star";
                star.style.width = ".3px"
                star.style.height = ".3px"
            
                star.style.top = Math.random() * 100 + "%";
                star.style.left = Math.random() * 100 + "%";
    
                item.appendChild(star)
         
                
                
                
             }
        })

        
    
    
 }

/*função para fazer aparecer o navegation*/


let pai = document.getElementById("container")
let seta = document.querySelectorAll("#aba i")

    seta.forEach((item) =>{

        item.onclick = function(){

            pai.classList.toggle("mudança")
        }
    })


/* passos para fazer uma imagem que muda top! */ 

/* primeiro crie um addEventListener ("DOMContentLoad" e a funtion),  isso faz com que o script rode quando o html for bem executado!*/

/* depois vamos pegar o "pai", o antes e o pontencial cursor!*/

/* depois vamos criar uma function que atualiza a posição do cursor e a quantidade da imagem na tela*/

/* pegue o rect , limite o mouse a sair do container em x e y Math.min(Math.max( x - rect.left), rect.width); */

/* agora vamos calcular o quanto da imagem antes deve ser mostrada! o (x / rect.width) * 100 */

/* depois mude o estilo do antes no js `inset(0 ${100 - percentageX}% 0 0) */

/* depois posicione a bolinha exatamente no lugar do mouse `translate(${offsetX}px, ${offsetY}px)`; */

/* depois crie uma fução que vai ser ativada quando o mouse entrar na div pai 

    updateSlider(e.clientX, e.clientY);

    e por fim mude a opacidade para 1 e crie outra função para quando ele sair e mude para 0! */

    document.addEventListener("DOMContentLoaded", () => {
        const antesdepois = document.querySelector(".antesdepois");
        const antes = document.querySelector(".antes");
        const bola = document.querySelector(".bola");
    
        const updateSlider = (x, y) => {
            const rect = antesdepois.getBoundingClientRect(); // Obtém o contêiner
            const offsetX = Math.min(Math.max(0, x - rect.left), rect.width); // Limita o movimento
            const offsetY = Math.min(Math.max(0, y - rect.top), rect.height); // Limita o movimento
    
            const porcentagem = (offsetX / rect.width) * 100; // Calcula a porcentagem horizontal
    
            // Atualiza o clip-path da imagem "antes"
            antes.style.clipPath = `inset(0 ${100 - porcentagem}% 0 0)`;
    
            // Move a bola para acompanhar o cursor
            bola.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        };
    
        antesdepois.addEventListener("mousemove", (e) => {
            updateSlider(e.clientX, e.clientY);
        });
    
        antesdepois.addEventListener("mouseleave", () => {
            bola.style.opacity = 0; // Quando o mouse sair, ocultar a bolinha
        });
    });
    
document.addEventListener("scroll",()=>{

        let altura = window.scrollY
        let anta = document.querySelector(".cont")

        let direitinha = document.querySelector(".direitinha")

        if(anta.offsetTop - altura < innerHeight){

            direitinha.style.transform = `translate(0,0)`
        }else{
            direitinha.style.transform = `translate(100%,0)`
        }

        
})    