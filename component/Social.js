import Icon from './Icon'

function Social(props) {

	return (
		<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '-13px 0 0 55px'}}>
			<Icon 
				path='/img/icons8-linkedin.svg'
				width='50'
				height='auto'
			/>
			<Icon 
				path='/img/icons8-github.svg'
				width='50'
				height='auto'
			/>
			<Icon 
				path='/img/at-sign-3010.svg'
				width='50'
				height='auto'
			/>
		</div>
	)
}

export default Social




