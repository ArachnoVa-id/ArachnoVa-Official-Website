const NavItem = ({ Menu, href, path }) => {
	const style = path === href ? "text-LightBlue-d" : "text-neutral-g";
	return (
		<>
			<li>
				<a
					href={href}
					className={`font-InterBold lg:text-[0.833vw] text-[3.721vw] ${style} hover:text-LightBlue-d transition-all duration-300 ease-in-out`}
				>
					{Menu}
				</a>
			</li>
		</>
	);
};

export default NavItem;
