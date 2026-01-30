interface IButton {
	name: string
	color: string
	hovercolor: string
}


const IButton = ({ color, hovercolor, name }: IButton) => {
	return (
		<>
			<div className={`w-50 h-12 ${color} hover:${hovercolor}  rounded-2xl  flex items-center justify-center ml-0.5 `} >{name}</div>

		</>
	)
}
export default IButton