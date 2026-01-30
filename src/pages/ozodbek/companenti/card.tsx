import IUserButton from './button'

interface IUserCardProps {
	name: string
	age: number
	isStudent: "Mentor" | "Student"
}

function IUserCard({ name, age, isStudent }: IUserCardProps) {
	return (
		<>
			<div className='border-1 w-95 '>
				<h1 className='w-80 h-80 bg-amber-700'>{name}</h1>
				<h2>{age}</h2>
				<span>{isStudent}</span>
				<IUserButton name='Send message' color='bg-blue-500' hoveredcolor='bg-blue-700 font-[700] text-red-50' />
				<IUserButton name='view profie' color='border	font-[700] text-red-50 	' hoveredcolor='blue' />
			</div>
		</>
	)
}
export default IUserCard