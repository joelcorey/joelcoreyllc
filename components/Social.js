import Icon from './Icon'

function Social(props) {

	let width = 40;

	return (
		<div className='flex flex-row justify-center  m-4'>
			<a href="https://www.linkedin.com/in/joelcorey/" target="_blank" rel="noreferrer noopener">
				<Icon 
					path='/img/icons8-linkedin.svg'
					width={width}
					height='auto'
				/>
			</a>
			<a href="https://github.com/joelcorey" target="_blank" rel="noreferrer noopener">
				<Icon 
					path='/img/icons8-github.svg'
					width={width}
					height='auto'
				/>
			</a>
			<a href="mailto:joelcorey@fastmail.com">
				<Icon 
					path='/img/at-sign-3010.svg'
					width={width}
					height='auto'
				/>
			</a>
		</div>
	)
}

export default Social




