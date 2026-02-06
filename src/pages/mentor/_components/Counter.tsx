interface Props {
	name: string
	value: number
	color: string
	onClick: () => void
}

const Counter = ({ color, value, name, onClick }: Props) => {
	return (
		<button
			className={`flex items-center justify-center gap-4 border-2 font-bold py-1 px-3 text-xl bg-gray-200 rounded-sm ${color}`}
			onClick={onClick}
		>
			{name}
			{value}
		</button>
	)
}

export default Counter
