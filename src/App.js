import { BrowserRouter, Routes, Route} from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <BrowserRouter>

          <Routes>
            <Route exact path="/" element={<AllMeetupsPage />} />
            <Route exact path="/favourites" element={<Favourites />} />
            <Route exact path="/new-meetup" element={<NewMeetupPage  />} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;
