const Button = ({ label, onClick, selected, style }) => {
  const buttonStyle = selected
    ? "bg-btn-bg border-2 border-white transition-all duration-300 ease-in-out"
    : "border-2 border-[rgb(20,171,181)] transition-all duration-300 ease-in-out";

  return (
    <button
      onClick={onClick}
      className={`rounded-full text-center px-4 py-2 text-white text-sm w-full hover:bg-btn-bg tracking-widest font-primary font-bold ${buttonStyle} ${style} md:w-1/2 md:mx-auto md:text-xl`}
    >
      {label}
    </button>
  );
};

export default Button;
