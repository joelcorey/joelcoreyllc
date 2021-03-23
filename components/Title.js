import Link from 'next/link'

function Title() {

  return(
		<div className="flex items-center justify-center mr-10">
			<div>
				<Link href="/">
					<a>
						<div className="title-logo"></div>
					</a>
				</Link>
			</div>
			<div>
				<h1 className="title-text text-5xl">joelcorey</h1>
			</div>
		</div>
  )
}

export default Title;
