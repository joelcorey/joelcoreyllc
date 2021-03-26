const sendgrid = require('@sendgrid/mail')

export default async function(request, response) {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

	const { email, message } = request.body

	const content = {
		to: ['hello@joelcorey.com'],
		from: ['hello@joelcorey.com'],
		subject: `${email} - joelcorey.com contact form!`,
		text: message,
		html: `<p>${message}</p>`
	}

	console.log(request.body)

	sendgrid
  .send(content)
  .then(() => {}, error => {
    if (error.response) {
			console.error(error);
      console.error(error.response.body)
    }
  });
}
