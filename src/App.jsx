import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";


import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="content-container">
        <Landing />
      </main>
      <Footer />
    </>
  );
}

export default App;
