let upperCurtain = document.getElementById("UpperCurtain");
let lowerCurtain = document.getElementById("LowerCurtain");
var logoNameContainer = document.getElementsByClassName("logoNameContainer");
var cpuHeading = document.getElementsByClassName("cpuheading");
var logo = document.getElementsByClassName("logo");
var productsContainer = document.getElementsByClassName("productsContainer");

// Noticing the scroll and creating animations accordingly
$(window).scroll(function scrollAnimation() {
    var scrolledUpLength =  $(window).scrollTop();

    // Until scrolled page length is less than 500px and greater than 0px.
    if (scrolledUpLength >= 0 && scrolledUpLength < 500) {
        var rollCurtainTo = -2.5*(scrolledUpLength);

        // This reveals the products page.
        $(upperCurtain).css("top", String(rollCurtainTo));
        $(lowerCurtain).css("bottom", String(rollCurtainTo));
        
        // This moves down the products Container in which products are listed on lower curtain.
        $(productsContainer).css("margin-top", String(3*scrolledUpLength));
    }    
});







 




