const sendgrid = require('@sendgrid/mail')

export default async function(request, response) {

	sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

	const { email, message } = request.body

	const content = {
		to: ['hello@joelcorey.com'],
		from: 'hello@joelcorey.com',
		subject: `${email} - joelcorey.com contact form!`,
		text: message,
		html: `<p>${message}</p>`
	}

	try {
    await sendgrid.send(content)
    response.status(200).send('Message sent successfully.')
  } catch (error) {
		if (error.response) {
			console.error(error);
			console.error(error.response.body)
		} 

    console.log('ERROR', error)
    response.status(400).send('Message not sent.')
  }
}
