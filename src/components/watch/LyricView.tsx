function LyricView({ lyrics }: { lyrics: string[] }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 custom-scroll space-y-2 text-sm leading-relaxed tracking-tight">
      {lyrics.map((line, index) => (
        <p key={index} className="text-white">
          {line.trim() === "" ? <br /> : line}
        </p>
      ))}
    </div>
  );
}

export default LyricView;
