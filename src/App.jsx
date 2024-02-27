import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AppProvider } from "./contexts/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Navbar />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
