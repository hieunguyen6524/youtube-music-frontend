type TabButtonProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
  variant?: "pill" | "toggle" | "underline";
  rounded?: string;
  width?: string; // custom width tailwind
  fit?: boolean; // nếu true thì co theo content
};

export function TabButton({
  label,
  active = false,
  onClick,
  variant = "pill",
  rounded,
  width,
  fit = false,
}: TabButtonProps) {
  const baseClasses = `h-full px-4 py-1 text-sm font-medium transition-all duration-200 whitespace-nowrap`;

  // Xử lý width
  const widthClass = fit ? "w-auto" : width ? width : "flex-1";

  const variants = {
    pill: active
      ? `bg-zinc-700 text-white ${rounded ?? "rounded-2xl"}`
      : `bg-black text-gray-300 hover:bg-zinc-800 ${rounded ?? "rounded-2xl"}`,
    toggle: active
      ? `bg-zinc-700 text-white ${rounded ?? "rounded-full"}`
      : `bg-zinc-800 text-gray-300 hover:bg-zinc-700 ${
          rounded ?? "rounded-full"
        }`,
    underline: active
      ? `border-b-2 border-white text-white ${rounded ?? ""}`
      : `text-gray-400 hover:text-white border-b-2 border-transparent ${
          rounded ?? ""
        }`,
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${widthClass} ${variants[variant]}`}
    >
      {label}
    </button>
  );
}
