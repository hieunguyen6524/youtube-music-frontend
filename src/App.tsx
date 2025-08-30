import ChannelPage from "./components/channel/ChannelPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PlayerProvider } from "./contexts/PlayerContext";
import { AppStateProvider } from "./contexts/AppStateContext";
function App() {
  return (
    <PlayerProvider>
      <AppStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/channel" element={<ChannelPage />} />
          </Routes>
        </BrowserRouter>
      </AppStateProvider>
    </PlayerProvider>
  );
}

export default App;
