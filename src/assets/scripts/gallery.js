

// SCRIPT PARA FILTRAR

$(document).ready(function(){

    //INICIANDO ALL POR DEFECTO =======================================
    $('.filter_btn[category="All"]').addClass('activo');

   

    $('.filter_btn').click(function(){
        var catProject = $(this).attr('category');
        console.log(catProject);

         //AGREGANDO ACTIVO AL BOTON DE FILTRO =========================
        $('.filter_btn').removeClass('activo');
        $(this).addClass('activo');
        
        //OCULTANDO PROYECTOS ==========================================
        $('.project').hide();

         //MOSTRANDO PROYECTOS ==========================================
         $('.project[category="'+catProject+'"]').show();

     });

     $('.filter_btn[category="All"]').click(function(){
        $('.project').show();

     });
});


//SCRIPT PARA LOS VIDEOS
/*
const clip = document.querySelectorAll('.project__img'); 

function reproducir(clip){
    clip.play;
}

clip.forEach(function(elemento){
    elemento.addEventListener('mouseenter',reproducir(clip));
       
});

for (let i = 0; i<clip.length; i++) {
    clip[i].addEventListener('mouseenter',function(e){
    console.log(clip);
       clip[i].play()
    })
    clip[i].addEventListener('mouseout',function(e){
        clip[i].pause()
     })
}*/