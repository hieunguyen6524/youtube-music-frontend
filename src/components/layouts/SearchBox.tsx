import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-1 justify-center max-w-lg rounded-lg overflow-hidden"
    >
      <div className="flex w-4/5 items-center bg-zinc-600 opacity-50 focus-within:bg-black/90 focus-within:opacity-100  border-1 border-zinc-600 rounded-lg">
        <button type="submit" className="px-3 h-10 flex items-center">
          <Search className="h-5 w-5 text-zinc-500 hover:text-white transition" />
        </button>
        <input
          type="text"
          placeholder="Tìm bài hát, đĩa nhạc, nghệ sĩ, podcast..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 h-10 px-4 py-2 bg-transparent border-0 focus:outline-none focus:ring-0 text-white font-semibold"
        />
      </div>
    </form>
  );
}
