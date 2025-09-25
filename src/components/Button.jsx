export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-white border-0 bg-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[10px] px-[20px] hover:bg-[#c40] transition-colors duration-300 cursor-pointer ease-out"
    >
      {children}
    </button>
  );
}
