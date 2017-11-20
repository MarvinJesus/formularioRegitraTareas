function accionPost(){  
    String : tarea = $('#inputText').val();
    if(!(tarea == null || tarea.length == 0 || /^\s+$/.test(tarea))){
        $.ajax({
            type: "POST",
            url: 'http://localhost:3000',
            data: {'tarea':tarea},
            success: function(){},
            dataType: 'json'
        });
    }else{
        alert('Ingrese un titulo para la tarea por favor');
    }
};
