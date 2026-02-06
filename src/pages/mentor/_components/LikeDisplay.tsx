import { useState } from 'react'
import Counter from './Counter'

const LikeDisplay = () => {
	const [likeCount, setLikeCount] = useState(0)
	const [dislikeCount, setdisLikeCount] = useState(0)

	return (
		<div className='flex items-center gap-2  justify-around'>
			<Counter
				color='text-green-500'
				onClick={() => setLikeCount(prev => prev + 1)}
				name='👍'
				value={likeCount}
				key={1}
			/>
			<Counter
				color='text-red-500'
				onClick={() => setdisLikeCount(prev => prev + 1)}
				name='👎'
				value={dislikeCount}
				key={2}
			/>
		</div>
	)
}

export default LikeDisplay
