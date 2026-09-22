import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Dictionary from "./pages/Dictionary";
import Thesaurus from "./pages/Thesaurus";
import Synonyms from "./pages/Synonyms";
import Antonyms from "./pages/Antonyms";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/thesaurus " element={<Thesaurus />} />
          <Route path="/synonyms" element={<Synonyms />} />
          <Route path="/antonyms" element={<Antonyms />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
