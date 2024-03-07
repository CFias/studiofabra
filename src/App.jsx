import "./App.css";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Navbar from "./components/Navbar";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Inicio />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
