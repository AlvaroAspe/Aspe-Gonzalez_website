


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
        $('.proyecto_0').removeClass('col-12');
        $('.proyecto_0').addClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_12').removeClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_12').addClass('col-12');
        $('.proyecto_16').removeClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_16').addClass('col-8 col-md-6 col-sm-4 col-xs-6');
        $('.proyecto_17').removeClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_17').addClass('col-12');

         //MOSTRANDO PROYECTOS ==========================================
         $('.'+catProject+'').show();
        
         
      /* $('.'+catProject+'').addClass('col-12');*/
        


     });

     $('.filter-btn[category="All"]').click(function(){
        $('.project').show();
        $('.proyecto_0').addClass('col-12');
        $('.proyecto_12').removeClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_12').removeClass('col-12');
        $('.proyecto_12').addClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_16').removeClass('col-8 col-md-6 col-sm-4 col-xs-6');
        $('.proyecto_16').addClass('col-6 col-md-5 col-sm-4 col-xs-6');
        $('.proyecto_17').removeClass('col-12');
        $('.proyecto_17').addClass('col-6 col-md-5 col-sm-4 col-xs-6');

     });
});