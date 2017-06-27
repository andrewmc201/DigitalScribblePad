$(document).ready(function(){
    $('#cancel').click(function(){
        location.href = root + 'home/' + readCookie('userId');
    });

    $('#saveEdit').click(function(){
        $.ajax({
            contentType: 'application/json',
            url: root + "api/notes/" + $('#noteId').val(),
            method: "PUT",
            data: JSON.stringify({
                userId: + readCookie('userId'),
                note: $('#scribbleBody').val()
            }),
            success: function(data){
                location.href = root + 'home/' + readCookie('userId');
            },
            error: function (){
                bootbox.alert('There was a problem saving your scribble.');
            }
        });
    });
});