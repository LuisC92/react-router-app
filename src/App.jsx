import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import { Routes, Route} from "react-router-dom"
import Article from "./pages/Article";
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <>
      <NavBar />
      <h1>React Router App</h1>
      {/* <HomePage />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
