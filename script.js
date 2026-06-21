/* ==========================================
   IOCT WEBSITE JAVASCRIPT
========================================== */


/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");
    const percentText = document.getElementById("loading-percent");
    const scale = document.getElementById("scale-image");

    let progress = 0;

    const loader = setInterval(() => {

        progress++;

        percentText.textContent = progress + "%";

        /* Scale behavior */

        if(progress <= 30){

            scale.style.transform = "rotate(0deg)";

        }else if(progress <= 70){

            let tilt = ((progress - 30) / 40) * -5;

            scale.style.transform =
                `rotate(${tilt}deg)`;

        }else{

            let tilt = -5 -
                (((progress - 70) / 30) * 5);

            scale.style.transform =
                `rotate(${tilt}deg)`;
        }

        if(progress >= 100){

            clearInterval(loader);

            document.body.classList.add("reward-burst");

            setTimeout(() => {

                preloader.classList.add("hide");

            }, 3000);
        }

    }, 20);
});

/* ==========================================
   PROGRESS BAR
========================================== */

window.addEventListener("scroll", () => {

    let scrollTop =
    document.documentElement.scrollTop;

    let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    let progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width = progress + "%";

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target =
        +counter.getAttribute(
            "data-target"
        );

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText =
                target;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const impact =
    document.querySelector(".impact");

    if(!impact) return;

    if(

        window.scrollY >

        impact.offsetTop - 400

        &&

        !counterStarted

    ){

        startCounters();

        counterStarted = true;

    }

});


/* ==========================================
   DARK MODE
========================================== */

const darkBtn =
document.getElementById("darkModeBtn");

darkBtn?.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

});


/* ==========================================
   STICKY HEADER
========================================== */

const header =
document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.1)";

    }else{

        header.style.boxShadow =
        "none";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(

        "click",

        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});


/* ==========================================
   REVEAL ANIMATION
========================================== */

const revealElements =
document.querySelectorAll(

".stat,.program-card,.timeline-item,.blog-grid article"

);

const revealOnScroll = () => {

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        const visible =

        window.innerHeight - 100;

        if(top < visible){

            el.classList.add("show");

        }

    });

};

window.addEventListener(

    "scroll",

    revealOnScroll

);

revealOnScroll();


/* ==========================================
   SIMPLE LIGHTBOX
========================================== */

const galleryImages =
document.querySelectorAll(

".gallery-grid img"

);

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay =
        document.createElement("div");

        overlay.style.position =
        "fixed";

        overlay.style.top = "0";

        overlay.style.left = "0";

        overlay.style.width = "100%";

        overlay.style.height = "100%";

        overlay.style.background =
        "rgba(0,0,0,.9)";

        overlay.style.display =
        "flex";

        overlay.style.alignItems =
        "center";

        overlay.style.justifyContent =
        "center";

        overlay.style.zIndex = "9999";

        const image =
        document.createElement("img");

        image.src = img.src;

        image.style.maxWidth = "90%";

        image.style.maxHeight = "90%";

        image.style.borderRadius =
        "15px";

        overlay.appendChild(image);

        overlay.addEventListener(

            "click",

            () => overlay.remove()

        );

        document.body.appendChild(

            overlay

        );

    });

});


/* ==========================================
   NEWSLETTER
========================================== */

const newsletter =
document.querySelector(

".newsletter form"

);

newsletter?.addEventListener(

    "submit",

    function(e){

        e.preventDefault();

        const email =
        this.querySelector(
            "input"
        ).value;

        if(

            !email.includes("@")

        ){

            showToast(

                "Enter a valid email."

            );

            return;

        }

        showToast(

            "Subscription successful."

        );

        this.reset();

    }

);


/* ==========================================
   TOAST MESSAGE
========================================== */

function showToast(message){

    const toast =
    document.createElement("div");

    toast.innerText = message;

    toast.style.position = "fixed";

    toast.style.bottom = "100px";

    toast.style.right = "20px";

    toast.style.background =
    "#1c8f57";

    toast.style.color = "#fff";

    toast.style.padding =
    "15px 25px";

    toast.style.borderRadius =
    "10px";

    toast.style.zIndex = "9999";

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.remove();

    },3000);

}


/* ==========================================
   TESTIMONIAL AUTO SLIDER
========================================== */

const testimonials =
document.querySelectorAll(

".testimonial"

);

let current = 0;

if(testimonials.length > 1){

    setInterval(() => {

        testimonials.forEach(

            item =>

            item.style.display =

            "none"

        );

        current++;

        if(

            current >=
            testimonials.length

        ){

            current = 0;

        }

        testimonials[current]
        .style.display = "block";

    },5000);

}


/* ==========================================
   MOBILE MENU
========================================== */

const hamburger =
document.getElementById(
    "hamburger"
);

const nav =
document.querySelector("nav");

hamburger?.addEventListener(

    "click",

    () => {

        nav.classList.toggle(
            "mobile-active"
        );

    }

);


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(

"nav ul li a"

);

window.addEventListener(

    "scroll",

    () => {

        let current = "";

        sections.forEach(section => {

            const top =
            section.offsetTop - 150;

            if(

                pageYOffset >= top

            ){

                current =
                section.getAttribute(
                    "id"
                );

            }

        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if(

                link.href.includes(
                    current
                )

            ){

                link.classList.add(
                    "active"
                );

            }

        });

    }

);


/* ==========================================
   DONATION PROGRESS
========================================== */

const progressFill =
document.querySelector(

".progress-fill"

);

if(progressFill){

    let width = 0;

    const target = 45;

    const animate = () => {

        if(width < target){

            width++;

            progressFill.style.width =
            width + "%";

            requestAnimationFrame(
                animate
            );

        }

    };

    animate();

}


/* ==========================================
   FLOATING DONATE BUTTON EFFECT
========================================== */

const donateBtn =
document.querySelector(

".floating-donate"

);

setInterval(() => {

    donateBtn?.classList.toggle(

        "pulse"

    );

},1500);


/* ==========================================
   AUTO YEAR
========================================== */

const year =
document.getElementById(
    "year"
);

if(year){

    year.textContent =
    new Date().getFullYear();

}


/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(

"IOCT Premium Website Loaded"

);