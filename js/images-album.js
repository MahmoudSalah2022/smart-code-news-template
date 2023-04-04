// start open football matches and close//
let closeSButton = document.getElementById('closeSButton');
let albumimageslider = document.getElementById('albumimageslider');
let sliderimagenews= document.getElementById('sliderimagenews');

closeSButton.addEventListener("mousedown", () => {
    albumimageslider.classList.remove('showAnddisplay') ;
    console.log("test");
});
sliderimagenews.addEventListener("mousedown", () => {
    albumimageslider.classList.add('showAnddisplay') ;
    console.log("test");
});
// end open football matches and close//

// start slider //

let IsliderContainer = document.querySelector('.imageslider-slider-container');
let IinnerSlider = document.querySelector('.imageslider-inner-slider');

let Spressed = false;
let ISstartISx;
let ISx;

IsliderContainer.addEventListener("mousedown", (e) => {
    Spressed = true;
    ISstartISx = e.offsetX  - IinnerSlider.offsetLeft;
    IsliderContainer.style.cursor = "grabbing";
    IScheckBoundary();
});

IsliderContainer.addEventListener("mouseenter", () => {
    IsliderContainer.style.cursor = "grab";
});

IsliderContainer.addEventListener("mouseup", () => {
    IsliderContainer.style.cursor = "grab";
    Spressed = false;
});

IsliderContainer.addEventListener("mousemove", (e) => {
    if (!Spressed) return;
    e.preventDefault();

    ISx = e.offsetX ;

    IinnerSlider.style.left = `${ISx - ISstartISx}px`;
});

const IScheckBoundary = () => {
    let outer = IsliderContainer.getBoundingClientRect();
    let inner = IinnerSlider.getBoundingClientRect();

    if (parseInt(IinnerSlider.style.left) > 0) {
        IinnerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        IinnerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

// end slider //