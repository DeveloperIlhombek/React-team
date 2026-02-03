import Iusercard from './_components/card'
import LikeDisplay from './_components/Likedisplay'


function Fozil() {
	return (
		<>
		<main className='bg-radial from-slate-300 to-slate-500 min-h-screen container p-12'>
				<Iusercard
					age={14}
					email='erkinovfoziljon2@gmail.com'
					lastname='Erkinov'
					phone='+998943113084'
					key={1}
					firstname='Foziljon'
					imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9Oc8CQsZmbwQgWMXZThhkblLrnNsbrcOevg&s'
					isStudent='Student'
				/>
			</main>
			<LikeDisplay />
		</>
	)

}

export default Fozil
