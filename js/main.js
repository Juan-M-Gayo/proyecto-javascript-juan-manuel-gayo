// =================================================================================================================================> SWIPER
let swiper;

function buildSlider() {

    try {

        $(".mySwiper").each(function() {
            this.swiper.destroy();
        });

    } 
    
    catch (error) {

        console.log("no swiper exists");

    };

    swiper = new Swiper(".mySwiper", {
        
        slidesPerView: 'auto',
        spaceBetween: -40,
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        speed: 2000,
        touchStartForcePreventDefault: true,

        pagination: {

            el: ".swiper-pagination",
            clickable: true,

        },

        breakpoints: {

            650: {

            speed: 1000,
            spaceBetween: -20,

            },
            
        },

    });

};

// ===================================================================================================================================> INFO
const infoButton = document.getElementById("info-icon");

infoButton.addEventListener("click", showInfoMenu);

function showInfoMenu() {

    hideBagMenu();

    document.querySelector(".info-section").classList.toggle("active");
    document.querySelector(".open-info").classList.toggle("hide");
    document.querySelector(".close-info").classList.toggle("show");

};

function hideInfoMenu() {

    if ($(".info-section").hasClass("active")) {

        showInfoMenu();

    };

};

// ====================================================================================================================================> BAG
const bagButton = document.getElementById("bag-icon");

bagButton.addEventListener("click", showBagMenu);

function showBagMenu() {

    hideInfoMenu();

    document.querySelector(".bag-section").classList.toggle("active");
    document.querySelector(".open-bag").classList.toggle("hide");
    document.querySelector(".close-bag").classList.toggle("show");

};

function hideBagMenu() {
    
    if ($(".bag-section").hasClass("active")) {

        showBagMenu();

    };

};

// =============================================================================================================================> CLOSE MENU
const bcButton = document.getElementById("bc-icon");
const helmetButton = document.getElementById("helmet-icon");
const scButton = document.getElementById("sc-icon");

bcButton.onclick = () => {

    hideBagMenu();
    hideInfoMenu();

};

helmetButton.onclick = () => {

    hideBagMenu();
    hideInfoMenu();

};

scButton.onclick = () => {

    hideBagMenu();
    hideInfoMenu();

};

// ===========================================================================================================================> ACTIVE LINKS
const items = document.querySelectorAll(".nav-menu .nav-list .nav-item .nav-link");

items.forEach((item) => {

    item.addEventListener("click", () => {

        document.querySelector(".nav-link.active").classList.remove("active");
        item.classList.add("active");

    });

});

// ====================================================================================================================> SCROLL ACTIVE LINKS
$("#main-container").on("scroll", onScroll);

let topMenu = $(".nav"),
topMenuHeight = topMenu.outerHeight() + 15;

function onScroll(event) {

    let scrollPos = $(document).scrollTop() + topMenuHeight;

    $("a").each(function() {

        let currLink = $(this);
        let refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

            $("a").removeClass("active");
            currLink.addClass("active");

        }

        else {

            currLink.removeClass("active");
            
        };

    });
    
};