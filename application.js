function download(){
    name = document.querySelector('#name').value
    company = document.querySelector('#company').value
    email = document.querySelector('#email').value
    sendEmail(name, company, email);

	var element = document.createElement('a');
	element.setAttribute('href', encodeURIComponent("resume.pdf"));
	element.setAttribute('download', "ResumeDaviFrossard");
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}

function sendEmail(name, company, email) {
	Email.send({
	Host : "smtp.elasticemail.com",
    Username : "seusitepessoal@gmail.com",
    Password : "C6C345BB3F3BC3D20563244B46ED16784160",
	To : 'davi_bf@outlook.com',
	From : "seusitepessoal@gmail.com",
	Subject : "Dowloaded Resume from your site!",
	Body : "Hello Mr. Frossard, we are glad to tell you that your resume was downloaded from (name, company, email) " + name + ", " + company + ", " + email,
	}).then(
	);
}
