$(document).ready(function(){
    $('#delete').click(function(){
        bootbox.confirm("Are you sure you want to delete your account? This action cannot be undone!", function(result){
            if(result){
                $.ajax({
                    url: root + "api/users/" + readCookie('userId'),
                    method: "DELETE",
                    success: function(data){
                        console.log(data);
                        eraseCookie('userId');
                        location.href = root;
                    },
                    error: function (){
                        alert('Could not delete your account.');
                    }
                });
            }});
        });
    
    $('#home').click(function(){
        location.href = root + 'home/' + readCookie('userId');
    });
});