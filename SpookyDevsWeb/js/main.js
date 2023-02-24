function navigate(v) {
    var home = document.querySelector(".home")
    var shop = document.querySelector(".shop");
    var about = document.querySelector(".about");
    var log = document.querySelector(".log");
    var img_abt = document.querySelector(".abt");

    // applying hide function
    if (v == 0) {
        // home.style.marginLeft = "10%";
        shop.style.fontSize = "0px";
        about.style.fontSize = "0px";
        log.style.fontSize = "0px";
        home.style.fontSize = "25px";
        shop.style.width = "0%";
        about.style.width = "0%";
        log.style.width = "0%";
        home.style.width = "80%";
        img_abt.style.width = "0px";
        img_abt.style.height = "0px";
    } else if (v == 1) {
        // shop.style.marginLeft = "10%";
        home.style.fontSize = "0px";
        about.style.fontSize = "0px";
        log.style.fontSize = "0px";
        shop.style.fontSize = "25px";
        home.style.width = "0%";
        about.style.width = "0%";
        log.style.width = "0%";
        shop.style.width = "80%";
    } else if (v == 2) {
        // about.style.marginLeft = "10%";
        shop.style.fontSize = "0px";
        home.style.fontSize = "0px";
        log.style.fontSize = "0px";
        about.style.fontSize = "25px";
        shop.style.width = "0%";
        home.style.width = "0%";
        log.style.width = "0%";
        about.style.width = "80%";
        img_abt.style.width = "100px";
        img_abt.style.height = "200px";
    } else {
        // log.style.marginLeft = "10%";
        shop.style.fontSize = "0px";
        about.style.fontSize = "0px";
        home.style.fontSize = "0px";
        log.style.fontSize = "25px";
        shop.style.width = "0%";
        about.style.width = "0%";
        home.style.width = "0%";
        log.style.width = "80%";
        img_abt.style.width = "0px";
        img_abt.style.height = "0px";
    }
}
// // gallery          ------------------- not working
// var si = 1;
// sdiv(si);

// function div(n) {
//     sdiv(si += n)
// }

// function sdiv(n) {
//     var 1;
//     var x = document.getElementsByClassName("im")
//     if (n > x.length) {
//         si = 1;
//     }
//     if (n < 1) {
//         si = x.length;
//     }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[si - 1].style.display = "block";
// }
