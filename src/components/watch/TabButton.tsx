function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex-1 py-3 text-sm font-medium transition-colors ${
        active ? "bg-zinc-800 text-white" : "hover:bg-zinc-800"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default TabButton;
