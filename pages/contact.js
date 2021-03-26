import React, { useState } from 'react'

import Title from '../components/Title';
import ContactForm from '../components/ContactForm';

export default function Contact() {

	const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

	return (
		<>
			<Title />
			<ContactForm 
				handleOnChange={handleOnChange}
				handleOnSubmit={handleOnSubmit}
			/>
			<div className="flex justify-center m-10">
				<p className="contact-form-light-text">If contact forms aren't your thing email me directly at: <a href="mailto:joelcorey@fastmail.com">hello@joelcorey.com</a></p>
			</div>
		</>
	)
	
}
