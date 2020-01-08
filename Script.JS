     $("#start").on("click", function(){
        console.log(this);
        var location = $(this).val();
       localStorage.setItem(location);

    });
    $(".list-group").on("click", function(){
        console.log(this);
        var location = $(this).val();
       localStorage.setItem(location);

    });