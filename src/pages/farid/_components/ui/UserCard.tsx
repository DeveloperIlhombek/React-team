import IUserbutton from './button'

interface ICard {
	firstname: string
	lastname: string
	age: number
	phone: string
	email: string
	isStudent: 'Farid' | 'Student'
	imageUrl: string
}
function iusercard({ firstname, lastname, age, phone, email, isStudent, imageUrl }: ICard) {
	return (
		<>
			<div className="bg-white rounded-lg shadow-md p-4 w-64">
				<h2>{firstname} {lastname}</h2>
				<h2>{age}</h2>
				<h2>{phone}</h2>
				<h2>{email}</h2>
				<h2>{isStudent}</h2>
				<IUserbutton name='send message' color='blue-500' hovercolor='blue-700' />

			</div>
		</>
	)

}
export default iusercard


