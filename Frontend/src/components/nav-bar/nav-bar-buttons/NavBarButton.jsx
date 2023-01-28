const NavBarButton = ({ title, Icon }) => {
	return (
		<a
			href="#"
			className="group pl-8 py-3 w-full text-white items-center gap-3 flex flex-row active:border-r-primary pr-2 active:pr-0 active:border-r-8"
		>
			<Icon
				className={`group-active:fill-primary group-active:stroke-none stroke-white`}
			/>
			<div className="group-active:text-primary font-medium">{title}</div>
		</a>
	);
};

export default NavBarButton;
