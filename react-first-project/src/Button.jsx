function Button({ children, variant = "primary" }) {
  const base =
    "px-10 py-5 rounded-xl font-bold transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button className={`${base} ${variants[variant]} `}>
      {children}
    </button>
  );
}

export default Button;