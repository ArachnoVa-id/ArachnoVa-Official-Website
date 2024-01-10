const FooterItem = ({ Items, href }) => {
  return (
    <li>
      <a
        className="font-InterBold text-[0.938vw] text-neutral-a hover:text-neutral-c transition-all duration-500 ease-in-out"
        href={href}
      >
        {Items}
      </a>
    </li>
  );
};

export default FooterItem;
