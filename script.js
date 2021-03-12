document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll('.slide__item');
    let slider = [];
    console.log(slides);
    for (let i = 0; i < slides.length; i++) {
        slider[i] = slides[i];
        slides[i].remove();
    }

    console.log(slider)

    let step = 0;
    let offset = 0;

    function draw() {
        let item = slider[step];
        item.style.transform = 'translateX(' + 100 * offset + 'vw)';
        document.querySelector('.slide').appendChild(item);
        if (step + 1 == slider.length) {
            step = 0;
        } else {
            step++;
        }
        offset = 1;
    }

    function right() {
        document.onclick = null;
        let slides_2 = document.querySelectorAll('.slide__item');
        let offset_2 = 0;
        for (let i = 0; i < slides_2.length; i++) {
            slides_2[i].style.transform = 'translateX(' +  (offset_2 * 100 - 100) + 'vw)';
            offset_2++;
        }
        setTimeout(() => {
            slides_2[0].remove();
            draw();
            document.onclick = right;
        }, 1000)
        // slides_2.forEach(e => e.style.opacity = 0);
        // slides_2[step].style.opacity = 1;
    }

    draw();
    draw();
    document.onclick = right;


});