import Image from 'next/image'

function Icon(props) {

	const { style, path, alt, width, height } = props

	return (

		<div style={{ margin: '0 10px' }}>
			<Image src={path} alt={alt} width={width} height={height} />
		</div>

	)
}

export default Icon
