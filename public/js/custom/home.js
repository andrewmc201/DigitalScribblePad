$(document).ready(function(){
    
    $('#myAccount').click(function(){
       location.href = root + "myaccount/" + readCookie('userId');
    });
    
    $('#newScribble').click(function(){
        location.href = root + "newscribble/" + readCookie('userId');
    });
    
    $('span[id^=edit_]').click(function(elem){
        location.href = root + 'editscribble/' + readCookie('userId') + '/' + elem.currentTarget.id.replace('edit_', '');
    });
    
    $('span[id^=delete_]').click(function(elem){
        bootbox.confirm("Are you sure you want to delete this scribble?", function(result){
            if(result){
                $.ajax({
                    url: root + 'api/notes/' + elem.currentTarget.id.replace('delete_', ''),
                    method: "DELETE",
                    success: function(data){
                        location.href = location.href;
                    },
                    error: function(){
                        bootbox.alert("Unable to delete scribble");
                    }
                })
            }
        })
    });
});
                      
                      