/*======================================
Diwaker Dental Clinic
script.js
Part 1
======================================*/


/*======================================
STICKY HEADER
======================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/*======================================
MOBILE MENU
======================================*/

const menu = document.querySelector(".menu");

const menuToggle = document.querySelector(".menu-toggle");

const menuIcon = document.querySelector(".menu-toggle i");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");

        menuIcon.classList.add("fa-xmark");

    } else {

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    }

});


/*======================================
AUTO CLOSE MENU
======================================*/

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");

        menuIcon.classList.add("fa-bars");

    });

});


/*======================================
SMOOTH SCROLL
======================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        window.scrollTo({

            top: target.offsetTop - 80,

            behavior: "smooth"

        });

    });

});


/*======================================
ACTIVE NAVIGATION
======================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*======================================
FAQ ACCORDION
======================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*======================================
SCROLL ANIMATION
======================================*/

const animatedElements = document.querySelectorAll(

".trust-box,.service-card,.why-card,.review-card"

);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

animatedElements.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".7s ease";

    observer.observe(item);

});


/*======================================
PAGE LOADED
======================================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

}); /*======================================
Diwaker Dental Clinic
script.js
Part 2
======================================*/


/*======================================
WHATSAPP APPOINTMENT FORM
======================================*/

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

appointmentForm.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();

const phone = document.getElementById("phone").value.trim();

const treatment = document.getElementById("treatment").value.trim();

const date = document.getElementById("date").value;

const message = document.getElementById("message").value.trim();

const text =

`🦷 *Appointment Request*

👤 Name : ${name}

📞 Mobile : ${phone}

💉 Treatment : ${treatment}

📅 Preferred Date : ${date}

📝 Message : ${message}`;

window.open(

`https://wa.me/919414484208?text=${encodeURIComponent(text)}`,

"_blank"

);

appointmentForm.reset();

});

}


/*======================================
COUNTER ANIMATION
======================================*/

const counters = document.querySelectorAll(".hero-info h3");

let counterStarted = false;

function startCounter() {

if (counterStarted) return;

counterStarted = true;

counters.forEach(counter => {

const original = counter.innerText;

const target = parseInt(original);

const isPercent = original.includes("%");

let current = 0;

const increment = Math.max(1, Math.ceil(target / 80));

function update() {

current += increment;

if (current >= target) {

current = target;

}

counter.innerText = isPercent

? current + "%"

: current + "+";

if (current < target) {

requestAnimationFrame(update);

}

}

update();

});

}

window.addEventListener("scroll", () => {

const heroInfo = document.querySelector(".hero-info");

if (!heroInfo) return;

if (heroInfo.getBoundingClientRect().top < window.innerHeight - 120) {

startCounter();

}

});


/*======================================
GALLERY LIGHTBOX
======================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

const overlay = document.createElement("div");

overlay.className = "lightbox";

overlay.innerHTML =

`<img src="${image.src}" alt="">`;

document.body.appendChild(overlay);

overlay.addEventListener("click", () => {

overlay.remove();

});

});

});


/*======================================
COPYRIGHT YEAR
======================================*/

const copyright = document.querySelector(".copyright");

if (copyright) {

copyright.innerHTML =

`© ${new Date().getFullYear()} Diwaker Dental Clinic. All Rights Reserved.`;

}


/*======================================
CONSOLE MESSAGE
======================================*/

console.clear();

console.log(

"%cDiwaker Dental Clinic",

"font-size:24px;color:#0b5ed7;font-weight:bold;"

);

console.log(

"%cDeveloped Successfully",

"color:#16a34a;font-size:14px;"

);
