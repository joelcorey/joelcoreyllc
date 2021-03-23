import Link from 'next/link'

function Title() {

  return(
		<div className="flex items-center justify-center m-4">
			<div className="title-column">
				<Link href="/">
					<a>
						<div className="title-logo"></div>
					</a>
				</Link>
			</div>
			<div className="title-column">
				<h1 className="title-text text-5xl">joelcorey</h1>
			</div>
		</div>
  )
}

export default Title;
