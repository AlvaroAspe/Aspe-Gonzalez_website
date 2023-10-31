


$(document).ready(function(){

    //INICIANDO ALL POR DEFECTO =======================================
    $('.filter-btn[category="All"]').addClass('activo');

   

    $('.filter-btn').click(function(){
        var catProject = $(this).attr('category');
        console.log(catProject);

         //AGREGANDO ACTIVO AL BOTON DE FILTRO =========================
        $('.filter-btn').removeClass('activo');
        $(this).addClass('activo');
        
        //OCULTANDO PROYECTOS ==========================================
        $('.project').hide();

         //MOSTRANDO PROYECTOS ==========================================
         $('.'+catProject+'').show();
         var proyectos = document.querySelectorAll(catProject);

     });

     $('.filter-btn[category="All"]').click(function(){
        $('.project').show();

     });
});