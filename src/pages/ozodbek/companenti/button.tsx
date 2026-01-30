interface IButtonProps {
	name: string
	color: string
	hoveredcolor: string
}

const IUserButton = ({ name, color, hoveredcolor }: IButtonProps) => {
	return (
		<>
			<div className={` w-60 h-12 rounded-[40px] ${color} m-2 flex items-center justify-center hover:${hoveredcolor}`} >{name}</div>
		</>
	)
}

export default IUserButton