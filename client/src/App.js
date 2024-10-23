import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar         from "./components/Navbar";
import Footer         from "./components/Footer";
import HomePage       from "./components/HomePage";
import SummaryPage    from "./components/SummaryPage";
import ParagraphPage   from "./components/ParagraphPage";
import ChatBotPage    from "./components/ChatBotPage";
import JavaScriptPage from "./components/JavaScriptPage";
import ImagePage      from "./components/ImagePage";
import SpeachPage     from "./components/SpeachPage";
import                './App.css';

const App = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
              <Route exact path="/"              element={<HomePage />} />
              <Route exact path="/summary"       element={<SummaryPage />} />
              <Route exact path="/paragraph"     element={<ParagraphPage />} />
              <Route exact path="/chatbot"       element={<ChatBotPage />} />
              <Route exact path="/js-convert"    element={<JavaScriptPage />} />
              <Route exact path="/img-generator" element={<ImagePage />} />
              <Route exact path="/text-to-speech" element={<SpeachPage />} />
            </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;