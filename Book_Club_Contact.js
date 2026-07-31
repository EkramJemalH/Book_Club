
// ==========================================
// INITIALIZE EMAILJS
// ==========================================

emailjs.init({
    publicKey: "nnoP-jmY-KsyiR-dw"
});


// ==========================================
// GET THE CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");


// ==========================================
// HANDLE FORM SUBMISSION
// ==========================================

contactForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // ======================================
    // SEND CONTACT MESSAGE TO YOU
    // ======================================

    emailjs.sendForm(
        "service_88b89k6",
        "template_0zb8ean",
        contactForm
    )
    .then(function () {

        console.log("Contact message sent successfully!");

        // ==================================
        // SEND AUTO-REPLY TO THE VISITOR
        // ==================================

        return emailjs.sendForm(
            "service_88b89k6",
            "template_iszr8k9",
            contactForm
        );

    })
    .then(function () {

        console.log("Auto-reply sent successfully!");

        alert("Your message has been sent successfully!");

        contactForm.reset();

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        alert("Sorry, something went wrong. Please try again.");

    });

});
