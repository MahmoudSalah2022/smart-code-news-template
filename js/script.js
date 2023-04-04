// start paryer time submenu //
let PrayerTime = document.getElementById('PrayerTime');
let paryertimeItems= document.getElementById('paryertimeItems');

PrayerTime.addEventListener("mouseout", () => {
    paryertimeItems.classList.remove('showAnddisplay') ;
    console.log("test");
});
PrayerTime.addEventListener("mouseover", () => {
    paryertimeItems.classList.add('showAnddisplay') ;
    console.log("test");
});

// end paryer time submenu //

// start open burger menu and close//
let closeButton = document.querySelector('.closeButton');
let burgermenuoverlay = document.getElementById('burgermenuoverlay');
let burgermenuToggle= document.getElementById('burgermenuToggle');

closeButton.addEventListener("mousedown", () => {
    burgermenuoverlay.classList.remove('showAnddisplay') ;
    console.log("test");
});
burgermenuToggle.addEventListener("mousedown", () => {
    burgermenuoverlay.classList.add('showAnddisplay') ;
    console.log("test");
});
// end open burger menu and close//

// start slider //

// start small slider animation //

let MSsliderContainer = document.querySelector('.MS-slider-container');
let MSinnerslider = document.querySelector('.MS-inner-slider');

let MSpressed = false;
let MSstartX;
let MSx;

MSsliderContainer.addEventListener("mousedown", (e) => {
    MSpressed = true;
    MSstartX = e.offsetX - MSinnerslider.offsetLeft;
    MSsliderContainer.style.cursor = "grabbing";
    MScheckBoundary();
});

MSsliderContainer.addEventListener("mouseenter", () => {
    MSsliderContainer.style.cursor = "grab";
});

MSsliderContainer.addEventListener("mouseup", () => {
    MSsliderContainer.style.cursor = "grab";
    MSpressed = false;
});

MSsliderContainer.addEventListener("mousemove", (e) => {
    if (!MSpressed) return;
    e.preventDefault();

    MSx = e.offsetX;

    MSinnerslider.style.left = `${MSx - MSstartX}px`;
});

const MScheckBoundary = () => {
    let outer = MSsliderContainer.getBoundingClientRect();
    let inner = MSinnerslider.getBoundingClientRect();

    if (parseInt(MSinnerslider.style.left) > 0) {
        MSinnerslider.style.left = "-474px";
    }

    if (inner.right < outer.right) {
        MSinnerslider.style.left = `-${inner.width - outer.width}px`;
    }
};

// end small slider animation //

// start change main news slider //

    let mainSlider = document.querySelector('.mainslider')
    let slideImageNews = document.querySelectorAll('.slide-imageNews');
    // main news slider data //
    let mainSlide = document.getElementById('mainslide').style.backgroundImage;
    let mainImage = mainSlide.match(/url\(["']?([^"']*)["']?\)/)[1];
    let mainnewstitle = document.querySelector('.MS-newstitle').innerHTML;
    // small news slider //
    let smallImage = document.querySelector('.smallSlideIamge').src;
    let allSmallImage = document.querySelectorAll('.smallSlideIamge');

    let allsmallnewstitle = document.querySelectorAll('.slide-newstitle');
    for(let i=0 ; i< slideImageNews.length; i++){
        slideImageNews[i].addEventListener("mouseenter", () => {
            mainImage = allSmallImage[i].currentSrc ;
            let mainImageUrl = "url('"+mainImage+"')";
            document.getElementById('mainslide').style.backgroundImage = mainImageUrl ;
            document.querySelector('.MS-newstitle').innerHTML = allsmallnewstitle[i].innerHTML;
        });
    }
// end change main news slider //
// end slider //

// start open video album and close//
let allcloseVButton = document.querySelectorAll('.closevideo');
let allvideopalyer = document.querySelectorAll('.videopalyer');
let allvideoFile= document.querySelectorAll('.videoFile');
for(let i=0 ; i< allvideoFile.length; i++){
    allvideoFile[i].addEventListener("mousedown", () => {
        allvideopalyer[i].classList.add('showAnddisplay') ;
    });
    for(let i=0 ; i< allcloseVButton.length; i++){
        allcloseVButton[i].addEventListener("mousedown", () => {
        allvideopalyer[i].classList.remove('showAnddisplay') ;
        });
    }
}

// end open video album and close//

// start open audio player and close//
let allcloseAButton = document.querySelectorAll('.closeAButton');
let allaudiopalyer = document.querySelectorAll('.audiopalyer');
let allaudioFile= document.querySelectorAll('.audioFile');
for(let i=0 ; i< allaudioFile.length; i++){
    allaudioFile[i].addEventListener("mousedown", () => {
        allaudiopalyer[i].classList.add('showAnddisplay') ;
    });
    for(let i=0 ; i< allcloseAButton.length; i++){
        allcloseAButton[i].addEventListener("mousedown", () => {
        allaudiopalyer[i].classList.remove('showAnddisplay') ;
        });
    }
}
// end open audio player and close//
