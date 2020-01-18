$(document).ready(function(){
    
    var fecha = new Date();
    var anio = fecha.getFullYear();
    
    $("#spnCopy").text(anio);
})