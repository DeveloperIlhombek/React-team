interface ibuttonProps {
	name: string
	color: string
	hovercolor: string
}
const IUserbutton = ({ name, color, hovercolor }: ibuttonProps) => {
	return (
		<>
			<div className={`w-60 h-12 rounded-[40px] bg-${color} m-2 flex items-center justify-center hover:bg-${hovercolor}`}>{name}</div>
		</>)
}
export default IUserbutton