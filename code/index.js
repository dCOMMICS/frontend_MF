// document.addEventListener('DOMContentLoaded', () => {
//     const button = document.querySelector('.button');
//     const buttonBorder = document.querySelector('.button-border');

//     // Button hover animation
//     button.addEventListener('mouseenter', () => {
//         gsap.to(button, { duration: 0.3, scale: 1.1 });
//     });

//     button.addEventListener('mouseleave', () => {
//         gsap.to(button, { duration: 0.3, scale: 1 });
//     });

//     // Button border hover animation
//     buttonBorder.addEventListener('mouseenter', () => {
//         gsap.to(buttonBorder, { duration: 0.5, rotate: 360, background: 'linear-gradient(230deg, #eeaf61, #FB9862,#ee5d6c,#ce4993,#6a0d83)' });
//     });

//     buttonBorder.addEventListener('mouseleave', () => {
//         gsap.to(buttonBorder, { duration: 0.5, rotate: 0, background: 'linear-gradient(115deg, #eeaf61, #fb9062, #ee5dc6, #6a0d83)' });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    const buttonBorder = document.querySelector('.button-border');

    // Button hover animation: Scale and Bounce
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { duration: 0.3, scale: 1.1, ease: "bounce.out" });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, { duration: 0.3, scale: 1 });
    });

    // Button border hover animation: Color Change
    buttonBorder.addEventListener('mouseenter', () => {
        gsap.to(buttonBorder, { duration: 0.5, background: 'linear-gradient(230deg, #ffaf61, #ff9062, #ff5dc6, #8a0d83)' });
    });

    buttonBorder.addEventListener('mouseleave', () => {
        gsap.to(buttonBorder, { duration: 0.5, background: 'linear-gradient(115deg, #eeaf61, #fb9062, #ee5dc6, #6a0d83)' });
    });

    // Button hover animation: Shadow and Elevation
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { duration: 0.3, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", y: -5 });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, { duration: 0.3, boxShadow: "0px 0px 0px rgba(0,0,0,0)", y: 0 });
    });

    // Button hover animation: Skew and Rotation
    button.addEventListener('mouseenter', () => {
        gsap.to(button, { duration: 0.3, rotation: 10, skewX: 10 });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, { duration: 0.3, rotation: 0, skewX: 0 });
    });
});
