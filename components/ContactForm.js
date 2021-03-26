import React, { useState } from 'react'

export default function ContactForm(props) {

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
		<div className="flex flex-column justify-center m-10">
			<form className="w-full max-w-lg" onSubmit={handleOnSubmit}> 
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
								E-mail
							</label>
							<input 
								id="email"
								type="email"
								onChange={handleOnChange}
								required
								value={inputs.email}
								class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
							/>
						</div>
					</div>
					<div class="flex flex-wrap -mx-3 mb-6">
						<div class="w-full px-3">
							<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
								Message
							</label>
							<textarea 
								id="message"
								onChange={handleOnChange}
								required
								value={inputs.message}
								class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none">
							</textarea>
						</div>
					</div>
					<div class="md:flex md:items-center">
						<div class="md:w-1/3">
							<button 
								type="button"
								type="submit"
								class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none font-bold py-2 px-4 rounded"
							>
								{!status.submitting
									? !status.submitted
										? 'Send'
										: 'Sent!'
									: 'Sending...'}
							</button>
						</div>
					<div class="md:w-2/3"></div>
				</div>
			</form>

			<div>
				{status.info.error && (
					<div className="error">Error: {status.info.msg}</div>
				)}
				{!status.info.error && status.info.msg && (
					<div className="success">{status.info.msg}</div>
				)}
			</div>

		</div>
	)
}
