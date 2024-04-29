function letsExplore() {
    /* The toggle effect to the clickable elements code */
    /* document.querySelector(".firstFunction").classList.toggle("active");
    document.querySelector(".more").classList.toggle("active"); */
    
   /* Appearing the first section of website with the 2nd section Title */
    document.querySelector(".firstFunction").style.display="flex";
   
   /* Removing all the CSS decoration */document.querySelector(".explore").classList.remove("animationText");
   
   /* Starting key frame animation */document.querySelector(".explore").style.animationPlayState = "running";
   /* Appearing the title of the second section */
    document.querySelector(".more").style.display="block";
}

/* Appearing the second section with clicking the second section title */

function discoverMore() {
    document.querySelector(".function2").style.display="flex";
    
       /* Removing all the CSS decoration */document.querySelector(".more").classList.remove("animationText");
   
   /* Starting key frame animation */document.querySelector(".more").style.animationPlayState = "running";
}
