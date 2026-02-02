import { useState } from 'react'
import Counter from './counter'

const LikeDisplay = () => {
	const [countter, setCounter] = useState(0)

 const decriment = (son: number) => {
    if (son > 1) {
      setCounter(son => son - 1)}}

	return (
		<>
			<div className='w-384 h-34 bg-amber-400 '>
				<div className='flex items-center justify-center gap-5'>
					<Counter
						color='bg-blue-500'
						hoverColor='bg-color-800'
						value='👍'
						onIncrement={() => setCounter(prev => prev + 1)}

					/>
					<div> {countter}</div>
					<Counter
						color='bg-green-500'
						hoverColor='bg-green-800'
						value='👎'
						onIncrement={() => decriment(countter)}
					/>
				</div>
			</div>
		</>
	)
		}

export default LikeDisplay