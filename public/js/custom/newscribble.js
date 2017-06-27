$(document).ready(function(){
    $('#saveNew').click(function(){
        $.ajax({
            contentType: 'application/json',
            url: root + "api/notes",
            method: "POST",
            data: JSON.stringify({
                userId: readCookie('userId'),
                note: $('#scribbleBody').val()
            }),
            success: function(data){
                location.href = root + 'home/'+ readCookie('userId');
            },
            error: function (){
                alert('There was a problem saving your scribble.');
            }
        });
    });

    $('#cancel').click(function(){
        location.href = root + 'home/' + readCookie('userId');
    });
});