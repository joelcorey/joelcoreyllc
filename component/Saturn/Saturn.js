import Image from 'next/image'

function Saturn() {
	return (
		<>
			<div style={{margin: '10px'}}>
				<Image src="/img/saturn-nasa.jpg" alt="The planet Saturn" width="120" height="auto" />
			</div>
			<div style={{margin: '10px'}}>
				<Image src="/img/arrow.svg" alt="A paperclip arrow" width="120" height="auto" />
			</div>
		</>
	)
}

export default Saturn
