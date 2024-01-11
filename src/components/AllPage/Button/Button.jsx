const Button = ({ Text }) => {
  return (
    <button className="w-[5.677vw] aspect-[109/40] rounded-[0.417vw] flex items-center justify-center bg-gradient-to-br from-[#2EC1D9] to-[#179FB5] hover:translate-y-[-0.208vw] transition-all duration-500 ease-in-out">
      <p className="font-InterBold text-[0.729vw] text-neutral-a">{Text}</p>
    </button>
  );
};

export default Button;
