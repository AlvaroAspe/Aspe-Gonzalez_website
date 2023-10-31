


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
        
         
      /* $('.'+catProject+'').addClass('col-12');*/
        


     });

     $('.filter-btn[category="All"]').click(function(){
        $('.project').show();

     });
});