$(document).ready(function(){
    $('#login').click(function(){
        $.ajax({
            url: root + "api/usernames/" + $('#usernameLogin').val(),
            method: "GET",
            success: function(data){
                createCookie('userId', data.userId, 1);
                createCookie('userName', data.userName, 1);
                location.href = root + 'home';
            },
            error: function (){
                alert('Could not find a user with that name.');
            }
        });
    });
});