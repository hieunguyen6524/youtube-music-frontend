import ChannelPage from "./pages/ChannelPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PlayerProvider } from "./contexts/PlayerContext";
import { AppStateProvider } from "./contexts/AppStateContext";
import AlbumPage from "./pages/AlbumPage";
import SearchPage from "./pages/SearchPage";
function App() {
  return (
    <PlayerProvider>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/channel" element={<ChannelPage />} />
            <Route path="/album" element={<AlbumPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </PlayerProvider>
  );
}

export default App;
