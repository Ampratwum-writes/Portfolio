/* ================= MOBILE MENU ================= */

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-bar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll('.nav-bar a').forEach(link => {


link.onclick = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
};


});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-bar a');
window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute('id');
        }

    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }

    });

});


/* ================= ESCAPE KEY ================= */

document.addEventListener('keydown', (event) => {


if (event.key === 'Escape') {

    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');

}

});

/* ================= TYPING ANIMATION ================= */

const typingText = document.querySelector('#typing-text');

const roles = [
'Computer Science Student',
'Aspiring Software Developer',
'Web Developer',
'Cloud Enthusiast'
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {


const currentRole = roles[roleIndex];

if (!deleting) {

    typingText.textContent =
        currentRole.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentRole.length) {

        deleting = true;

        setTimeout(typeAnimation, 1500);
        return;

    }

} else {

    typingText.textContent =
        currentRole.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {

        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;

    }

}

setTimeout(typeAnimation, deleting ? 70 : 100);


}

typeAnimation();

/* ================= FORM FEEDBACK ================= */

const formInputs = document.querySelectorAll(
'.contact form input, .contact form textarea'
);

formInputs.forEach(input => {


input.addEventListener('focus', () => {
    input.style.borderColor = 'white';
});

input.addEventListener('blur', () => {

    if (!input.value) {
        input.style.borderColor = 'var(--main-colour)';
    }

});


});
