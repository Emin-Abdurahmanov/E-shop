$(document).ready(function(){
    $("#mycarousel").carousel( { interval : 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass("fa-pause");
            $("#carouselButton").children("span").addClass("fa-play");
        }
        else if ($("#carouselButton").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass("fa-play");
            $("#carouselButton").children("span").addClass("fa-pause");
        }
        
    });

    $(".blackheart").click(function(){
        this.style = "display:none;"
        this.nextElementSibling.style = "display:block;color: red; font-size: 30px;"
    })
    $(".redheart").click(function(){
        this.previousElementSibling.style = "display:block; color: black; font-size: 30px;"
        this.style = "display:none;"
    })
    $(".shop").click(function(){
        this.style = "display:none;"
        this.nextElementSibling.style = "display:block;color: red; font-size: 30px;"
    })
    $(".reshop").click(function(){
        this.previousElementSibling.style = "display:block; color: black; font-size: 30px;"
        this.style = "display:none;"
    })
})
$(document).ready(function(){
    $(".shopLink").click(function(){
        $("#shopModal").modal();
    });
    $(".reshopLink").click(function(){
        $("#reshopModal").modal();
    });
});