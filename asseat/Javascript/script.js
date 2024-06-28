

ScrollReveal({ 
    distance: '60px',
    duration: 1000,
    delay:100,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .dip-timline, .about-img, .skill-content', { origin: 'left' });
ScrollReveal().reveal('.home-contact p,.dig-timline, .about-content', { origin: 'right' });



document.getElementById("contact").addEventListener("submit", function (event) {
    event.preventDefault();
    sumBtn.value = "sending..";

    const serviceId = "service_s4lhkbg";
    const templetId = "template_jfzpnm3";

    emailjs.send("service_s4lhkbg", "template_jfzpnm3", {
      to_name: document.getElementById("to_name").value,
      email_id: document.getElementById("email_id").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    });

    emailjs.sendForm(serviceId, templetId, this).then(
      () => {
        sumBtn.value = " Send Email";

        // alert('Mail Send Successfully Thank You!..')
        (function function3() {
          swal("Thank You!", "Mail Send Successfully!", "success");
        })();
      },
      (error) => {
        sumBtn.value = " ";
        //   alert(JSON.stringify(error));
        (function function4() {
          error(
            swal(
              "Sorry!",
              "Opps, something went wrong. Please try again later.",
              "error"
            )
          );
        })();
      }
    );
  });
  document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('call');
  form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
          event.preventDefault(); // Prevent form submission if validation fails
          event.stopPropagation();
      }
      form.classList.add('was-validated');
  });
});

var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Web Developer.'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true,
  });