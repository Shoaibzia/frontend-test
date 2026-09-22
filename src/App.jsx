import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Dictionary from "./pages/Dictionary/Dictionary";
import Thesaurus from "./pages/Thesaurus/Thesaurus";
import Synonyms from "./pages/Synonyms/Synonyms";
import Antonyms from "./pages/Antonyms/Antonyms";
import Quiz from "./pages/Quiz/Quiz";

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
