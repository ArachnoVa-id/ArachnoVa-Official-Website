const NavItem = ({ Menu, href }) => {
  return (
    <>
      <li>
        <a
          href={href}
          className="font-InterBold text-[0.833vw] text-neutral-g hover:text-LightBlue-d transition-all duration-300 ease-in-out"
        >
          {Menu}
        </a>
      </li>
    </>
  );
};

export default NavItem;
