import Head from 'next/head'
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

export default function Contact() {

	return (
		<>
			<Title />
			<ContactForm />
			<div className="flex justify-center m-10">
				<p className="contact-form-light-text">If contact forms aren't your thing email me directly at: <a href="mailto:joelcorey@fastmail.com">hello@joelcorey.com</a></p>
			</div>
		</>
	)
	
}
