import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <BrowserRouter>
      <MainNavigation />
        <Routes>
          <Route exact path="/" element={<AllMeetupsPage />} />
          <Route exact path="/favourites" element={<Favourites />} />
          <Route exact path="/new-meetup" element={<NewMeetupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
