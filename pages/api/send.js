const sendgrid = require('@sendgrid/mail')

export default async function(request, response) {
	console.log(process.env.SENDGRID_API_KEY)

	sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

	const { email, message } = request.body

	const content = {
		to: ['hello@joelcorey.com'],
		from: 'hello@joelcorey.com',
		subject: `${email} - joelcorey.com contact form!`,
		text: message,
		html: `<p>${message}</p>`
	}

	// sendgrid
  // .send(content)
	// 	.then(response => {
	// 		response.statusCode = 200
	// 		response.setHeader('Content-Type', 'application/json');
	// 		response.setHeader('Cache-Control', 'max-age=180000');
	// 		response.end(JSON.stringify(response))
	// 		resolve();
	// 	})
  // 	.catch(error => {
	// 		if (error.response) {
	// 			console.error(error);
	// 			console.error(error.response.body)
	// 		} 
	// 		res.json(error);
	// 		res.status(405).end();
	// 		return resolve();
  // });

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
