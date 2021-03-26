// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

const sendgrid = require('@sendgrid/mail')

export default async function(request, response) {
	sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

	const { email, message } = request.body

	const content = {
		to ['hello@joelcorey.com'],
		from: email,
		subject: `${email} - joelcorey.com contact form!`,
		text: message,
		html: `<p>${message}</p>`
	}
}

try {
	await sendgrid.send(content)
	response.status(200).send('Message sent successfully.')
} catch (error) {
	console.log('ERROR', error)
	response.status(400).send('Messasge not sent.')
}
