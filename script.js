//////////////////////////**********RESERVAR********//////////////////////////////////////
const nombre= document.querySelector("#nombre");
const correo= document.querySelector("#email");
const edad = document.querySelector("#edad");
const boton= document.querySelector("#boton");

const formulario= document.querySelector("#form");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

const nombreUsuario= nombre.value;
const correoUsuario= correo.value;
const edadUsuario= edad.value;

    if (nombreUsuario!=="" && correoUsuario!=="" && edadUsuario!=="") {
        if (edadUsuario<=17) {
            Swal.fire({
                        icon: 'warning',
                        title: 'Acceso restringido',
                        text: 'Debes ser mayor de 18 años para realizar una reserva.',
                        confirmButtonColor: '#e83e8c',
                        width: '50%', // En celulares ocupará casi todo el ancho, pero sin romperse
                        
                        });
            
        }else{
            Swal.fire({
                        icon: 'success',
                        title: '¡Reserva Exitosa!',
                        text: `Felicidades ${nombreUsuario}, tu turno en Spa Marita está listo.`,
                        confirmButtonColor: '#e83e8c',
                        width: '50%', // En celulares ocupará casi todo el ancho, pero sin romperse
                        
                        });
        }
        
        
    }
    else{
        Swal.fire({
                    icon: 'error',
                    title: '¡Ups!',
                    text: 'Por favor, completa todos los campos para continuar.',
                    confirmButtonColor: '#e83e8c',
                    width: '50%', // En celulares ocupará casi todo el ancho, pero sin romperse
                    
                    });
        }

    
    formulario.reset();
})


/////////////***************************MOSTRAR IMAGENES DE MUESTRAS**********************/////////////////

const btnverTodo=document.querySelector("#btnVerTodo")
const btnMasajes = document.querySelector("#btnMasaje");   //boton masajes
const btnBaños =document.querySelector("#btnBaños");        //boton baños
const btnUnias= document.querySelector("#btnUnias")         //boton uñas
const btnFacial=document.querySelector("#btn-facial")       //boton facial
const galeriaImg= document.querySelector("#galeria");
const todasLasFotos= document.querySelectorAll(".todasLasFotos");      //todas las fotos




const fotosMasajes= [
    "https://media.istockphoto.com/id/586198230/photo/beautiful-young-woman-relaxing-with-hand-massage-at-beauty-spa.jpg?s=1024x1024&w=is&k=20&c=4VXcPhEnqyAzGPMZ6EhGEIlAdwhmGgw5MLQYp0urz74=",
    "https://media.istockphoto.com/id/2236359059/photo/caucasian-woman-customer-enjoying-relaxing-anti-stress-massage-quiescent.jpg?s=1024x1024&w=is&k=20&c=NoypooZEbf5BMmPk-GgDqBWJrhXmNtzeb8NQH8YsQy0=",
    "https://media.istockphoto.com/id/1590247404/es/foto/masajista-an%C3%B3nimo-masajeando-la-espalda-de-una-mujer-irreconocible.jpg?b=1&s=612x612&w=0&k=20&c=4F5tKK_E_OJT1JIJlzGf2ZJ3DZ2R57B_iFN1g2Lni24=",
    "https://media.istockphoto.com/id/636564788/photo/relaxed-girl-getting-massage-at-spa.jpg?s=1024x1024&w=is&k=20&c=fjDRfgWzNDK4CbxskSmqSGsww-ZVXMFdSH-EXVarMMw=",
    "https://media.istockphoto.com/id/469917872/photo/woman-enjoying-while-receiving-back-massage-at-the-spa.jpg?s=1024x1024&w=is&k=20&c=ugjDX-3rmZ03aZt1E-CxITjOXk5YVQ1ZqCjCX5uWaLc=",
    "https://media.istockphoto.com/id/530522413/photo/massaging-in-the-spa.jpg?s=1024x1024&w=is&k=20&c=bQk6yHslF96jrEt3Dw3HGSEZBuR72WVCZiwSIKi2Kok=",
    "https://media.istockphoto.com/id/2185763344/es/foto/experiencia-de-spa-seren%C3%ADsima-con-masaje-facial-relajante.jpg?b=1&s=612x612&w=0&k=20&c=YEFHRepHFv-f4Hr4kZZYoG40yTOJ9VAed-8JUSg6xdg=",
    "https://media.istockphoto.com/id/994810170/es/foto/vierte-el-aceite-de-masaje-en-el-spa-terapeuta.jpg?b=1&s=612x612&w=0&k=20&c=CcAQtNWyzxFhw4vShqi9iexLrOXNN-d0yzwzSBo4l5Y=",
];

btnMasajes.addEventListener("click",(e)=>{
    e.preventDefault();
    todasLasFotos.forEach((foto,i)=>{
        foto.src= fotosMasajes[i];
    })
});

const fotosBaños=[
    "https://media.istockphoto.com/id/1289999726/photo/bath-salts.jpg?s=1024x1024&w=is&k=20&c=YHHAYKoudDUNhABbW9vBFm9NcK9uRiw8DaXM-CNrmqc=",
    "https://media.istockphoto.com/id/1136976095/photo/white-ceramic-tray-with-home-spa-supplies-in-home-bathroom-for-relaxing-rituals-candlelight.jpg?s=1024x1024&w=is&k=20&c=QEP67aZtsQNkYj9l44T1KQkn8HqrB7lKTdX59Qd2lP0=",
    "https://media.istockphoto.com/id/985388532/photo/roll-up-of-white-towels-on-white-table-with-copy-space-on-blurred-living-room-background.jpg?s=1024x1024&w=is&k=20&c=yGpoHG9qMAyIPyM0OeQ87JZk8euq_gSJouWJRIFCBos=",
    "https://media.istockphoto.com/id/1273852131/photo/relaxed-young-caucasian-female-model-wears-towel-wrapped-on-head-feels-refreshed-after-taking.jpg?s=1024x1024&w=is&k=20&c=ndiIv7U60QpQOQvlUpnXTRij-4IUh1-Q0iL0Cg-DT-w=",
    "https://media.istockphoto.com/id/1334118685/photo/computer-generated-image-of-interior-of-bathroom-in-3d-with-houseplant.jpg?s=1024x1024&w=is&k=20&c=d0kWgqfM0EEWT4kTT5qL7T1wYWFPiCrWZi7G2aJN6uw=",
    "https://media.istockphoto.com/id/1216987163/photo/young-adult-woman-taking-bath-holding-sponge-in-hand-washed-shoulder.jpg?s=1024x1024&w=is&k=20&c=GARrCPZgaU9Tj8LAUUgGfTkgsjpqWp9cjlL-wfKCHhE=",
    "https://media.istockphoto.com/id/1499988472/photo/woman-relaxing-in-bath-and-drink-a-coffee-at-home-bathroom-looking-out-of-window.jpg?s=1024x1024&w=is&k=20&c=plmvCMxZdRQSmpt7tB9amc0viQK2EZ89m4Kh1bRQhmM=",
    "https://media.istockphoto.com/id/2082206218/photo/serene-bathroom-on-tropical-island.jpg?s=1024x1024&w=is&k=20&c=4xtDmEJehgoOur0ZYgyd3hGwhOM8Wl6ccwLRf_9nBsw="
];


btnBaños.addEventListener("click",(e)=>{
    e.preventDefault();
    todasLasFotos.forEach((foto,i)=>{
        foto.src= fotosBaños[i];
    })
});



const fotosUnias=[
    "https://images.pexels.com/photos/994173/pexels-photo-994173.jpeg",
    "https://media.istockphoto.com/id/886949926/photo/a-manicurist-takes-care-of-the-clients-hands-close-up-photo-in-beauty-salon.jpg?s=1024x1024&w=is&k=20&c=WBUHqFuqMXTzGG3b1vFiFnZjxdHq_4MNTy75r9fcdFw=",
    "https://images.pexels.com/photos/10420563/pexels-photo-10420563.jpeg",
    "https://images.pexels.com/photos/9329773/pexels-photo-9329773.jpeg",
    "https://media.istockphoto.com/id/914169004/photo/stylish-manicure-and-make-up-in-a-pale-pink-color.jpg?s=1024x1024&w=is&k=20&c=vjhcWkqE_UYAG-f3sE5owBDruHCBbX1HkdUUeDrcBBA=",
    "https://media.istockphoto.com/id/1308840699/photo/woman-doing-manicure.jpg?s=1024x1024&w=is&k=20&c=4yafwDRzoLSFrC8vgm0m30n9NRWNmP4ZDhVSVBiAaEc=",
    "https://media.istockphoto.com/id/1131585271/photo/foot-spa-on-a-tropical-green-leaves-background.jpg?s=1024x1024&w=is&k=20&c=oZ77UoJNaG-AttpRcy8yZOtcNZDIHlW4jq1LQdq8HH0=",
    "https://images.pexels.com/photos/7618570/pexels-photo-7618570.jpeg",
];



btnUnias.addEventListener("click",(e)=>{
    e.preventDefault();
    todasLasFotos.forEach((foto,i)=>{
        foto.src= fotosUnias[i];
    })
})

const fotosFacial=[
        "https://media.istockphoto.com/id/1590247969/photo/beautiful-woman-enjoying-receiving-a-facial-treatment-at-the-spa.jpg?s=1024x1024&w=is&k=20&c=jkL1vcLBTsd3wQahEytY_VZ22k1UdzfChsPEspji7mA=",
        "https://media.istockphoto.com/id/476755701/photo/woman-with-facial-mask-getting-massage-at-spa.jpg?s=1024x1024&w=is&k=20&c=nLqY0xnY0n3q13LLCyFGKSyu4iWfzcBXJNyVFbs6rBA=",
        "https://images.pexels.com/photos/11179585/pexels-photo-11179585.jpeg",
        "https://images.pexels.com/photos/16574941/pexels-photo-16574941.jpeg",
        "https://images.pexels.com/photos/6371078/pexels-photo-6371078.jpeg",
        "https://images.pexels.com/photos/9496429/pexels-photo-9496429.jpeg",
        "https://media.istockphoto.com/id/1424631740/photo/beautician-applying-facial-cream-all-over-young-womans-forehead-at-spa-salon-skin-treatment.jpg?s=1024x1024&w=is&k=20&c=B_JW3fJV3hGKXhK5LRr1FR5-B2k-fzFzGhCYEjBZ9Ig=",
        "https://media.istockphoto.com/id/1417333633/photo/beautician-massages-face-of-woman-with-cream-lotion-in-beauty-salon-beauty-skin-medical.jpg?s=1024x1024&w=is&k=20&c=AiPoSlDOvdQghJqluoHSKugV8dRW39hIjRtrKqDAYRs=",
];

btnFacial.addEventListener("click",(e)=>{
    e.preventDefault();
    todasLasFotos.forEach((foto,i)=>{
        foto.src=fotosFacial[i];
    })
});



const fotoOriginal=[
    "./images/muestras/antonika-chanel-RJCslxmvBcs-unsplash.jpg",
    "./images/muestras/benjamin-wedemeyer-t_29wZLpYwg-unsplash.jpg",
    "./images/muestras/crystalweed-cannabis-iXpuwXVuz8E-unsplash.jpg",
    "./images/muestras/engin-akyurt-g-m8EDc4X6Q-unsplash.jpg",
    "./images/rosa-rafael-Pe9IXUuC6QU-unsplash.jpg",
    "./images/muestras/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg",
    "./images/alan-caishan-cU53ZFBr3lk-unsplash.jpg",
    "./images/anna-kumpan-3J5K-Jb6GRM-unsplash.jpg"
];


btnverTodo.addEventListener("click",(e)=>{
    e.preventDefault();
    todasLasFotos.forEach((foto, i)=>{
        foto.src=fotoOriginal[i];
    })
})



