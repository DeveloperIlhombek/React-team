import type { JSX } from 'react'
import { Link } from 'react-router-dom'

interface Props {
	name: string
	path: string
}

const StudentButton = ({ name, path }: Props): JSX.Element => {
	return (
		<Link to={path}>
			<button
				style={{ margin: 6 }}
				className='bg-green-500 w-36 h-12 rounded-md text-white font-bold text-2xl cursor-pointer'
			>
				{name}
			</button>
		</Link> 
	)
}

export default StudentButton
