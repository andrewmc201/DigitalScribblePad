$(document).ready(function(){
    $('#login').click(function(){
        $.ajax({
            url: root + "api/usernames/" + $('#usernameLogin').val(),
            method: "GET",
            success: function(data){
                if(data.userId == undefined){
                    bootbox.alert('Could not find a user with that name.');
                    return;
                }
                createCookie('userId', data.userId, 1);
                location.href = root + 'home/' + data.userId;
            },
            error: function (){
                alert('Could not find a user with that name.');
            }
        });
    });
    
    $('#createAccount').click(function(){
        if($('#usernameCreate').val() === ''){
            bootbox.alert("You must enter a username to proceed!");
            return;
        } else {
            $.ajax({
                url: root + 'api/users',
                method: "POST",
                data: {
                    username: $('#usernameCreate').val()
                },
                success: function(data){
                    if(data.userId == undefined){
                    bootbox.alert('Unable to create new user! There may already be a user with that name.');
                    return;
                }
                createCookie('userId', data.userId, 1);
                location.href = root + 'home/' + data.userId;
                },
                error: function(){
                    bootbox.alert('Unable to create new user! There may already be a user with that name.');
                }
            });
        }
    });
});