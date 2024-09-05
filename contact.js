
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');


function validateName() {
    var name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]\s{1}[A-Za-z]&/)) {
        nameError.innerHTML = '';
        return false;
    }
    nameError.innerHTML = 'valid'
    const form = document.getElementById("myForm");
    const btn = document.getElementById('submit-btn')
    form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            myButton.disabled = false;
        }
    });

    return true;
}

function validateEmail(input) {
    const email = input.value;

    if (email.length === 0) {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!email.match(/^[A-Za-z0-9._-]+\@[A-Za-z0-9]+\.[A-Za-z]{2,4}$/)) {
        emailError.textContent = "Invalid email format";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validateMessage(message) {
    var required = 30;

    var left = required - message.length;

    if (left > 0) {
        messageError.textContent = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = ''
    return true;
}

document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(this);
    debugger
    emailjs.sendForm('service_ji3k9vj', 'template_j1p4cof', this)
        .then(() => {
            swal({
                title: "Thank you!",
                text: "You are succesfully sended the message!",
                icon: "success",
                button: "Close",
            })
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });
}