import About from "./components/About";

import Card from "./components/CardList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div>
      <Homepage />
      <About></About>
      <Card></Card>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
