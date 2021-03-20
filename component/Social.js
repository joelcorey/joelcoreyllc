import Icon from './Icon'

function Social(props) {

	return (
		<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '-13px 0 0 55px'}}>
			<a href="https://www.linkedin.com/in/joelcorey/" target="_blank" rel="noreferrer noopener">
				<Icon 
					path='/img/icons8-linkedin.svg'
					width='50'
					height='auto'
				/>
			</a>
			<a href="https://github.com/joelcorey" target="_blank" rel="noreferrer noopener">
				<Icon 
					path='/img/icons8-github.svg'
					width='50'
					height='auto'
				/>
			</a>
			<a href="mailto:joelcorey@fastmail.com">
				<Icon 
					path='/img/at-sign-3010.svg'
					width='50'
					height='auto'
				/>
			</a>
		</div>
	)
}

export default Social




