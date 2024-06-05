window.addEventListener('wheel', (event) => {
    if (event.deltaY >= 0) {
        gsap.to(".marque", {
            transform: "translateX(-100%)",
            repat: -1,
            duration: 4,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate:180,
            duration:0.5
        })
    }
    else {
        gsap.to(".marque", {
            transform: "translateX(100%)",
            repat: -1,
            duration: 4,
            ease: "none"
        })
        gsap.to(".marque img", {
            rotate:0,
            duration:0.5
        })
    }
})