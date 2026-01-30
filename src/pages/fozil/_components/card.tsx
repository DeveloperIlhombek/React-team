import { User2 } from 'lucide-react'
import IButton from './Ibutton'

interface IusercardProps {
	name: string
	age: number
	isStudednt: "Mentor" | "Student"
}
function Iusercard({ name, age, isStudednt }: IusercardProps) {
	return (
		<>
			<div className='flex flex-col items-center justify-between w-101 pr-0.5 h-80 border-2 rounded-2xl'>
				<h1 className='flex text-3xl justify-center items-center'>
					<User2 />
					{name}</h1>
				<h1 className='flex text-3xl justify-center items-center'>{age}</h1>
				<span className='flex text-3xl justify-center items-center'>{isStudednt}</span>
				<div className='flex'>
					<IButton name="Send Massage" color='bg-amber-600' hovercolor='bg-blue-800' />
					<IButton name="Viev Profile" color='bg-amber-600' hovercolor='bg-blue-800' />
				</div>
			</div>
		</>
	)

}
export default Iusercard