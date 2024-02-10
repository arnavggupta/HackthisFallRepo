/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button
      onClick={() => onClick()}
      className="border rounded-full px-4 py-2 border-[#F1F1F2] hover:opacity-80 transition duration-300 ease-in-out bg-[#1995AD] text-white"
    >
      {children}
    </button>
  );
}

export default Button;
