/* =========================================================
   NEXORA DIGITAL SOLUTIONS
   WEEK 4 - JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const isOpen =
            navLinks.classList.contains("show");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";
    });


    // Close menu after clicking a link

    const navigationLinks =
        navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";
        });

    });
}


/* =========================================================
   2. DARK / LIGHT MODE
   ========================================================= */

const themeButton =
    document.createElement("button");

themeButton.id = "theme-toggle";

themeButton.className = "btn btn-secondary";

themeButton.setAttribute(
    "aria-label",
    "Toggle dark and light mode"
);

document.body.prepend(themeButton);


function updateThemeButton() {

    const darkMode =
        document.body.classList.contains(
            "light-mode"
        );

    if (darkMode) {

        themeButton.textContent =
            "🌙 Dark Mode";

    } else {

        themeButton.textContent =
            "☀️ Light Mode";
    }
}


function toggleTheme() {

    document.body.classList.toggle(
        "light-mode"
    );

    const lightMode =
        document.body.classList.contains(
            "light-mode"
        );

    localStorage.setItem(
        "lightMode",
        lightMode
    );

    updateThemeButton();
}


themeButton.addEventListener(
    "click",
    toggleTheme
);


/* Load saved theme */

const savedTheme =
    localStorage.getItem("lightMode");

if (savedTheme === "true") {

    document.body.classList.add(
        "light-mode"
    );
}

updateThemeButton();


/* =========================================================
   3. CONTACT FORM VALIDATION
   ========================================================= */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    const nameInput =
        document.getElementById("name");

    const emailInput =
        document.getElementById("email");

    const subjectInput =
        document.getElementById("subject");

    const messageInput =
        document.getElementById("message");

    const nameError =
        document.getElementById("name-error");

    const emailError =
        document.getElementById("email-error");

    const subjectError =
        document.getElementById("subject-error");

    const messageError =
        document.getElementById("message-error");

    const successMessage =
        document.getElementById("form-success");


    /* =========================
       NAME VALIDATION
       ========================= */

    function validateName() {

        const name =
            nameInput.value.trim();

        if (name.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            return false;
        }

        nameError.textContent = "";

        return true;
    }


    /* =========================
       EMAIL VALIDATION
       ========================= */

    function validateEmail() {

        const email =
            emailInput.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email address.";

            return false;
        }

        emailError.textContent = "";

        return true;
    }


    /* =========================
       SUBJECT VALIDATION
       ========================= */

    function validateSubject() {

        const subject =
            subjectInput.value.trim();

        if (subject.length < 3) {

            subjectError.textContent =
                "Subject must contain at least 3 characters.";

            return false;
        }

        subjectError.textContent = "";

        return true;
    }


    /* =========================
       MESSAGE VALIDATION
       ========================= */

    function validateMessage() {

        const message =
            messageInput.value.trim();

        if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            return false;
        }

        messageError.textContent = "";

        return true;
    }


    /* =========================
       REAL-TIME VALIDATION
       ========================= */

    nameInput.addEventListener(
        "input",
        validateName
    );

    emailInput.addEventListener(
        "input",
        validateEmail
    );

    subjectInput.addEventListener(
        "input",
        validateSubject
    );

    messageInput.addEventListener(
        "input",
        validateMessage
    );


    /* =========================
       FORM SUBMISSION
       ========================= */

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const validName =
                validateName();

            const validEmail =
                validateEmail();

            const validSubject =
                validateSubject();

            const validMessage =
                validateMessage();


            if (
                validName &&
                validEmail &&
                validSubject &&
                validMessage
            ) {

                successMessage.textContent =
                    "✓ Message submitted successfully!";

                contactForm.reset();

            } else {

                successMessage.textContent = "";
            }

        }
    );

}


/* =========================================================
   4. SCROLL ANIMATION
   ========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .benefit, .hero-card, .cta-content"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(function (element) {

    element.classList.add("animate-on-scroll");

    observer.observe(element);

});


/* =========================================================
   5. PAGE LOAD MESSAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "Nexora Digital Solutions - Week 4 loaded successfully."
        );

    }
);