let upperCurtain = document.getElementById("UpperCurtain");
let lowerCurtain = document.getElementById("LowerCurtain");
var logoNameContainer = document.getElementsByClassName("logoNameContainer");
var cpuHeading = document.getElementsByClassName("cpuheading");
var logo = document.getElementsByClassName("logo");
var productsContainer = document.getElementsByClassName("productsContainer");

$(window).scroll(function scrollAnimation() {
    var scrolledUpLength =  $(window).scrollTop();
    console.log(scrolledUpLength);

    if (scrolledUpLength >= 0 && scrolledUpLength < 500) {
        var rollCurtainTo = -2.5*(scrolledUpLength);
        $(upperCurtain).css("top", String(rollCurtainTo));
        $(lowerCurtain).css("bottom", String(rollCurtainTo));

        $(productsContainer).css("margin-top", String(2*scrolledUpLength));
        $(logoNameContainer).css("top", String(300-scrolledUpLength));

    }    
});





 




