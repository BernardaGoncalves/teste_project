// Função para alternar a visibilidade do menu responsivo
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

var menuButton = document.getElementById("menu-button");
if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
}


    ready(function(){
        $('.slick-carousel').slick({
            slidesToShow: 3, 
            slidesToScroll: 1,
            autoplay: true, 
            autoplaySpeed: 2000, 
            responsive: [
                {
                    breakpoint: 768, 
                    settings: {
                        slidesToShow: 2, 
                    }
                },
                {
                    breakpoint: 480, 
                    settings: {
                        slidesToShow: 1, 
                    }
                }
            ]
        });
    });


